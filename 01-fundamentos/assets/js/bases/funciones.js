
// funciones 
// Centraliza la logica de un procedimiento que hacemos varias veses

function saludar() {
  console.log('Hola mundo');
};
saludar();

// 2do Metodo de declarar funciones
// FUNCION ANONIMA
const saludar2 = function () {
  console.log('Hola mundo');
};
saludar2();

// ARGUMENTOS
// las funciones explicitar tienen un objeto 
// ya definido llamado "arguments"
function saludar3(nombre) {
  console.log(arguments); 
  console.log('Hola ' + nombre);
};
saludar3('Jesus', 40, true, 'Costa Rica');

// Funciones de flecha o landa funcions
const saludarFlecha = ( nombree ) => {
  console.log('esta es una funcion flecha'); 
  console.log('este es mi nombre: ', nombree); 
}
saludarFlecha('don shuy');

// -----------------------------------
function sumar (a, b){
  return a + b;
};

const sumar2 = (a, b) =>{
  return a + b;
}

const sumar3 = (a, b) => a + b;

console.log('funcion  1:', sumar(10,50)); 
console.log('funcion  2:', sumar2(10,50)); 
console.log('funcion  3:', sumar3(10,50)); 
// -----------------------------------

// -----------------------------------
function getAleatorio() {
  return Math.random();
};

const getAleatorio2 = () => Math.random();

console.log(getAleatorio()); 
console.log(getAleatorio2()); 