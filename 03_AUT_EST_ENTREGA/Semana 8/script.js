/* Função que faz uma requisição GET */
function TestGETDB(){
    var url = "http://127.0.0.1:3055/userinsert";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    
    $(getBanco).append("<br /><br />" + JSON.stringify(resposta));
}
