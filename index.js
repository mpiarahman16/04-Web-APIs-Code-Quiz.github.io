const quiz = document.getElementById("quiz");
const quizTimer = document.getElementById ("quiz--timer");
const quizButton = document.getElementById("quiz--start");


let interval 
let timeleft = 60;
let currQuestion = 0;

const startTimer = () => {
    Interval = setInterval(() => {
        timeleft--;
        if (timeleft <= 0) return;
        quizTimer.innerText = timeleft;
    }, 1000);
};

const checkAnswer = (userAnswer, correctAnswer) => {
    if (userAnswer !== correctAnswer) {
        timeleft -= 10;
    }
    currQuestion++;
    handleQuiz();
};

const renderQuestion = ({ q, a, c }) => {
    quiz.innerHTML = '';
 
    const div = document.createElement("div");
    div.className = "flex column align-center w-100";
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex row wrap align-center justify-center";
    const h3 = document.createElement("h3");
    h3.innerText = q;
    div.append(h3);
    a.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        //
        button.addEventListener("click", () => checkAnswer(index, c));
        buttonContainer.append(button);
    });
    div.append(buttonContainer);
    quiz.append(div);
};

const endQuiz = () => {
    quiz.innerHTML = '';
    clearInterval(interval);
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.id = "quiz--highscore";
    input.placeholder= 'Enter your name or initials!';
    const button = document.createElement("button");
    button.innerText = "Add Your Score";
    button.addEventListener("click", () => {
       const input = document.getElementById("quiz--highscore");
       const score = quizTimer.innerText;
       const initials = input.nodeValue;
       const userJSON = localStorage.getItem("initials");

       if(userJSON){
           const user = JSON.parse(userJSON);
           const newUser = [...user, score];
           return localStorage.setItem("initials", JSON.stringify(userJSON));
       }
       localStorage.setItem("initials", JSON.stringify(score));
    });  
    div.append(input);
    div.append(button);
    quiz.append(div);
};
const handleQuiz = (isStart) => {
    if (isStart) startTimer();
    if (currQuestion < questions.length || timeleft <= 0) {
        return renderQuestion(questions[currQuestion]);
    }
    endQuiz();
};
quizButton.addEventListener("click", () => handleQuiz(true));



