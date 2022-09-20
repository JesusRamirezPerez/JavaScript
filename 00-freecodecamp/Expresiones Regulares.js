// 
// Expresiones regulares, a veces acortadas a "regex" o "regexp", 
// son patrones que ayudan a los programadores a encontrar, buscar, 
// y reemplazar texto. Las expresiones regulares son muy potentes, 
// pero pueden ser difícil de leer porque usan caracteres especiales 
// para hacer coincidencias más complejas y flexibles.
// 
// En este curso, aprenderás como usar caracteres especiales, grupos 
// de captura, miradas positivas y negativas, así como otras técnicas 
// para hacer coincidir cualquier texto que quieras.
// 
// 
// test busca una cadena dentro de una variable
let testStr = "freeCodeCamp";           // variable string
let testRegex = /Code/;                 // Exprecion regular
testRegex.test(testStr);                // true: existe || false: no existe
console.log(testRegex.test(testStr));


let petRegex = /dog | cat | bird | fish/;          // Busca diferentes opciones
// --------   Banderas   ------
let ignoraMayus = /Hello/i;                        // Al agregar "i" dara true independientemente si estan en mayuscuas
let repeatRegex = /Repeat/g;                       // Al gregar "g" busca y extrae mas de un patron
let huRegex = /hu./;                               // Caracter comodin "." representa cualquier caracter 
                                                   // hug, huh, hut, y hum, puedes usar la la expresión regular /hu./ 
let bgRegex = /b[aiu]g/;                           // si quieres hacer coincidir bag, big, y bug pero no bog.
                                                   // Puedes crear la expresión regular /b[aiu]g/ para hacer esto. 
                                                   // [aiu] es la clase de caracteres que solo coincidirá con los caracteres a, i, o u
let myRegex1 = /[a-z0-9]/ig;                       // Se pueden combinar rangos de letras y numeros
let myRegex2 = /[^abcde]/ig;                       // Crea un conjunto de caracteres que no desean ser buscados
let myRegex3 = /a+/ig;                             // busca caracteres que se repitan operador "+"
let myRegex4 = /a*/ig;                             // Hace coincidir caracteres que aparecen cero o mas veces "*"
let myRegex5 = /t[a-z]*?i/ig;                      // Retorna la coincidencia mas corta operador peresozo "?"
let myRegex6 = /^Ricky/;                           // "^" Al estar fuera de corchetes solo busca al inicio de la cadena
let myRegex7 = /story$/;                           // "$" Busca caracteres al final de la cadena

// Busca todos los numeros y todas las letras 
let myRegex8 = /[A-Za-z0-9_]/;                     //busca todos los numeros
let myRegex9 = /\w/;                               // se agrega "\w"

// Busca todos losque no son numeros o letras 
let myRegex10 = /[^A-Za-z0-9_]/;                     //busca todos los que no son umeros o letras
let myRegex11 = /\W/;                               // se agrega "\W"  (W Mayuscula)

// Busca todos los digitos 
let myRegex12 = /[0-9]/;                            //busca todos los digitos
let myRegex13 = /\d/;                               // se agrega "\d"

// Busca todos los que no son digitos 
let myRegex14 = /[0-9]/;                            //busca todos los digitos
let myRegex15 = /\D/;                               // se agrega "\D" (Mayuscula)

// Busca todos los espacios en blanco
let myRegex16 = /\s/g;                              // Busca los espacos en blanco \s

// Busca todos los elemento que no sean espacios en blanco
let myRegex17 = /\S/;                               // Busca todo lo que no sean espacios en blanco /S

// Para especificar un rango de repeticiones se utiliza {}
let myRegex18 = /a{3,5}h/;                          // Busca se coincide "a" de 3 a 5 veces en la cadena "ah"
let myRegex19 = /a{3,}h/;                           // Busca se coincide "a" de 3 Veces en adelane dentro de la cadena "ah"
let myRegex20 = /a{5}h/;                            // Busca se coincide "a" 5 veces en la cadena "ah"

// Comprueba elementos opcionales  ?
let myRegex21 = /colou?r/;                          // Comprueba la cadena colour en donde la "u" es opcional 

// Un lookahead positivo buscará para asegurarse de que el elemento en el patrón de búsqueda este allí
// (?= .....)
let myRegex22 = /q(?=u)/;                           // busca que la cadena "qu" contenga una "u"

// Un lookahead negativo buscará para asegurarse de que el elemento en el patrón de búsqueda no este allí.
// (?! .....)
let myRegex23 = /q(?!u)/;                           // busca que la cadena "qu" contenga una "u"

// Agrupaciones mixtas de carcteres
let myRegex24 = /P(engu|umpk)in/;                   // Busca si existe conicidencia como "Penguin" o "Pumpkin"

// Grupos de captura
// los grupos de captura es un conjunto de caracteres que complen una regla
// se acomodan en parentesis "()" y se pueden acceder a ellos mediante un \1 donde el numero 
// indica el grupo de captura
let myRegex25 = /(?=\w{6})(?=\w*\d{2})/;            // 
let myRegex26 = /^(\d+)\s\1\s\1$/;

// para extraer los datos de un arreglo se utiliza match
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";                //expecin regular
let ourRegex = /expressions/;                      // Exprecion
ourStr.match(ourRegex);                            // Regresa la exprecion encontrada

// Buscar y reemplaar
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");            // Busca la exprecion regular y la reemplaza por una cadena

// Se puede acceder a los grupos de captura con el simbolo "$"
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');      // La llamada replace devolverá la cadena Camp Code.

