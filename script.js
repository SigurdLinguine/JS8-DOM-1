// Oppgave 1

document.getElementById("FtoC").addEventListener
("click", function () {
    let temperatur = document.getElementById("temp").value
    let nyTemperatur = (temperatur -32) * 0.5556
    document.getElementById("temp").value = nyTemperatur
})

document.getElementById("CtoF").addEventListener
("click", function () {
    let temperatur = document.getElementById("temp").value
    let nyTemperatur = (temperatur * 1.8) + 32
    document.getElementById("temp").value = nyTemperatur
})

// Oppgave 2

let tall1 = Math.floor(Math.random() * 11)
let tall2 = Math.floor(Math.random() * 11)

document.getElementById("tall1").value = tall1
document.getElementById("tall2").value = tall2

document.getElementById("button").addEventListener
("click", function () {
    if (tall1 == tall2) {
        document.getElementById("textArea").value = tall1 + " er lik  " + tall2
    } else if (tall1 > tall2) {
        document.getElementById("textArea").value = tall1 + " er større enn " + tall2
    } else {
        document.getElementById("textArea").value = tall1 + " er mindre enn " + tall2
    }
})

// Oppgave 3

document.getElementById("palindromEllerIkke").addEventListener("click", function () {
    let ord = document.getElementById("ord").value
    if (ord.split("").reverse().join("") == ord) {
        document.getElementById("answer").value = "Palindrom!"
        document.getElementById("answer").style.backgroundColor = "green"
    } else {
        document.getElementById("answer").value = "Ikke Palindrom"
        document.getElementById("answer").style.backgroundColor = "red"
    }
})

// Oppgave 4

let red = 0
let blue = 0

document.getElementById("red").addEventListener
("click", function () {
    if (red == 0) {
        document.getElementById("div1").style.backgroundColor = "red"
        red = 1
    } else if (red == 1) {
        document.getElementById("div1").style.backgroundColor = "white"
        red = 0
    }
})

document.getElementById("blue").addEventListener
("click", function () {
    if (blue == 0) {
        document.getElementById("div2").style.backgroundColor = "blue"
        blue = 1
    } else if (blue == 1) {
        document.getElementById("div2").style.backgroundColor = "white"
        blue = 0
    }
})

document.getElementById("random").addEventListener
("click", function () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16)

    document.getElementById("div3").style.backgroundColor = `#${randomColor}`
})
