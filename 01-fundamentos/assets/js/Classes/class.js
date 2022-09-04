
// Clasess para javaScript

// se usa UpperCamelCase
// Las clases siempre retornan un protopipo de objeto
class Persona {
  //'use stricy'    ya esta por defecto en las clases aunque no se pongan
  // Orden
        // propiedades y metodos estaticos
        // constructor
        // sets y gets
        // metodos
        // privados
  // los sets establecen los valores de una propiedad

  // Los metodos estaticos permiten utilizar dichos metodos 
  // y propiedades sin necesidad de instanciar la clase
  // Es como si la clase fuera un objeto
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + ' instancias';
  }
  static esteEsMetodoEstatico(){
    // console.log(this.nombre);         // no se puede instanciar a propiedades no estaticas
    console.log('Hola a todos soy un metodo estatico'); 
  }

  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor ( nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase' ) {                    // el constructor se ejecuta cuando se crea una nueva instancia de la clase
    // if (!nombre) throw Error('Nesecitamos un nombre')        // Marca en consola un error personalizado

    this.nombre = nombre;
    this.frase = frase;
    this.codigo = codigo;

    Persona._conteo ++;
  }

  // Creacion de set
  // Usualmente el set solo recive un argumento que es que se utiliza para establecerlo
  set setComidaFavorita( comida ) {
    this.comida = comida.toUpperCase();
  }
  // Creacion de un get
  // get recupera un valor
  get getComidaFavorita() {
    return `L comida favorita de ${this.nombre} es ${this.comida}`;
  }

  

  // Metodos van despues del constructor
  esteEsUnMetodo(){
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`); 
  }

  miFrase (){
    this.esteEsUnMetodo();      // se puede llamar metodos dentro de otros metodos
    console.log(`${this.codigo} dice que ${this.frase}`); 
  }

}

const pruebaUno = new Persona();
console.log(pruebaUno); 

const spiderman = new Persona('Peter Parker', 'spiderman', 'yo mate al tio ben');
const ironman = new Persona('Tony Stark', 'ironman', 'yo no mate al tio ben');
console.log(spiderman); 
console.log(ironman); 

// Ejecua el metodo 
spiderman.esteEsUnMetodo();     // Los metodos ocupan los () para ser ejecutado
ironman.miFrase();     // Los metodos ocupan los () para ser ejecutado

// Uso del set
spiderman.setComidaFavorita = 'El pastel del perro';
console.log(spiderman); 

// Uso del get
console.log(spiderman.getComidaFavorita); 

// Uso de la propiedad estatica
// Persona._conteo = 2;
console.log('conteo estatico ', Persona._conteo); 

// Uso dl get estatico
console.log(Persona.conteo); 

// Uso del etodo estatico
Persona.esteEsMetodoEstatico();

// Colocar una propiedad estatica externo
Persona.propiedadExterna = 'Hola mundo';
console.log(Persona); 
console.log(Persona.propiedadExterna); 