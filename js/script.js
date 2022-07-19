const burg_btn = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const close_btn = document.querySelector('.close-btn');

burg_btn.addEventListener("click",()=>nav.classList.toggle('open'));
close_btn.addEventListener("click",()=>nav.classList.toggle('open'));

const left_btn = document.querySelector('.arrow--left');
const right_btn = document.querySelector('.arrow--right');
const carousel = document.querySelector('.slider__content');

left_btn.addEventListener("click",turnLeft);
right_btn.addEventListener("click",turnRight);

let autoSlide=
    setInterval(() => {
   turnRight(false);
}, 4500);

function turnLeft(){
    clearInterval(autoSlide);
    carousel.classList.toggle("transition-left");
    left_btn.removeEventListener("click",turnLeft);
}

function turnRight(f){
    if (f) {
       clearInterval(autoSlide);
    }
    carousel.classList.toggle("transition-right");
    right_btn.removeEventListener("click",turnRight);
}

carousel.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
        carousel.classList.toggle("transition-left");
        left_btn.addEventListener("click",turnLeft);
    }
    else{
        carousel.classList.toggle("transition-right");
        right_btn.addEventListener("click",turnRight);
    }
});


