//
// PRO TIP  TERNARIO
//

const elMayor = (a, b) => (a > b) ? a : b;
const tieneMembresia = (miembro) =>  (miembro) ? '2 dollares' : '10 dolares';

console.log(elMayor(20, 15));
console.log( tieneMembresia(false) );

const amigo = false;
const amigos = [
  'peter', 
  'tony', 
  'dr stange', 
  amigo ? 'thor' : 'loki',
  elMayor(10, 15),
];
console.log(amigos); 

// para mas de una condicion
const nota = 82.5; // evaluacion norteamericana a+ a-
const grado = (nota >= 95) ? 'a+' :
              (nota >= 90) ? 'a'  : 
              (nota >= 85) ? 'b+' :
              (nota >= 80) ? 'b'  :
              (nota >= 75) ? 'c+' :
              (nota >= 70) ? 'c'  : 'F';

console.log({nota, grado}); 