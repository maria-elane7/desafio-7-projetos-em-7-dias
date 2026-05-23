let currentColor = "black";
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector("#tela");
let ctx = screen.getContext('2d');


document.querySelectorAll(".colorArea .color").forEach(itemCor => {
    itemCor.addEventListener("click", clickColor);
});

document.querySelector(".clear").addEventListener("click", clear);


screen.addEventListener("mousedown", mouseDown);
screen.addEventListener("mousemove", mouseMove);
screen.addEventListener("mouseup", mouseUp);


function mouseDown(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMove(e) {
    if (canDraw) {
        Draw(e.pageX, e.pageY);
    }

}

function mouseUp(e) {
    canDraw = false;

}


function Draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;


    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();


    mouseX = pointX;
    mouseY = pointY;

}


function clickColor(e) {
    let color = e.target.getAttribute("data-color");
    currentColor = color;

    document.querySelector(".color.active").classList.remove('active');
    e.target.classList.add("active");
}


function clear() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}



