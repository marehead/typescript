//any = má pratica

let valorAny: any;

valorAny = 3;
valorAny = 'aaa';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;

let valorStr2 = 'testao';
valorStr2 = valorAny;


function somarStrings(str1: string, str2: string){
    console.log(str1 + str2);
}

somarStrings(valorString,valorStr2);