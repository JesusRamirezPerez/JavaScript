
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Acuaman'];

// ------------------------------------------
console.warn('For Tradicional'); 
for ( let i = 0 ; i < heroes.length ; i++ ) {
  console.log(heroes[i]);
}


// ------------------------------------------
console.warn('For in');
for (let i in heroes) {       // hace un barido de los objetos en heroes
  console.log(heroes[i]); 
}


// ------------------------------------------
console.warn('For of');
for (let heroe of heroes) {       // hace un barido de los objetos y los guarda en heroe
  console.log(heroe); 
}