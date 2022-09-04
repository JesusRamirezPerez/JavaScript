//
//  caracteridticas futuras :D
//

class Rectangulo {

  //propiedad privada no se puede acceder directamente a ella
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.#area = base * altura;
  }
}

const rectangulo = new Rectangulo (10,15);
// rectangulo.#area = 100;      // Al ser una propiedad privada esto marca error

console.log(rectangulo); 