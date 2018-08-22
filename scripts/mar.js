var displayWidth = $(window).width();
var thumbWidth = displayWidth / 6;
var videoWidth = displayWidth / 3;

$(document).ready(function() {
    $('#goldfishR').animate({left:'2000px'},42000);
    $('#goldfishL').animate({right:'2000px'},50000);

    $('footer').hover(function() {
        $('#mushSpark').animate({opacity:'1'},'slow');
    }, function(){
    $('#mushSpark').animate({opacity:'0'},'slow');
    });

    $('#blueimp-gallery').data('useBootstrapModal', false);
    $('ul li img').css({
        width: thumbWidth + "px"
    });
});
