let digital = document.querySelector(".digital");
let p_h = document.querySelector(".p_h");
let p_m = document.querySelector(".p_m");
let p_s = document.querySelector(".p_s");


function updateClock() {
    let now = new Date();
    let hora = now.getHours();
    let minutos = now.getMinutes();
    let segundos = now.getSeconds();

    let h_deg = ((360 / 12) * hora) - 90;
    let m_deg = ((360 / 60) * minutos) - 90;
    let s_deg = ((360 / 60) * segundos) - 90;

    p_h.style.transform = `rotate(${h_deg}deg)`;
    p_m.style.transform = `rotate(${m_deg}deg)`;
    p_s.style.transform = `rotate(${s_deg}deg)`;

    digital.innerHTML = `${fixZero(hora)}: ${fixZero(minutos)}:${fixZero(segundos)}`;


}

function fixZero(time) {
    return time = (time < 10) ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();