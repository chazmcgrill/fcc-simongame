$(document).ready(function(){function t(){var t=Math.floor(4*Math.random())+1;a.push(t),console.log(a),o(a,0,a.length-1)}function o(t,n,s){l[t[n]].play(),i=!1,$("#"+t[n]).addClass("filter"),setTimeout(function(){if($("#"+t[n]).removeClass("filter"),i=!0,n===s)return console.log(t[n]+" = final count"),0;console.log(t[n]),setTimeout(function(){return o(t,n+1,s)},200)},500)}function n(t){t<10&&(t="0"+t),$(".count-screen").text(t)}function s(){n(0),r=1,a=[],$(".start-btn").css("background","#4FB0C6"),c=!c}console.log("site loaded");var c=!1,e=!1,i=!1,a=[],u=0,r=1,l={1:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),2:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),3:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),4:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")};$(".buttons").each(function(){$(this).click(function(){if(i){console.log($(this).attr("id"));var c=$(this).attr("id");$(this).attr("id")==a[u]?(l[c].play(),$(this).addClass("filter"),setTimeout(function(){$(".buttons").removeClass("filter"),u===a.length-1?(r++,n(r),u=0,setTimeout(function(){t()},500)):u++},500),console.log("correct")):(console.log("incorrect"),$(".count-screen").text("!!"),setTimeout(function(){e?s():(n(r),u=0,o(a,0,a.length-1))},500))}})}),$(".onoff-btn").click(function(){var t=$(this);i?(t.css("left","20px"),s()):t.css("left","2px"),i=!i}),$(".start-btn").click(function(){i&&(c?s():$(this).css("background","#9eedff"),t(),c=!c)}),$(".strict-btn").click(function(){i&&(e?$(this).css("background","#6C49B8"):$(this).css("background","#c9b3f9"),e=!e)})});