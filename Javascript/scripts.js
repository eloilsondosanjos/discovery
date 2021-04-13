// // // Comentario em linha

// // /* Comentário de bloco*/

// // console.log("Bem vindos ao Discovery");

// // // Criando uma variável

// // let clima = "Quente"
// // clima = "Frio"

// // console.log(clima);

// // // Criando um objeto

// // const person = {
// //   name: 'Eloilson',
// //   age: 32,
// //   weight: 96.500,
// //   isAdmin: true
// // }

// // console.log(person.name);

// // Criando um array de objeto

//  const persons = [
//   {
//   name: 'Salomão',
//   age: 63,
//   weight: 62.500,
//   },
//   {
//   name: 'Luíza',
//   age: 60,
//   weight: 82,
//   },
//   {
//   name: 'Eloisa',
//   age: 38,
//   weight: 65.500,
//   },
//   {
//   name: 'Eloíres',
//   age: 34,
//   weight: 36.500,
//   },
//   {
//   name: 'Eloilson',
//   age: 32,
//   weight: 96.500,
//   },
//   {
//   name: 'Maria',
//   age: 29,
//   weight: 89,
//   },
//   {
//   name: 'Emilly',
//   age: 9,
//   weight: 30,
//   },
//   {
//   name: 'Nicolas',
//   age: 3,
//   weight: 17,
//   },
//   {
//   name: 'David',
//   age: 0.4,
//   weight: 8.500,
//   }
// ]

// //Toda função retorna alguma coisa


// // //Função anonima com parametros
// // const sum = function(number1, number2) {
// //   const total = number1 + number2;
// //   return total
// // }

// // //Execução com argumentos.
// // sum(5, 6)
// // sum(5, 60)
// // sum(56, 6596)

// // let number1 = 34
// // let number2 = 25

// // console.log(`o número 1 é ${number1}`);
// // console.log(`o número 2 é ${number2}`);
// // console.log(`a soma é ${sum(number1, number2)}`);

// // //Função normal
// // function personsDataResumo(personsData) {
// //  const onlyNamesAgeWight = personsData.map(person => person = {
// //     nome: person.name,
// //     idade: person.age,
// //     peso: person.weight
// //   })

// //   return onlyNamesAgeWight
// // }

// // function personsOlderAndYoungerThan18() {
// //   const personsData = personsDataResumo(persons)

// //   const personsGroupedByAge = personsData.reduce((personAcumulator, personArray) => {
// //     const isGreaterOrSmaller = personArray.idade >= 18 ? 'maiores' : 'menores';

// //     personAcumulator[isGreaterOrSmaller].push(personArray);

// //     return personAcumulator
// //   }, { maiores: [], menores: []})

// //   return personsGroupedByAge;
// // }

// // console.log(personsOlderAndYoungerThan18());



// // const idades = persons.map(person => person.age)

// // function numeroDivisor(numeros) {
// //   const divisorAutomatico = numeros.length

// //   return divisorAutomatico
// // }

// // function sum(numeros) {
// //   const total = Math.round(numeros.reduce((valorInicial, valorAtual) => valorInicial + valorAtual, 0))

// //   return total
// // }

// // const resultado = sum(idades);


// // function divisao(valorAdividir) {
// //   const divisor = numeroDivisor(idades)

// //   const resultDivisao = Math.round(valorAdividir / divisor)

// //   return resultDivisao
// // }

// // console.log(resultado);
// // console.log(divisao(resultado));


// //Objetos o que é o como iteirar neles

// // const person = {
// //   posicao: 0,
// //   get atual() {
// //     return persons[this.posicao];
// //   },
// //   set atual(posicao) {
// //     this.posicao = posicao;
// //   },
// //   proximo() {
// //     ++this.posicao;
// //   },
// //   anterior() {
// //     --this.posicao;
// //   }
// // }

// // console.log(person.atual);
// // person.proximo();

// // console.log(person.atual);

// // person.proximo();
// // console.log(person.atual);

// // person.anterior();
// // console.log(person.atual);

// // person.anterior();
// // console.log(person.atual);

// // const usuario = {
// //   nome: 'Eloilson',
// //   idade: 32
// // }

// // const competencias = {
// //   linguagens: ['JavaScript', 'Go', 'SQL', 'HTML']
// // }

// // const hobbies = {
// //   atividade: ['Música', 'Pescar', 'Soldar']
// // }

// // console.log(usuario);
// // console.log(usuario.idade);

// // const novoUsuario = {
// //   ...usuario,
// //   ...competencias,
// //   ...hobbies
// // }

// // console.log(novoUsuario);

// // const  { nome } = novoUsuario
// // const {linguagens } = competencias
// // const { atividade } = hobbies


// // console.log([nome, linguagens, atividade]);

// //This e seu escobo dinamico

// // console.log(this);

// // function Usuario() {
// //   this.nome = 'Eloilson'
// //   this.idade = 32
// // }

// // // Usuario();

// // const novoUsuario = new Usuario()

// // console.log(novoUsuario);

// // Arrow functions

// // const sum = (a, b) => {
// //   return a + b
// // }

// const sum = (a, b) => a + b
// console.log(sum(5, 5));

// // Trabalhando com escopo

// //Hoisting

// // Map, Filter, Reduce

// const numeros = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]

// let numerosDobro = []

// for (let i = 0; i < numeros.length; i++) {
//   numerosDobro.push(numeros[i] * 2)
// }

// const numeroDobroMap = numeros.map(numero => numero * 2)
// const multplo5Filter = numeros.filter(numero => numero % 2 === 0)
// const totalReduce = numeros.reduce((numeroAcumulador, numeroCorrente) => numeroAcumulador + numeroCorrente, 0)

// console.log(numeros);
// console.log(numerosDobro);
// console.log(numeroDobroMap);
// console.log(multplo5Filter);
// console.log(totalReduce);

// const personsMenoresMaioresIdade = persons.reduce((valorAcumulador, valorCorrenteArray) => {
//   const propMenorMaior = valorCorrenteArray.age >=18 ? 'maiores' : 'menores';

//   valorAcumulador[propMenorMaior].push(valorCorrenteArray);

//   return valorAcumulador;

// }, { maiores:[], menores:[]})

// console.log(personsMenoresMaioresIdade);

// Manipulando Arrays
let techs = ["html", "css", "js"]

// Adicionar um item no fim
techs.push("nodejs");

// Adicionar um item no começo
techs = ["sql",...techs];

// // Remover item do fim
// techs.pop()

// // Remover item do começo
// techs.shift()

// // Pegar apenas alguns elementos do Array
// console.log(techs.slice(0, 2));

// // Remover 1 ou mais itens em qualquer posição do Array
// techs.splice(0, 4)

// Encontrar a posição de um elemento no array

// let index = techs.indexOf("js")
// techs.splice(index, 1)

// console.log(techs);

// // Unico caso que o ponto e vírgula é obrigatório
// let number = 1;

// (function () {
//   console.log('Eu sou a lenda');
// }())

// Praticar para aperfeiçoar

// // Sistema de notas escolares

// function getScore(score) {
//   let scoreA = score >= 90 && score <= 100
//   let scoreB = score >= 80 && score <= 89
//   let scoreC = score >= 70 && score <= 79
//   let scoreD = score >= 60 && score <= 69
//   let scoreF = score >= 0 && score <= 59

//   let scoreFinal;

//   if (scoreA) {
//     scoreFinal = 'A';
//   } else if (scoreB) {
//     scoreFinal = 'B';
//   } else if (scoreC) {
//     scoreFinal = 'C';
//   } else if (scoreD) {
//     scoreFinal = 'D';
//   } else if (scoreF) {
//     scoreFinal = 'F';
//   } else {
//     scoreFinal = "Nota inválida";
//   }

//   return scoreFinal;
// }

// console.log(getScore(0))
// console.log(getScore(-1))
// console.log(getScore(10))
// console.log(getScore(45))
// console.log(getScore(50))
// console.log(getScore(55))
// console.log(getScore(65))
// console.log(getScore(75))
// console.log(getScore(85))
// console.log(getScore(95))
// console.log(getScore(100))

// // Fluxo de caixa familiar

// let family = {
//   incomes: [2310, 1100, 102.50],
//   expenses: [230, 318.54, 112.80, 45, 80]
// }

// function sum(array) {
//   let total = array.reduce((sum, value) => sum + value, 0)

//   return total
// }

// function calculateBalance() {
//   const calculateIncomes = sum(family.incomes);
//   const calculateExpenses = sum(family.expenses);

//   const total = calculateIncomes - calculateExpenses;

//   const itsOk = total >= 0;

//   let balanceText = "negativo"

//   if(itsOk) {
//     balanceText = "positivo"
//   }

//   console.log(`Total de suas receitas: R$ ${String(calculateIncomes.toFixed(2)).replace(".", ",")}`);
//   console.log(`Total de suas despesas: R$ ${String(calculateExpenses.toFixed(2)).replace(".", ",")}`);
//   console.log(`Seu saldo é ${balanceText}: R$ ${String(total.toFixed(2)).replace(".", ",")}`);
// }

// calculateBalance()

// //Celsius em Fahrenheit vice-versa

// // C = (F-32) * 5/9
// // F = C * 9/5 + 32

// function celsiusToFahrenheitViceVersa(valueToConvert) {
//   const celsius = valueToConvert.toUpperCase().includes('C');
//   const fahrenheit = valueToConvert.toUpperCase().includes('F');
 
//   // Fluxo de error
//   if(!celsius && !fahrenheit) {
//     throw new Error('Valor inválido, digite o valor a converter seguido de F ou C Ex: 50F ou 50C');
//   } 

//   // Fluxo de padrão, F -> C
//   let updatedValueToConvert = Number(valueToConvert.toUpperCase().replace('F', ""))
//   let conversionFormula = fahrenheit => (fahrenheit - 32) * 5/9;
//   let unitOfMeasurement = 'C'

//   // Fluxo de secundário C -> F
//   if(celsius) {
//     updatedValueToConvert = Number(valueToConvert.toUpperCase().replace('C', ""))
//     conversionFormula = celsius => celsius * 9/5 + 32;
//     unitOfMeasurement = 'F'
//   }

//   return conversionFormula(updatedValueToConvert) + unitOfMeasurement
// }

// try {
//   console.log(celsiusToFahrenheitViceVersa('-40C'));
//   console.log(celsiusToFahrenheitViceVersa('-40F'));
// } catch (error) {
//   console.log(error);
// }

// Buscando e contando dados em Array

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker"
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason"
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter"
      },

    ]
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury"
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury"
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ]
  }
];


  // Baseado no Array de Livros por Categoria acima, faça os seguintes desafios:

  //  1 - Contar o número de categorias e o número de livros em cada categoria
    
  // Total de categorias:
  // const totalCategories = booksByCategory.length;
  // console.log(`Total de categorias: `,totalCategories);

  // Total de livros em cada categoria:
  // Usando apenas map

  // for(let category of booksByCategory) {
  //   console.log(`Total de livro da categoria: `, category.category);
  //   console.log(category.books.length);
  // } 

  // Usando apenas map

  // const totalBooksByCategory = booksByCategory.map(item => {
  //   return {category: item.category, total: item.books.length}
  // });

  // Usando map e reduce
  // const totalBooksByCategory = booksByCategory.map(item => {
  //   return {category: item.category, total: item.books.length}
  // }).reduce((prevValue, currValue) => {
  //   prevValue.categorys.push(currValue);
  //   return {
  //     totalBooks: booksByCategory.length,
  //     categorys: prevValue.categorys
  //   }
  // }, {totalBooks: 0, categorys: []});

  // console.log(totalBooksByCategory);


  //  2 - Contar o número de autores
// const countAuthors = () => {
//   let authors = []

//   for (let category of booksByCategory) {
//     for (let book of category.books) {
//       if (authors.indexOf(book.author) === -1) {
//         authors.push(book.author)
//       }
//     }
//   }

//   console.log("Total de autores: ", authors.length);
// }

//   countAuthors()

  //  3 - Mostrar livros do autor Augusto Cury

// const booksOfAuthorAugustoCury = () => {
//   let books = []

//   for (let category of booksByCategory) {
//     for (let book of category.books) {
//       if (book.author === "Augusto Cury") {
//         books.push(book.title)
//       }
//     }
//   }

//   console.log(`Livro do autor Augusto Cury: `, books);
// }

// booksOfAuthorAugustoCury()

  //  4 - Transformar a função acima em uma função que irá recebero nome autor e 
  //    devolver os livros desse autor.

  
const booksOfAuthor = (author) => {
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Livro do autor: ${author}: ${books.join(", ")}`);
}

booksOfAuthor('Augusto Cury')




