// Find positive & Negative

let num = prompt("Enter A Number : ");

let check = function (num){
    if(num >= 0){
        document.write(num, " is Positive  Number");
    }
    else{
        document.write(num, " is Negative Number");
    }
};

check(num);