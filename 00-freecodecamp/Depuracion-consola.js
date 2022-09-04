// 
// typeof retorna  el tipo de datos que se utiliza 
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});

// Realizar una operacion de exponente
      // b --> base
      // e --> exponente
console.log(Math.pow(b = 2, e = 3));

//
function zeroArray(m, n) {
  // Crea un arreglo de 2 dimensiones con m filas y n columnas de ceros
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Agrega la fila número m a newArray

    for (let j = 0; j < n; j++) {
      // Inserta n ceros a la fila actual para crear las columnas
      row.push(0);
    }
    // Inserta la fila actual, que ahora contiene n ceros, al arreglo
    newArray.push(row);
    row = [];
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);