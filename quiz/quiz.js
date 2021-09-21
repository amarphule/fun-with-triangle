const quizData = document.querySelector("#quizData");
const submit = document.querySelector("#submit")
const result = document.querySelector("#result")

const answers = ["90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",]
function totalMarkObtained() {
    const formAnswer = new FormData(quizData)
    let score = 0
    let index = 0
    for (let mark of formAnswer.values()) {
        if (mark === answers[index]) {
            score = score + 1
        }
        index = index + 1
    }
    result.innerText = `Your score is ${score}`
}


submit.addEventListener("click", totalMarkObtained)