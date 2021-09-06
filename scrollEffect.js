var lastScrollTop = $(this).scrollTop();
var personalInfoHeight = $("#personal-information-text").height();
var personalInfoInitTop = $("#personal-information-text").offset().top;
var personalInfoGap = personalInfoInitTop - $(window).height();
var personalInfoLimitScroll = personalInfoInitTop + personalInfoHeight + personalInfoGap + $(window).height();
var isZoom = true;
var portraitHeight = 70;
console.log($( window ).height())


$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    var currentScrollTop = $(this).scrollTop();
    var offset = currentScrollTop - lastScrollTop;
    var personalInfoCurrTop = $("#personal-information-text").offset().top - $(window).height();

    if (currentScrollTop > lastScrollTop)  {
    // SCROLLING DOWN
        if ($( window ).height() <= 768) {
            // HD
            $('.my-name-wrapper').css({ 
                'transform' : 'translate(' + '-50%, ' + (0 + (offset*-0.3)) + '%'
            })

            if (currentScrollTop < 13121) {
                $(".scrollable").css({
                    'transform' : 'translate(' + '-50%, ' + (100 + (offset*-0.1)) + 'vh'
                });
                isZoom = true;
            } else {
                currentScrollTop = 13121;
                isZoom = false;
            }

            // Zoom in image
            $('#portrait-image').css({
                'height' : portraitHeight + ((portraitHeight + currentScrollTop) * 2 ) + '%',
                'bottom' : 0 - (scrollPos*0.45) + '%',
                "-webkit-filter" : blur(scrollPos + "px"),
                "filter" : blur(scrollPos + "px")
            });
        }
        else if ($( window ).height() <= 900 && $( window ).height() > 768) {
            // HD+
            $('.my-name-wrapper').css({ 
                'transform' : 'translate(' + '-50%, ' + (0 + (offset*-0.3)) + '%'
            })

            if (currentScrollTop < 12860) {
                $(".scrollable").css({
                    'transform' : 'translate(' + '-50%, ' + (100 + (offset*-0.1)) + 'vh'
                });
                isZoom = true;
            } else {
                currentScrollTop = 12860;
                isZoom = false;
            }

            // Zoom in image
            $('#portrait-image').css({
                'height' : portraitHeight + ((portraitHeight + currentScrollTop) * 2 ) + '%',
                'bottom' : 0 - (scrollPos*0.45) + '%',
                "-webkit-filter" : blur(scrollPos + "px"),
                "filter" : blur(scrollPos + "px")
            });
        } 
        else if ($( window ).height() <= 1080 && $( window ).height() > 900) {
            // FULL HD
            var maxScrollFullHD = 25000;
            var scrollableTop = 100;
            var mynameTop = -50;

            $('.my-name-wrapper').css({ 
                'transform' : 'translate(' + '-50%, ' + (mynameTop + (offset*-0.2)) + '%'
            })

            if (currentScrollTop < maxScrollFullHD) {
                $(".scrollable").css({
                    'transform' : 'translate(' + '-50%, ' + (scrollableTop - (offset*0.08)) + 'vh' 
                });
                isZoom = true;
            } else {
                currentScrollTop = maxScrollFullHD;
                isZoom = false;
            }
            

            // Zoom in image
            $('#portrait-image').css({
                'height' : portraitHeight + ((portraitHeight + currentScrollTop) * 1.5) + '%',
                'bottom' : 0 - (scrollPos*0.05) + '%',
                "-webkit-filter" : blur(scrollPos*50 + "px"),
                "filter" : blur(scrollPos*50 + "px")
            });

            if (offset == 0) {
                console.log("Reached the limit!!");
            }
        } 
        else {
            console.log("Reached the limit!!");
        }

        
    } else {
    // SCROLLING UP
        // Name Scroll
        if ($( window ).width() < 768) {
            // Mobile devices
            $('.my-name-wrapper').css({ 
                'transform' : 'translate(' + '-50%, ' + (0 - (offset*0.7)) + '%' 
            })

            $(".personal-information").css({
                'transform' : 'translate(' + '-50%, ' + (135 - (offset*0.05)) + 'vh' 
            });
        } else {
            // Wider screens
            $('.my-name-wrapper').css({ 
                'transform' : 'translate(' + '-50%, ' + (0 - (offset*0.12)) + '%' 
            })

            $(".personal-information").css({
                'transform' : 'translate(' + '-50%, ' + (165 - (offset*0.05)) + 'vh' 
            });
        }

        // Zoom out image
        $('#portrait-image').css({
            'height' : portraitHeight + ((currentScrollTop) * 0.7) + '%',
            'bottom' : 0 - (scrollPos*0.02) + '%',
            "-webkit-filter" : blur(scrollPos + "px"),
            "filter" : blur(scrollPos + "px")
        });
            
    }

    console.log("Current Scroll: " + currentScrollTop);
});

$(document).ready(function(){
    $(this).scrollTop(0);

    // Reset transform
    if ($( window ).width() < 768) {
        // Mobile devices
        $('.my-name-wrapper').css({ 
            'transform' : 'translate(' + '-50%, ' +  '0%)'
        })

        $(".personal-information").css({
            'transform' : 'translate(' + '-50%, ' + '135vh)'
        });
    } else {
        // Wider screens
        $('.my-name-wrapper').css({ 
            'transform' : 'translate(' + '-50%, ' + '0%'
        })

        $(".personal-information").css({
            'transform' : 'translate(' + '-50%, ' + '165vh' 
        });
    }

    // Zoom in image
    $('#portrait-image').css({
        'height' : portraitHeight + '%',
        'bottom' : 0,
    });
});

$(document).refresh(function(){
    // Initialize values
    lastScrollTop = 0;
    currentScrollTop = 0;
    offset = 0;
    $(this).scrollTop(0);
});



