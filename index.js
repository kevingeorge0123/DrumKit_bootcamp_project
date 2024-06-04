alert("HEllo");

var numberofbutton = document.querySelectorAll(".drum").length

// for (var i=0, i <= numberofbutton, i++){
//     document.querySelectorAll("button")[i].addEventListener("click",alert1);
// }

// document.querySelector("button").addEventListener("click",alert1);

function alert1 (){
    alert("I got clicked");
}



for (var i=0; i < numberofbutton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",soundplay);
}

function soundplay(){
    switch (this.innerText){
        case "w": 
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;

        case "a":
            var audio =new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;


        case "s":
            var audio =new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio =new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio =new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio =new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio =new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log("try again");


    };

}
