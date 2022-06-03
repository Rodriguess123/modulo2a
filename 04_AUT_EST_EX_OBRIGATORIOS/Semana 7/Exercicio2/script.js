function inverter() {
    valores = document.getElementById('segundovalor').value
    document.getElementById('segundovalor').value = document.getElementById('primeirovalor').value;
    document.getElementById('primeirovalor').value = valores;
}