const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');


let pictures = [
    '../img/16.JPG',
    '../img/7.jpg',
    '../img/14.jpg',
    '../img/fallas_1.jpg',
    '../img/fallas_2.jpg',
    '../img/libro_web.jpg',
    '../img/libro_web-2.jpg',
    '../img/libro_web-3.jpg',
    '../img/libro_web-4.jpg',
    '../img/libro_web-5.jpg',
    '../img/libro_web-6.jpg',]

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