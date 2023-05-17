
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

// // JS ES7 Classes and Constructor

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



// // 1. Two Sum (Double For)
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



// //2.Vaild Brackets (Stack Algo)
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



// // 3. Merged Node Lists (Node Linked List)

// function mergeTwoLists(list1, list2) {
//   // Create a New node List thats length is for ever
//   // * This is a `ListNode` object that will be used to store the head of the merged linked list.
//   // * The `dummy` node has a value of `-Infinity`. This is because we want to make sure that the `dummy` node is always smaller than any other node in the linked list.
//   const dummy = new ListNode(-Infinity);

//   //Create a variable that references the nodeList
//   // * This variable will be used to store a pointer to the previous node in the linked list.
//   let prev = dummy;


//   //We will check to see if the value of the current node is null or not
//   // * If the value is null that means it is at the end of one list
//   while(list1 && list2){

//     //Check to see if the current list is smaller than the other list
//     // * If the value of the current node in `list1` is less than or equal to the value of the current node in `list2`, then the code adds the current node from `list1` to the merged linked list.
//     // * The code then updates the `prev` variable to point to the current node in `list1`.
//     // * Finally, the code moves on to the next node in `list1`.
//     if( list1.val <= list2.val){
         
//           prev.next = list1;
//           prev = list1;
//           list1 = list1.next;
//       } else{
//           prev.next = list2;
//           prev = list2;
//           list2 = list2.next;
//       }
//   }
//   // If one of the lists is empty, then the code adds the remaining nodes from the other list to the merged linked list.
//   if(!list1){
//       prev.next = list2;
//   }
//   if(!list2){
//       prev.next = list1;
//   }
//   // Finally, the code returns the head of the merged linked list.
//   return dummy.next;
// };




// //Best Time to buy and sell Stock(Dynamic Programming: Sliding Window Technique)

// const prices = [7,6,4,3,1]

// var maxProfit = function(prices) {
//   let lowest = prices[0];
//   let highest = prices[0];
//   let profit;
//   for(let i = 1; i < prices.length; i++){
//       if(prices[i] < lowest){
//         lowest = prices[i];
//       }
//       if(prices[i] > highest){
//         highest = prices[i];
//       }
//       if(highest > lowest){
//         profit = (highest-lowest)
//       }
//   }

//   return profit;
  
// };

// console.log(maxProfit(prices))

//

