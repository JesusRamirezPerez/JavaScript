 /* 
2c = dos de clubs (treboles)
2d = dos de diamons (diamantes)
2h = dos de hearts (corazones)
2s = dos de spades (espadas)
*/


// -----------------------------------------------------
// Sintaxis del patron modulo

(() => {
  'use strict'        // evalua el codigo de manera extricta se usa en patrones modulo

  // -----------------------------------------------------
  // Variables
  let deck = [];
  const tipos       = ['C', 'D', 'H', 'S',],
        especiales  = ['A', 'J', 'K', 'Q',];

  // let puntosJugador = 0,
  //     puntosComputadora = 0;

  let puntosJugadores = [];

  // referencias del HTML
  const btnPedir    = document.querySelector('#btnPedir'),
        btnDetener  = document.querySelector('#btnDetener'),
        btnNuevo    = document.querySelector('#btnNuevo');

  const small                 = document.querySelectorAll('small'),
        divCartasJugador      = document.querySelector('#jugado-cartas'),
        divCartasCoputadora   = document.querySelector('#computadora-cartas');

  // -----------------------------------------------------      
  // FUNCION PARA INICIAR EL JUEGO
  const inicioJuego = (numJugadores) => {
    deck = crearDeck();

    for (let i = 0; i < numJugadores; i++){
      puntosJugadores.push(0);
    } 
  }
  // -----------------------------------------------------


  // -----------------------------------------------------
  // FUNCION PARA CREAR EL DECK
  const crearDeck = (  )=>{
    deck = [];
    for (let i = 2; i <= 10; i++){
      for (let tipo of tipos){
        deck.push(i + tipo);
      }
    }
    for (let tipo of tipos){
      for (let esp of especiales){
        deck.push( esp + tipo);
      }
    }
    return _.shuffle(deck);;
  }
  // -----------------------------------------------------


  // -----------------------------------------------------
  // FUNCION PARA PEDIR CARTA
  const pedirCarta = () => {
    if (deck.length === 0){
      throw 'No hay mas cartas en el deck';        // manda una mensaje de eeror directo a consola
    } 
    return deck.shift();;
  }
  // -----------------------------------------------------


  // -----------------------------------------------------
  // FUNCION PARA SABER EL VALOR DE LA CARTA
  const valorCarta = (carta) =>{
    const valor = carta.substring(0, carta.length-1);   // substring regresa un arreglo a partir de un arreglo base  esto con la condicion de inicio y final
    return  (isNaN(valor)) ? 
            ((valor === 'A') ? 11 : 10) 
            : (valor * 1);

    // let puntos = 0; 
    // if( isNaN(valor) ){                                 // evalua si el parametro es un numero                            
    //   puntos = (valor === 'A') ? 11 : 10; 
    // } else {
    //   console.log('es un numero'); 
    //   puntos  = valor * 1; // se multiplica por un 1 para convertir  de string a numero
    // }
    // console.log(puntos); 
  }
  // -----------------------------------------------------


  // -----------------------------------------------------
  //funciones Acumulativas
  // funcion acumular puntos
  const acumularPuntos = (carta, turno) =>{
    puntosJugadores[turno] += valorCarta(carta);
    small[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  }
  // -----------------------------------------------------


  // -----------------------------------------------------
  // Turno de la computadora
  const turnoComputadora = ( puntosMinimos ) => {

    do{
    
      const carta = pedirCarta();
      acumularPuntos(carta, puntosJugadores.length - 1);
      
      const imgCarta = document.createElement('img');
      imgCarta.src=`assests/cartas/${carta}.png`;
      imgCarta.classList.add('carta');
      divCartasCoputadora.append(imgCarta);

      if ( puntosMinimos > 21 ){
        break;
      }

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    // ejecuta el callback en cierto tiempo el tiempo son ms
    setTimeout(() => {
      
    if (puntosComputadora == puntosMinimos){ alert('Nadie Gano'); } else
    if (puntosMinimos > 21){ alert('Gana la Computadora'); } else
    if (puntosComputadora > 21){ alert('Gana el Jugador 1'); } else {
      alert('gana la computadora');
    }

    }, 20);

  }


  // -----------------------------------------------------
  // LLAMADA A FUNCIONES COMPLETAS
  // const miCarta = valorCarta(pedirCarta());
  // console.log({miCarta});


  // -----------------------------------------------------
  // EVENTOS

  // Primer argumento es el elemnto que quiero escuchar 
  // Segundo argumento es el call back
  btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    acumularPuntos(carta, puntosJugadores[0]);

    // CREAR LAS IMAGENES
    // ELEMENTO BASE    =>      <img class="carta" src="assests/cartas/3C.png" alt="tres de corazones">
    const imgCarta = document.createElement('img');
    imgCarta.src=`assests/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    // LOGICA DEL PROGRAMA
    if (puntosJugador > 21){
      console.warn('perdiste chavo');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador == 21){
      console.warn('Ganaste chavo');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }

  });


  btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

  });


  btnNuevo.addEventListener('click', () => {

    // deck = [];
    // crearDeck ();

    inicioJuego();

    // puntosJugador = 0,
    // puntosComputadora = 0;

    small[0].innerText = 0;
    small[1].innerText = 0;

    divCartasCoputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;


  });

})();



