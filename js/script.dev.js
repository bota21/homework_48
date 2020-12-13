"use strict";

$(function () {
  $('.burger_menu').on('click', function () {
    $('.menu').toggle("'slide', 1000").css({
      display: 'flex',
      'flex-direction': 'column'
    });
  });
});