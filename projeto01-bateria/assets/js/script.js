document.body.addEventListener("keyup",(e)=>{
   showSound(e.code.toLowerCase());
})

document.querySelector(".tocar").addEventListener("click",compositionPlay);


function showSound(song){
    let audioSong = document.querySelector(`#s_${song}`);
    let keyElement = document.querySelector(`div[data-key="${song}"]`);

    if(audioSong && keyElement){
        audioSong.currentTime = 0;
        audioSong.play();

        keyElement.classList.add("active");

        setTimeout(()=>{
            keyElement.classList.remove("active");
        },300);
    }
}


function compositionPlay(){
    let song = document.querySelector("#musica");
    let time = 0;

   if(song.value.trim() !== ""){
        let composicao = song.value.split("");
        for(let c of composicao){
            setTimeout(()=>{
                showSound(`key${c}`);
            },time);

            time += 250;
        }
   }

   song.value = "";
   song.focus();
}