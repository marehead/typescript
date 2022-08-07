const pessoa = {
    nome: 'Mariana',
    idade: 25,
    profissao: 'Advogada'
}

pessoa.idade=26;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 40,
    profissao: 'Desenvolvedor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 23,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Advogada
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 25,
    profissao: Profissao.Professora
}
const maria: Pessoa = {
    nome: 'maria',
    idade: 22,
    profissao: Profissao.Atriz
}

interface Estudante extends Pessoa {
    materias: string[]
}

const jessica: Estudante = {
    nome : 'Jessica',
    idade: 25,
    profissao: Profissao.Desenvolvedora,
    materias: ['MTM', 'Algoritmos', 'Filosofia']
}
const monica: Estudante = {
    nome : 'monica',
    idade: 25,
    // profissao: Profissao.Desenvolvedora,
    materias: ['MTM', 'Algoritmos', 'Filosofia']
}

function listar(lista: string []){
    for(const item of lista){
        console.log('- ', item);
        
    }
}

listar(monica.materias)