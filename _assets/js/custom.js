$(function(){
  console.log("hola");
  var win = $(window);
  win.resize(function(){
    var win_w = win.width(),
        win_h = win.height(),
        $bg    = $("#custom_full-screen");

        // Agregando class
        $bg.css("max-height", win_h + "px !important");
        console.log(win_h, $bg);
        console.log("width de :" + win_w);
  }).resize();
});
