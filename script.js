var string = "";

const screen = document.querySelector(".screen")
const buttons = document.querySelectorAll(".button")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        string += button.id.toString()
        if (string.length < 25) {
            screen.textContent = `${string}`
        } else {
            alert("max number size")
        }

    })
})


