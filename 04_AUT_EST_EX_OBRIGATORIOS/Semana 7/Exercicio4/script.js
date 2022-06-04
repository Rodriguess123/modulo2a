function periododiurno() {
    var valorpassagem = 200;
    if (document.getElementById('valor').value > 50) {
        document.querySelector(".pagamento").innerHTML = document.getElementById('valor').value * (valorpassagem * 4/10);
    }
    else {
        document.querySelector(".pagamento").innerHTML = document.getElementById('valor').value * valorpassagem;
    }
}


function periodonoturno() {
    var valorpassagem = 100;
    if (document.getElementById('valor').value > 50) {
        document.querySelector(".pagamento").innerHTML = document.getElementById('valor').value * (valorpassagem * 1/5);
    }
    else {
        document.querySelector(".pagamento").innerHTML = document.getElementById('valor').value * valorpassagem;
    }

}
