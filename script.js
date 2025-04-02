const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const audio = new Audio("assets/tumibok-ang-poso-ko.mp3");

//yes button
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaa, sabi na e i like u too <3 ";
    gif.style.width = "380px";
    gif.src = "assets/kisses.gif";
    audio.play();
    yesBtn.remove();
    noBtn.remove();
    

    //for mobile 
    if (window.innerWidth <= 700){
        gif.style.width = "350px";
    }

});

//for no button
noBtn.addEventListener("mouseover", moveNoButton); //desktop
noBtn.addEventListener("touchstart", moveNoButton); //mobile
    
function moveNoButton(){
    const noBtnReact = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtn.offsetWidth - 500; 
    const maxY = window.innerHeight - noBtn.offsetHeight - 500;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}