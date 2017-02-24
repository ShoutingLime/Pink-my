/*global window, document, $, console*/

var navMain = document.querySelector('.main-nav'),
  navToggle = document.querySelector('.main-nav__toggle'),
  mainNavList = document.querySelector('.main-nav__list'),
  logo = document.querySelector('.logo'),
  pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
logo.style.borderBottom = 'none';

navToggle.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    mainNavList.style.display = 'block';
    logo.style.borderBottom = 'solid 1px black';
    logo.style.paddingBottom = '25px';
    pageHeader.style.backgroundPosition = '0 435px, -190px 259px';
    pageHeader.style.minHeight = '721px';
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    mainNavList.style.display = 'none';
    logo.style.borderBottom = 'none';
    pageHeader.style.backgroundPosition = '0 176px, -190px 0';
    pageHeader.style.minHeight = '462px';
  }
});