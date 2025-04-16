
const display = document.getElementById('texto');

function agregar(x) {
    display.value += x;
}

function clr() {
    display.value = '';
}

function del() {
    display.value = display.value.substring(0, display.value.length - 1)
}

function calcular() {
    try {
        display.value = math.evaluate(display.value);
    } catch (e) {
        alert('No se puede calcular');
    }
}