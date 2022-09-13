const arr = [0,1,2,3];

// Agrega una dato al final de un arreglo .push
arr.push(4);

// Agrega un dato al inicio de un arreglo .unshift
arr.unshift(00);

// Saca el ultimo dato de un arreglo .pop()
console.log(  arr.pop()  );

// Saca el primer dat de un arreglo .shift()
console.log(  arr.shift()  );

// Inserta un elemento en algun indice asi como elimina elementos
//        arr.splice(start, delete, datos);
//                    start   -> indice desde el cual se inicia
//                    delete  -> Cantidad de indices a eliminar
//                    datos   -> Datoa a insertar en el arreglo a partir de start
arr.splice(2,1,'Nuevo');      // a partir del indice 2 elimina un dato e inserta 'nuevo'

// Crea una copia de los datos de un arreglo
//        arr.slice(start, end);
//                    start   -> indice desde el cual se inicia
//                    delete  -> Final de la copia exepto el ultimo
console.log(  arr.slice(2,4)  );              // Crea una copia del indice 2 hasta el indice 3

// Se puede utilizar el operador ... para copiar un array
const nuevoArr = [...arr];
console.log(  arr  );
console.log(  nuevoArr  );

// Para buscar una dato en un arreglo se usa .indexof
//        arr.indexOf(dato);
//                    dato   -> Dato a buscar en el arreglo si no existe devuelve -1
console.log(  arr.indexOf('Nuevo')  );



arr.Object.keys()
Map
set
