function Carousel(config) {
    const img = document.querySelector(config.imgSelector);
    const rightBtn = document.querySelector(config.rightBtnSelector);
    const leftBtn = document.querySelector(config.leftBtnSelector);
    const pictures = config.pictures;

    let position = 0;
    img.src = pictures[position];

    const moveRight = () => {
        position = (position >= pictures.length - 1) ? 0 : position + 1;
        img.src = pictures[position];
    };

    const moveLeft = () => {
        position = (position < 1) ? pictures.length - 1 : position - 1;
        img.src = pictures[position];
    };

    rightBtn.addEventListener("click", moveRight);
    leftBtn.addEventListener("click", moveLeft);
}

document.addEventListener("DOMContentLoaded", () => {
    Carousel({
        imgSelector: '.diapo-1 .carousel',
        rightBtnSelector: '.diapo-1 .right-btn',
        leftBtnSelector: '.diapo-1 .left-btn',
        pictures: [
            '../img/design/Dias%20y%20Flores%20(1).jpg',
            '../img/design/Dias%20y%20Flores%20(3).jpg',
            '../img/design/Dias%20y%20Flores%20(7).jpg',
            '../img/design/Dias%20y%20Flores%20(13).jpg',
            '../img/design/Dias%20y%20Flores%20(14).jpg'
        ]
    });

    Carousel({
        imgSelector: '.diapo-2 .carousel',
        rightBtnSelector: '.diapo-2 .right-btn',
        leftBtnSelector: '.diapo-2 .left-btn',
        pictures: [
            '../img/design/cant_spread_love1.jpg',
            '../img/design/cant_spread_love2.jpg'
        ]
    });

    Carousel({
        imgSelector: '.diapo-3 .carousel',
        rightBtnSelector: '.diapo-3 .right-btn',
        leftBtnSelector: '.diapo-3 .left-btn',
        pictures: ['../img/design/revisiting%20classics%202.jpg', '../img/design/revisiting%20classics%201.jpg',
            '../img/design/revisiting%20classics%202.jpg', '../img/design/revisiting%20classics%203.jpg']
    });
    Carousel({
        imgSelector: '.diapo-4 .carousel',
        rightBtnSelector: '.diapo-4 .right-btn',
        leftBtnSelector: '.diapo-4 .left-btn',
        pictures: ['../img/design/ibero%20poster.jpg', '../img/design/latín%20poster.jpg',
            '../img/design/arabe%20poster.jpg', '../img/design/vasco%20poster.jpg', '../img/design/catalán%20poster.jpg',
            '../img/design/gallego%20póster.jpg', '../img/design/portugués%20poster.jpg']
    });
    Carousel({
        imgSelector: '.diapo-5 .carousel',
        rightBtnSelector: '.diapo-5 .right-btn',
        leftBtnSelector: '.diapo-5 .left-btn',
        pictures: ['../img/design/El%20color%20más%20feo%20del%20mundo.jpg', '../img/design/isnaziel_2.jpg']
    });

    Carousel({
        imgSelector: '.diapo-6 .carousel',
        rightBtnSelector: '.diapo-6 .right-btn',
        leftBtnSelector: '.diapo-6 .left-btn',
        pictures: ['../img/design/compro%20oro.jpg', '../img/design/Yonquis%20del%20litio%202.jpg',
            '../img/design/AMANTES%20DEL%20COLTAN.jpg']
    });
    Carousel({
        imgSelector: '.diapo-7 .carousel',
        rightBtnSelector: '.diapo-7 .right-btn',
        leftBtnSelector: '.diapo-7 .left-btn',
        pictures: ['../img/design/Free%20font%20desire%201.jpg', '../img/design/Free%20font%20desire.jpg',
            '../img/design/AMANTES%20DEL%20COLTAN.jpg']
    });
})
