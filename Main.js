// (1) Revers Number

// {
//     let i;
//     for(i = 10; i >= 1; i--)
//     {
//         // console.log(i);
//         document.write(i ,"\t");
//     }
// }


// (2) Even Number

// {
//     document.write("(2)\t - \t");
//     let i;
//     let num = prompt("Enter The Number : ");
//     document.write("Even Number : ")
//     for(i = 1; i <= num; i++){
//         if(i % 2 == 0){
//             document.write(i ,"\t");
//         }
//     }
// }

// (3) Odd Number

// {
//     let i;
//     let num = prompt("Enter The Number : ");
//     document.write("Odd Number : ")
//     for(i = 1; i <= num; i++){
//         if(i % 2 != 0){
//             document.write(i, "\t");
//         }
//     }
// }

// (4) Even Number Sum

// {
//     let i ;
//     let num = prompt("Enter The Number : ");
//     let sum = 0;
//     document.write("Even Number is : ");
//     for(i = 1; i <= num; i++){
//         if(i % 2 == 0){
//             document.write(i, "\t");
//             sum = sum + i;
//         }
//     }
//     document.write("<br>");
//     document.write("Even Number Sum is : ", sum);
// }

// (5) Odd Number Sum

// {
//     let i;
//     let num = prompt("Enter The Number : ");
//     let sum = 0;
//     document.write("Odd Number is : ");
//     for(i = 1; i <= num; i++){
//         if(i % 2 != 0){
//             document.write(i, "\t");
//             sum = sum + i;
//         }
//     }
//     document.write("<br>");
//     document.write("Odd Number Sum is : ", sum);
// }

// (6) Fibonacci Series

// {
//     let i;
//     let num = prompt("Enter Number");
//     let t1 = 0, t2 = 1, t = t1 + t2;
//     document.write("<br>");
//     document.write("Fibonacci Series is : ")
//     document.write(t1);
//     for(i = 1; i < num; i++){
//         document.write(",\t", t2);
//         t1 = t2;
//         t2 = t;
//         t = t1 + t2;
//     }
// }

// (7) A to Z

// {
//     let i;
//     for(i = 65; i <= 90; i++){
//         let n = String.fromCharCode(i);
//         document.write(n, "\t");
//     }
// }


// (8) A - 65

// {
//     let i;
//     for(i = 65; i<=90; i++){
//         let n = String.fromCharCode(i);
//         document.write(n," - ",i,"<br>");

//     }
// }

// (9) A - a

// {
//     let i;
//     for(i = 65; i <= 90; i++){
//         let n = String.fromCharCode(i);
//         let m = String.fromCharCode(i+32);
//         document.write(n," - ", m, "<br>");
//     }
// }

// (10) A, C, E, G, I.....

// {
//     let i;
//     for(i = 65; i <= 90; i++){
//         if(i % 2 != 0){
//             let n = String.fromCharCode(i);
//             document.write(n,"\t");
//         }
//     }
// }

// (11) A, c, E, g, I.....

// {
//     let i;
//     for(i = 0; i <= 24; i+=2){
//         if(i % 4 == 0){
//             let n = String.fromCharCode(i+65);
//             document.write(n,"\t");
//         }else{
//             let n = String.fromCharCode(i+97);
//             document.write(n,"\t");
//         }
//     }

// }

// (12) 1, 2, 4, 8, 16.....

// {
//     let i = 1;
//     let num = prompt("Enter Any Number : ");
//     document.write("<br>");
//     document.write(i,"\t");
//     for(i = 1; i < num; i++){
//         document.write(i * 2, "\t");
//     }
// }

// (13)  1, 4, 12, 32,.....

// {
//     let num = prompt("Enter Any Number : ");
//     let i;
//     let j = 1;
//     for(i = 1; i <= num; i++){
//         document.write(j * i,"\t");
//         j *= 2;
//     }
// }

// (14) 1, 4, 3, 16, 5,.....

// {
//     let i;
//     let num = prompt("Enter Any Number : ");
//     for(i = 1; i <=num; i++){
//         if(i %2 != 1){
//             document.write(i * i, "\t");
//         }else{
//             document.write(i, "\t");
//         }
//     }
// }

// (15) 1, 4, 9, 16,.....

// {
//     let i;
//     let num = prompt("Enter Any Number : ");
//     for(i = 1; i <= num; i++){
//         document.write(i * i,"\t");
//     }
// }

// (16) -n to n

// {
//     let i;
//     let num = prompt("Enter Any Number : ");
//     for(i = -num; i <=num; i++){
//         document.write(i,"\t");
//     }
// }

// (17) 0.5, 1, 2.5, 5,.....

// {
//     let i;
//     let j = 0.5; 
//     let num = prompt("Enter Any Num : ");
//     for(i = 0.5; i <= num; i++){
//         document.write(j,"<br>");
//         j += i;
//     }
// }

// Function call Onclick
// {
//     function msg(){
//         alert("Java Script");
//     }
// }
