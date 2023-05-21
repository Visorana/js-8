let fontSizes = document.querySelectorAll('.font-size');
let textColors = document.querySelectorAll('[data-text-color]');
let bgColors = document.querySelectorAll('[data-bg-color]');
let currClass = '';

fontSizes.forEach.call(fontSizes, (size) => {
    size.addEventListener('click', (e) => {
        e.preventDefault();
        setSize(size);
    })
})

textColors.forEach.call(textColors, (textColor) => {
    textColor.addEventListener('click', (e) => {
        e.preventDefault();
        setTextColor(textColor);
    })
})

bgColors.forEach.call(bgColors, (bgColor) => {
    bgColor.addEventListener('click', (e) => {
        e.preventDefault();
        setBgColor(bgColor);
    })
})

function setSize(size) {
    let currIndex = [...fontSizes].findIndex(size =>
        size.classList.contains('font-size_active'));
    fontSizes[currIndex].classList.remove('font-size_active');
    size.classList.add('font-size_active');
    currSize = size.getAttribute('data-size');
    if (currClass) {
        book.classList.remove(currClass);
    }
    if (currSize == 'small') {
        currClass = 'book_fs-small';
        book.classList.add(currClass);
    } else if (currSize == 'big') {
        currClass = 'book_fs-big';
        book.classList.add(currClass);
    };
}

function setTextColor(textColor) {
    let currIndex = [...textColors].findIndex(color =>
        color.classList.contains('color_active'));
    textColors[currIndex].classList.remove('color_active');
    textColor.classList.add('color_active');
    book.style.color = textColor.getAttribute('data-text-color');
}

function setBgColor(bgColor) {
    let currIndex = [...bgColors].findIndex(color =>
        color.classList.contains('color_active'));
    bgColors[currIndex].classList.remove('color_active');
    bgColor.classList.add('color_active');
    book.style.backgroundColor = bgColor.getAttribute('data-bg-color');
}