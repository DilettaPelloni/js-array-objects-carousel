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

//creo il contaore di current
let current = 0;

//al click sul destro
rightButton.addEventListener('click',() => {
        //creo gli array con slide e thumb
        const slides = document.getElementsByClassName('slide');
        const thumbs = document.getElementsByClassName('thumb');

        //tolgo la classe current
        slides[current].classList.remove('current');
        thumbs[current].classList.remove('current');

        //aggiorno il contatore current
        current++;

        //assegno la classe current alla prox
        slides[current].classList.add('current');
        thumbs[current].classList.add('current');

        //rendo visibile il bottone di sinistra
        leftButton.classList.remove('hidden');
        //se sono all'ultima slide faccio sparire il bottone
        if (current == slides.length - 1) {
            rightButton.classList.add('hidden');
        }
    }
)

//al click sul sinistro
leftButton.addEventListener('click',() => {
        //creo gli array con slide e thumb
        const slides = document.querySelectorAll('.slide');
        const thumbs = document.querySelectorAll('.thumb');
        //tolgo la classe current
        slides[current].classList.remove('current');
        thumbs[current].classList.remove('current');
        //aggiorno il contatore current
        current--;
        //assegno la classe current alla prox
        slides[current].classList.add('current');
        thumbs[current].classList.add('current');

        //rendo visibile il bottone di destra
        rightButton.classList.remove('hidden');
        //se sono alla prima slide faccio sparire il bottone
        if (current == 0) {
            leftButton.classList.add('hidden');
        }
    }
)




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