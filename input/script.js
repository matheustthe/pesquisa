var inputNumero = document.getElementById("numero")


function verificanumero(){
    var numero = parseFloat(inputNumero.value);
       


    if(numero > 0) {
        document.getElementById("resultado").textContent = "Numero positivo";
    } else if (numero < 0) {
        document.getElementById("resultado").textContent = "Numero é negativo";
    } else {
        document.getElementById("resultado").textContent = "Numero é zero";
    }
}



