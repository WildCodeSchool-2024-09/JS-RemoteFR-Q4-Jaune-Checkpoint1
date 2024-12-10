/*
Voici un exemple de tableau de personnes. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renverra un nouveau tableau,
lui-même contenant deux sous-tableaux :
- Le premier contient uniquement des devs web seniors
- Le second ne contient que des data analysts seniors
(Étant donné qu'une personne est senior si elle a 5 ans d'expérience ou plus)



*/

// const persons = [
//   { name: 'Mary', experience: 2, job: 'web dev' },
//   { name: 'Tony', experience: 6, job: 'data analyst' },
//   { name: 'John', experience: 2, job: 'data analyst' },
//   { name: 'Jane', experience: 6, job: 'web dev' },
//   { name: 'Maggie', experience: 2, job: 'web dev' },
//   { name: 'Leonardo', experience: 2, job: 'data analyst' },
//   { name: 'Carla', experience: 4, job: 'data analyst' },
//   { name: 'Mickael', experience: 7, job: 'web dev' },
//   { name: 'Penelope', experience: 7, job: 'web dev' },
//   { name: 'Homer', experience: 5, job: 'data analyst' },
//   { name: 'Leonardo', experience: 2, job: 'data analyst' },
//   { name: 'Carla', experience: 4, job: 'web dev' },
//   { name: 'Lisa', experience: 3, job: 'web dev' },
//   { name: 'Millie', experience: 5, job: 'data analyst' },
//   { name: 'Penelope', experience: 7, job: 'web dev' },
// ];

const persons = [
  { name: "Mary", experience: 8, job: "web dev" },
  { name: "Tony", experience: 6, job: "data analyst" },
  { name: "John", experience: 2, job: "data analyst" },
  { name: "Jane", experience: 6, job: "web dev" },
  { name: "Homer", experience: 5, job: "data analyst" },
  { name: "Leonardo", experience: 2, job: "web dev" },
  { name: "Carla", experience: 4, job: "data analyst" },
  { name: "Lisa", experience: 3, job: "data analyst" },
  { name: "Millie", experience: 5, job: "web dev" },
  { name: "Penelope", experience: 7, job: "data analyst" },
];

let seniors =[];
let devWeb =[];
let dataAnalyst =[];
let seniorsSplit =[];

function findSeniors(persons) {

  persons.forEach(person => {
    if (person.experience >=5){

      seniors.push(person);
    }
  });

  seniors.forEach(senior => {
    if (senior.job === "web dev"){

      devWeb.push(senior);
    }
    else if(senior.job === "data analyst"){
      dataAnalyst.push(senior);
    }
  });
   
  seniorsSplit =[devWeb,dataAnalyst];
 return seniorsSplit;
}

findSeniors(persons);

console.log(seniorsSplit);



module.exports = findSeniors;


// let invalidEntries = 0;

// function filterByID(item) {
//   if (Number.isFinite(item.id) && item.id !== 0) {
//     return true;
//   }
//   invalidEntries++;
//   return false;
// }

// const arrByID = arr.filter(filterByID);

// console.log("Filtered Array\n", arrByID);
// // Filtered Array
// // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

// console.log("Number of Invalid Entries =", invalidEntries);
// // Number of Invalid Entries = 5