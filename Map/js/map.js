let b = [0, 1, 2, 3, 4];

let novoB = b.map((i, e) => {
    return e * 2;
})
console.log(novoB);

// filter

var terceiroB = novoB.filter(function(menorQue5) {
    return menorQue5 < 5;
});

console.log(terceiroB);