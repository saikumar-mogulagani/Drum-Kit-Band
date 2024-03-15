//detecting button clicked. this is used to detect which button is clicked
let totalDrums=document.querySelectorAll(".drum");

for(let i=0; i<totalDrums.length; i++){
    totalDrums[i].addEventListener("click", function(){
        makeSound(this.innerHTML); // Playing sound for respective button clicked
        buttonAnimate(this.innerHTML);
    });
}

// detecting keyboard value pressed using keypress event and to know its value used event.key
document.addEventListener("keypress", function(event){
    buttonAnimate(event.key);
    makeSound(event.key);
    });


function makeSound(value){
    switch (value) {
        case "w":
            var btn1 = new Audio("sounds/crash.mp3");
            btn1.play();
            break;
        case "a":
            var btn2 = new Audio("sounds/kick-bass.mp3");
            btn2.play();
            break;
        case "s":
            var btn3 = new Audio("sounds/snare.mp3");
            btn3.play();
            break;
        case "d":
            var btn4 = new Audio("sounds/tom-1.mp3");
            btn4.play();
            break;
        case "j":
            var btn5 = new Audio("sounds/tom-2.mp3");
            btn5.play();
            break;
        case "k":
            var btn6 = new Audio("sounds/tom-3.mp3");
            btn6.play();
            break;
        case "l":
            var btn7 = new Audio("sounds/tom-4.mp3");
            btn7.play();
            break;
    
        default:
            alert("Press/click w, a, s, d, j, k, l but you have pressed/clicked "+value);
            break;
    }
}

function buttonAnimate(key){
   let activeBtn = document.querySelector("."+key);
   activeBtn.classList.add("pressed"); //Adding pressed class 
   setTimeout(function(){ activeBtn.classList.remove("pressed") }, 150); //Removing pressed class after 150ms.
}
