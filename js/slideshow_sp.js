$(function(){
  $("#mainvisual_sp li").css({"position":"relative","overflow":"hidden"});
  $("#mainvisual_sp li").hide().css({"position":"absolute","top":0,"left":0});
  $("#mainvisual_sp li:first").addClass("fade").show();
  setInterval(function(){
    var $active = $("#mainvisual_sp li.fade");
    var $next = $active.next("li").length?$active.next("li"):$("#mainvisual_sp li:first");
    $active.fadeOut(2000).removeClass("fade");
    $next.fadeIn(2000).addClass("fade");
  },3500);
});