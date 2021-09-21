const sides = document.querySelectorAll(".side-input")
const calculateBtn = document.querySelector("#submit")
const result = document.querySelector("#result")


function areaOfTriangle(a, b, c, s) {
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area
}

function calculateAreaOfTriangle() {
    const side1 = Number(sides[0].value)
    const side2 = Number(sides[1].value)
    const side3 = Number(sides[2].value)
    if (side1 && side2 && side3) {
        const semiPeri = ((side1 + side2 + side3) / 2)
        const answer = areaOfTriangle(side1, side2, side3, semiPeri)
        result.innerText = `Area of triangle is ${answer}`
    } else {
        result.innerText = "Please insert number"
    }
}

calculateBtn.addEventListener("click", calculateAreaOfTriangle)