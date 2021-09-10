var lastScrollTop = $(this).scrollTop();
$(window).scroll(function() {
    var currentScrollTop = $(this).scrollTop();
    var offset = currentScrollTop - lastScrollTop;

    // SCROLLING DOWN
    if (currentScrollTop > lastScrollTop) {
        $('#racket').css({
            'transform' :   'translate(' + (10 - (offset*0.3)) + 'vw, ' + 
                            (55 - (offset*0.3)) + 'vh)',
            'width'    :   200 + offset*2 + 'px',
        });

        $('#ball').css({
            'transform' :   'translate(' + (12 - (offset*0.4)) + 'vw, ' + 
                            (70 - (offset*0.3)) + 'vh)',
            'height'    :   77 + offset*2 + 'px',
        });

        $('#keyboard').css({
            'transform' :   'translate(' + (15 + (offset*0.3)) + 'vw, ' + 
                            (15 - (offset*0.3)) + 'vh)',
            'width'    :   500 + offset*2 + 'px',
            'height'     :   'auto',
        });

        $('#mouse').css({
            'transform' :   'translate(' + (-2 + (offset*0.3)) + 'vw, ' + 
                            (55 - (offset*0.3)) + 'vh)',
            'width'    :   100 + offset*2 + 'px',
            'height'     :   'auto',
        });

    // SCROLLING UP
    } else {
        $('#racket').css({
            'transform' :   'translate(' + (10 + (offset*0.3)) + 'vw, ' + 
                            (55 + (offset*0.3)) + 'vh)',
            'width'    :   200 - offset*2 + 'px',
        });

        $('#ball').css({
            'transform' :   'translate(' + (12 - (offset*0.4)) + 'vw, ' + 
                            (70 - (offset*0.3)) + 'vh)',
            'height'    :   77 - offset*2 + 'px',
        });

        $('#keyboard').css({
            'transform' :   'translate(' + (15 - (offset*0.3)) + 'vw, ' + 
                            (15 + (offset*0.3)) + 'vh)',
            'width'    :   500 - offset*2 + 'px',
            'height'     :   'auto',
        });

        $('#mouse').css({
            'transform' :   'translate(' + (-2 - (offset*0.3)) + 'vw, ' + 
                            (55 + (offset*0.3)) + 'vh)',
            'width'    :   100 - offset*2 + 'px',
            'height'     :   'auto',
        });
    }
});

