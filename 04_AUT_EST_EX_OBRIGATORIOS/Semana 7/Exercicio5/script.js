function exercicio5() {
    var input = document.getElementById('idDoInput').ariaValueMax

    var contagem = 0

    while (contagem <= input.lenght) {
        document.getElementById('idDaDivVazia').innerHTML = `
     <input type = 'text' id = notaProvaAluno${contagem}/>
     `
        document.getElementById('idDaDivVazia').innerHTML = `
     <input type = 'text' id = notaTrabalhoAluno${contagem}/>
     `
    }
}