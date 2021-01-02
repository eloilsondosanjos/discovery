// // Comentario em linha

// /* Comentário de bloco*/

// console.log("Bem vindos ao Discovery");

// // Criando uma variável

// let clima = "Quente"
// clima = "Frio"

// console.log(clima);

// // Criando um objeto

// const person = {
//   name: 'Eloilson',
//   age: 32,
//   weight: 96.500,
//   isAdmin: true
// }

// console.log(person.name);

// Criando um array de objeto

 const persons = [
  {
  name: 'Salomão',
  age: 63,
  weight: 62.500,
  },
  {
  name: 'Luíza',
  age: 60,
  weight: 82,
  },
  {
  name: 'Eloisa',
  age: 38,
  weight: 65.500,
  },
  {
  name: 'Eloíres',
  age: 34,
  weight: 36.500,
  },
  {
  name: 'Eloilson',
  age: 32,
  weight: 96.500,
  },
  {
  name: 'Maria',
  age: 29,
  weight: 89,
  },
  {
  name: 'Emilly',
  age: 9,
  weight: 30,
  },
  {
  name: 'Nicolas',
  age: 3,
  weight: 17,
  },
  {
  name: 'David',
  age: 0.4,
  weight: 8.500,
  }
]

//Toda função retorna alguma coisa


// //Função anonima com parametros
// const sum = function(number1, number2) {
//   const total = number1 + number2;
//   return total
// }

// //Execução com argumentos.
// sum(5, 6)
// sum(5, 60)
// sum(56, 6596)

// let number1 = 34
// let number2 = 25

// console.log(`o número 1 é ${number1}`);
// console.log(`o número 2 é ${number2}`);
// console.log(`a soma é ${sum(number1, number2)}`);

// //Função normal
// function personsDataResumo(personsData) {
//  const onlyNamesAgeWight = personsData.map(person => person = {
//     nome: person.name,
//     idade: person.age,
//     peso: person.weight
//   })

//   return onlyNamesAgeWight
// }

// function personsOlderAndYoungerThan18() {
//   const personsData = personsDataResumo(persons)

//   const personsGroupedByAge = personsData.reduce((personAcumulator, personArray) => {
//     const isGreaterOrSmaller = personArray.idade >= 18 ? 'maiores' : 'menores';

//     personAcumulator[isGreaterOrSmaller].push(personArray);

//     return personAcumulator
//   }, { maiores: [], menores: []})

//   return personsGroupedByAge;
// }

// console.log(personsOlderAndYoungerThan18());



// const idades = persons.map(person => person.age)

// function numeroDivisor(numeros) {
//   const divisorAutomatico = numeros.length

//   return divisorAutomatico
// }

// function sum(numeros) {
//   const total = Math.round(numeros.reduce((valorInicial, valorAtual) => valorInicial + valorAtual, 0))

//   return total
// }

// const resultado = sum(idades);


// function divisao(valorAdividir) {
//   const divisor = numeroDivisor(idades)

//   const resultDivisao = Math.round(valorAdividir / divisor)

//   return resultDivisao
// }

// console.log(resultado);
// console.log(divisao(resultado));


//Objetos o que é o como iteirar neles

// const person = {
//   posicao: 0,
//   get atual() {
//     return persons[this.posicao];
//   },
//   set atual(posicao) {
//     this.posicao = posicao;
//   },
//   proximo() {
//     ++this.posicao;
//   },
//   anterior() {
//     --this.posicao;
//   }
// }

// console.log(person.atual);
// person.proximo();

// console.log(person.atual);

// person.proximo();
// console.log(person.atual);

// person.anterior();
// console.log(person.atual);

// person.anterior();
// console.log(person.atual);

// const usuario = {
//   nome: 'Eloilson',
//   idade: 32
// }

// const competencias = {
//   linguagens: ['JavaScript', 'Go', 'SQL', 'HTML']
// }

// const hobbies = {
//   atividade: ['Música', 'Pescar', 'Soldar']
// }

// console.log(usuario);
// console.log(usuario.idade);

// const novoUsuario = {
//   ...usuario,
//   ...competencias,
//   ...hobbies
// }

// console.log(novoUsuario);

// const  { nome } = novoUsuario
// const {linguagens } = competencias
// const { atividade } = hobbies


// console.log([nome, linguagens, atividade]);

//This e seu escobo dinamico

// console.log(this);

// function Usuario() {
//   this.nome = 'Eloilson'
//   this.idade = 32
// }

// // Usuario();

// const novoUsuario = new Usuario()

// console.log(novoUsuario);

// Arrow functions

// const sum = (a, b) => {
//   return a + b
// }

const sum = (a, b) => a + b
console.log(sum(5, 5));

// Trabalhando com escopo

//Hoisting

// Map, Filter, Reduce

const numeros = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]

let numerosDobro = []

for (let i = 0; i < numeros.length; i++) {
  numerosDobro.push(numeros[i] * 2)
}

const numeroDobroMap = numeros.map(numero => numero * 2)
const multplo5Filter = numeros.filter(numero => numero % 2 === 0)
const totalReduce = numeros.reduce((numeroAcumulador, numeroCorrente) => numeroAcumulador + numeroCorrente, 0)

console.log(numeros);
console.log(numerosDobro);
console.log(numeroDobroMap);
console.log(multplo5Filter);
console.log(totalReduce);

const personsMenoresMaioresIdade = persons.reduce((valorAcumulador, valorCorrenteArray) => {
  const propMenorMaior = valorCorrenteArray.age >=18 ? 'maiores' : 'menores';

  valorAcumulador[propMenorMaior].push(valorCorrenteArray);

  return valorAcumulador;

}, { maiores:[], menores:[]})

console.log(personsMenoresMaioresIdade);