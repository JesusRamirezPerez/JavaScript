let juegos = ['Zelda', 'mario', 'metroid', 'chill'];
console.log('Largo; ', juegos.length);


let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1 ];
console.log(primero, ultimo);

juegos.forEach( (elemento, indice, arr) =>{
  console.log(elemento, indice, arr);
});


let nuevaLongitud = juegos.push('F-zero');
console.log(nuevaLongitud, juegos);   

let nuevaLongitudInicio = juegos.unshift('Ff-zero');
console.log(nuevaLongitudInicio, juegos);  

let ultimoElemento = juegos.pop();
console.log(ultimoElemento);

// borrar elemntos dependiendo de su posicion
let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 2);     // primer dato indice inicial y segundo dato indice final
console.log(juegosBorrados, juegos);


// como saber la posicion de un juego
let metroidIndex = juegos.indexOf('metroid');   // si regresa un valor "-1" signufica que no esta el dato
console.log(metroidIndex);

