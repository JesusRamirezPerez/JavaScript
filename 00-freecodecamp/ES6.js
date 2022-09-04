/* ECMAScript, o ES, es una versión estandarizada de JavaScript.
Debido a que todos los principales navegadores siguen esta especificación,
los términos ECMAScript y JavaScript son intercambiables.

La mayoría del JavaScript que has aprendido hasta este punto estaba 
en ES5 (ECMAScript 5), el cual fue finalizado en 2009. Aunque puedes 
seguir escribiendo programas en ES5, JavaScript está evolucionando 
siempre, y cada año se lanzan nuevas funcionalidades.

ES6, lanzado en 2015, agrego muchas nuevas y potentes características al lenguaje.
En este curso, aprenderás estas nuevas características, incluyendo
let y const, funciones flecha, clases, promesas, y módulos. */

let miVariableLet = 0;                  //let se declara para funciones, bloques o bucles
var miVariableVar = 1;                  //var declara de forma global o local
const miVariableConst = [0,1,2,3];      //const declara una constante inmutable en forma
                                        //se pueden cambiar los datos de const asignando directo
//miVariableConst = [3,2,1,0];          //no se puede cambiar
//miVariableConst[1]=4;                 //se debe cambiar directo al dato

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);                     //freeze hace que los datos del objeto sean inmutables

//funciones flecha sirven para simplificar funciones sencillas
const multiplier = (item, multi) => item * multi;               //funcion flecha
const greeting1 = (name = "Anonymous") => "Hello " + name;       //funcion flecha parametros preestablecidos

//para evitar declarar todos los parametros se puede utilizar ress "...args"
function howMany(...args) {                                     //guarda en un arreglo los parametros
  return "You have passed " + args.length + " arguments.";
}

// argumento de propagcion "..." desempaqueta los datos de un arreglo
const miArray = [0,1,2,3,4];
console.log(miArray);                   //  [ 0, 1, 2, 3, 4 ] 
console.log(...miArray);                //  0 1 2 3 4

//Sintaxis de desestructuracion
const user = { name: 'John Doe', age: 34 };
//const name = user.name;               //recibe datos del arreglo
//const age = user.age;
const { name, age } = user;             //recibe los datos del arrglo de forma mas limpia
const { name: userName, age: userAge } = user;                   //Cmbia la variable de asignacion
console.log(userName);                  // "Jonh Doe"
console.log(userAge);                   // 34
//Objetos anidados sintaxis de desestructuracion
const user1 = {
  johnDoe: { 
    age1: 34,
    email1: 'johnDoe@freeCodeCamp.com'
  }
};
const { johnDoe: { age1, email1 }} = user1;
const { johnDoe: { age1: userAge1, email1: userEmail1 }} = user1;

//PLANTILLAS LITERALES
const person = {
  name: "Zodiac Hasbro",
  age: 56
};
//utiliza bricks para encerrar la cadena ``
// para colocar variables ${Variable}
//se muestra tal y como se escribe
const greeting = `Hello, my name is ${person.name}!             
I am ${person.age} years old.`;
console.log(greeting);  

//como colocar funciones en objetos
const person1 = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

//Se puede crear un objeto usando "class"  
                            
class SpaceShuttle {                                            //class declara una nueva funcion
  constructor(targetPlanet) {                                   //se añade un constructor a class
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');                        //new crea un nuevo objeto ejecuta el constructor       

/* Las funciones getter están destinadas a 
    simplemente devolver (get) el valor de la 
    variable privada de un objeto al usuario 
    sin que el usuario acceda directamente a la 
    variable privada.

Las funciones setter están destinadas a modificar (
    set) el valor de la variable privada de un objeto 
    basado en el valor pasado a la función setter. 
    Este cambio podría implicar cálculos, o incluso 
    sobrescribir completamente el valor anterior. */
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

// para colocar archivos javaScripth en HTML
//<script type="module" src="filename.js"></script>

//para exportar funciones o variables
export const miSuma =  (a, b) => {                      // Exporta una funcion
  return a + b;
}
const miVal = 0;
export {miVal, miSuma};                                    //exporta la funcion y una variable

// importar datos de varios documetos
import { add, subtract } from './math_functions.js';

//importa todo de un archivo y l guarda en un objeto
import * as nombreObjeto from './nombreArchivo.js';

// export default sirve para esportr un solo valor de una funcion
// ya sea una funcion anonima o declarada
export default function add(x, y) {
  return x + y;
}

/* Promise es una función constructora,
así que tu necesitas usar la palabra 
clave new para crear una. 

Recibe una función como su argumento, con dos parámetros: 
resolve y reject. Estos métodos se utilizan para determinar 
el resultado de la promesa. Su sintaxis se ve así: */
const myPromise = new Promise((resolve, reject) => {              // Promise es la funcion constructora
                                                                  // resolve => resultado
});                                                               // reject => accion

// const myPromise1 = new Promise((resolve, reject) => {          crea la promesa
//   if("condicion") {                                            condicion si la promesa se hace
//     resolve("Promise was fulfilled");                          si se resuelve la promesa
//   } else {
//     reject("Promise was rejected");                            si no se cumple la promesa
//   }
// });

// CUANDO SE CUMPLE LA PROMESA SE PUEDE UTILIZAR EL ELEMNTO THEN
// El método then, se ejecuta inmediatamente después de que tu promesa se cumple con resolve
myPromise.then(result => {
  // Accion cuando se cumple la promesa
});

// El método catch, se ejecuta inmediatamente después de que tu promesa se no se cumple pasa el parametro error
myPromise.catch(error => {
  // Accion cuando no se cumple la promesa
});