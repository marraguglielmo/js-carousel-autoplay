// elements
const imgWrapper = document.querySelector('.img-wrapper');
const btnTop = document.querySelector(".top")
const btnBottom = document.querySelector(".bottom");
const slider = document.querySelector('.slider');
// 4. inizializzo il counter
let counter = 0;
let pressBottom;

// 1.
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];

//2.
for(let i = 0; i < images.length; i++){

    imgWrapper.innerHTML += `<img class="img d-none" src="${images[i]}">`
    
}

// 3.  prendo tutti gli elementi con la classe img
const imgCollection = document.getElementsByClassName("img");

// rimuovo la classe d-none alla prima immagine
imgCollection[counter].classList.remove("d-none");



// sopra decremento
btnTop.addEventListener('click', scroolTop);

// sotto incremento
btnBottom.addEventListener('click', scrollBottom);

pressBottom = setInterval(scrollBottom, 3000);

// quando sono in hover sullo slider disattivo setInterval e uso i bottoni
slider.addEventListener('mouseover', function(){
    clearInterval(pressBottom);
});
// quando non sono più in hover sullo slider faccio ripartire il setInterval
slider.addEventListener('mouseout', function(){
    pressBottom = setInterval(scrollBottom, 1000);
})

// FUNCTIONS //////


function scrollBottom(){
    imgCollection[counter++].classList.add("d-none");
    
    if(counter === images.length){
        counter = 0;
    }
    imgCollection[counter].classList.remove("d-none");
    btnTop.classList.remove("d-none");
    
}

function scroolTop(){
    imgCollection[counter--].classList.add("d-none");
    if(counter < 0){
        counter = images.length - 1;
    }
    imgCollection[counter].classList.remove("d-none");

    btnBottom.classList.remove("d-none");
}