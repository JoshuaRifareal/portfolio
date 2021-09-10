function animate(){
    var firstName = anime({
        targets: '#joshua path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 200 },
        direction: 'alternate',
        loop: true
    });
    var lastName = anime({
        targets: '#rifareal path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 300 },
        direction: 'alternate',
        loop: true
    });
}
animate();
