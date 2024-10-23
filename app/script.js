$(document).ready(() => {
    $(".hamburguer").click(function () {
      if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        $(".menu").addClass("active");
      } else {
        $(this).removeClass("active");
        $(".menu").removeClass("active");
      }
    });
  })