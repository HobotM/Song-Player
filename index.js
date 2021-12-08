const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
audioObj = new Audio("song.mp3");
function play(){

    audioObj.play();
    

}



// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
