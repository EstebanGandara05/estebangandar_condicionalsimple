if (true) {
    basic.showNumber(input.temperature())
}
basic.forever(function () {
    if (input.temperature() == 10) {
        basic.showNumber(input.temperature())
        basic.showString("Mejor no salgas")
    }
    if (input.temperature() == 20) {
        basic.showNumber(input.temperature())
        basic.showString("¡Hágamos un picnic!")
    }
    if (input.temperature() == 30) {
        basic.showNumber(input.temperature())
        basic.showString("¡Vamos a la playa!")
    }
    if (input.temperature() == 40) {
        basic.showNumber(input.temperature())
        basic.showString("Mejor no salgas")
    } else {
        basic.showNumber(input.temperature())
    }
})
