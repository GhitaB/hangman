$(document).ready(function() {
  window.fails = 0;
  window.max_fails = 5;
  window.possible_words = [
    "romania",
    "italy",
    "france",
    "spain",
    "hungary",
    "moldova"
  ];
  window.secret_word = "hangman";
  window.public_word = "_______";
  window.game_is_finished = false;


  function choose_word() {
    var random_number = Math.floor(Math.random() * possible_words.length);
    secret_word = possible_words[random_number];
    public_word = Array(secret_word.length).join("_");
  }


  function game_over() {
    $("p#status").text("Game over!");
    game_is_finished = true;
  }


  function fail() {
    $("img#main-image").attr("src", "./images/" + fails.toString() + ".png");
    if(fails > max_fails) {
      game_over();
    } else {
      fails++;
    }
  }


  function win() {
    $("p#status").text("Congrats!");
    game_is_finished = true;
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
    choose_word();
    refresh_public_word();

    $(document).keypress(function(event) {
      if(!game_is_finished) {
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
      }
    });
  }

  start_game();
});
