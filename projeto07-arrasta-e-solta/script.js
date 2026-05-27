let areas = {
    a: null,
    b: null,
    c: null
}


document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
})

document.querySelectorAll(".area").forEach(area => {
    area.addEventListener("dragover", dragOver);
    area.addEventListener("dragleave", dragLeave);
    area.addEventListener("drop", Drop);
})


document.querySelector(".neutralArea").addEventListener("dragover", dragOverNeutra);
document.querySelector(".neutralArea").addEventListener("dragleave", dragLeaveNeutra);
document.querySelector(".neutralArea").addEventListener("drop", dropNeutra);



function dragStart(e) {
    e.currentTarget.classList.add("dragging");
}

function dragEnd(e) {
    e.currentTarget.classList.remove("dragging");

}



function dragOver(e) {

    if (e.currentTarget.querySelector(".item") === null) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
}


function dragLeave(e) {
    e.currentTarget.classList.remove('hover');


}


function Drop(e) {
    e.currentTarget.classList.remove('hover');

    if (e.currentTarget.querySelector(".item") === null) {
        let item = document.querySelector(".item.dragging");

        e.currentTarget.appendChild(item);

        updateAreas();

    }

}


function dragOverNeutra(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}


function dragLeaveNeutra(e) {
    e.currentTarget.classList.remove('hover');
}


function dropNeutra(e) {
    e.currentTarget.classList.remove('hover');

    let item = document.querySelector(".item.dragging");

    e.currentTarget.appendChild(item);

    updateAreas();
}


function updateAreas() {
    document.querySelectorAll(".area").forEach(area => {
        let nome = area.getAttribute("data-name");

        if (area.querySelector(".item") !== null) {
            areas[nome] = area.querySelector(".item").innerHTML;
        } else {
            areas[nome] = null;
        }
    })


    if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector(".areas").classList.add("correct");
    }else{
      document.querySelector(".areas").classList.remove("correct");
    }
}