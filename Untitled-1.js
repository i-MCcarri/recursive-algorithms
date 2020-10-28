//2
//Write a function called powerCalculator() that takes two parameters, 
//an integer as a base, and another integer as an exponent. The function 
//returns the value of the base raised to the power of the exponent. 
//Use only exponents greater than or equal to 0 (positive numbers)

//powerCalculator(10,2) should return 100
//powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(int, exp) {
if(exp < 0) {
    return 'exponent should be >= 0';
}
if (exp === 0) {
    return 1;
}
if (exp === 1) {
    return int;
}
let total = powerCalculator(int, exp -1); 
return total *= int;
}
console.log(powerCalculator(3, 3));

// for (let i = exp; i > 0; i--) {
//     total *= int;
// }

//3
//Write a function that reverses a string. 
//Take a string as input, reverse the string, 
//and return the new string.

function reverseString(str) {
    if (str.length === 0) {
        return 'String is null. Use a string of atleast 2 characters';
    }
    if (str.length === 1) {
        return str;
    }
    let answer = reverseString(str.slice(1))
    return answer += str.charAt(0);
}
console.log(reverseString('hello'));

//4
//Calculate the nth triangular number. A triangular 
//number counts the objects that can form an equilateral 
//triangle. The nth triangular number is the number of 
//dots composing a triangle with n dots on a side, and 
//is equal to the sum of the n natural numbers from 1 to n. 
//This is the Triangular Number Sequence: 
//1, 3, 6, 10, 15, 21, 28, 36, 45.

function nthTriangle(naturalNum) {
    if (naturalNum <= 0) {
        return 0;
    }

    let tNum = naturalNum + nthTriangle(naturalNum -1);
    return tNum;
}
console.log(nthTriangle(5));