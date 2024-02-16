// Print 1 to N

{
    let num = parseInt(prompt("Enter any Number"));

    print(num);
}

function print(a){
    for(let i = 1; i <= a ; i++){
        document.write(i, "\t");
    }
}