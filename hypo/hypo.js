const sides = document.querySelectorAll(".side-input")
const submit = document.querySelector("#submit")
const result = document.querySelector("#result")

function calculateHypo(sideOne, sideTwo) {
    return (sideOne ** 2 + sideTwo ** 2)
}

submit.addEventListener("click", () => {

    const hypotenuse = calculateHypo(Number(sides[0].value), Number(sides[1].value))
    result.innerText = Math.sqrt(hypotenuse)
})