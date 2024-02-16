// Find the Number is divisible by 5 and 3 or not

{
    let num = prompt("Enter Any Number");
    check(num);
}

function check(a){
    if(a % 5 ==0 && a % 3 == 0){
        document.write(a, " is Divisible by 5 and 3");
    }else{
        document.write(a, " is Not Divisible by 5 and 3");
    }
}