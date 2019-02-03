$(function () {
  $(document).scroll(function () {
      var $nav = $("#bnrNavbar1");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
})