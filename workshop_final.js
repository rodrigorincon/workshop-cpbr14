
function somar(){
    var valor1 = Number(document.querySelector('#valor1').value);
    var valor2 = Number(document.querySelector('#valor2').value);

    var valorFinal = valor1 + valor2;
    imprimirResultado(valorFinal)
}

function subtrair(){
    var valor1 = Number(document.querySelector('#valor1').value);
    var valor2 = Number(document.querySelector('#valor2').value);

    var valorFinal = valor1 - valor2;
    imprimirResultado(valorFinal)
}

function multiplicar(){
    var valor1 = Number(document.querySelector('#valor1').value);
    var valor2 = Number(document.querySelector('#valor2').value);

    var valorFinal = valor1 * valor2;
    imprimirResultado(valorFinal)
}

function dividir(){
    var valor1 = Number(document.querySelector('#valor1').value);
    var valor2 = Number(document.querySelector('#valor2').value);

    var valorFinal;
    if(valor2 == 0){
        valorFinal = "Não posso dividir por zero"
    } 
    else {
        valorFinal = valor1 / valor2;
    }
    imprimirResultado(valorFinal)
}

function exponenciar(){
    var valor1 = Number(document.querySelector('#valor1').value);
    var valor2 = Number(document.querySelector('#valor2').value);

    valorFinal = 1;
    for(var contador = 1; contador <= valor2; contador = contador + 1){
        valorFinal = valorFinal * valor1;
    }
    imprimirResultado(valorFinal)
}


function imprimirResultado(valor){
    var tagResultado = document.querySelector('#resultado')
    var textoAntigo = tagResultado.childNodes[0];
    tagResultado.removeChild(textoAntigo);

    var textoASerAdicionado = document.createTextNode(valor);
    tagResultado.appendChild(textoASerAdicionado);
}

