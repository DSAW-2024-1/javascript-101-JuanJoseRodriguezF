// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (isNaN(a) || isNaN(b)) {
    console.error("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (isNaN(n)) {
    console.error("Los datos de entrada no son adecuados");
    return;
  }

  if (n < 0) {
    return "Los datos de entrada no son adecuados";
  }

  if (n === 0) {
      return 1;
  }

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
      resultado *= i;
  }

  return resultado;
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  if (arr.length === 0) {
    return "La matriz está vacía.";
  }

  let numeroMasGrande = arr[0][0];

  for (let fila of arr) {
      for (let numero of fila) {
        if (isNaN(numero)) {
          console.error("Los datos de entrada no son adecuados");
          return;
        }
        if (numero > numeroMasGrande) {
            numeroMasGrande = numero;
        }
      }
  }

  return numeroMasGrande;
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if (typeof str !== 'string') {
    console.error("Los datos de entrada no son adecuados");
    return;
  }

  str = str.toLowerCase();

  const vocales = ['a', 'e', 'i', 'o', 'u'];

  let contadorVocales = 0;

  for (let caracter of str) {
      if (vocales.includes(caracter)) {
          contadorVocales++;
      }
  }

  return contadorVocales;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (isNaN(n)) {
    console.error("Los datos de entrada no son adecuados");
    return;
  }

  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }

  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
