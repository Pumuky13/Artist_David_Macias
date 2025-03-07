const img = document.getElementsByClassName('carousel');
const rightBtn = document.getElementsByClassName('right-btn');
const leftBtn = document.getElementsByClassName('left-btn');


const pictures = ['../img/design/Dias%20y%20Flores%20(1).jpg',
    '../img/design/Dias%20y%20Flores%20(3).jpg',
    '../img/design/Dias%20y%20Flores%20(7).jpg',
    '../img/design/Dias%20y%20Flores%20(13).jpg',
    '../img/design/Dias%20y%20Flores%20(14).jpg']
img.src = pictures[0];
let position = 0;

let moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

let moveLeft = () => {
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
let moveDer = () => {
    if (position1 >= pictures1.length - 1) {
        position1 = 0
        img.src = pictures1[position];
        return;
    }
    img.src = pictures1 [position1 + 1];
    position1++;
}

let moveIzq = () => {
    if (position1 < 1) {
        position1 = pictures1.length - 1;
        img.src = pictures1 [position];
        return;
    }
    img.src = pictures1 [position1 - 1];
    position1--;
}
const pictures1 = ['..img/desing/cant_spread_love1.jpg',
    '..img/desing/cant_spread_love2.jpg']
img.src = pictures1[0];

let position1 = 0;
rightBtn.addEventListener("click", moveDer);
leftBtn.addEventListener("click", moveIzq);

