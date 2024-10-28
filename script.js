window.addEventListener('load', () => {
    const sun = document.querySelector('.sun');
    const cloud = document.querySelector('.cloud');

    // Sun Animation - Rising up
    sun.animate([
        { transform: 'translate(-50%, 0) translateY(100%)' },
        { transform: 'translate(-50%, 0) translateY(-50%)' }
    ], {
        duration: 5000,
        fill: 'forwards',
        easing: 'ease-in-out'
    });

    // Cloud Animation - Moving sideways
    cloud.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(110vw)' }
    ], {
        duration: 10000,
        fill: 'forwards',
        easing: 'linear'
    });
});
