let operators = ["+", "-", "*", "/"];
let formule = document.getElementById("formule");
let result = document.getElementById("result");

function click_touch(value) {
    if (result.textContent.length > 0) {
        formule.value = "";

        if (operators.indexOf(value) != -1) {
            formule.value = result.textContent
        }
        result.textContent = "";
    }
    formule.value += value;
}

function egal() {
    let chiffre = formule.value;
    if (operators.indexOf(chiffre.charAt(chiffre.length -1)) !=-1) {
        formule.value = formule.value + eval(chiffre.substring(0, chiffre.length -1));
    }
    result.textContent = eval(formule.value);
}

function erase() {
    formule.value = "";
    result.textContent = "";
}

