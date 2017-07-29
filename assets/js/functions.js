$(document).ready(function(){
  console.log('site loaded');
  var startBtn = false,
      strictBtn = false,
      pattern = [],
      current = 0,
      level = 0;

  // create random pattern
  function patGen() {
    var node = Math.floor(Math.random() * 4) + 1;
    pattern.push(node);
    console.log(pattern);
    displayPattern(pattern, 0, pattern.length - 1);
  }

  // display pattern
  function displayPattern(arr, count, len) {

    $('#' + arr[count]).addClass('filter');
    setTimeout(function(){
      $('#' + arr[count]).removeClass('filter');
      if(count === len) {
        console.log(arr[count] + ' = final count');
        return 0;
      } else {
        console.log(arr[count]);
        return displayPattern(arr, count + 1, len);
      }
    }, 1000);

  }

  // button click events
  $('.buttons').each(function() {
    $(this).click(function() {
      console.log($(this).attr('id'));
      console.log(pattern[current]);
      // check if correct button pressed
      if ($(this).attr('id') == pattern[current]) {
        console.log('correct');
        // continue pattern if correct pattern pressed
        if (current === pattern.length - 1) {
          level++;
          levelCounter(level);
          current = 0;
          patGen();
        } else {
          current++;
        }
      // show error if incorrect button pressed
      } else {
        console.log('incorrect');
        levelCounter(level, true);
        current = 0;
        displayPattern(pattern, 0, pattern.length - 1)
      }
    });
  });

  // counter increase for each new pattern
  function levelCounter(val, err) {
    if (err) {
      $('.count-screen').text('!!');
      setTimeout(function() {
        val = level;
        $('.count-screen').text('0' + val);
      }, 1000);
    } else {
      if (val < 9) {
        val = '0' + val;
      }
      $('.count-screen').text(val);
    }
  }

  // strict mode

  // light up button and play sound when pressed

  // sound files

  // lock click during pattern display

  // on/off switch click event
  $('.onoff-btn').click(function() {
    var $this = $(this);
    if ($this.css('left') === '20px') {
      $this.css('left', '2px');
    } else {
      $this.css('left', '20px');
    }
  });

  // start button click event
  $('.start-btn').click(function() {
    if (startBtn) {
      $(this).css('background', '#4FB0C6');
    } else {
      $(this).css('background', '#9eedff');
      patGen();
    }
    startBtn = !startBtn;
  });

  // strict button click event
  $('.strict-btn').click(function() {
    if (strictBtn) {
      $(this).css('background', '#6C49B8');
    } else {
      $(this).css('background', '#c9b3f9');
    }
    strictBtn = !strictBtn;
  });


});
