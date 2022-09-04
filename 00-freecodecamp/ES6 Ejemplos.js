/*
se utiliza la siguiente funcion que regresa un arreglo
con una cadena especial
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/

/*const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Cambia solo el código debajo de esta línea
  const failureItems = [];
  for (let i = 0; i < arr.length; i++){
    failureItems[i]=`<li class="text-warning">${arr[i]}</li>`;
  }
  // Cambia solo el código encima de esta líne
  return failureItems;
}
const failuresList = makeList(result.failure);*/



// class SpaceShuttle {                                            //class declara una nueva funcion
//   constructor(targetPlanet) {                                   //se añade un constructor a class
//     this.targetPlanet = targetPlanet;
//   }
// }
// const zeus = new SpaceShuttle('Jupiter'); 
// console.log(zeus) ;
// const zeus1 = new SpaceShuttle('Jupiters'); 
// console.log(SpaceShuttle) ;


class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
console.log(Book);

// Cambia solo el código debajo de esta línea
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Cambia solo el código encima de esta línea

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius