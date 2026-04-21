document.body.addEventListener("keyup", (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector("#composir button").addEventListener("click", () => {
    let song = document.querySelector("#input").value;

    if (song !== "") {

        let arraySong = song.split("");

        playCompositon(arraySong);
    }

})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add("active");

        setTimeout(() => {
            keyElement.classList.remove("active");
        }, 300);
    }
};

function playCompositon(arraySong) {
    let wait = 0;

    for(let compositionItem of arraySong){
        setTimeout(()=>{
            playSound(`key${compositionItem}`);
        },wait);

        wait += 250;
    }

    let input = document.querySelector("#input");
    input.value = "";
    input.focus();
}