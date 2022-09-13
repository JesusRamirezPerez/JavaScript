// function findLongestWordLength(str) {
//   let contador = 0;
//   let datos = [];
//   for (let i=0;i<str.length;i++){
//     console.log(str[i])
//     if (str[i]===' '){
//         datos.push(contador);
//         contador = 0;
//     } else {
//       contador++;
//     }
//   }
//   datos.push(contador);
//   return Math.max(...datos);

// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// ******************************************************************************************************

// function largestOfFour(arr) {
//   let cont = [];
//   let i = 0;
//   for(const datos of arr){
//     cont[i]=Math.max(...datos);
//     i++;
//   }
//   console.log(cont);
//   return cont;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// ******************************************************************************************************

// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor

//   return str.slice(str.length - target.length) === target;
// }

// confirmEnding("He has to give me a new name", "name");

// ******************************************************************************************************

// function repeatStringNumTimes(str, num) {
//   let con = str;
//   console.log( con)
//   if (num <= 0){return '';}
//   else {
//     for (let i = 1; i <= num; i++){
//       con = con + str;
//       console.log(con)
//     }
//   }
//   return con;
// }

// console.log(repeatStringNumTimes("abc", 3));

// ******************************************************************************************************

// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);

// ******************************************************************************************************

// function titleCase(str) {
//   let nuevo;
//   let frase = [];
//   nuevo = str.toLowerCase().split(' ');
//   nuevo.forEach(elem => {
//     frase.push(elem[0].toUpperCase() + elem.slice(1));
//   })
//   console.log(frase)
//   console.log(frase.join(' '))
//   return frase.join(' ')
// }

// titleCase("I'm a litTle teA pot");

// ******************************************************************************************************

// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArr = arr2.slice();
//   localArr.splice(n, 0, ...arr1);
//   return localArr;
// }
// frankenSplice([1, 2, 3], [4, 5, 6], 1);

// ******************************************************************************************************

function bouncer(arr) {
  let datos = [];
  let datos2 = [];
  let valor = arr.map(elem =>{
    datos.push(elem? true:false);
  })
  
  for (let i = 0; i < arr.length; i++){
    if(datos[i]){
      datos2.push(arr[i]);
    }
  }
  return datos2;
}

bouncer([7, "ate", "", false, 9]);

// ******************************************************************************************************
// ******************************************************************************************************