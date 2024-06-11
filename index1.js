var numofdrum = document.querySelectorAll(".drum").length


for( var i =0;i<numofdrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makevoice(this.innerText);   //this is the object that clicked which is button having inner HTML/innerText etc and do not need to pass through function 
        Animate_(this.innerText); //or innerHTML
    })
}

// object created by addeventlistner gets passed to the function and when actual event occur this function is called
document.addEventListener("keypress",function(event){
    makevoice(event.key);

})


function makevoice(key){
    switch(key){
        case 'w':
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

    }
}


function Animate_(key){
    console.log(key);

    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    },100);
}