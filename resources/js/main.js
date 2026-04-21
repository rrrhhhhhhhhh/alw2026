$(document).ready(function () {
  // Open About
  $('.about-trigger').on('click', function () {
    console.log('clicked');
    $('.about').addClass('open');
    $('body').addClass('about-open'); // lock background scroll
  });

  // Close About
  $('.about-close').on('click', function () {
    console.log('clicked');
    $('.about').removeClass('open');
    $('body').removeClass('about-open'); // restore scroll
  });

  // Optional: close on ESC
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $('.about').removeClass('open');
      $('body').removeClass('about-open');
    }
  });

  // Image cycler
  $('.images').on('click', function () {
    var i = $(this).data('i') || 0;
    i++;
    var count = $(this).find('figure').length;
    $(this).find('figure').hide().eq(i % count).show();
    $(this).data('i', i);
  });
});
