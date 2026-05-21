let input = document.querySelector("#searchInput");
let resultado = document.querySelector(".resultado");

document.querySelector(".busca button").addEventListener("click",async (e)=>{

    e.preventDefault();


    if(input.value !== ""){
        clearInfo();
        warning("Carregando...");

           
    let apiCity = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)}&appid=03fc053c9dbe367995d18cd612fc5c73&units=metric&lang=pt_br`);

    let json = await apiCity.json();

        if(json.cod === 200){
            showTemp({
                city:json.name,
                country:json.sys.country,
                temp:json.main.temp,
                windSpeed:json.wind.speed,
                windDeg:json.wind.deg,
                icon:json.weather[0].icon,
            })
        }else{
            clearInfo();
            warning("Cidade não encontrada.");
        }
    }else{
        clearInfo();
    }

    input.value = "";
    input.focus();

})

function warning(msg){
    document.querySelector(".aviso").innerHTML = msg;
}

function clearInfo(){
    warning("");
    document.querySelector(".resultado").style.display = "none";
}

function showTemp(json){
    clearInfo();
    document.querySelector(".titulo").innerHTML = `${json.city}, ${json.country}`;
    document.querySelector(".tempInfo").innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed}<span>km/h</span>`;

    document.querySelector(".temp img").setAttribute("src",`http://openweathermap.org/img/wn/${json.icon}@2x.png`);
    document.querySelector(".ventoPonto").style.transform = `rotate(${json.windDeg - 90}deg)`;

    document.querySelector(".resultado").style.display = "block";

}