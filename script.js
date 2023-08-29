const question=[
    {
        question : "Which is the largst animal in the world",
        answer: [
            {text:"shark",correct:false},
            {text:"elephant",correct:false},
            {text:"giraffe",correct:false},
            {text:"blue whale",correct:true},
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answer: [
            {text: "Mars", correct: true},
            {text: "Venus", correct: false},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false}
        ]
    },
    {
        question: "What is the capital city of France?",
        answer: [
            {text: "Rome", correct: false},
            {text: "Madrid", correct: false},
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true}
        ]
    },
    {
        question: "Which scientist formulated the theory of general relativity?",
        answer: [
            {text: "Isaac Newton", correct: false},
            {text: "Albert Einstein", correct: true},
            {text: "Galileo Galilei", correct: false},
            {text: "Nikola Tesla", correct: false}
        ]
    },
    {
        question: "What is the chemical symbol for the element gold?",
        answer: [
            {text: "Ag", correct: false},
            {text: "Au", correct: true},
            {text: "Fe", correct: false},
            {text: "Cu", correct: false}
        ]
    }               
]

const questionElement=document.getElementById("question")
const option=document.getElementById("option")
const next=document.getElementById("next")

let currentQuestionIndex=0
let score=0

function startquiz(){
    currentQuestionIndex=0
    score=0
    next.innerText="NEXT"
    showQuestion()
}

function showQuestion()
{
    reset()
    let currentQuestion=question[currentQuestionIndex]
    let questionNo=question[currentQuestionIndex]+1
    questionElement.innerHTML=questionNo+ ". " +currentQuestion.question

    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button")
        button.innerText=answer.text
        button.classList.add("btn")
        option.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
       button.addEventListener("click",selectedanswer)
    })
    
}

function reset(){
    next.style.display="none"
    while(option.firstChild){
        option.removeChild(option.firstChild);
    }
}

function selectedanswer(e)
{
 const selected=e.target
 const iscorrect=selected.dataset.correct==="true"
 if(iscorrect){
  selected.classList.add("correct")
  score++;
 }
 else{
    selected.classList.add("incorrect")
 }
 Array.from(option.children).forEach(button=>{
    if(button.dataset.correct==="true")
    {
        button.classList.add("correct")
    }
    button.disabled=true

 })
 next.style.display="block"
}

function showscore(){
 reset()
 questionElement.innerHTML=`you scored ${score} out of ${question.length}`  
 next.innerHTML="play again"
 next.style.display="block"
}


function handlenextbutton(){
    currentQuestionIndex++
    if(currentQuestionIndex<question.length)
    {
        showQuestion()
    }
    else{
      showscore()
    }
}

next.addEventListener("click",()=>{
    if(currentQuestionIndex<question.length)
    {
        handlenextbutton()
    }
    else{
        startquiz()
    }
})

startquiz()
