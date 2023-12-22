const number = document.querySelector(".number")
const decreaseBtn = document.querySelector(".decrease")
const resetBtn = document.querySelector(".reset")
const increaseBtn = document.querySelector(".increase")

let count = 0
number.textContent = count

// increase function
const increase = () => {
    count++
    if(count > 0) {
        number.style.color = "green"
    }
    if(count == 0) {
        number.style.color = "#222"
    }
    number.textContent = count
}
increaseBtn.addEventListener("click", increase)


// decrease function
const decrease = () => {
    count--
    if(count < 0) {
        number.style.color = "red"
    }
    if(count == 0) {
        number.style.color = "#222"
    }
    number.textContent = count
}
decreaseBtn.addEventListener("click", decrease)


// reset function
const reset = () => {
    count = 0
    if(count == 0) {
        number.style.color = "#222"
    }
    number.textContent = count
}
resetBtn.addEventListener("click", reset)
