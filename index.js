
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