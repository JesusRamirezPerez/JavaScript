// Valores primitivos pasador directo a memoria del valor
// solo se modifica la memoria que se esta utilizando
let a = 10;
let b = a;

a = 30;

console.log({a, b});
console.log(a, b); 

// valores pasador por referencia
// si cambias uno se cambian todos
let juan = {
  nombre: 'juan', 
}
let ana = juan;
ana.nombre = 'Ana';
console.log({juan, ana}); 
// salida de consola
// {juan: {…}, ana: {…}}
// ana: {nombre: 'Ana'}
// juan: {nombre: 'Ana'}

// para elvitar esto se declara el nuevo objeto como un objeto del anterior
let juan2 = {
  nombre: 'juan2', 
}
let ana2 = {...juan};
ana2.nombre = 'Ana2';
console.log({juan2, ana2}); 
// Salida de consola
// ana2: {nombre: 'Ana2'}
// juan2: {nombre: 'juan2'}

 
const cambiaNombre = ({...persona}) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);
console.log({peter, tony}); 

// arreglos
// proplema de datos
const fruta = ['namzana', 'pera', 'piña'];
const otrasFruta = fruta;

otrasFruta.push('Mango');
console.table({fruta, otrasFruta});
// ┌────────────┬───────────┬────────┬────────┬─────────┐
// │  (index)   │     0     │   1    │   2    │    3    │
// ├────────────┼───────────┼────────┼────────┼─────────┤
// │   fruta    │ 'namzana' │ 'pera' │ 'piña' │ 'Mango' │
// │ otrasFruta │ 'namzana' │ 'pera' │ 'piña' │ 'Mango' │
// └────────────┴───────────┴────────┴────────┴─────────┘

// solucion de datos
const fruta2 = ['namzana', 'pera', 'piña'];
// const otrasFruta2 = [...fruta2];
// const otrasFruta2 = fruta2.slice();      // otra solucion


// -------------------------------------------
// pruebas de tiempo

console.time('slice');
const otrasFruta2 = fruta2.slice();      // otra solucion
console.timeEnd('slice');

console.time('spred');
const otrasFruta23 = [...fruta2];      // otra solucion
console.timeEnd('spred');

// -------------------------------------------
otrasFruta2.push('Mango');
console.table({fruta2, otrasFruta2});
// ┌─────────────┬───────────┬────────┬────────┬─────────┐
// │   (index)   │     0     │   1    │   2    │    3    │
// ├─────────────┼───────────┼────────┼────────┼─────────┤
// │   fruta2    │ 'namzana' │ 'pera' │ 'piña' │         │
// │ otrasFruta2 │ 'namzana' │ 'pera' │ 'piña' │ 'Mango' │
// └─────────────┴───────────┴────────┴────────┴─────────┘