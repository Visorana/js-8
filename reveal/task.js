let reveals = document.querySelectorAll('.reveal');

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        return false;
    } else {
        return true;
    };
}

window.addEventListener('scroll', () => {
    reveals.forEach((reveal) => {
        if (isVisible(reveal)) {
            reveal.classList.add('reveal_active');
        };
    });
});