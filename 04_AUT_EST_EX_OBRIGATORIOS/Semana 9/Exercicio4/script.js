// função resultado que cria uma lista com a quantidade de números inseridos do html e pega o penúltimo e o último valor dessa lista/array(let ordem) e faz a soma. 
function Resultado() {
    let valor = Number(document.getElementById('numero').value)
    let ordem = [0, 1]

    // Quando o valor inserido for maior que a quantidade de elementos do array, ele para.
    while (ordem.length < valor) {
        // Variáveis para o último e penúltimo número do array.
        var somar1 = Number(ordem[ordem.length - 1])
        var somar2 = Number(ordem[ordem.length - 2])

        // let soma está somando o último e o penúltimo número do array. O resultado da soma vai para o final da lista e acaba sendo o último número, assim o cálculo continua.
        let soma = somar1 + somar2
        ordem.push(soma)
    }

    document.querySelector(".resposta").innerHTML = ordem;
}