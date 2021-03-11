$(function () {
  let pagetop = $('.totop');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      pagetop.fadeIn(300);
    } else {
      pagetop.fadeOut(300);
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});

$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
