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
    yesBtn.remove();
    noBtn.remove();

    //for mobile 
    if (window.innerWidth <= 700){
        gif.style.width = "80%";
        gif.style.width = "80%";
    }

});

//for no button
noBtn.addEventListener("mouseover", moveNoButton); //desktop
noBtn.addEventListener("touchstart", moveNoButton); //mobile
    
function moveNoButton(){
    const noBtnReact = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtn.offsetWidth; 
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}