/*global window, document, $, console*/

var navMain = document.querySelector('.main-nav'),
  navToggle = document.querySelector('.main-nav__toggle'),
  mainNavList = document.querySelector('.main-nav__list'),
  logo = document.querySelector('.logo'),
  download = document.querySelector('.download'),
  intro = document.querySelector('.intro'),
  pageHeader = document.querySelector('.page-header'),
  pageHeaderIndex = document.querySelector('.page-header--index'),
  pageHeaderPhoto = document.querySelector('.page-header--photo'),
  pageHeaderForm = document.querySelector('.page-header--form'),
  reviewsBefore = document.querySelector('.reviews__before'),
  reviewsAfter = document.querySelector('.reviews__after'),
  slide1 = document.getElementById('slide1'),
  slide2 = document.getElementById('slide2'),
  slide3 = document.getElementById('slide3');

pageHeader.classList.remove('page-header--nojs');
logo.style.borderBottom = 'none';

navToggle.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
  if (navMain.classList.contains('main-nav--closed')) { // если кликаем по гамбургеру
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    mainNavList.style.display = 'block';
    logo.style.borderBottom = 'solid 1px black';
    if (window.matchMedia('(max-width: 699px)').matches) { // если mobile
      logo.style.paddingBottom = '25px';
      if (pageHeaderIndex) {
        pageHeaderIndex.style.backgroundPosition = '0 435px, -190px 259px';
        pageHeaderIndex.style.minHeight = '721px';
      } else if (pageHeaderPhoto) {
        pageHeaderPhoto.style.backgroundPosition = '-190px 259px';
        pageHeaderPhoto.style.minHeight = '495px';
      } else if (pageHeaderForm) {
        pageHeaderForm.style.backgroundPosition = '-190px 259px';
        pageHeaderForm.style.minHeight = '495px';
      }
    } else if (window.matchMedia('(min-width: 700px)').matches && window.matchMedia('(max-width: 1199px)').matches) { // если tablet
      logo.style.paddingBottom = '43px';
      pageHeaderIndex.style.backgroundPosition = '0 0, -250px 0';
      pageHeaderIndex.style.height = '984px';
      if (pageHeaderIndex) {
        pageHeaderIndex.style.backgroundPosition = '0 440px, -250px 255px';
        pageHeaderIndex.style.minHeight = '721px';
      } else if (pageHeaderPhoto) {
        pageHeaderPhoto.style.backgroundPosition = '-190px 259px';
        pageHeaderPhoto.style.minHeight = '495px';
      } else if (pageHeaderForm) {
        pageHeaderForm.style.backgroundPosition = '-190px 259px';
        pageHeaderForm.style.minHeight = '495px';
      }
    }
    // здесь будет код для desktop
  } else { // если кликаем по крестику
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    mainNavList.style.display = 'none';
    logo.style.borderBottom = 'none';
    if (window.matchMedia('(max-width: 699px)').matches) {
      logo.style.paddingBottom = '25px';
    } else if (window.matchMedia('(min-width: 700px)').matches && window.matchMedia('(max-width: 1199px)').matches) {
      logo.style.paddingBottom = '43px';
      pageHeaderIndex.style.backgroundPosition = '0 176px, -250px 0';
      pageHeaderIndex.style.height = '721px';
    }
    if (pageHeaderIndex) {
      pageHeaderIndex.style.backgroundPosition = '0 176px, -190px 0';
      pageHeaderIndex.style.minHeight = '462px';
    } else if (pageHeaderPhoto) {
      pageHeaderPhoto.style.backgroundPosition = '-190px 0';
      pageHeaderPhoto.style.minHeight = '237px';
    } else if (pageHeaderForm) {
      pageHeaderForm.style.backgroundPosition = '-190px 0';
      pageHeaderForm.style.minHeight = '237px';
    }
  }
});

reviewsBefore.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
  if (window.getComputedStyle(slide1).display === 'block') {
    slide1.style.display = 'none';
    slide2.style.display = 'none';
    slide3.style.display = 'block';
  } else if (window.getComputedStyle(slide2).display === 'block') {
    slide2.style.display = 'none';
    slide1.style.display = 'block';
    slide3.style.display = 'none';
  } else if (window.getComputedStyle(slide3).display === 'block') {
    slide3.style.display = 'none';
    slide2.style.display = 'block';
    slide1.style.display = 'none';
  }
});

reviewsAfter.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
  if (window.getComputedStyle(slide1).display === 'block') {
    slide1.style.display = 'none';
    slide2.style.display = 'block';
    slide3.style.display = 'none';
  } else if (window.getComputedStyle(slide2).display === 'block') {
    slide2.style.display = 'none';
    slide1.style.display = 'none';
    slide3.style.display = 'block';
  } else if (window.getComputedStyle(slide3).display === 'block') {
    slide3.style.display = 'none';
    slide2.style.display = 'none';
    slide1.style.display = 'block';
  }
});
