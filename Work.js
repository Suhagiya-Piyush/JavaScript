// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

// let x = 15438;
// let rev = x.toString().split('').reverse().join('');
// console.log(Number(rev));

// function rev(num){
//     return num.toString().split('').reverse().join('');
// }
// let revNum = Number(rev(15438));
// console.log(revNum);
// console.log(typeof(revNum));



// 2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// let string = 'webmaster';
// console.log(string.split('').sort().join(''));



// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'


// function upper(string){
//     let array = string.split(' ');
//     let newArray = [];
//     for(let x = 0; x < array.length; x++){
//         newArray.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
//     }return newArray.join(' ');
// }
// console.log(upper('the quick brown fox'));


// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// function longWord(string){
//         let array = string.split(' ');
//         let longArray = '';
//         let i = 0;
//         for(let x = 0; x < array.length; x++){
//            if(array[x].length > i){
//             longArray = array[x];
//             i = array[x].length;
//            }
//         }return longArray;
//     }
// console.log(longWord('Hello! I am Piyush Suhagiya'));



// 5. Write a JavaScript function that checks whether a number is perfect.


// function perfectNum(num){
//     let perf = 0;
//     for(let i = 1; i < num; i++){
//         if(num % i == 0){
//             perf += i;
//         }
//     }
//     if(num === perf){
//        return document.write(num, ' is Perfect Number');
//     }else{
//        return document.write(num, ' is Not Perfect Number');
//     }
// }
// let a = parseInt(prompt('Enter Any Number'));
// perfectNum(a);

