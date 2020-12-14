$(() => {
  $('.burger_menu').on('click', () => {
    $('.menu').toggle("'slide', 1000")
      .css({ display: 'flex', 'flex-direction': 'column' });
  });
  $('.content_icon').on('click', e => {
    e.preventDefault();
  });
});