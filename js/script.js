$(document).ready(function () {
  $(".toggle-box").click(function () {
    var content = $(this).closest(".sec-3-card-container");
    var arrow = $(this).find(".arrow");

    if (arrow.hasClass("fa-chevron-down")) {
      var el = content,
        curHeight = el.height(),
        autoHeight = el.css("height", "auto").height();
      el.height(curHeight).animate(
        {
          height: autoHeight,
        },
        300,
        function () {
          el.height("auto");
        }
      );
    } else {
      content.animate(
        {
          height: "200px",
        },
        300
      );
    }

    arrow.toggleClass("fa-chevron-down fa-chevron-up");
    $(this).toggleClass("bg-blak-gradiet");
  });
});
