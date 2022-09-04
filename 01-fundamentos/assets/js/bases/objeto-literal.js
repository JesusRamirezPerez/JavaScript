// OBJETOS LITERALES

let personaje = {
  nombre: 'Tony Stark', 
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  cords: {
    lat: 34.034,
    long: -118.70,
  },
  trajes: ['mark 1', 'mark 5', 'hulk buster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malinu, California',
  },
};

console.log(personaje);
console.log('nombre: ', personaje.nombre);
console.log('Code name: ', personaje['codeName']);
console.log('coordenadas: ', personaje.cords.lat);
console.log('Numero de trajes: ', personaje.trajes.length);
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('vivo: ', personaje[x]);

// MAS DETALLES

// Borrar una propiedad
delete personaje.edad;

// convierte el objeto literal en un arrelo de pares
const entrisPares = Object.entries(personaje);
console.table(personaje);
console.table(entrisPares);
// ┌─────────┬─────────────┬──────────────────────────────────────────────────────────┐
// │ (index) │      0      │                            1                             │
// ├─────────┼─────────────┼──────────────────────────────────────────────────────────┤
// │    0    │  'nombre'   │                       'Tony Stark'                       │
// │    1    │ 'codeName'  │                        'Ironman'                         │
// │    2    │   'vivo'    │                          false                           │
// │    3    │   'cords'   │              { lat: 34.034, long: -118.7 }               │
// │    4    │  'trajes'   │          [ 'mark 1', 'mark 5', 'hulk buster' ]           │
// │    5    │ 'direccion' │ { zip: '10880, 90265', ubicacion: 'Malinu, California' } │
// └─────────┴─────────────┴──────────────────────────────────────────────────────────┘

// Crear una nueva propiedad
personaje.casado = true;
console.log(personaje.casado);

// Bloqueo de propiedades
Object.freeze (personaje);    // Congela solo el primer nivel de propiedades

// Propiedades de "Object" sirven para manipular el objerto
const propiedades = Object.getOwnPropertyNames(personaje);
const Valores = Object.values(personaje);
console.log({propiedades});
console.log({Valores});