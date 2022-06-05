//variavel que pega o numero que foi inserido no campo no html
var numero = String(document.querySelector("#numero").value);
//variavel sequencia que guarda a sequencia certa que o numero deve seguir
var sequencia = numero.split('');

//funcao checar para que seja notificado caso não é seguido o formato (não deu certo)
//no if tem a sequencia que seria para que o formato seja seguido
//já no else, caso a sequencia esteja errada, vai enviar uma notificação quando o botão for clicado
function checar() {
    if (sequencia[0] == "(" && sequencia[3] == ")" && sequencia[9] == "-") {
        alert("Parabéns, número verificado.");
    } else {
        alert("Tente novamente! O formato não esta sendo respeitado.");
    }
}