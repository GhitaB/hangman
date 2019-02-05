$(document).ready(function() {
  window.fails = 0;
  window.max_fails = 6;

  function game_over() {
    $("p#status").text("Game over!");
    $("button").hide();
  }

  function fail() {
    fails++;
    $("img#main-image").attr("src", "./images/" + fails.toString() + ".png");
    if(fails == max_fails) {
      game_over();
    }
  }

  $("button").on("click", function() {
    fail();
  });
});
