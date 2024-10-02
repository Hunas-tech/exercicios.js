//exercicio - 1

let nome = "Thiago Hunas";
console.log(nome);

//exercicio - 2

let string1 = "teste";
let string2 = "teste";
if (string1 == string2) {
    console.log("As strings são iguais.");
} else {
    console.log("As strings são diferentes.");
}

//exercicio - 3

let numero = 29;
if (numero >10){
    console.log('o numero é maior que 10!');
} else {
    console.log('o numero nao é maior que 10!')
}

//exercicio - 4

let numero2 = 87;
if (numero2 >18){
    console.log('Parabéns');
} 

//exercicio - 5
let numero3 = 8;
if (numero3 >=16){
    console.log('Pode votar!Vote consciente!');
} else {
    console.log('Idade não suficiente para votar!')
}

//exercicio - 6

let numero4 = 51; 
if (numero4 >= 50 && numero4 <= 100) {
    console.log("o numero esta dentro ");
} else {
    console.log("O número esta fora ");
}


//exercio - 1

let nome1 ='Thiago Miranda Hunas';
let idade = 18;
if (idade >=18) {
    console.log(`$Thiago Miranda Hunas, eu sou maior de idade`);
} else {
    console.log(`Thiago Miranda Hunas, eu ainda nao sou maior de idade`);
}

//exercicio - 2

let num01 = 74
let num02 = 12

if(num01 > num02){
    console.log(num01)
}else
{console.log(num02)}

//exercicio - 3

let text1 = "Um grande salve os tricolores estao por ai, domingao tem jogo..."
if (text1.length > 5){
    console.log("é grande")
} else { console.log("é pequeno");

}

//exercicio - 4

let num = 17;
let par = num % 2 ===0;
console.log(par)

//exercicio - 5

let texto = " aprendendo JavaScript no senai Morvan Figueredo"
if (texto.includes("JavaScript") ) {
    console.log("a string tem a palavra 'JavaScript'.");
} else {
    console.log("a string nao tem a palavra 'JavaScript'.");
}

//exercicio - 6

let salario = 1000;
if(salario >2000) {
    console.log("seu salario esta acima de R$2000, Parabéns!!");
}else {
    console.log("seu salario esta abaixo de R$2000, por favor melhore");
}

//NIVEL DIFICIL

//exercicio - 1

let senha = "ThiagoTricolor@@@";
let senha1 = senha.length >= 8;
let senha2 = senha.includes (1,2,3,4,5,6,7,8,9,0);
console.log(senha1 && senha2);

//exercicio - 2 

let nota1= 4;
let nota2 = 5;
let nota3 = 10;

let mediaFinal =(nota1 + nota2 + nota3) /3;
if (mediaFinal >7) {
    console.log("Aprovado, Parabéns!!")
}else {
    console.log("Reprovado, estude mais da proxima!!")
}
    

//exercicio - 4

let num5 = 3;
let num6 = 4;
let num7 = 7;
if(num5> num6, num7){
    console.log("num5 é maior que o os outros")
}
else if (num5> num6, num7) {
    console.log("num6 é maior que o outros")
}
else if (num5> num6, num7) {
    console.log("num7 é maior que o outros")
}
else {
    console.log("sao iguais")
}