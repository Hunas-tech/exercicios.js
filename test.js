const documentoIdentidade = {
nome: "Thiago",
sobrenome: "Hunas",
cpf: "444.555.111-88",
empresa: "SENAI103",
idade: 17,
};

console.log(documentoIdentidade.idade);
console.log(documentoIdentidade.nome);
console.log(documentoIdentidade['cpf']);

const investimentoMensal = [1000, 2000, 3000, 2000, 1500, 1200, 1300];
//const arrayDeStrings = ['string', 2];

//console.log(investimentoMensal);
console.log(`o valor investido no mes de janeiro e ${investimentoMensal}`)