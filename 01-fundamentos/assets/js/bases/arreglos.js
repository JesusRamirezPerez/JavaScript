// creacion de arreglos

const arr = new Array(10);    // crea un arreglo vacio de 10 elemtos
console.log(arr);

let videoJuegos = [ 'Mario 3', 'megaman', 'chamo' ];
console.log({videoJuegos});       //imprime un arreglo lineal
console.log(videoJuegos[0]);      // muestra solo el primer valor del arreglo

let arregloCosas = [
  true,                                   // booleano
  123,                                    // number
  'fernando',                             // string
  1 + 2,                                  // operadores
  function(){},                           // funcion traducional
  ()=>{},                                 // funcion flecha
  {a: 1},                                 // objeto literal
  ['x', 'megaman', 'zero', 'Dr ligth'],   // arreglo
];
console.log(arregloCosas);                // imprime todo el erreglo
console.log(arregloCosas[7][3]);          // imprime solo dr ligth
