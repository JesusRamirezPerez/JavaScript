//
// Erencia
//

class Persona {

  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + ' instancias';
  }
  static esteEsMetodoEstatico(){
    console.log('Hola a todos soy un metodo estatico'); 
  }

  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor ( nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase' ) {                    
    this.nombre = nombre;
    this.frase = frase;
    this.codigo = codigo;
    Persona._conteo ++;
  }

  set setComidaFavorita( comida ) {
    this.comida = comida.toUpperCase();
  }
 
  get getComidaFavorita() {
    return `L comida favorita de ${this.nombre} es ${this.comida}`;
  }

  esteEsUnMetodo(){
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`); 
  }

  miFrase (){
    this.esteEsUnMetodo();      
    console.log(`${this.codigo} dice que ${this.frase}`); 
  }

}

// Nueva clase hija de Persona
class Heroe extends Persona{
  clan = 'Sin Clan';

  constructor (nombre, codigo, frase){
    super(nombre, codigo, frase);          // Hace referencia al aclase que extiende ->  hace referencia al padre
    this.clan = ' Los avengers';          //  todos los this. van despues del superConstructor -> super ()
  }

  esteEsUnMetodo(){
    console.log(`Soy ${this.nombre}, y ${this.clan}`); 
    super.esteEsUnMetodo();
  }
}

const spiderman = new Heroe('peter', 'spiderman', 'yo mate al to ben'); 
console.log(spiderman); 

spiderman.esteEsUnMetodo();
