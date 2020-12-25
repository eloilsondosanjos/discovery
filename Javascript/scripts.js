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


//Função anonima com parametros
const sum = function(number1, number2) {
  const total = number1 + number2;
  return total
}

//Execução com argumentos.
sum(5, 6)
sum(5, 60)
sum(56, 6596)

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);

//Função normal
function personsDataResumo(personsData) {
 const onlyNamesAgeWight = personsData.map(person => person = {
    nome: person.name,
    idade: person.age,
    peso: person.weight
  })
  
  return onlyNamesAgeWight  
}

function personsOlderAndYoungerThan18() {
  const personsData = personsDataResumo(persons)
  
  const personsGroupedByAge = personsData.reduce((personAcumulator, personArray) => {
    const isGreaterOrSmaller = personArray.idade >= 18 ? 'maiores' : 'menores';
        
    personAcumulator[isGreaterOrSmaller].push(personArray);

    return personAcumulator
  }, { maiores: [], menores: []})

  return personsGroupedByAge;
}

console.log(personsOlderAndYoungerThan18());



