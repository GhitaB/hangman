$(document).ready(function() {
  window.fails = 0;
  window.max_fails = 6;
  window.secret_word = "hangman";
  window.public_word = "_______";

  function game_over() {
    $("p#status").text("Game over!");
  }

  function fail() {
    fails++;
    $("img#main-image").attr("src", "./images/" + fails.toString() + ".png");
    if(fails == max_fails) {
      game_over();
    }
  }

  function win() {
    $("p#status").text("Congrats!");
  }

  function test_letter(letter) {
    return secret_word.indexOf(letter);
  }

  function replace_str(str, pos, value){
    var arr = str.split('');
    arr[pos]=value;
    return arr.join('');
  }

  function refresh_public_word() {
    $("p#public-word").text(public_word);
  }

  function start_game() {
    refresh_public_word();

    $(document).keypress(function(event) {
      var key = String.fromCharCode(event.which);
      var test = test_letter(key);
      if(test != -1) {
        for(var i = 0; i <= secret_word.length; i++) {
          if(secret_word[i] == key) {
            public_word = replace_str(public_word, i, key);
          }
        }

        refresh_public_word();

        if(public_word == secret_word) {
          win();
        }
      } else {
        fail();
      }
    });
  }

  start_game();
});
