// Find the Number is divisible by 5 or not

{
    let num = prompt("Enter The Number");

    check(num);
}
function check(a){
    if(a % 5 == 0){
        document.write(a, " is Divisible by 5");
    }else{
        document.write(a, " is Not Divisible by 5");
    }
}