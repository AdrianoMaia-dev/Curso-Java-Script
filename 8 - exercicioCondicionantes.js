console.log("Cinema.");
const usuarioEstudante = true;
const temCarteirinha = true;
const listaDeFilmes = new Array(
    `Vingadores`,
    `Batman`,
    `Super Man`,
    `Flash`,
)
console.log(listaDeFilmes);
console.log("Qual filme deseja escolher? " + listaDeFilmes[2]);

if (usuarioEstudante == true && temCarteirinha == true) {
    console.log("O valor do ingresso é R$ 15,00.")
    console.log("Bom filme!")
} else if (usuarioEstudante == false || temCarteirinha == false) {
    console.log("O valor do ingresso é R$ 30,00.")
    console.log("Bom Filme!")
}
