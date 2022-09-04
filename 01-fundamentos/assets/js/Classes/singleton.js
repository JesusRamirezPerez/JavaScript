//
// Singleton
//    esto es uns instancia unica de la clase

class SingletonClass {

  static instancia;

  nombre = '';

  constructor( nombre = '' ){

    if(!!SingletonClass.instancia){
      return SingletonClass.instancia;
    }

    SingletonClass.instancia = this;
    this.nombre = nombre;
  }

}

const instancia1 = new SingletonClass('Jesus');
const instancia2 = new SingletonClass('Spiderman');
const instancia3 = new SingletonClass('Black negro');

console.log(`Nombre en la instancia1 es ${instancia1.nombre}`); 
console.log(`Nombre en la instancia2 es ${instancia2.nombre}`); 
console.log(`Nombre en la instancia3 es ${instancia3.nombre}`); 