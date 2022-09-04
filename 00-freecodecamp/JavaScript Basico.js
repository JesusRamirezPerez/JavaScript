// este es un comentario de uuna linea
/* este es un comentario de varias lineas
----------------------------------------- */

/* en java exiten 8 tipos de datos
    undefined
    null
    boolean
    string
    simbol
    bigint
    number
    object */

    //declaracion de una variable
    var Variable1;

    //una cadena literal es una cadena entre comillas
    var Cadena_literal = "cadena";

    // let te permite declarar una variable solo una ves
    let variableInicial;

    //declaracion de constantes una ves asignado el valo no se puede cambiar
    const variableConstante = 0;
    console.log(variableConstante);

    //Para colocar una comilla impresa \"
    const myStr = "I am a \"double quoted\" string inside \"double quotes\"";

    console.log("hola mundo");

    //Se puede utilizar el operador +  para concatenar
    let con = "Primer frase " + "segunda frase\n";
    console.log(con);

    //para concatenar al finar de una variable se utiliza += sirve para agregar texto
    let conAgregar = "Este es la primer linea ";
    conAgregar += "Esta es la segunda linea";
    console.log(conAgregar);

    //  .length se utiliza para saber la longitud de una cadena
    const valCaadena= "cadena";
    console.log("Este es la longitud de \"Cadena\"",valCaadena.length);

    //Para la creacion de arreglos se utilizan corchetes
    let miArray = ["Primer elemento ", 6, "Tercer elemento"];

    //arreglos multidimencionales
    let miArrayMulti = [["aa1", 3],["aa2", 6]];
    console.log(miArrayMulti);

    //Para acceder a multiples arreglos se utilizan los corchetes separados
    const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14]
      ];
      
    console.log(arr[3]);
    console.log(arr[3][0]);
    console.log(arr[3][0][1]);

    // .push añade datos al final de un arreglo
    const algo = [1,2,3];
    algo.push(3);
    console.log(algo);

    // .unshift añade datos al inicio de un arreglo
    console.log("\n\nfuncion .unshifth");
    let misDatos = [1,2,3,4];
    misDatos.unshift(0);
    console.log(misDatos);    //0 1 2 3 4

    // .pop saca el ultimo elemento de un array y lo guarda en una variable
    var arrayValor = [0,1,2,3,4,5];
    var ultimoValor =arrayValor.pop();

    console.log(arrayValor);        //0 1 2 3 4
    console.log(ultimoValor);       //5

    // .shift saca el primer elemento de un array y lo guarda en una variable
    arrayValor = [0,1,2,3,4,5];
    ultimoValor =arrayValor.shift();

    console.log(arrayValor);        //1 2 3 4 5
    console.log(ultimoValor);       //0

    // CREACION DE FUNCIONES
    function funcionName (){
      console.log("hello world");
    }

    console.log("\nejecucion de una funcion");
    funcionName();

    // Funcion con parametros
    function funcionParametros (Param1, Param2){
      console.log(Param1," ", Param2, " ");
    }

    console.log("\nFuncion con parametros");
    funcionParametros("hola", "Shuy");

  
    // Valores booleans
    var varBool = true;

    // CONDICIONAL IF

    if (varBool){
      console.log("condicion verdadera");
    }
    console.log("condicion falsa");

    /*
        Exisen operadores de igualdad
        operador de igualdad " == " este evalua dos datos independiente de su formato
            3 == "3"  true
            3 ==  3   true
            2 ==  1   false
      
        operador de estricta igualdad este toma en cuenta el formato de los datos
            3 === "3"   false
            3 ===  3    true


        Exisen operadores de desigualdad
        operador de igualdad " != " este evalua dos datos independiente de su formato

        operador de estricta desigualdad "!==" este toma en cuenta el formato de los datos

    */

  // typeof devuelve el tipo de dato
  console.log(typeof "3");

  /*
      OPERADORES
        ==      IGUALDAD
        ===     EXTREMA IGUALDAD

        !=      DESIGUALDAD
        !===    EXTREMA DESIGUALDAD

        >       MAYOR QUE
        >=      MAYOR IGUAL A

        <       MENOR QUE
        <=      MENOR IGUAL A

        &&      AND
        ||      OR
  */

  // funcion switch
  let lowercaseLetter = "a";
  switch (lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
  }

  // LOS OBJETOS ALMACENAN DATOS QUE SE PUEDEN CAMBIAR ATRAVES DE SUS PROPIEDADES
  // EJEPLO DE UN OBJETO 
  const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };

  const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
  };

  // para acceder a una propiedad de un objeto se puede hacer mediante puntos
  let myPropiedad = cat.name;
  // Tambien se puede acceder a la propiedad con crchetes
  myPropiedad = cat["name"];

  const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  
  const myDog = "Hunter";
  const myBreed = dogs[myDog];  // se puede colocar la propiedad guardada en una variable
  console.log(myBreed);

  dogs.bark = "wof";    //añade una propiedad
  delete dogs.bark;     //elimina una propiedad

  // busca si el objeto tiene una propiedad
  const myObj = {
    top: "hat",
    bottom: "pants"
  };
  
  myObj.hasOwnProperty("top");      //true    existe
  myObj.hasOwnProperty("middle");   //false   no existe

  Math.random();    //numeros aleatorios
  Math.floor();     //redondea hace abao un numero

  // Math.floor(Math.random() * (max - min + 1)) + min    genera numeros aleatoreos entre un rango

  parseInt("008");     //Analiza una cadena y debuelve un entero     8
                      // su sintaxiis con base   parseInt("cadena", base)
                      //                          parseInt("11",2);     convercion de numero binario

  /* 
  
  OPERADOR CONDICIONAL

  La sintaxis es a ? b : c, 
  
  donde a es la condición, 
        b es el código a ejecutar cuando la condición devuelve true
        c es el código a ejecutar cuando la condición devuelve false.
  
  
  */




