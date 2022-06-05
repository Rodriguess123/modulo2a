//funcao para o periodo diurno 
function periododiurno() {
    //variavel do valor da passagem 
    var valorpassagem = 200;
    //valor da passagem sera descontada 40%(4/10) caso a quantidade de passagens ultrapasse 50
    if (document.getElementById('valor').value > 50) {
        document.querySelector(".pagamento").innerHTML = document.getElementById('valor').value * (valorpassagem * 4 / 10);
    }
    //se a quantidade de passagens for menor que 50, o desconto não é contabilizado
    else {
        document.querySelector(".pagamento").innerHTML = document.getElementById('valor').value * valorpassagem;
    }
}

//funcao para o periodo noturno
function periodonoturno() {
    //variavel do valor da passagem 
    var valorpassagem = 100;
    //valor da passagem sera descontada 20%(1/5) caso a quantidade de passagens ultrapasse 50
    if (document.getElementById('valor').value > 50) {
        document.querySelector(".pagamento").innerHTML = document.getElementById('valor').value * (valorpassagem * 1 / 5);
    }
    //se a quantidade de passagens for menor que 50, o desconto não é contabilizado
    else {
        document.querySelector(".pagamento").innerHTML = document.getElementById('valor').value * valorpassagem;
    }

}
