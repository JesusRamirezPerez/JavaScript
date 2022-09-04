/*

          FUNCIONES RECURSIVAS

*/


/* 

ESTA FUNCION DEBUELVE UN ARREGLO QUE COMIENZA DESDE EL ARGUMENTO "n"

*/
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log(countdown(5));



/* 

ESTA FUNCION DEBUELVE UN ARREGLO QUE COMIENZA DESDE "startNum" HASTA "endNum"

*/
function rangeOfNumbers(startNum, endNum) {
  if(startNum >= endNum){
    return [startNum];
  }else {
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.unshift(startNum);
    return countArray;
  }
};

console.log(rangeOfNumbers(5, 10));