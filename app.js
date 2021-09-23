const angleInputs = document.querySelectorAll(".angle-input")
const isTriangle = document.querySelector("#submit")

const result = document.querySelector("#result")

function sumOfAngle(one, two, three) {
    return one + two + three
}

function message(msg) {
    result.innerText = msg
}
isTriangle.addEventListener("click", () => {
    let angle1 = Number(angleInputs[0].value)
    let angle2 = Number(angleInputs[1].value)
    let angle3 = Number(angleInputs[2].value)
    if (angle1 && angle2 && angle3) {
        let sum = sumOfAngle(angle1, angle2, angle3)
        if (sum === 180) {
            message("Heyy! Angle's form a triangle")
        } else {
            message("Angle's don't form a triangle.")
        }

    } else {
        message("Does not take empty value, insert angle of triangle.")
    }
})