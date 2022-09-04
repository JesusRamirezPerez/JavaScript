//
// Ciclos
//
// considerados falsos para while
    // undefined 
    // null
    // false
//


const carros = ['ford', 'masda', 'kia', 'nissan', 'toyota'];
let i = 0;

//-------------------------------------------------
console.warn('CICLO Whie');
// while( i < carros.length ) {
//   console.log(carros[i]); 
//   i ++;
// }

while( carros[i] ) {
  if (i === 1){
    //break;
    i++;
    continue;
  }
  console.log(carros[i]); 
  i ++;
}

//-------------------------------------------------
console.warn('do - while');

let j = 0;

do{
  console.log(carros[j]); 
  j++;
} while ( carros[j] );