// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", handleEnterclick)

// funções callback
function handleTryClick(event) {
  event.preventDefault() // não faça o padrão

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  } 
  else if (Number(inputNumber.value) < 0) {
    alert("O número digitado é menor que 0")
  }
  else if (Number(inputNumber.value) > 10) {
    alert(" O número digitado é maior que 10")
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1 
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleEnterclick() {
    if (e.key == "Enter" && screen1.classList.contains("hide")) {
      handleResetClick()
    }
}