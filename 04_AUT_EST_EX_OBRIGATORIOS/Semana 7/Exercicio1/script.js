var valor = 0 //Variável do valor que será inserido (quantidade do produto)

//funcao para salvar o valor inserido 
function salvar() {
   valor = document.getElementById("valor").value;   
}

//funcao para subtrair 1 unidade após o valor ser salvo pela funcao salvar
function subtracao() {
    valor = parseInt(valor) - parseInt(1);
    document.querySelector(".resultado").innerHTML = valor;
} 

//funcao para adicionar 1 unidade após o valor ser salvo pela funcao salvar
function soma() {
   valor = parseInt(valor) + parseInt(1);
   document.querySelector(".resultado").innerHTML = valor;
}

