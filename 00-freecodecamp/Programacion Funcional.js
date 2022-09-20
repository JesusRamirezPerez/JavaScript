// 
// La programación funcional es otro enfoque común en el desarrollo de software.
// En programación funcional, el código está organizado en funciones más pequeñas
// y básicas que se pueden combinar para construir programas de mayor complejidad.
// 
// En este curso, aprenderás los conceptos básicos de programación funcional
// incluyendo funciones puras, cómo evitar mutaciones, y cómo escribir código más
// limpio con métodos como .map() y .filter().
// 
// La programación funcional se refiere a:

//         Funciones aisladas:
//              sin dependencia alguna del estado del programa, 
//              el cual incluye variables globales sujetas a cambios

//         Funciones puras: 
//              una misma entrada siempre da la misma salida

//         Funciones con efectos secundarios limitados:
//              cualquier cambio o mutación en el estado del programa
//              fuera de la función son cuidadosamente controlado

// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(bookName) {
  let atm = bookList.slice(0,bookList.length)
  atm.push(bookName);
  return atm;

  // Cambia el código encima de esta línea
}
console.log(bookList)
console.log(add('holas'))