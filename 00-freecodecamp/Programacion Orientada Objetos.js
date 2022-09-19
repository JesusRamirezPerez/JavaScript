// let Bird = function(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 2;
// }

// let crow = new Bird("Alexis", "black");


// // instanceof compara un objeto con un constructor 
//         // true si el objeto fue echo con el contructor
//         // false si el objetoNO fue echo con el constructor
// crow instanceof Bird;


// // Las propiedades del "prototype" se comparten entre TODAS las instancias del objeto
// // Se agrega num.Legs al prototipe del objeto
// Bird.prototype.numLegs = 2;
// console.log(crow  )

// // Añade multiples propiedadess al prototype
// Bird.prototype = {
//   constructor: Bird,          // Siempre se debe añadir el constructor al odificar el prototype
//   numLegs: 2, 
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };

// ***************************************************************************************************

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];

// for (let property in beagle) {
//   if(beagle.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// ***************************************************************************************************

// Se crea un supertype
// Este contiene las propiedades compartidas de varios objetos
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

// Se crea un nuevo objeto del supertype
let animal1 = new Animal();
// Otra forma de crear un nuevo objeto
// Object.create(obj) crea un objeto nuevo y establece obj como el prototype del nuevo objeto
let animal2 = Object.create(Animal.prototype);

// Las instanciasn del objeto se heredan del super type
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);


// ChildObject.prototype = Object.create(ParentObject.prototype);
// ChildObject.prototype.constructor = ChildObject;
// ChildObject.prototype.methodName = function() {...};


// ***************************************************************************************************

// como hacer que una propiedad sea oculta
function Bird() {
  let weight = 15;
  this.getWeight = ()=>{
    return weight;
  }

}

// ***************************************************************************************************

// Comprende las funciones que son invocadas inmediatamente
(function () {
  console.log("Chirp, chirp!");
})();

// ***************************************************************************************************

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();

motionModule.glideMixin(duck);
duck.glide();

// ***************************************************************************************************
// ***************************************************************************************************