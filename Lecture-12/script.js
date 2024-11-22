const vid = document.getElementById("vid");
const button = document.getElementById("button");
const aud = document.getElementById("aud");
const button2 = document.getElementById("button2");
const range = document.getElementById("range");

button.addEventListener("click", () => {
    if(vid.paused) {
        vid.play();
        button.innerHTML = "Pause";
    } else {
        vid.pause();
        button.innerHTML = "Play";
    }
});

button2.addEventListener("click", () => {
    if(aud.paused){
        aud.play();
        button2.innerHTML = "Pause";
    }
    else{
        aud.pause();
        button2.innerHTML = "Play";
    }
});