$(document).ready(function(){
  console.log('site loaded');
  var startBtn = false,
      strictBtn = false,
      // array that contains pattern
      pattern = [];
      // current = 0;

  // create random pattern
  function patGen() {
    var peice = Math.floor(Math.random() * 4) + 1;
    pattern.push(peice);
    console.log(pattern);
    displayPattern(pattern, 0, pattern.length - 1);
  }

  // display pattern
  function displayPattern(array, count, length) {
    if(count === length) {
      console.log(array[count] + ' = final count');
      $('#' + array[count]).addClass('filter');
      // play specified sound
      setTimeout(function(){
        $('#' + array[count]).removeClass('filter');
      }, 1000);
      return 0;
    } else {
      console.log(array[count]);
      $('#' + array[count]).addClass('filter');
      // play specified sound
      setTimeout(function(){
        // add highlight to css
        $('#' + array[count]).removeClass('filter');
        return displayPattern(array, count + 1, length);
      }, 1000);
    }
  }

  // button click events
  $('.buttons').each(function() {
    $(this).click(function() {
      console.log($(this).attr('id'));
      console.log(pattern[current]);
      if ($(this).attr('id') == pattern[current]) {
        console.log('correct');
      } else {
        console.log('incorrect');
      }

    });
  });

  // check if correct button pressed

  // show error if incorrect button pressed

  // continue pattern if correct button pressed

  // counter increase for each new pattern

  // strict mode


  // sound files


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
      startBtn = false;
    } else {
      $(this).css('background', '#9eedff');
      startBtn = true;
      patGen();
    }
  });

  // strict button click event
  $('.strict-btn').click(function() {
    if (strictBtn) {
      $(this).css('background', '#6C49B8');
      strictBtn = false;
    } else {
      $(this).css('background', '#c9b3f9');
      strictBtn = true;
    }
  });


});
