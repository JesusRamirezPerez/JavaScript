 let a = 10;

 if( a > 10 ){
  console.log('A es memor a 10'); 
}
console.log('Fin del programa'); 

const hoy = new Date();     //date obtiene la infoemacion del momento actual
console.log(hoy); 
let dia = hoy.getDay(); // 0:domingo, 1:lunes, 2:martes, ... 6:sabado

console.log({dia}); 

if (dia === 0){
   console.log('es domingo');
} else {
  console.log('no es domingo'); 
}

// ---------
dia = 30;
const superDias = [
  'domingo', 
  'lunes',
  'martes', 
  'miercoles', 
  'jueves', 
  'viernes', 
  'sabado',
];
console.log(superDias[dia] || 'dia no definido'); 