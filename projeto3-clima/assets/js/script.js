document.querySelector("form button").addEventListener("click", async (event)=>{
    event.preventDefault();
   
    let input = document.querySelector("#searchBusca").value;

   if(input.trim() !== ""){
    showWarning("Carregando");

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=03fc053c9dbe367995d18cd612fc5c73&units=metric&lang=pt_br`

    let req = await fetch(url);
    let json = await req.json();

    

    if(json.cod == 200){
        showWarning("");
        showUpdate({
            name:json.name,
            country:json.sys.country,
            temp:json.main.temp,
            wind:json.wind.speed,
            deg:json.wind.deg,
            weather:json.weather[0].icon
            
        })

        console.log(json)
    }else{
        clearInfo();
        document.querySelector(".aviso").innerHTML = "Cidade não encontrada"
    }

   }else{
        clearInfo();
   }
})


function clearInfo(){
    document.querySelector(".resultado").style.display = "none";
    document.querySelector(".aviso").innerHTML = "";
    
}


function showWarning(msg){
    document.querySelector(".aviso").innerHTML = msg;
}

function showUpdate(json){
    document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`;

    document.querySelector(".tempoInfo").innerHTML = `${json.temp} <span>°C</span>`;

    document.querySelector(".ventoInfo").innerHTML = `${json.wind} <span>km/h</span>`;

    document.querySelector(".ponteiro").style.transform = `rotate(${json.deg - 90}deg)`;

    document.querySelector("img").setAttribute("src",`https://openweathermap.org/img/wn/${json.weather}@2x.png`)

    document.querySelector(".resultado").style.display = "block";
}