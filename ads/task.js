let rotatorCases = document.querySelectorAll('.rotator__case');
let caseIndex = 0;

rotatorCases.forEach((rotatorCase) => {
    rotatorCase.style.color = rotatorCase.getAttribute('data-color');
})

function rotate() {
    rotatorCases[caseIndex].classList.remove('rotator__case_active')
    caseIndex += 1;
    if (caseIndex > (rotatorCases.length - 1)) {
        caseIndex = 0;
    };
    rotatorCases[caseIndex].classList.add('rotator__case_active');
    timing = rotatorCases[caseIndex].getAttribute('data-speed');
    window.setTimeout(rotate, timing);
}

rotate()