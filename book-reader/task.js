let fontSizes = document.querySelectorAll('.font-size');
let textColors = document.querySelectorAll('[data-text-color]');
let bgColors = document.querySelectorAll('[data-bg-color]');
let reader = document.querySelector('.book__content')

fontSizes.forEach.call(fontSizes, (size) => {
    size.addEventListener('click', (e) => {
        e.preventDefault();
        setSize(e);
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

function setSize(e) {
    const currIndex = [...fontSizes].findIndex(size =>
        size.classList.contains('font-size_active'));
    const size = e.target.dataset.size;
    fontSizes[currIndex].classList.remove('font-size_active');
    e.target.classList.add('font-size_active');
    if (size) {
        reader.className = `book__content book_fs-${size}`;
    } else {
        reader.className = "book__content";
    }
    
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