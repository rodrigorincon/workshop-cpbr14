
function somar(){
    var valor1 = Number(document.querySelector('#valor1').value);
    var valor2 = Number(document.querySelector('#valor2').value);

    var valorFinal = valor1 + valor2;
    mostrarResultado(valorFinal)
}

function subtrair(){
    var valor1 = Number(document.querySelector('#valor1').value);
    var valor2 = Number(document.querySelector('#valor2').value);

    var valorFinal = valor1 - valor2;
    mostrarResultado(valorFinal)
}

function multiplicar(){
    var valor1 = Number(document.querySelector('#valor1').value);
    var valor2 = Number(document.querySelector('#valor2').value);

    var valorFinal = valor1 * valor2;
    mostrarResultado(valorFinal)
}

function dividir(){
    var valor1 = Number(document.querySelector('#valor1').value);
    var valor2 = Number(document.querySelector('#valor2').value);

    var valorFinal;
    if(valor2 == 0){
        valorFinal = "Nao posso dividir por zero"
    } 
    else {
        valorFinal = valor1 / valor2;
    }
    mostrarResultado(valorFinal)
}

function exponenciar(){
    var valor1 = Number(document.querySelector('#valor1').value);
    var valor2 = Number(document.querySelector('#valor2').value);

    var valorFinal = 1;
    for(var contador = 1; contador <= valor2; contador = contador + 1){
        valorFinal = valorFinal * valor1;
    }
    mostrarResultado(valorFinal)
}


function mostrarResultado(valorFinal){
    var tagResultado = document.querySelector('#resultado')
    tagResultado.removeChild(tagResultado.childNodes[0])

    var textoASerAdicionado = document.createTextNode(valorFinal);
    tagResultado.appendChild(textoASerAdicionado);
}

