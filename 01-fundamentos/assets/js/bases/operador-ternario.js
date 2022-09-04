
// dias de la semana abrimos a las 11
// pero los fines de semna abrimos a las 9

// entra a un sitio web para consultar si esta abierto hoy
const dia = 6;
const horaActual = 7;

let horaApertura;
let mensaje; //esta abierto || hoy abrimos a las xxxx

// if (dia === 0 || dia === 6){
// if ( [0,6].includes(dia) ){         // includes pregunta se exixte un dato e el arreglo
//   console.log('fin de semana'); 
//   horaApertura = 9;
// } else {
//   console.log('dias de la semana'); 
//   horaApertura = 11;
// }

// OPERACION TERNARIA 
horaApertura = ([0,6].includes(dia)) ? 9 : 11;



// if (horaActual >= horaApertura){
//   mensaje ='Esta abierto'; 
// } else {
//   mensaje = `Esta cerrado hoy abrimos a las ${horaApertura}`;    // concatenacion de scripts
// }

// OPERACION TERNARIA
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado hoy abrimos a las ${horaApertura}`;


console.log({horaApertura, mensaje}); 