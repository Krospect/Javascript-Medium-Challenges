//Problem 1: Falsy or Truthy?
//Given two values, return the first one if it is falsy, otherwise return the second one.

function filterOutFalsy(val1 , val2){
    return (!val1) ? val1 : val2
}

console.log(filterOutFalsy(true,6));

//Problem 2: Return the length of any given array

function arrLength(arr){
    return arr.length
}

console.log(arrLength([1,2,3]));

//Problem 3: Return the last element of an array

function arrLast(arr){
    return arr[arr.length-1]
}

console.log(arrLast([1,6,3,-2]));

//Problem 4: Find the sum of an array

function arrSum(arr){
    let sum=0
    for(i=0;i<arr.length;i++){
    sum += arr[i]
    }
    return sum
}

console.log(arrSum([0,-5,-10]));

//Problem 5: Add up the numbers from a single number
//Given a number, add up all the numbers from one to the number that is given.

function progressiveSum(num){
    let sum=0
    for(i=1;i<=num;i++){
        sum+=i
    }
    return sum
}

console.log(progressiveSum(600));

//Problem 6: Calculate the time
//Given a number in seconds, return this number in mm:ss format.

function calcTime(seconds){
    let timerMin=Math.floor(seconds/60);
    let timerSec =seconds % 60;
    if(timerMin.toString().length===1){
        timerMin = "0" + timerMin
    }
    if(timerSec.toString().length===1){
        timerSec = "0" +  timerSec 
    }
    return timerMin + ":" + timerSec;
}

console.log(calcTime(300));

//Problem 7: Find the largest number
// Given an array of numbers, return the largest number of that array

function getMax(arr){
    let max=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

console.log(getMax([-300,-100,-200]));

//Problem 8: Reverse a string

function reverseString(str){
    string="";
    for(i=str.length-1;i>=0;i--){
        string+=str[i]
    }
    return string;
}

console.log(reverseString('This is cool'));

//Alternate way for problem 8
//Convert string to array then reverse it and turn it back to a string

function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString('This is cool'));

//Problem 9: Turn every element in an array into 0

function convertToZeros(arr){
    for(i=0;i<arr.length;i++){
        arr[i]=0;
    }
    return arr;
}

console.log(convertToZeros([1,2,3,4,5]));

//Alternate way for problem 9

function convertToZeros(arr){
    return new Array(arr.length).fill(0);
}

console.log(convertToZeros([1,2,3,4,5]));

//Another alternate way to do it while using map

function convertToZeros(arr){
    return arr.map(elem => 0);
}

console.log(convertToZeros([1,2,3,4,5]));

//Problem 10: Filter out all the apples
//Given an array of fruits, if it is an apple remove it from the array.

function removeApples(arr){
    let noApples=[];
    for(i=0;i<arr.length;i++){
        if(arr[i] !=='Apple'){
            noApples.push(arr[i]);
        }
    }
    return noApples;
}

console.log(removeApples(['Banana','Apple','Orange']));

//Alternate way to do problem 10 using filter

function removeApples(arr){
    return arr.filter(elem=>elem!=='Apple')
}

console.log(removeApples(['Banana','Apple','Orange']));

//Problem 11: Filter out all the falsy values
//Given an array of values, filter out all the falsy values and only return the truthy values

function filterOutFalsy2(arr){
    return arr.filter(elem => !!elem===true)
}

console.log(filterOutFalsy2(['',[],0,null,undefined,"0"]));

//Problem 12: Truthy to true, Falsy to false
//Given an array of truthy and falsy values, return the same array of elements into its boolean value.

function convertToBoolean(arr){
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500,0,"David","",[]]));