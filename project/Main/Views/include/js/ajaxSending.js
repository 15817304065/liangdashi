$(document).ready(function(){
    $('body').append('<div id="PHP_fullMask" style="display: none;width:100%;height:100%;background-color:#FBFBFB;opacity:0.8;-webkit-opacity:0.8;z-index:2;position:absolute;top:0;left:0;"><div style=" text-align: center ;display: block;margin: 0 auto;top: 23%;position:  relative;"> <img src="Main/Views/imgs/load.gif" ><p style="text-align: center;color: #0000ff;font-weight: bold;position: relative;z-index: 2;top: -5%">正在努力发送中...</p></div></div>')

}).ajaxStart(function(){
    $("#PHP_fullMask").css({
        "display":"block",
        "top":$(document).scrollTop(),
        "lift":$(document).scrollLeft(),
    });
    $("body").data("style", {
        'oldheight': $("body").css('height'),
        'oldwidth': $("body").css('width'),
        'oldscrollTop': $(document).scrollTop(),
        'oldscrollLeft': $(document).scrollLeft()
    }).css({
        "height":$(window).height(),
        "width":$(window).width(),
        "overflow":"hidden",
        "display":"block"
    });
}).ajaxComplete(function(){
    $("#PHP_fullMask").css({"display":"none"});
    $("body").css({
        "height":$('body').data('style').oldheight,
        "width":$('body').data('style').oldwidth,
        "overflow":"auto"
    });
});