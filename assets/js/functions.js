$(document).ready(function(){

  var h = $(window).height(),
      startBtn = false,
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

  // Set body to viewport height (android fix)
  $('body').css('height', h + 'px');

  // create random pattern
  function patGen() {
    var node = Math.floor(Math.random() * 4) + 1;
    pattern.push(node);
    displayPattern(pattern, 0, pattern.length - 1);
  }


  // display pattern
  function displayPattern(arr, count, len) {
    console.log(pattern);
    sounds[arr[count]].play();
    gameOn = false;
    $('#' + arr[count]).addClass('filter');

    setTimeout(function(){
      $('#' + arr[count]).removeClass('filter');
      gameOn = true;

      if(count === len) {
        return 0;
      } else {
        setTimeout(function() {
          return displayPattern(arr, count + 1, len);
        }, 200);
      }

    }, 500);
  }


  // button click events
  $('.buttons').each(function() {
    $(this).click(function() {
      var cur = $(this).attr('id');
      console.log('cur = ' + cur);
      console.log('current = ' + current);
      console.log('pattern[current] = ' + pattern[current]);
      if (gameOn) {
        // check if correct button pressed
        if (cur == pattern[current]) {
          sounds[cur].play();
          $(this).addClass('filter');
          clickCorrect();
        // show error if incorrect button pressed
        } else {
          clickError();
        }
      }
    });
  });


  // click correct function
  function clickCorrect() {
    setTimeout(function() {
      $('.buttons').removeClass('filter');
      // continue pattern if correct pattern pressed
      if (current === pattern.length - 1) {
        level++;
        if (level < 21) {
          levelCounter(level);
          current = 0;
          setTimeout(function(){
            patGen();
          }, 1500);
        } else {
          levelCounter('WIN');
          setTimeout(function() {
            reset();
          }, 1000);
        }
      } else {
        current++;
      }
    }, 500);
  }


  // click error
  function clickError() {
    $('.count-value').text('!!').addClass('flash');

    setTimeout(function() {
      $('.count-value').removeClass('flash');
      if (!strictBtn) {
        levelCounter(level);
        current = 0;
        displayPattern(pattern, 0, pattern.length - 1);
      } else {
        reset();
      }
    }, 1500);

  }


  // counter increase for each new pattern
  function levelCounter(val) {
    if (val < 10) {
      val = '0' + val;
    }
    $('.count-value').text(val);
  }


  // reset function
  function reset() {
    levelCounter(0);
    current = 0;
    level = 1;
    pattern = [];
    $('.start-btn').css('background', '#4FB0C6');
    startBtn = !startBtn;
  }


  // on/off switch click event
  $('.onoff-btn').click(function() {
    var $this = $(this);
    $('.count-value').toggleClass('handle');
    if (!gameOn) {
      $this.css('left', '2px');
    } else {
      $this.css('left', '20px');
      reset();
    }
    gameOn = !gameOn;
  });


  // start button click event
  $('.start-btn').click(function() {
    if (gameOn) {
      if (!startBtn) {
        $(this).css('background', '#9eedff');
      } else {
        reset();
        // screen blink
      }
      $('.count-value').text('01');
      patGen();
      startBtn = !startBtn;
    }
    gameOn && (!startBtn)
  });


  // strict button click event
  $('.strict-btn').click(function() {
    gameOn && (strictBtn ? $(this).css('background', '#6C49B8')
    : $(this).css('background', '#c9b3f9'));
    strictBtn = !strictBtn;
  });


});
