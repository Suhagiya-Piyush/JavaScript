// Print -N to N

{
    let num = parseInt(prompt("Enter any Number"));

    print(num);
}

function print(a){
    for(let i = -a; i <= a ; i++){
        document.write(i, "\t");
    }
}