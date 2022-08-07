/**
 * Quando tipamos podemos passar mais de um tipo, como no caso abaixo em que cada parâmetro contém o tipo input, que é igual aos tipos number ou string
 * No exemplo abaixo também ocorre um tratamento interno na função para que ela lide com os diferentes tipos de cada parâmetro
*/

// Também é possível criar tipos! E combinar tipos com esses tipos!
console.log('Combinando tipos');

type input = number | string;

function juntar(input1: input, input2: input) {
    let resultado: input;
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        resultado = input1.toString() + input2.toString();
    } else {
        resultado = input1 + input2
    }
    return resultado;
}

// E aqui temos dois exemplos de uma chamada para essa função, um com strings e um com números
console.log(juntar('bom ', 'dia'));
console.log(juntar(1, 2));

//tipar o retorno da funcao para GARANTIR o tipo do retorno
console.log('Retorno funcao tipado');

function subtrai(n1: number, n2: number) : number{
    return n1-n2;
}
console.log(subtrai(2,3));

//CALLBACK
console.log('Callback');

function somarETratarCallback(n1: number, n2: number, callback: (n: number) => number): number{
    let resultado = n1+n2;
    return callback(resultado);
}

function aoQuadrado(n: number): number{
    return n**2;
}

console.log(somarETratarCallback(1,4,aoQuadrado));

function dividirPorEleMesmo(n: number) : number{
    return n/n;
}

console.log(somarETratarCallback(43,43,dividirPorEleMesmo));
