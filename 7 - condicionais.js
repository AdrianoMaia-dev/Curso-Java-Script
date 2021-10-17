console.log("Trabalhando com condicionantes.");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 20;
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log("lista de destinos: ");
//console.log (salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1); // Removendo item
} else {
    console.log("Comprador menor de idade, não posso vender.");
}

console.log ("Embarque:  \n\n")
if(idadeComprador >=18 && temPassagemComprada == true) {
    console.log ("Boa viagem!")
}else{
    console.log ("Você não pode embarcar!")
}


console.log(listaDeDestinos);