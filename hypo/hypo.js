const sides = document.querySelectorAll(".side-input")
const submit = document.querySelector("#submit")
const result = document.querySelector("#result")

function calculateHypo(sideOne, sideTwo) {
    return (sideOne ** 2 + sideTwo ** 2)
}

submit.addEventListener("click", () => {
    let side1 = Number(sides[0].value)
    let side2 = Number(sides[1].value)
    if (side1 && side2) {
        const hypotenuse = calculateHypo(side1, side2)
        result.innerText = `Hypotenuse is ${Math.sqrt(hypotenuse)}`
    } else {
        result.innerText = "Please insert number"
    }
})