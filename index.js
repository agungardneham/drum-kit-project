document.querySelector(".w").addEventListener("click", function snareSound(){
    var snareAudio = new Audio("sounds/snare.mp3");
    snareAudio.play();
    buttonAnimation("w");
});

document.querySelector(".a").addEventListener("click", function bassSound(){
    var bassAudio = new Audio("sounds/kick-bass.mp3");
    bassAudio.play();
    buttonAnimation("a");
});

document.querySelector(".s").addEventListener("click", function crashSound(){
    var crashAudio = new Audio("sounds/crash.mp3");
    crashAudio.play();
    buttonAnimation("s");
});

document.querySelector(".d").addEventListener("click", function tom1Sound(){
    var tom1Audio = new Audio("sounds/tom-1.mp3");
    tom1Audio.play();
    buttonAnimation("d");
});

document.querySelector(".j").addEventListener("click", function tom2Sound(){
    var tom2Audio = new Audio("sounds/tom-2.mp3");
    tom2Audio.play();
    buttonAnimation("j");
});

document.querySelector(".k").addEventListener("click", function tom3Sound(){
    var tom3Audio = new Audio("sounds/tom-3.mp3");
    tom3Audio.play();
    buttonAnimation("k");
});

document.querySelector(".l").addEventListener("click", function tom4Sound(){
    var tom4Audio = new Audio("sounds/tom-4.mp3");
    tom4Audio.play();
    buttonAnimation("l");
});

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    console.log(event);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var snareAudio = new Audio("sounds/snare.mp3");
            snareAudio.play();
            break;
        case "q":
            var snareAudio = new Audio("sounds/snare.mp3");
            snareAudio.play();
            break;
        case "a":
            var bassAudio = new Audio("sounds/kick-bass.mp3");
            bassAudio.play();
            break;
        case "z":
            var bassAudio = new Audio("sounds/kick-bass.mp3");
            bassAudio.play();
            break;
        case "s":
            var crashAudio = new Audio("sounds/crash.mp3");
            crashAudio.play();
            break;
        case "d":
            var tom1Audio = new Audio("sounds/tom-1.mp3");
            tom1Audio.play();
            break;
        case "j":
            var tom2Audio = new Audio("sounds/tom-2.mp3");
            tom2Audio.play();
            break;
        case "k":
            var tom3Audio = new Audio("sounds/tom-3.mp3");
            tom3Audio.play();
            break;
        case "l":
            var tom4Audio = new Audio("sounds/tom-4.mp3");
            tom4Audio.play();
            break;
        default: console.log(key);
            break;
    }
}

function buttonAnimation(buttonPressed){
    var activeButton = document.querySelector("." + buttonPressed);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}