let currentQuestion = 0;
let correctQuestion = 0;

document.querySelector(".scoreArea button").addEventListener("click",reset);

showQuiz();
function showQuiz(){
    if(questions[currentQuestion]){
        let q = questions[currentQuestion];

        let pct = (currentQuestion / questions.length) * 100;

        document.querySelector(".progress--bar").style.width = `${pct}%`;

       document.querySelector(".scoreArea").style.display = "none";
       document.querySelector(".questionArea").style.display = "block";


       document.querySelector(".question").innerHTML = q.question;

       let optionsHtml = "";

       for(let i in q.options){
            optionsHtml += `<div class="option" data-op="${i}"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`;
       }

     
       document.querySelector(".options").innerHTML = optionsHtml;


       document.querySelectorAll(".options .option").forEach(item =>{
        item.addEventListener("click",clickOption);
       })


    }else{
        finish();
    }

}



function clickOption(e){
    let option = questions[currentQuestion];
    let item =parseInt(e.currentTarget.getAttribute("data-op"));

   if(option.answer === item ){
    correctQuestion++;

       console.log(currentQuestion);
   }

   currentQuestion++;
   showQuiz();

  
}


function finish(){
    let points = (correctQuestion / questions.length) * 100;


    if(points < 30){
        document.querySelector(".scoreText1").innerHTML = "Tá ruim em?!";
        document.querySelector(".scoreText1").style.color = "#ff0000";
    }else if(points >= 30 && points <= 70){
         document.querySelector(".scoreText1").innerHTML = "Muito bom!";
        document.querySelector(".scoreText1").style.color = "#fff000";
    }else if(points <= 100){
         document.querySelector(".scoreText1").innerHTML = "Parabéns";
        document.querySelector(".scoreText1").style.color = "#0d630d";
    }


    document.querySelector(".progress--bar").style.width = "100%";

    document.querySelector(".scorePct").innerHTML = `Acertou ${points}%`;
    document.querySelector(".scoreText2").innerHTML = `Você respondeu ${currentQuestion} questões e acertou ${correctQuestion}.`;


    document.querySelector(".questionArea").style.display = "none";
    document.querySelector(".scoreArea").style.display = "block";
}


function reset(){
    currentQuestion = 0;
    correctQuestion = 0;
   showQuiz();
}