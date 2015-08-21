/* --------- js 
--------------------------------------- */
 
// flexslider
$(document).ready(function () {
    $('.main-slider').flexslider({
        animation: 'slide',
        slideshowSpeed: 7000,
        directionNav: false,
        controlNav: false
    });

    $(".secondary-slider").flexslider({
        animation: 'slide',
        controlsContainer: '.flexslider',
        controlNav: true,
        slideshowSpeed: 7000,
        directionNav: false
    });

// mobile menu
$(".menu-toggle").click(function(){
    $(".main-nav").slideToggle(300);
});

$( window ).resize(function() {
    if ($( window ).width() >= 768) {
        $('.main-nav').css("display","inline-block");
    } else {
        $('.main-nav').css("display","none");
    }
});

// column height
    $('.about, .features').each(function() {       
        var highestBox = 0;
        $('.column, .box', this).each(function() {       
            if($(this).height() > highestBox) 
               highestBox = $(this).height(); 
        });          
        $('.column, .box', this).height(highestBox);
    });
});
