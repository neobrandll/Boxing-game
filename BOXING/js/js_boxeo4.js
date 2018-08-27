var canvas = document.createElement("canvas");
var introaudio = new Audio("sounds/main.mp3");
var audiojuego = new Audio("sounds/musicajuego.mp3");
var audiogo = new Audio("sounds/gameover.mp3")
var btn = document.getElementById("btn");
var fin = document.createElement("button");
var perdedor =document.createElement("h1");

function load(){
    introaudio.loop=true;
    introaudio.play();
}

function activar(){
    introaudio.pause();
    audiojuego.loop=true;
    audiojuego.play();
    canvas.id = "canvas";
    canvas.setAttribute("width", "800");
    canvas.setAttribute("height", "600");
    ctx = canvas.getContext("2d");
    document.getElementById("scenario").removeChild(btn);
    document.getElementById("scenario").appendChild(canvas);
    document.querySelector("body").style.backgroundImage = "url('css/img/concreto.jpg')";
    iniciar();
}
btn.addEventListener("click", activar);


function gameover(){
    audiojuego.pause();
    audiogo.play();
     var scenario = document.getElementById("scenario");
     document.getElementById("wrapper").removeChild(scenario);
     document.querySelector("body").style.backgroundImage = "url('css/img/gameover.jpg')";
    var wrapper = document.getElementById("wrapper")
    wrapper.classList.add("finlink");
    wrapper.addEventListener("click", function(){
        location.reload();
    });
}

function perdedor1(){
    perdedor.classList.add("perdedor");
    perdedor.textContent = "Player 1 loses..."
    document.getElementById("wrapper").appendChild(perdedor);
}

function perdedor2(){
    perdedor.classList.add("perdedor");
    perdedor.textContent = "Player 2 loses..."
    document.getElementById("wrapper").appendChild(perdedor);
}