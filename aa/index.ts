//Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "Hello, World!";
console.log(greeting);

// Define two variables with integer values and calculate their sum, difference, product, and quotient.
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

//Swap the values of two variables without using a third variable.
let A= 1, B = 2;
console.log("Befor Swapping");
[A, B] = [A,B];
console.log("a:", A); // Should print 1
console.log("b:", B); // Should print 2
console.log("After Swapping");
[A, B] = [B, A];
console.log("a:", A); // Should print 2
console.log("b:", B); // Should print 1

//This applies to TypeScript. Create a string variable and try changing its type.
let message: string;
message = "Hello";
console.log(message); // Prints "Hello"
//message = 10; // This will result in a compilation error in TypeScript

// Use the modulus operator to find the remainder of two numbers.
let num4 = 10;
let num5 = 3;
let remainder = num4 % num5;
console.log("Remainder:", remainder); // Should print 1

//Increment a variable's value by 1 using two different methods.
let counter = 0;
counter++;
console.log("Increment 1:", counter); // Should print 1
counter += 1;
console.log("Increment 2:", counter); // Should print 2

//Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a = true, b = false, c = true;
let andResult = a && b && c;
let orResult = a || b || c;
let notResult = !a;
console.log("AND:", andResult); // Should print false
console.log("OR:", orResult); // Should print true
console.log("NOT:", notResult); // Should print false

// Show examples of using compound assignment operators.
let num = 10;
num += 5; // Add 5 to num
console.log("+=:", num); // Should print 15

num -= 3; // Subtract 3 from num
console.log("-=:", num); // Should print 12

num *= 2; // Multiply num by 2
console.log("*=:", num); // Should print 24

num /= 4; // Divide num by 4
console.log("/=:", num); // Should print 6

//Write a program to check if a number is even or odd.
let num3= 7;
if (num3 % 2 === 0) {
    console.log(num3 + " is even.");
} else {
    console.log(num3 + " is odd.");
}
//Check if a person is eligible to vote.
let age = 19;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//Assign a grade based on a numerical score.
let score = 85;
let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("Grade:", grade);

// Find the maximum of three numbers.
let x = 10, y = 20, z = 15;
let max = x;
if (y > max) {
    max = y;
}
if (z > max) {
    max = z;
}
console.log("Max:", max);

//Check if a given year is a leap year.
let year = 2024;
if (year % 4 === 0 || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

//Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit = 68;
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(fahrenheit + " Fahrenheit is equal to " + celsius.toFixed(2) + " Celsius.");

// Check if a number is positive, negative, or zero.
let number = -5;
if (number > 0) {
    console.log(number + " is positive.");
} else if (number < 0) {
    console.log(number + " is negative.");
} else {
    console.log(number + " is zero.");
}

// Write a program that prints the multiplication table of a given number up to 10.
let number1 = 5;
for (let i = 1; i <= 10; i++) {
    console.log(number1 + " x " + i + " = " + (number1 * i));
}