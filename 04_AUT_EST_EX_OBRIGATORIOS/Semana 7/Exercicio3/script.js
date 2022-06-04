var numero = String(document.querySelector("#numero").value);
var sequencia = numero.split('');
function checar() {
    if (sequencia[0] == "(" && sequencia[3] == ")" && sequencia[9] == "-") {
        alert("Parabéns, número verificado.");
    } else {
        alert("Tente novamente! O formato não esta sendo respeitado.");
    }
}