$(document).ready(function(){console.log("site loaded");var c=!1,s=!1;$(".onoff-btn").click(function(){var c=$(this);"20px"===c.css("left")?c.css("left","2px"):c.css("left","20px")}),$(".start-btn").click(function(){c?($(this).css("background","#4FB0C6"),c=!1):($(this).css("background","#9eedff"),c=!0)}),$(".strict-btn").click(function(){s?($(this).css("background","#6C49B8"),s=!1):($(this).css("background","#c9b3f9"),s=!0)})});