$(document).ready(function(){
  console.log('site loaded');
  var startBtn = false,
      strictBtn = false,
      // array that contains pattern
      pattern = [];

  // create random pattern
  function patGen() {
    var peice = Math.floor(Math.random() * 4) + 1;
    pattern.push(peice);
    console.log(pattern);
    displayPattern(peice);
  }

  console.log(patGen());

  // display pattern
  function displayPattern(peice) {
    $('#' + peice).addClass('filter');
    // play specified sound
    setTimeout(function(){
      // add highlight to css
      $('#' + peice).removeClass('filter');
    }, 500);
  }

  // check if correct button pressed

  // show error if incorrect button pressed

  // continue pattern if correct button pressed

  // counter increase for each new pattern

  // strict mode





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
