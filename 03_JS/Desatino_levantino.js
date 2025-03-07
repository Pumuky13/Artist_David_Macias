const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');


let pictures = ['../img/burbuja.jpg',
    '../img/F1%20vip.jpg',
    '../img/Manipulació.jpg',
    '../img/Rescate.jpg',
    '../img/libro_foto00264.jpg',
    '../img/libro_foto00275.jpg',
    '../img/libro_foto00276.jpg',
    '../img/libro_foto00284.jpg']

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