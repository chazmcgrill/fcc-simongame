$(document).ready(function(){function t(){var t=Math.floor(4*Math.random())+1;l.push(t),n(l,0,l.length-1)}function n(t,o,s){r[t[o]].play(),f=!1,$("#"+t[o]).addClass("filter"),setTimeout(function(){if($("#"+t[o]).removeClass("filter"),f=!0,o===s)return 0;setTimeout(function(){return n(t,o+1,s)},200)},500)}function o(){setTimeout(function(){$(".buttons").removeClass("filter"),m===l.length-1?(d++,d<21?(e(d),m=0,setTimeout(function(){t()},1500)):(e("WIN"),setTimeout(function(){c()},1e3))):m++},500)}function s(){$(".count-value").text("!!").addClass("flash"),setTimeout(function(){$(".count-value").removeClass("flash"),u?c():(e(d),m=0,n(l,0,l.length-1))},1500)}function e(t){t<10&&(t="0"+t),$(".count-value").text(t)}function c(){e(0),m=0,d=1,l=[],$(".start-btn").css("background","#4FB0C6"),a=!a}var i=$(window).height(),a=!1,u=!1,f=!1,l=[],m=0,d=1,r={1:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),2:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),3:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),4:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")};$("body").css("height",i+"px"),$(".buttons").each(function(){$(this).click(function(){var t=$(this).attr("id");f&&(t==l[m]?(r[t].play(),$(this).addClass("filter"),o()):s())})}),$(".onoff-btn").click(function(){var t=$(this);$(".count-value").toggleClass("handle"),f?(t.css("left","20px"),c()):t.css("left","2px"),f=!f}),$(".start-btn").click(function(){f&&(a?c():$(this).css("background","#9eedff"),$(".count-value").text("01"),t(),a=!a)}),$(".strict-btn").click(function(){f&&(u?$(this).css("background","#6C49B8"):$(this).css("background","#c9b3f9")),u=!u})});