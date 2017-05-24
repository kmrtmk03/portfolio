var winScroll = 0;
$(window).scroll(function(){
    winScroll = $(window).scrollTop();
    if(winScroll > 320) {
        $('.Page_Contents_Image1').css({
            'opacity':1,
            'transition':'1s'
        });
    }
    if(winScroll > 820) {
        $('.Page_Contents_Image2').css({
            'opacity':1,
            'transition':'1s'
        });
    }
    if(winScroll > 1320) {
        $('.Page_Contents_Image3').css({
            'opacity':1,
            'transition':'1s'
        });
    }
    if(winScroll > 1820) {
        $('.Page_Contents_Image4').css({
            'opacity':1,
            'transition':'1s'
        });
    }
});
