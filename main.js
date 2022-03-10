// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(num1, num2){
    let oddArray = [];
    let arrL = 0;
    if (num1 % 2 === 0){
        num1 += 1;
    }
    if (num2 % 2 === 0){
        num2 += -1;
    }
    arrL = (num2-num1)+1;
    for (let i = 0; i < arrL; i++){
        if ((num1 + i) % 2 !== 0 ){
            oddArray.push(num1 + i);
        }
    }
    return oddArray.reduce(function (total, currentElement){return total + currentElement});
}

/* console.logs to test */
console.log("sumOfOdds");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

// expect -21
let num1 = -9;
let num2 = 4;
console.log(sumOfOdds(num1, num2));

// expect 9
let numOne = 1;
let numFive = 5;
console.log(sumOfOdds(numOne, numFive));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(arr1, arr2){
    let sumArr = [];
    for (let i = 0; i < arr1.length; i++){
        sumArr.push(arr1[i]-arr2[i]);
    }
    return sumArr;
}

/* console.logs to test */
console.log("arraySubtract");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

// expect [5, 3, 3, -5]
let arr1 = [7,9,5,-5];
let arr2 = [2,6,2,0];
console.log(arraySubtract(arr1, arr2));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(arr, str1, str2){
    arr.unshift(str1);
    arr.push(str2);
    return arr;
}

/* console.logs to test */
console.log("surroundArray");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

// expect ['newBeg', 'ogBegining', 'ogMiddle', 'ogEnd', 'newEnd']
let arr = ['ogBegining, ogMiddle, ogEnd'];
let str1 = 'newBeg';
let str2 = 'newEnd';
console.log(surroundArray(arr, str1, str2));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(arr){
    if (arr.length === 0){
        return '';
    } else {
        let longestStr = arr[0];
        for (let i = 1; i < arr.length; i++){
            if (arr[i].length > longestStr.length){
                longestStr = arr[i];
            }
        }
        return longestStr;
    }  
}

/* console.logs to test */
console.log("longestString");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

// expect 'abcdefghijklmnop'
let longestArr = ['a', 'abcd', 'abcefghi', 'abcdefghijklmnop'];
console.log(longestString(longestArr));

// expect 'abcdefghijklmO))'
let longestArr2 = ['abcdefghijklmO))', 'abcd', 'abcefghi', 'aefy'];
console.log(longestString(longestArr2));

// expect 'abcefghi79%f++++'
let longestArr3 = ['abc', 'abcd', 'abcefghi79%f++++', 'aefy'];
console.log(longestString(longestArr3));

// expect empty
let emptyArr = [];
console.log(longestString(emptyArr));
console.log('above should be blank');

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(str){
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] === 's'){
            newStr += 'r';
        } else if (str[i] === 'S'){
            newStr += 'R';
        } else if (str[i] === 'r'){
            newStr += 's';
        } else if (str[i] === 'R'){
            newStr += 'S';
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

/* console.logs to test */
console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

// expect 'low: r ... up: R ... low ... s ... up: S';
let sToRString = 'low: s ... up: S ... low: r ... up: R';
console.log(sToR(sToRString));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num){
    if (num % 4 === 0 && num % 7 === 0){
        return true;
    } else {
        return false;
    }
}

/* console.logs to test */
console.log("divisibleBy4And7");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

// expect true
let num47 = 28;
console.log(divisibleBy4And7(num47));

// expect false
let num4 = 20;
console.log(divisibleBy4And7(num4));

// expect false
let num7 = 21;
console.log(divisibleBy4And7(num7));

// false
let num5 = 50;
console.log(divisibleBy4And7(num5));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(str){
    let exclamationPoint = false;
    let questionMark = false;
    for (let i = 0; i < str.length; i++){
        if (str[i] === '!'){
            exclamationPoint = true;
        }
        if (str[i] === '?'){
            questionMark = true;
        }
    }
    if (exclamationPoint === true && questionMark === true){
        return true;
    } else {
        return false;
    }   
}

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

// expect false
let justExclmationMark = 'this! should return false';
console.log(exclamationAndQuestion(justExclmationMark));

// expect false
let justQuestionMark = 'this? should return false';
console.log(exclamationAndQuestion(justQuestionMark));

// expect false
let noExNoQu = "this should return false";
console.log(exclamationAndQuestion(noExNoQu));

// expect true
let bothExAndQu = 'this! should? return true';
console.log(exclamationAndQuestion(bothExAndQu));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(str){
    let abArr = [0,0];
    for (let i = 0; i < str.length; i++){
        if (str[i].toLowerCase() === 'a'){
            abArr[0] += 1;
        }
        if (str[i].toLowerCase() === 'b'){
            abArr[1] += 1;
        }
    }
    return abArr;
}

/* console.logs to test */
console.log("countAB");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

// expect [11,10]
let aBStr = 'Af B be ada bgB b aAba a aff bBBBaAA '
console.log(countAB(aBStr));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(arr, str){
    let word = '';
    for (let i = 0; i < arr.length; i++){
        word = arr[i].toLowerCase();
        if (word[word.length-1] === 's'){
            arr[i] += str;
        }
    }
    return arr;
}

/* console.logs to test */
console.log("addStringIfLastS");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

// expect ['testSTEST', 'testing', 'testingsTEST']
console.log(addStringIfLastS(['testS', 'testing', 'testings'], 'TEST'));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(arr){
    let largeNum = arr[0];
    if (arr.length < 2){
        return undefined;
    } else if (arr.length === 2){
        if (arr[0] < arr[1]){
            return [arr[0], arr[1]];
        } else {
            return [arr[1], arr[0]];
        }
    } else {
        let largeNum = arr[0];
        for (let i = 1; i < arr.length; i++){
            if (arr[i] > largeNum){
                largeNum = arr[i];
            }
        }
        arr.splice(arr.indexOf(largeNum),1);
        return twoSmallest(arr);
    }
}

/* console.logs to test */
console.log("twoSmallest");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

// expect [-23, -10]
let smallArr = [-5, 3, 9, -23, -1, 4, 8, -10];
console.log(twoSmallest(smallArr));

// expect [3, 21]
let smallArr2 = [3, 21, 22, 23, 25, 42];
console.log(twoSmallest(smallArr2));

// expect [0, 18]
let smallArr3 = [18, 0, 22, 33, 44]
console.log(twoSmallest(smallArr3));

// expect [4, 9]
let smallArr4 = [55, 77, 9, 4];
console.log(twoSmallest(smallArr4));

// expect [-1, 0];
let smallArr5 = [88, 7, 11, 5, 3, 22, 0, 55, 2, 6, 1, -1, 101, 4];
console.log(twoSmallest(smallArr5));

// excpect undefined
let emptyArr2 = [];
console.log(twoSmallest(emptyArr2));

// expect undefined
let oneArr = [2];
console.log(twoSmallest(oneArr));

// expect [3, 4]
let twoArr = [4,3];
console.log(twoSmallest(twoArr));

// expect [1,2];
let twoArr2 = [1,2];
console.log(twoSmallest(twoArr2));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");