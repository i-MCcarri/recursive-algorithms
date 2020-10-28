//1
//Write a recursive function that counts how 
//many sheep jump over the fence. Your program 
//should take a number as input. That number 
//should be the number of sheep you have. 
//The function should display the number along 
//with the message "Another sheep jumps over 
//the fence" until no more sheep are left.

//Input: 3

//Output:
//3: Another sheep jumps over the fence
//2: Another sheep jumps over the fence
//1: Another sheep jumps over the fence
//All sheep jumped over the fence
One = (num) => string;
const countSheep = (num) => {
  if (num === 0) {
      return 'All sheep jumped over the fence';
  }
  return `${num}: Another sheep jumps over the fence\n` + countSheep(num - 1);
};
console.log(countSheep(2));

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

//5
//Write a recursive function that splits a string based on
//a separator (similar to String.prototype.split). 
//Don't use JS array's split function to solve this problem.
//Input: 02/20/2020
//Output: ["02", "20", "2020"]

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

//6
//Write a recursive function that prints the Fibonacci sequence
// of a given number. The Fibonacci sequence is a series of 
//numbers in which each number is the sum of the 2 preceding 
//numbers. For example, the 7th Fibonacci number in a Fibonacci 
//sequence is 13. The sequence looks as follows: 
//0,1, 1, 2, 3, 5, 8, 13.

const fibonacciSeq = (num) => {
    if (num < 0) {
        return [0];
    }
    // base case
    if (num === 1) {
        return [0, 1];
    }

    let answer = fibonacciSeq(num-1);
    answer.push(answer[num-2] + answer[num-1]);
    return answer;
}

console.log(fibonacciSeq(7));

//7
//Write a recursive function that finds the factorial of a 
//given number. The factorial of a number can be found by 
//multiplying that number by each number between itself and 1. 
//For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(num) {
    if (num === 1){
        return num;
    }
    return num * factorial(num-1)
}
console.log(factorial(5));

//8
//You have entered a Maze and need to find your way out of it. 
//There are more than one possible paths through the Maze to 
//the single exit point. Write a recursive function that will 
//help you find a possible path through the maze.

const makeSmallMaze = () => [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

const makeBigMaze = () => [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function solveSmallMaze(maze, n, m) {
    maze[n][m] = '-';

    let accumulator = '';

    switch(' ') {
        case maze[n][m+1]:
            return accumulator += 'R' + solveSmallMaze(maze, n, m+1)
        case maze[n][m-1]:
            return accumulator += 'L' + solveSmallMaze(maze, n, m-1)
        case maze[n+1][m]:
            return accumulator += 'D' + solveSmallMaze(maze, n+1, m)
        case maze [n-1][m]:
            return accumulator += 'U' + solveSmallMaze(maze, n-1, m)
    }
    switch ('e'){
        case maze[n][m + 1]:
            return accumulator += 'R' + 'Complete'
        case maze[n][m - 1]:
            return accumulator += 'L' + 'Complete'
        case maze[n + 1][m]:
            return accumulator += 'D' + 'Complete'
        case maze[n - 1][m]:
            return accumulator += 'U' + 'Complete'
        default: 
            return 'maze failed'
    }
}

console.log(solveSmallMaze(makeSmallMaze(), 0, 0));
console.log(solveSmallMaze(makeBigMaze(), 0, 0));

//10
//An anagram is any word or phrase that uses the letters of a
// given ("subject") word or phrase in another, rearranged 
//order. Write a function that creates an anagram list, 
//listing all the rearrangements of a given word. For example,
// if the user types "east", the program should list all 24 
//permutations, including "eats", "etas", "teas", and 
//non-words like "tsae".

//Hint: For your algorithm, you might want to think about a 
//prefix and use that to create the new words. For example, 
//given "east", use "e" as a prefix and place it in front of 
//all 6 permutations of "ast" — "ast", "ats", "sat", "sta", 
//"tas", and "tsa". This will give you the words "east", 
//"eats", "esat", "esta", "etas", and "etsa". Continue this 
//way until you find all the anagrams for "east". Then you 
//can use "a" as a prefix and permute the remaining words 
//"est". For "east", there should be 24 words.

const anagrams = (str) => {
    const answer = []

const traverse = (str, acc = '') => {
    if (!str) answer.push(acc)

    let i=0;
    while (i< str.length) {
        traverse(str.slice(0, i) + str.slice(i + 1), acc + str[i]);
        i++;
    }
};
traverse(str);
return answer;
}
console.log(anagrams('abc'));

//11
//Write a recursive function that prints the following
// organization chart. Your output should be as shown 
//below with proper indentation to show the hierarchy. 
//You may store the org chart in an object and send that 
//as an input to your program.

const chart = {
    name: 'Zuckerberg', reports: [
        {   name: 'Schroepfer', reports: [
            {   name: 'Bosworth', reports: [
                {   name: 'Steve', reports: []  },
                {   name: 'Kyle',reports: []    },
                {   name: 'Andra', reports: []  }
            ]},
            {   name: 'Zhao', reports: [
                {   name: 'Richie', reports: [] },
                {   name: 'Sofia',reports: []   },
                {   name: 'Jen', reports: []    }
            ]}
        ]},
        {   name: 'Schrage', reports: [
            {   name: 'VanDyck', reports: [
                {   name: 'Sabrina', reports: []    },
                {   name: 'Michelle', reports: []   },
                {   name: 'Josh', reports: []       }
            ]},
            {   name: 'Swain', reports: [
                {   name: 'Blanch', reports: [] },
                {   name: 'Tom', reports: []    },
                {   name: 'Joe', reports: []    }
            ]}
        ]},
        {   name: 'Sandberg', reports: [
            {   name: 'Goler', reports: [ 
                {   name: 'Eddie', reports: []  },
                {   name: 'Julie', reports: []  },
                {   name: 'Annie', reports: []  }
            ]},
            {   name: 'Hernandez', reports: [
                {   name: 'Rowi', reports: []   },
                {   name: 'Inga', reports: []   },
                {   name: 'Morgan', reports: [] }
            ]},
            {   name: 'Moissinac', reports: [
                {   name: 'Amy', reports: []    },
                {   name: 'Chuck', reports: []  },
                {   name: 'Vinni', reports: []  }
            ]},
            {   name: 'Kelley', reports: [
                {   name: 'Eric', reports: []   },
                {   name: 'Ana', reports: []    },
                {   name: 'Wes', reports: []    }
            ]}
        ]}
    ]
}

function printChart(chart, tabs) {
    let tabStr = '';
    for (let i = 0; i < tabs; i++) tabStr += '\t';
    if (!chart.reports[0]) {
      return `${tabStr + chart.name}\n`;
    }
    let printScreen = '';
    for (let i = 0; i < chart.reports.length; i++) {
      if (i === 0) printScreen += `${tabStr + chart.name}\n`;
      printScreen += printChart(chart.reports[i], tabs + 1);
    }
    return printScreen;
  }
  console.log(printChart(chart, 0));

//Alternative
function print(chart, tabs) {
    let tabStr = '';
    for (let i = 0; i < tabs; i++) tabStr += '\t';
    if (!chart.reports[0]) {
      return `${tabStr + chart.name}\n`;
    }
    let output = '';
    for (let i = 0; i < chart.reports.length; i++) {
        !i && (output += `${tabStr + chart.name}\n`);
      output += print(chart.reports[i], tabs + 1);
    }
    return output;
  }
  console.log(print(chart, 0));

//12
//Write a recursive function that prints out the binary
// representation of a given number. For example, the 
//program should take 3 as an input and print 11 as output, 
//or 25 as an input and print 11001 as an output. Note 
//that the binary representation of 0 should be 0.

const printBinary = (num) => {
    if (num === 0) return '';
    return printBinary(Math.floor(num / 2)) + (num % 2);
  };
  const pb = printBinary(21);
  console.log(pb);