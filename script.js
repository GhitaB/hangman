$(document).ready(function() {
  window.level = 0;

  $("button").on("click", function() {
    level++;
    $("img#main-image").attr("src", "./images/" + level.toString() + ".png");
  });
});
