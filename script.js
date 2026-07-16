const quantidadeImagens = 13;

const track = document.querySelector(".carousel-track");

for(let i = 1; i <= quantidadeImagens; i++){

    const slide = document.createElement("div");

    slide.className = "carousel-slide";

    slide.innerHTML = `<img src="img/camisa${i}.jpg" alt="Camisa ${i}">`;

    track.appendChild(slide);

}

const slides = document.querySelectorAll(".carousel-slide");

let indice = 0;

function atualizar(){

    track.style.transform = `translateX(-${indice * 100}%)`;

}

function proximo(){

    indice++;

    if(indice >= slides.length){

        indice = 0;

    }

    atualizar();

}

function anterior(){

    indice--;

    if(indice < 0){

        indice = slides.length - 1;

    }

    atualizar();

}

document.querySelector(".next").onclick = proximo;

document.querySelector(".prev").onclick = anterior;

let autoplay = setInterval(proximo,3000);

const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter",()=>{

    clearInterval(autoplay);

});

carousel.addEventListener("mouseleave",()=>{

    autoplay = setInterval(proximo,3000);

});

let inicioX = 0;

carousel.addEventListener("touchstart",(e)=>{

    inicioX = e.touches[0].clientX;

});

carousel.addEventListener("touchend",(e)=>{

    let fimX = e.changedTouches[0].clientX;

    if(inicioX - fimX > 50){

        proximo();

    }

    if(fimX - inicioX > 50){

        anterior();

    }

});
