const quiz =document.getElementById('quiz')
const quizTimer = document.getElementById('quiz--timer')
const quizButton = documenty.getElementById('quiz--start')

let timerleft= 80 

const startTimer = () => {

    setInterval(() => {
        timeleft--
        if(timeleft<= 0) return
        quizTomer.innerText= timerleft
    },1000 )
};



const startQuiz =() => {
    startTimer();
};
    quizButton.addEventListener('click', startQuiz);



