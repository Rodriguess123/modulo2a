//funcao inverter onde ela "pega" o lugar do segundo valor e coloca o primeiro, assim invertendo a ordem
function inverter() {
    valores = document.getElementById('segundovalor').value
    document.getElementById('segundovalor').value = document.getElementById('primeirovalor').value;
    document.getElementById('primeirovalor').value = valores;
}