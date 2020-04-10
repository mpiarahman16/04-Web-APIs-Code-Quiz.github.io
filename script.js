const myQuestions = [
    {
        question: "What is 20/10?",
        answers: {
            a: '2',
            b: '1',
            c: '10',
            d: 'None of the above',
        },

        correctAnwser: 'a'
    },



    {
        question: "What is 100/10?",
        imgSrc:"img/html.png",
        answers: {
            a: '2',
            b: '10',
            c: '11',
            d: 'None of the above',
        },
        correctAnswer: 'b'
    },

    {
        question: "What is 100/10?",
        imgSrc:"img/picture2.png",
        answers: {
            a: '2',
            b: '10',
            c: '11',
            d: 'None of the above',
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 100/100?",
        answers: {
            a: '1',
            b: '10',
            c: '20',
            d: 'None of the above',
        },
        correctAnswer: 'a'
    },
];

document.getElementById("Start-Quiz").addEventListener("submit",function(event) {
  event.preventDefault()
  const name = document.getElementById("name").value  
  localStorage.setItem("user",name)
})

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    myQuestions.forEach(function (Question) {
        var H4 = document.createElement("h4");
        var container = document.createElement("div")

        H4.innerText = Question.question
        container.append(H4)
        Object.keys(Question.answers).forEach(function (key) {
            var answer = Question.answers[key]
            var button = document.createElement("button")
            button.innerText = answer
            container.append(button)
        })

        quizContainer.append(container)

    })
}

function showResults() { }

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);



