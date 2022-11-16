$(document).ready(function () {
  $("nav svg").click(function () {
    $("aside").css("max-width", "100%");
    $("aside").css("background-color", "#0000008c");
    $(".sidebar").css("left", "0");
  });
  $(".exit i").click(function () {
    $("aside").css("max-width", "0%");
    $("aside").css("background-color", "transparent");
    $(".sidebar").css("left", "-270px");
  });
  window.addEventListener("click", function (e) {
    if (
      !document.getElementById("sidebar").contains(e.target) &&
      document.getElementById("aside").contains(e.target)
    ) {
      $("aside").css("max-width", "0%");
      $("aside").css("background-color", "transparent");
      $(".sidebar").css("left", "-270px");
    }
  });

  let condition = true;
  $(".last-section .video-overlay").click(function () {
    if (condition) {
      $(this).css("background-color", "transparent");
      $(this).css("display", "none");
      $(this).prev()[0].play();
      condition = false;
    }
  });

  $(".last-section video").click(function () {
    if (!condition) {
      $(this).next().css("background-color", "rgba(0, 0, 0, .4)");
      $(this).next().css("display", "block");
      $(this)[0].pause();
      condition = true;
    }
  });

  $(".last-section .video-overlay").mouseover(function () {
    if (condition) {
      $(this).css("background-color", "rgba(0, 0, 0, .4)");
    } else {
      $(this).css("background-color", "transparent");
    }
  });

  $(".last-section .video-overlay").mouseout(function () {
    $(this).css("background-color", "transparent");
  });
});
