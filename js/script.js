var nAleatorio = math.ceil(math.random()*10);


function adivinar() {
    const displayAdi = document.getElementById('displayAdi');
    const numeroInput = document.getElementById('numero');
    if ( !(isNaN((+numeroInput.value)) | (+numeroInput.value)<=0) ) {
        if ((+numeroInput.value) < nAleatorio) {
            displayAdi.innerHTML = "El número es mayor que "+(+numeroInput.value);
        }
        else if ((+numeroInput.value) > nAleatorio) {
            displayAdi.innerHTML = "El número es menor que "+(+numeroInput.value);
        }
        else {
            displayAdi.innerHTML="Número correcto! Felicidades!";
            nAleatorio = math.ceil(math.random()*10);
        }
        
    }
    else {
        displayAdi.innerHTML = "";
    }
    numeroInput.value="";
}

const displayCalc = document.getElementById('displayCalc');

function calcAdd(x) {
    displayCalc.value += x;
}

function calcAddFirst(x) {
    displayCalc.value = x+displayCalc.value;
}

function clr() {
    displayCalc.value = '';
}

function del() {
    displayCalc.value = displayCalc.value.slice(0, -1);
}

function calc() {
    displayCalc.value = math.evaluate(displayCalc.value);
}