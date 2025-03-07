const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');


let pictures = ['../img/30.jpg',
    '../img/10.jpg',
    '../img/38.jpg',
    '../img/libro_foto00259.jpg',
    '../img/libro_foto00267.jpg',
    '../img/libro_foto00269.jpg',
    '../img/libro_foto00270.jpg']

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);