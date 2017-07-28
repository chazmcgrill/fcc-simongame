$(document).ready(function(){
  console.log('site loaded');
  var startBtn = false,
      strictBtn = false;

  // on/off switch click event
  $('.onoff-btn').click(function() {
    var $this = $(this);
    if ($this.css('left') === '20px') {
      $this.css('left', '2px');
    } else {
      $this.css('left', '20px');
    }
  });

  $('.start-btn').click(function() {
    if (startBtn) {
      $(this).css('background', '#4FB0C6');
      startBtn = false;
    } else {
      $(this).css('background', '#9eedff');
      startBtn = true;
    }
  });

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
