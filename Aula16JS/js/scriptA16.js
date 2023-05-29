// AND &&
var idade = 16;
var nome = "luisa"

if(nome == "luisa" && idade == 16) {
    console.log("a luisa pode ir para a aula");
} else {
    console.log("esta não é a luisa")
}

if (1 == 1 && 3 > 2 && true) {
    console.log("passou");
}

if ((1 == 1 && 3 > 3) && true) {
    console.log("passou");
} else if (nome === "luisa" && idade >= 14) {
    console.log("aqui passa!");
}
