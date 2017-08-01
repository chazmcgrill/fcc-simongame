$(document).ready(function(){
  console.log('site loaded');
  var startBtn = false,
      strictBtn = false,
      gameOn = false,
      pattern = [],
      current = 0,
      level = 1,
      sounds = {
        1: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        2: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        3: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        4: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
      };

  // create random pattern
  function patGen() {
    var node = Math.floor(Math.random() * 4) + 1;
    pattern.push(node);
    console.log(pattern);
    displayPattern(pattern, 0, pattern.length - 1);
  }

  // display pattern
  function displayPattern(arr, count, len) {
    sounds[arr[count]].play();
    gameOn = false;
    $('#' + arr[count]).addClass('filter');
    setTimeout(function(){
      $('#' + arr[count]).removeClass('filter');
      gameOn = true;
      if(count === len) {
        console.log(arr[count] + ' = final count');
        return 0;
      } else {
        console.log(arr[count]);
        setTimeout(function() {
          return displayPattern(arr, count + 1, len);
        }, 200);
      }
    }, 500);

  }

  // button click events
  $('.buttons').each(function() {
    $(this).click(function() {

      if (gameOn) {
        console.log($(this).attr('id'));
        // console.log(pattern[current]);
        var cur = $(this).attr('id');
        // check if correct button pressed
        if ($(this).attr('id') == pattern[current]) {
          sounds[cur].play();
          $(this).addClass('filter');
          setTimeout(function() {
            $('.buttons').removeClass('filter');
            // continue pattern if correct pattern pressed
            if (current === pattern.length - 1) {
              level++;
              levelCounter(level);
              current = 0;
              setTimeout(function(){
                patGen();
              }, 500);
            } else {
              current++;
            }
          }, 500);
          console.log('correct');



          // show error if incorrect button pressed
        } else {
          console.log('incorrect');
          $('.count-screen').text('!!');
          setTimeout(function() {
            if (!strictBtn) {
              levelCounter(level);
              current = 0;
              displayPattern(pattern, 0, pattern.length - 1);

            // strict mode
            } else {
              reset();
            }
          }, 500);
        }

      }
    });
  });

  // counter increase for each new pattern
  function levelCounter(val) {
    if (val < 10) {
      val = '0' + val;
    }
    $('.count-screen').text(val);
  }

  // reset function
  function reset() {
    levelCounter(0);
    level = 1;
    pattern = [];
    $('.start-btn').css('background', '#4FB0C6');
    startBtn = !startBtn;
  }



  // TRANSFER THIS TO CSS FOR MEDIA QUERY
  // on/off switch click event
  $('.onoff-btn').click(function() {
    var $this = $(this);
    if (!gameOn) {
      $this.css('left', '2px');
    } else {
      $this.css('left', '20px');
      reset();
    }
    gameOn = !gameOn;
  });


  // THESE CAN BE MERGED
  // start button click event
  $('.start-btn').click(function() {
    if (gameOn) {
      if (!startBtn) {
        $(this).css('background', '#9eedff');
      } else {
        reset();
        // screen blink
      }
      patGen();
      startBtn = !startBtn;
    }
  });

  // strict button click event
  $('.strict-btn').click(function() {
    if (gameOn) {
      if (strictBtn) {
        $(this).css('background', '#6C49B8');
      } else {
        $(this).css('background', '#c9b3f9');
      }
      strictBtn = !strictBtn;
    }
  });


});
