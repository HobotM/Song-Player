const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
audioObj = new Audio('song.mp3');

function playMusic(){
    audioObj.play();
    
}
playBtn.addEventListener("click", playMusic);

function pauseMusic(){
    audioObj.pause();
    
}
pauseBtn.addEventListener("click", pauseMusic);
function stopMusic(){
    audioObj.play();
    
}

function stopMusic(){

    audioObj.pause();
    audioObj.currentTime = 0;
    
}
stopBtn.addEventListener("click", stopMusic);


let volume = document.getElementById("volume-control");
volume.addEventListener("change", function(e) {
    audioObj.volume = e.currentTarget.value / 100;
})
// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
