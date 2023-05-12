
// function staircase(n) {
    
//     for(let i = 1; i <= n; i++){
//         let output = '';
//         for(let j = 1; j <= i; j++){
//             output += '#';
//         }
//         console.log((" ").repeat(n-i) + output)
//     }
    
// }

// staircase(5);

// fizzBuzz = (n) => {
//         for(let i = 1; i <= n; i++){
//             if(i % 5 == 0 && i % 3 == 0){
//                 console.log("FizzBuzz")
//             } else if (i % 3 == 0){
//                 console.log("Fizz");
//             } else if(i % 5 == 0){
//                 console.log("Buzz");
//             } else {
//                 console.log(i)

//             }
//         }

//     }
//     fizzBuzz(50);

//JS ES7 Classes and Constructor

//    class Human {
//         gender = 'male';
    
//     printGender = () => {
//         console.log(this.gender)
//     }
// }
   
//     class Person extends Human {
      
//         name = 'max';
//         gender = 'female';
       

//         printName = () => {
//                 console.log(this.name);
//             }
//         }
    
    
//     const person = new Person();
//     person.printName();
//     person.printGender();


//     // Spread Operator / Rest

//     //Spread Operator is used to split up array elements OR object properties

//     // const newArray = [...oldArray, 1, 2];
//     // const newObject = {...oldObject, newProp:5}

//     //Rest Operator Used to merge a list of functions arguments into an array

//     sortArgs = (...args) =>{
//         return args.sort()
//     }

//     const numbers =[1,2,3,4];
//     const newNumbers = [...numbers,5,6,7];

//     console.log(newNumbers)

// const filter =(...args) =>{
//     return args.filter(el => el === 1);
// }

// console.log(filter(1,2,3))

// //Destructuring extract array elements or objext properties and store them in variables

// const number = [1,2,3];

// [num1, ,num3] = number;

// console.log(num1, num3)

// //Array Method

// const numbers1 = [1,2,3,4];

// const doubleNumArray = numbers.map((num) => {
//     return num * 2;
// })

// console.log(numbers1);

// console.log(doubleNumArray)

// //Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.     
// //For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].
// function transformToObjects(numberArray) {
//     return numberArray.map((num) => {
//       return { val: num };
//     });
//   }

// const candle = [1,2,3,3,3,3];


// function birthdayCakeCandles(candles) {
//     let highest = 0;
//     let sortCandles = candles.sort((a,b) => b-a);
//     let tallestCandel = sortCandles[0];
//     for(let i = 0; i < sortCandles.length; i++){
//         if(sortCandles[i] === sortCandles[0]){
//             highest ++;
//         }
//     }
//     console.log(highest)
//     return highest;

// }

// console.log(birthdayCakeCandles(candle));

//1. Two Sum
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j];
//             }
//         }
//     }
// };

// console.log(twoSum([3,2,3], 6));

// //2.Vaild Brackets
// var isValid = function(s) {
//     let stack = [];
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === '{') {
//         stack.push('}');
//       } else if (s[i] === '[') {
//         stack.push(']');
//       } else if (s[i] === '(') {
//         stack.push(')');
//       } else if (stack.pop() !== s[i]) {
//         return false;
//       }
//     }
//     return stack.length === 0;
//   };



function isValid (str){
let stack = [];
for(let i = 0; i < str.length; i++){
const c = str[i];
if(c == '['){
    stack.push(']');
  } else if(c == '{'){
    stack.push('}');
  } else if(c == '('){
    stack.push(')');
  } else if(stack.pop() !== c){
    return false;
  }
}
return stack.length === 0;
}

console.log(isValid(str))