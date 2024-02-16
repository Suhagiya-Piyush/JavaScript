// Print N to 1

{
    let num = parseInt(prompt("Enter any Number"));

    print(num);
}

function print(a){
    for(let i = a; i >= 1 ; i--){
        document.write(i, "\t");
    }
}