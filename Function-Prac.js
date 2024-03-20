// Function Declaration

// function newFunction(a, b){
//     return a * b;
// }console.log(newFunction(3,7));



// Function Expression

// const x = function(a, b){
//     return a * b;
// };
// let z = x(5, 2);
// console.log(z);



// Function Constructor

// const Multiplication = new Function("a", "b", "return a * b"); 
// let x = Multiplication(4, 8);
// console.log(x);



// Function Hoisting

// console.log(myfunction(3));
// function myfunction(y){
//     return y *y;
// };



// Self-invoking Function

// (function(){
//     let x = "Hello! I called mySelf";
//     console.log(x);
// })();



// Arrow Function

// var x = function(x, y){
//     return x * y;
// };
// console.log(x(3, 4));

// const x = (x, y) => x * y;
// console.log(x(3, 4));




// Function are Object

// function myFunction(a){
//     return arguments.length;
// };
// let a = myFunction(2, 5, 4, 6, 7, 8, 4);
// console.log(a);


// function myFunction(a, b){
//     return a + b;
// };
// let x = myFunction(4, 3).toString();
// // let x = myFunction(4, 3);
// // console.log(String(x));
// console.log(x);
// console.log(typeof(x));



// Function Rest Parameters

// function sum(...args){
//     let sum = 0;
//     for(let arg of args){
//         sum += arg;
//     }
//     return sum;
// }
// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

// function myFunction(...args){
//     return args.length;
// }

// let data = myFunction(1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1);
// console.log(data);


// Arguments Object

// console.log(sumAll(1, 123, 500, 115, 44, 88, 1));

// function sumAll(){
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }return sum;
// }



// Generator Function

// function* generate() {
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// }

// let generator = generate();
// console.log(generator.next().value); 
// console.log(generator.next().value); 
// console.log(generator.next().value); 
// console.log(generator.next().value); 


// this keyword

let person = {
    "firstname" : 'John',
    "lasrname" : 'peter',
    "age" : 25,
    "hello" : function(){
        let data = this.firstname + this.lasrname;
        return data;
    }
}
console.log(person.hello());