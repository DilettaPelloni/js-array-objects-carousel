const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



//creo tante slide e thumb quanti sono gli elementi di images
images.forEach((element, i) => {
    //prendo le box
    const slideBox = document.getElementById('slide-box');
    const thumbBox = document.getElementById('thumb-box');
    //creo una slide
    const slide = createImgContainer(element.image);
    slide.classList.add('slide');
    const textBox = createTextBox(element.title, element.text);
    slide.append(textBox);
    slideBox.append(slide);
    //se è la prima le do la classe current
    if(i == 0) {
        slide.classList.add('current');
    }
    //creo una thumb
    const thumb = createImgContainer(element.image);
    thumb.classList.add('thumb');
    thumbBox.append(thumb);
    //se è la prima le do la classe current
    if(i == 0) {
        thumb.classList.add('current');
    }
});

//prendo i bottoni
const leftButton = document.querySelector('.button-left');
const rightButton = document.querySelector('.button-right');
const playButton = document.getElementById('play-button');
const reverseButton = document.getElementById('reverse-button');

//creo il contaore di current
let current = 0;

//creo array con slide e thumb
const slides = document.querySelectorAll('.slide');
const thumbs = document.querySelectorAll('.thumb');

// //avanzamento automatico slide

//SOLUZIONE 1
// let autoPlay = setInterval(nextSlide, 3000);
// let reverse = false;

// //al click su play
// playButton.addEventListener('click', () => {
//     if (autoPlay == null) {
//         if (reverse == false) {
//             autoPlay = setInterval(nextSlide, 3000);
//         }
//         else {
//             autoPlay = setInterval(prevSlide, 3000);
//         }
//     }
//     else {
//         clearInterval(autoPlay);
//         autoPlay = null;
//     }
// })

// //al click su reverse
// reverseButton.addEventListener('click', () => {
//     if (autoPlay != null) {
//         clearInterval(autoPlay);
//         if (reverse == false) {
//             autoPlay = setInterval(prevSlide, 3000);
//         }
//         else {
//             autoPlay = setInterval(nextSlide, 3000);
//         }
//     }
//     reverse = !reverse;
// })

//SOLUZIONE 2
let reverse = false;
let autoPlay = setInterval(flowDirection, 1000);

playButton.addEventListener('click', () => {
    if (autoPlay == null) {
        autoPlay = setInterval(flowDirection, 1000);
    }
    else {
        clearInterval(autoPlay);
        autoPlay = null;
    }
})

//al click su reverse
reverseButton.addEventListener('click', () => {
    reverse = !reverse;
})

//al click sul destro
rightButton.addEventListener('click',nextSlide);

//al click sul sinistro
leftButton.addEventListener('click', prevSlide);


//funzioni----------------------------------------------------------------------------------

//per creare un contenitore di immagini
function createImgContainer(imgSrc) {
    const imgCont = document.createElement('div');
    imgCont.innerHTML = `
        <img src=${imgSrc}>
    `;
    return imgCont;
}

//per creare una textbox
function createTextBox(title, description) {
    const textBox = document.createElement('div');
    textBox.classList.add('text-box');
    textBox.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;
    return textBox;
}

//passare alla prossima slide
function nextSlide() {
    //tolgo la classe current
    slides[current].classList.remove('current');
    thumbs[current].classList.remove('current');

    //aggiorno il contatore current
    if (current == slides.length - 1) {
        current = 0;
    }
    else {
        current++;
    }

    //assegno la classe current alla prox
    slides[current].classList.add('current');
    thumbs[current].classList.add('current');
}

//passare alla slide precedente
function prevSlide() {
    //tolgo la classe current
    slides[current].classList.remove('current');
    thumbs[current].classList.remove('current');

    //aggiorno il contatore current
    if (current == 0) {
        current = slides.length - 1;
    }
    else {
        current--;
    }

    //assegno la classe current alla prec
    slides[current].classList.add('current');
    thumbs[current].classList.add('current');
}


//SOLO PER SOLUZIONE 2
//per decidere in quale verso andare
function flowDirection() {
    if (reverse == false) {
        nextSlide();
    }
    else {
        prevSlide();
    }
}