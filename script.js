$(document).ready(function() {
  window.fails = 0;
  window.max_fails = 6;
  window.secret_word = "hangman";
  window.public_word = "_______";

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

  function test_letter(letter) {
    return secret_word.indexOf(letter);
  }

  function start_game() {
    $("p#public-word").text(public_word);

    var aa = test_letter("x");
    if(aa != -1) {
      console.log(aa);
    } else {
      fail();
    }
  }

  start_game();
});
