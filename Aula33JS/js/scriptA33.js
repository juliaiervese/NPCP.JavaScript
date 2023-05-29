//this
var teste = 5;

console.log(this);
console.log(this.teste);
console.log(teste);

let pessoa ={
    nome:'julia',
    idade: 19,
    falar: function() {
       console.log('olá, tudo bem?'); 
    },
    dizerNome: function() {
        console.log('o meu nome é ' + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return 'Sra ' + this.nome;   
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);

console.log(pessoa.saudacao());

var sdc = pessoa.saudacao();

console.log('olá ' + sdc);