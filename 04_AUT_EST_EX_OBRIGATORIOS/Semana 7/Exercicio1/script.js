var valor = 0
function salvar() {
   valor = document.getElementById("valor").value;   
}

function subtracao() {
    valor = parseInt(valor) - parseInt(1);
    document.querySelector(".resultado").innerHTML = valor;
} 

function soma() {
   valor = parseInt(valor) + parseInt(1);
   document.querySelector(".resultado").innerHTML = valor;
}

