//metodos de string 2
// toLowerCase e toUpperCase

var frase = 'Esta Frase Que Vamos Manipular';

var fraseCaixaAlta= frase.toUpperCase();

console.log(fraseCaixaAlta)

console.log(frase.toLowerCase());

// trim

var nome = '       julia   ';

var nomeTrim = nome.trim();
console.log(nome);
console.log(nome.trim());

// split

console.log(frase.split(' '));

var tags = 'PHP, Javascript, HTML, CSS';
console.log(tags.split(','));

// lastIndexOf

var fraseDois = 'Eu quero a ultima palavra teste dessa frase teste';
console.log(fraseDois.indexOf('teste'));
console.log(fraseDois.lastIndexOf('teste'));

