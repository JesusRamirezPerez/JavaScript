function crearPersona(nombre, apellido){
  return {
    nombre: nombre,
    apellido: apellido,
  }
};

function crearPersona2(nombre, apellido){
  return {
    nombre,
    apellido,
  }
};

const crearPersona3 = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('jesus', 'ramirez');
const persona2 = crearPersona2('jesus', 'ramirez');
const persona3 = crearPersona3('jesus', 'ramirez');
console.log('funcion  1:', persona); 
console.log('funcion  2:', persona2); 
console.log('funcion  3:', persona3); 

function imprimeArgumentos() {
  console.log(arguments); 
}

const imprimeArgumentos2 = (edad, ...arrg) =>{
  // console.log({edad, arrg});
  return arrg;
}

imprimeArgumentos('jesus, ', 50, true, false, 'hola');
const argumentos = imprimeArgumentos2('jesus, ', 50, true, false, 'hola');
console.log({argumentos}); 