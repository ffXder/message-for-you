const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const audio = new Audio("assets/tumibok-ang-poso-ko.mp3");

//yes button
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaa, tumibok ang poso ko<3";
    gif.src = "assets/kisses.gif";
    audio.play();
});

//for no button
noBtn.addEventListener("mouseover", () => {
    const noBtnReact = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtn.width; 
    const maxY = window.innerHeight - noBtn.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});