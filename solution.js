// 1. Create a variable to store your name and display it in an alert.
let myname = "ososeh";
alert("My name is " + myname);

// 2. Declare two number variables and show their sum, difference, product, and quotient.
let x = 5;
let y = 4;

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

// 3. Write a program that converts Celsius to Fahrenheit.
let celsius = 25;
let fahrenheit = celsius * 1.8 + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);

// 4. Calculate the area of a rectangle.
let length = 8;
let width = 5;
let area = length * width;
console.log("Area of rectangle: " + area);

// 5. Check if a number is even or odd.
let number = 7;
if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}

// 6. Determine if a year is a leap year.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
let year = 2024;
console.log(year + " is a leap year: " + isLeapYear(year));

// 7. Return the reverse of a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}
let input = "javascript";
console.log("Reversed: " + reverseString(input));

// 8. Count the number of vowels in a string.
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
let text = "Hello James";
console.log("Number of vowels: " + countVowels(text));

// 9. Find the largest number in an array.
function findLargest(arr) {
  return Math.max(...arr);
}
let numbers = [14, 3, 78, 21, 9];
console.log("Largest number: " + findLargest(numbers));

// 10. Check if a string is a palindrome.
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
let word = "madam";
console.log(word + " is a palindrome: " + isPalindrome(word));

// 11. Calculate the factorial of a number.
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial of 5: " + factorial(5));

// 12. Generate a random number between two values.
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random number between 10 and 20: " + randomBetween(10, 20));

// 13. Convert seconds into hours, minutes, and seconds.
function convertTime(seconds) {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;
  return `${hrs}h ${mins}m ${secs}s`;
}
console.log("3665 seconds is: " + convertTime(3665));

// 14. Check if a number is prime.
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log("Is 17 prime? " + isPrime(17));

// 15. Capitalize the first letter of each word.
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world from javascript"));

// 16. Calculate the sum from 1 to n.
function sumToN(n) {
  return (n * (n + 1)) / 2;
}
console.log("Sum from 1 to 100: " + sumToN(100));

// 17. Find the average of numbers in an array.
function average(arr) {
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
console.log("Average: " + average([10, 20, 30, 40, 50]));

// 18. Remove duplicates from an array.
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("Unique values: " + removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 19. Countdown from 10 to 1, then "Blast off!".
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Blast off!");

// 20. Check if a string contains only numbers.
function isOnlyNumbers(str) {
  return /^\d+$/.test(str);
}
console.log("Is '12345' only numbers? " + isOnlyNumbers("12345"));
console.log("Is '123a5' only numbers? " + isOnlyNumbers("123a5"));

// 21. Find the second smallest number in an array.
function secondSmallest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => a - b);
  return unique[1];
}
console.log("Second smallest: " + secondSmallest([12, 5, 7, 5, 3]));

// 22. Display the multiplication table for a given number.
function multiplicationTable(n) {
  for (let i = 1; i <= 12; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
multiplicationTable(5);

// 23. Validate if a password meets criteria.
function isValidPassword(password) {
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return minLength && hasUpper && hasLower && hasNumber;
}
console.log("Valid password: " + isValidPassword("Hello123"));

// 24. Simple calculator with basic operations.
function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}
console.log("5 * 3 = " + calculator(5, 3, "*"));

// 25. Find all factors of a given number.
function findFactors(n) {
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return factors;
}
console.log("Factors of 12: " + findFactors(12).join(", "));

// 26. Check if two strings are anagrams.
function isAnagram(str1, str2) {
  let normalize = str =>
    str.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  return normalize(str1) === normalize(str2);
}
console.log("Are 'listen' and 'silent' anagrams? " + isAnagram("listen", "silent"));

// 27. Generate Fibonacci sequence up to n terms.
function fibonacci(n) {
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}
console.log("Fibonacci (10 terms): " + fibonacci(10).join(", "));

// 28. Sort an array without using built-in sort.
function manualSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
console.log("Manually sorted: " + manualSort([5, 3, 8, 2, 1]));

// 29. Count occurrences of a specific element in an array.
function countOccurrences(arr, target) {
  return arr.filter(el => el === target).length;
}
console.log("Occurrences of 2: " + countOccurrences([1, 2, 3, 2, 4, 2], 2));

// 30. Shopping cart: add, remove, and calculate total.
let cart = [];

function addItem(name, price) {
  cart.push({ name, price });
}

function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

// Example usage:
addItem("Book", 12.99);
addItem("Pen", 1.5);
addItem("Notebook", 5.25);
removeItem("Pen");
console.log("Total cart price: $" + calculateTotal().toFixed(2));
