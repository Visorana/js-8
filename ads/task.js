let rotatorCases = document.querySelectorAll('.rotator__case');
let rotator = document.querySelector('.rotator');
let currCase = rotator.firstElementChild

rotatorCases.forEach((rotatorCase) => {
    rotatorCase.style.color = rotatorCase.getAttribute('data-color');
})

function rotate() {
    currCase.classList.remove('rotator__case_active')
    currCase = currCase.nextElementSibling
    if (!currCase) {
        currCase = rotator.firstElementChild
    }
    currCase.classList.add('rotator__case_active')
    timing = currCase.getAttribute('data-speed');
    window.setTimeout(rotate, timing);
}

rotate()