alert("HEllo");

var numberofbutton = document.querySelectorAll(".drum").length

for (var i=0, i <= numberofbutton, i++){
    document.querySelectorAll("button")[i].addEventListener("click",alert1);
}

// document.querySelector("button").addEventListener("click",alert1);

function alert1 (){
    alert("I got clicked");
}


