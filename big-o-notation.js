//1
let sameBreed = [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false];

function breedCheck(obj) {
    let response = false;
    for(let i=0; i <= obj.length; i++){
        console.log('')
        if (obj[i] === true) {
            response = obj[i];
        }
    }
    return response;
}
console.log(sameBreed[6]);
console.log(breedCheck(sameBreed));

//answer

//2
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    } else{
        return false;
    }
}

//answer

//3
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// answer 0(n^2)

//4
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//answer 0(n)

//5 
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
//answer 0(n) Linear

//6
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

//answer 0(n^2)

//7
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
//console.log(compute(16));

//answer (O(n))

//8
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// answer O(log(n))

//9
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//answer O(1)

//10
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isWhat(53))
//answer 0(n) || 0(log(n))

//11 Tower of Hanoi
//The Tower of Hanoi is a very famous mathematical
// puzzle (some call it game!). This is how it goes:

//There are three rods and a number of disks of 
//different sizes which can slide onto any rod. 
//The puzzle starts with the disks neatly stacked 
//in ascending order of size on one rod, the 
//smallest disk at the top (making a conical shape). 
//The other two rods are empty to begin with.

//The goal of the puzzle is to move the entire 
//stack of rods to another rod (can't be the 
//original rod where it was stacked before) where 
//it will be stacked in the ascending order as well. 
//This should be done obeying the following rules:

//i) Only one disk may be moved at a time 

//ii) Each move consists of taking the upper disk 
//from one of the rods and sliding it onto another 
//rod, on top of the other disks that may already 
//be present on that rod. 

//iii) A larger disk may not placed on top of a 
//smaller disk

//Derive an algorithm to solve the Tower of 
//Hanoi puzzle.

//Implement your algorithm using recursion. Your 
//program should display each movement of the disk 
//from one rod to another.

//If you are given 5 disks, how do the rods look 
//like after 7 recursive calls?

//How many moves are needed to complete the puzzle 
//with 3 disks? with 4 disks? with 5 disks?

//What is the runtime of your algorithm?

// function hanoiTower(diskCount) {
//     rodA, rodB, rodC
// }

// console.log(hanoiTower(3))


//12
//Solve the drills 1 - 7 from your previous 
//checkpoint (Recursion) iteratively.

//RECURSIVE - 1
One = (number) => string;
const countSheep = (num) => {
  if (num === 0) return 'All sheep jumped over the fence';
  return `${num}: Another sheep jumps over the fence\n` + countSheep(num - 1);
};
console.log(countSheep(2));

//reiterated 
function countingSheep(num) {
    if (num < 1) {
        return 'No sheep jumped over the fence';
    } else {
        for (let i=1; i < num; i++) {
            console.log(`${i}: Another sheep jumps over the fence\n`);
        }
    }
    return `${num}: All sheep jumped over the fence`;
}

console.log(countingSheep(5));

//RECURSIVE - 2
Two = (num, exp) => number;
const powerCalculator = (num, exp) => {
  if (exp < 0) return 0;
  if (exp === 0) return 1;
  if (exp === 1) return num;
  let answer = powerCalculator(num, exp - 1);
  return answer * num;
};
console.log(powerCalculator(10, 2));

//reiterated
function powerCalc(num, exp) {
    let value = 1;
    for (i=0; i < exp; i++){
        value *= num; 
    }
    return value;
}

console.log(powerCalc(3, 3))

//RECURSIVE - 3
Three = (str) => string;
const reverse = (str) => {
  if (str.length === 1 || 0) return str;
  let rev = reverse(str.slice(1));
  return rev + str.charAt(0);
};
console.log(reverse('123-456'));

//reiterated
function mirrorString(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(mirrorString('hanna'));

//RECURSIVE - 4
Four = (str) => number;
const triangulate = (num) => {
  if (num <= 0) return 0;
  if (num === 1) return num;
  return num + triangulate(num - 1);
};
console.log(triangulate(4));

//reiterated

function buildEqualateralTriangle(incrament) {
    let value = 0;
    for (let i=0; i <= incrament; i++){
        value = value + i;
    }
    return value;
}
console.log(buildEqualateralTriangle(6));

//RECURSIVE - 5
function splitBySeperator(inputStr, splitChar, result=[""]) {
    if (inputStr.length === 0) {
        return result;
    }
    if (inputStr[0] === splitChar) {
        result.push("");
    } else {
        result[result.length - 1] += inputStr[0];      
    }
    return splitBySeperator(inputStr.slice(1), splitChar, result);
}
console.log(splitBySeperator('02/20/2020', '/'));

//5 Alternate

function split(str, char){
    let idxOf = str.indexOf(char);
    if (idxOf === -1) {
        return [str];
    }
    return [str.slice(0, idxOf), ...split(str.slice(idxOf + 1), char)];
}

console.log(split("02/20/2020", "/"));

//reiterated

function splitIterative(str, splitChar, splitStr=['']) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === splitChar) {
            splitStr.push('');
        } else {
            splitStr[splitStr.length-1] += str[i];
        }
    }
    return splitStr;
}
console.log(splitIterative('hello world!', ' '));

//RECURSIVE - 6
Six = (num) => number;
const fibber = (num) => {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];
  let seq = fibber(num - 1);
  const num1 = seq[seq.length - 1];
  const num2 = seq[seq.length - 2];
  seq.push(num1 + num2);
  return seq;
};
console.log(fibber(2));

//Reiterated

function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(7));

//RECURSIVE - 7
Seven = (num) => number;
const factorial = (num) => {
  if (num === 0) return 0;
  if (num === 1) return num;
  let answer = factorial(num - 1);
  return answer * num;
};
console.log(factorial(5));


//Reiterated with For loop
function facto(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

console.log(facto(5))

//Reiterated with While loop

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  factorialize(5);