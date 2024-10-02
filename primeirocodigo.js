var nome ='Thiago';
console.log (nome) ;


const variavelNumericaX = 10 ;
const variavelNumericaY = 20 ;


const resultadoMultiplicacao = variavelNumericaX + variavelNumericaY ;
console.log(resultadoMultiplicacao) ;


var idade= 17;
var maiorQue18 = idade>18
console.log(maiorQue18);


var a = 10;
var b = 20;
var c = 30;
var contaMedia =( a + b + c) /3;
console.log(contaMedia);


let preco = 170;
 preco += preco * 0.10;
console.log(preco);



let anoNascimento = 2007;
let anoAtual = 2024
let idade1 = anoAtual - anoNascimento;
console.log(idade);


const n =120;
const isPar = n % 2 === 0;
console.log(isPar);


let salario = 2000;
if(salario > 2000) {
    salario -= salario *0.10;
} else {
    salario += salario * 0.05;
}
console.log(salario)


const r = 5;
const pi = Math.PI
const perimetro = 2* pi * r;
console.log(perimetro)


const num1 = 90;
const num2 = 50;
const maior = num1>num2 ? num1 :num2;
console.log(maior);


var celsius = 45;
var result = (celsius * 9/5) +32
console.log(result)


let a1 = 5;
let b1 = 10;
a1 = a1 + b1
b1 = a1 - b1
a1 = a1 - b1
console.log(`a1: ${a1}, b1: ${b1}`);



let num =30;
if (num % 3 === 0 && num % 5 === 0) {console.log(num +`é divisível  por 3 e por 5.`);
}else{
    console.log(num + `não é divisível por 3 e por 5 ao mesmo tempo.`);
}

const numeroQueQueroRegistrar = 31472;
const stringTemplate = `O número que decidi registrar foi o ${numeroQueQueroRegistrar}`;

//console.log(stringTemplate) fará aparecer na tela o seguinte texto:
//O número que decidi registrar foi o 31472

const a = 10;
const b = 20;
const stringTemplate2 = `O resultado da soma é ${a+b}`;
console.log(stringTemplate2);

const name = 'TH';
const idade = 17;
const stringTemplate3= `Oi, meu nome é ${nome}! 
Minha idade é ${idade}`;
console.log(stringTemplate3);

const valor1= true;
const valor2= false;

const valor1EValor2 = valor1 && valor2;
const falor10Valor2 = valor1 || valor2;
const ineversoValor1 = !valor1;
const inverso2 = !valor2;

console;log(valor1EValor2);
//false
console.log(valor10UValor2);
//true
console.log(inversoValor1);
//false
console.log(inversoValor2);
//true