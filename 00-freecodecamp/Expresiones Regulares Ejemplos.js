// //
// //    Encuentra las vocales e quoteSample
// //
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Cambia esta línea
// let result = quoteSample.match(vowelRegex);
// console.log(result);

// *************************************************************

// //
// //    busca los caracteres que no son numeo ni vocal
// //
// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9aeiou]/gi; // Cambia esta línea
// let result = quoteSample.match(myRegex);
// console.log(result);

// *************************************************************

//
//  VALIDACION DE UN USUARIO
//
// Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.
// Los únicos números del nombre de usuario tienen que estar al final. 
// Puede tener un cero o más al final. 
// El nombre de usuario no puede iniciar con un número.
// Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.
// Los nombres de usuario deben tener al menos dos caracteres. 
// Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.

// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// let result = userCheck.test(username);
// console.log(result)

// Code Explanation
//      ^           - start of input
//      [a-z]       - first character is a letter
//      [a-z]+      - following characters are letters
//      \d*$        - input ends with 0 or more digits
//      |           - or
//      ^[a-z]      - first character is a letter
//      \d\d+       - following characters are 2 or more digits
//      $           - end of input

// *************************************************************

// // Busca entre 3 y 6 caracteres y al menos un número:
// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// console.log(checkPass.test(password));

// *************************************************************

// // Busca one two three
// // y los remplaza por el orden three two one
// let str = "one two three";
// let fixRegex = /(one)\s(two)\s(three)/; // Cambia esta línea
// let replaceText = "$3 $2 $1"; // Cambia esta línea
// let result = str.replace(fixRegex, replaceText);
// console.log(result);

// *************************************************************

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result)