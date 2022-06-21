function Resultado() {
    numero = document.getElementById('numero').value;

    //array com os dígitos do input:
    arr = numero.split("");
    if (

        //array que retorna o resto da divisão de dois numeros. Se n % 2 der resto zero(0), o número/dígito é par.
        arr[0] % 2 == 0
    ) {
        document.querySelector(".resposta").innerHTML = "O dígito é par"
    }
    else {
        document.querySelector(".resposta").innerHTML = "O digito é ímpar"
    }
}
