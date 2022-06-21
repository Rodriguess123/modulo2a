// função que pega cada elemento pelo Id no HTML e faz uma lista com eles para serem usados no método sort
function Resultado() {
    nome1 = document.getElementById('nome1').value;
    nome2 = document.getElementById('nome2').value;
    nome3 = document.getElementById('nome3').value;

    // array com os elementos (nomes) que serão classificados no método abaixo
    const arr = [nome1, nome2, nome3];
    // o método sort() classifica os elementos do array em ordem crescente
    const sorted = arr.sort((nome1, nome2) => {
        return nome1.localeCompare(nome2);
    }
    );
    document.querySelector(".resposta").innerHTML = sorted;
}