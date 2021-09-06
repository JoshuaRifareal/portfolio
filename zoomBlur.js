var scrollPos = 0;

document.addEventListener('scroll', function(e) {
    scrollPos = $(this).scrollTop();
    document.getElementById("portrait-container").style.filter = "blur("+ scrollPos*0.01 + "px)";
});

