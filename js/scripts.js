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
});





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