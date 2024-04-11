"use strict";
//
let greeting = "Hello, World!";
console.log(greeting);
//
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("quotient:", quotient);
//
let A = 1, B = 2;
console.log("Befor Swapping");
[A, B] = [A, B];
console.log("a:", A); // Should print 1
console.log("b:", B); // Should print 2
console.log("After Swapping");
[A, B] = [B, A];
console.log("a:", A); // Should print 2
console.log("b:", B); // Should print 1
//
let message;
message = "Hello";
console.log(message); // Prints "Hello"
//message = 10; // This will result in a compilation error in TypeScript
//
let num4 = 10;
let num5 = 3;
let remainder = num4 % num5;
console.log("Remainder:", remainder); // Should print 1
//
let counter = 0;
counter++;
console.log("Increment 1:", counter); // Should print 1
counter += 1;
console.log("Increment 2:", counter); // Should print 2
//
let a = true, b = false, c = true;
let andResult = a && b && c;
let orResult = a || b || c;
let notResult = !a;
console.log("AND:", andResult); // Should print false
console.log("OR:", orResult); // Should print true
console.log("NOT:", notResult); // Should print false
//
let num = 10;
num += 5; // Add 5 to num
console.log("+=:", num); // Should print 15
num -= 3; // Subtract 3 from num
console.log("-=:", num); // Should print 12
num *= 2; // Multiply num by 2
console.log("*=:", num); // Should print 24
num /= 4; // Divide num by 4
console.log("/=:", num); // Should print 6
//
let num3 = 7;
if (num3 % 2 === 0) {
    console.log(num3 + " is even.");
}
else {
    console.log(num3 + " is odd.");
}
//
let age = 19;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}
//
let score = 85;
let grade;
if (score >= 90) {
    grade = "A";
}
else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
}
else {
    grade = "F";
}
console.log("Grade:", grade);
//
let x = 10, y = 20, z = 15;
let max = x;
if (y > max) {
    max = y;
}
if (z > max) {
    max = z;
}
console.log("Max:", max);
//
let year = 2024;
if (year % 4 === 0 || year % 400 === 0) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}
//
let fahrenheit = 68;
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(fahrenheit + " Fahrenheit is equal to " + celsius.toFixed(2) + " Celsius.");
//
let number = -5;
if (number > 0) {
    console.log(number + " is positive.");
}
else if (number < 0) {
    console.log(number + " is negative.");
}
else {
    console.log(number + " is zero.");
}
//
let number1 = 5;
for (let i = 1; i <= 10; i++) {
    console.log(number1 + " x " + i + " = " + (number1 * i));
}
