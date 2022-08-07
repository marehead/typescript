//any e unknown

let anyEstaDeVolta : any;
anyEstaDeVolta= 2;
anyEstaDeVolta='a';
anyEstaDeVolta=[2,3,4];
anyEstaDeVolta= true;

let str: string = 'verificar';
str = anyEstaDeVolta; // permite


let unknownValor : unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai';

let str2: string = 'agora';
// str2 = unknownValor; // nao permite, da erro

if(typeof unknownValor === 'string'){
    str2 = unknownValor; // correta forma
}

//throw, never
function jogaErro(erro: string, codigo: number): never{
    throw{erro: erro, code: codigo}
}

jogaErro('deu erro', 500);