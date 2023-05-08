
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

   class Human {
        gender = 'male';
    
    printGender = () => {
        console.log(this.gender)
    }
}
   
    class Person extends Human {
      
        name = 'max';
        gender = 'female';
       

        printName = () => {
                console.log(this.name);
            }
        }
    
    
    const person = new Person();
    person.printName();
    person.printGender();


    // Spread Operator / Rest

    //Spread Operator is used to split up array elements OR object properties

    // const newArray = [...oldArray, 1, 2];
    // const newObject = {...oldObject, newProp:5}

    //Rest Operator Used to merge a list of functions arguments into an array

    sortArgs = (...args) =>{
        return args.sort()
    }

    const numbers =[1,2,3,4];
    const newNumbers = [...numbers,5,6,7];

    console.log(newNumbers)

const filter =(...args) =>{
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3))

//Destructuring extract array elements or objext properties and store them in variables

const number = [1,2,3];

[num1, ,num3] = number;

console.log(num1, num3)

//Array Method

const numbers1 = [1,2,3,4];

const doubleNumArray = numbers.map((num) => {
    return num * 2;
})

console.log(numbers1);

console.log(doubleNumArray)

//Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.     
//For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].
function transformToObjects(numberArray) {
    return numberArray.map((num) => {
      return { val: num };
    });
  }