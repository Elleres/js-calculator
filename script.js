var string = "";

const clear = document.querySelectorAll(".clear")
const screen = document.querySelector(".screen")
const buttonsNum = document.querySelectorAll(".buttonNum")
buttonsNum.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id != "dot") {
            string += button.id.toString()
        } else {
            string += "."
        }
        if (string.length < 25) {
            screen.textContent = `${string}`
        } else {
            alert("max number size")
        }

    })
})

clear.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id == "clear") {
            string = ""
            screen.textContent = `${string}`
        } else {
            string = string.slice(0, string.length - 1)
            screen.textContent = `${string}`
        }
    })
})


