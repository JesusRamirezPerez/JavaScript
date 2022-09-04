
// Problemas del uso de classes
// estos problemas fueron los primeros 
// para esto se realiza una clase tipo persona que se le asina a las variables declaradas

const jesus = {
  nombre: 'Jesus',
  edad: 26,
  imprimir() {
    console.log(`Nombre ${this.nombre} - edad: ${this.edad}`);
  }
}

const juan = {
  nombre: 'Juan',
  edad: 16,
  imprimir() {
    console.log(`Nombre ${this.nombre} - edad: ${this.edad}`);
  }
}

jesus.imprimir();
juan.imprimir();

function Persona ( nombre, edad){
  console.log('se ejecuto esta linea'); 

  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function() {
    console.log(`Nombre ${this.nombre} - edad: ${this.edad}`);
  }
}


// New crea una nueva instancia 'de' 
const maria = new Persona('maria', 18);
console.log({maria}); 
maria.imprimir();