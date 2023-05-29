//FUNÇÕES
function primeiraFuncao() {

    console.log('hello world das funções')
}

primeiraFuncao();

function dizerNome(nome) {
    console.log("o nome é " + nome);
}
dizerNome('julia');
dizerNome('luisa');
dizerNome('sofia');

var nomeDoBancoDeDados = "carla";

dizerNome(nomeDoBancoDeDados);

function soma(a, b){
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);
console.log(soma);

var somaDois = soma(5, 5);
console.log(somaDois);

console.log(soma(4, 5));