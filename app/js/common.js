/*global window, document, $, console*/

var navMain = document.querySelector('.main-nav'),
  navToggle = document.querySelector('.main-nav__toggle'),
  mainNavList = document.querySelector('.main-nav__list'),
  logo = document.querySelector('.logo'),
  pageHeader = document.querySelector('.page-header'),
  pageHeaderIndex = document.querySelector('.page-header--index'),
  pageHeaderPhoto = document.querySelector('.page-header--photo'),
  pageHeaderForm = document.querySelector('.page-header--form');

pageHeader.classList.remove('page-header--nojs');
logo.style.borderBottom = 'none';

navToggle.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
  if (navMain.classList.contains('main-nav--closed')) { // если гамбургер
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    mainNavList.style.display = 'block';
    logo.style.borderBottom = 'solid 1px black';
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
  } else { // если крестик
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    mainNavList.style.display = 'none';
    logo.style.borderBottom = 'none';
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
