let btn = document.getElementById('btn1');
let input1 = document.getElementById('input-1') as HTMLInputElement;
let input2 = document.getElementById('input-2') as HTMLInputElement;


function somarNumeros(n1: number, n2: number, devePrintar: boolean, frase: string){
    let resultado = n1 + n2;
    if(devePrintar){
        console.log(frase + resultado);
    }
    return n1 + n2;
}

let devePrintar = true;
let frase = 'O valor é: ';


if(btn){
    btn.addEventListener('click', () =>{
        
       if(input1 && input2){
        console.log( somarNumeros(Number(input1.value),Number(input2.value),devePrintar, frase));
       }
       
    }) 
}

