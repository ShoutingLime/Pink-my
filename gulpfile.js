/*global console, includePaths*/
/*jslint node: true*/

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('gulp-autoprefixer'),
  svgstore = require('gulp-svgstore'),
  svgmin = require('gulp-svgmin'),
  bourbon = require('node-bourbon'),
  ftp = require('vinyl-ftp'),

  notify = require("gulp-notify");

// Скрипты проекта
gulp.task('scripts', function () {
  'use strict';
  return gulp.src(
    'app/js/common.js'
  )
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
  'use strict';
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('sass', function () {
  'use strict';
  return gulp.src('app/sass/style.scss')
    .pipe(sass({
      includePaths: bourbon.includePaths
    }).on("error", notify.onError()))
    .pipe(plumber())
    .pipe(sass().on("error", notify.onError()))
    .pipe(gulp.dest('app/css')) // тест
    .pipe(rename({suffix: '.min', prefix: ''}))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleanCSS())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'scripts', 'browser-sync'], function () {
  'use strict';
  gulp.watch('app/sass/**/*.{sass,scss}', ['sass']);
  gulp.watch('app/js/common.js', ['scripts']);
  gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('imagemin', function () {
  'use strict';
  return gulp.src('app/img/**/*')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('build/img'));
});

gulp.task('symbols', function () {
  'use strict';
  return gulp.src("app/img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('symbols.svg'))
    .pipe(gulp.dest('app/img'));
});

gulp.task('build', ['removebuild', 'imagemin', 'sass', 'scripts'], function () {
  'use strict';
  var buildFiles = gulp.src([
      'app/*.html',
      'app/.htaccess'
    ]).pipe(gulp.dest('build')),
    buildCss = gulp.src([
      'app/css/style.min.css',
      'app/css/style.css'
    ]).pipe(gulp.dest('build/css')),
    buildJs = gulp.src([
      'app/js/scripts.min.js',
      'app/js/common.js'
    ]).pipe(gulp.dest('build/js')),
    buildFonts = gulp.src([
      'app/fonts/**/*'
    ]).pipe(gulp.dest('build/fonts'));
  console.log(buildFiles, buildCss, buildJs, buildFonts);
});

gulp.task('deploy', function () {
  'use strict';
  var conn = ftp.create({
      host: 'hostname.com',
      user: 'username',
      password: 'userpassword',
      parallel: 10,
      log: gutil.log
    }),
    globs = [
      'build/**',
      'build/.htaccess'
    ];
  return gulp.src(globs, {buffer: false})
    .pipe(conn.dest('/path/to/folder/on/server'));
});

gulp.task('removebuild', function () {
  'use strict';
  return del.sync('build');
});

gulp.task('clearcache', function () {
  'use strict';
  return cache.clearAll();
});

gulp.task('default', ['watch']);
