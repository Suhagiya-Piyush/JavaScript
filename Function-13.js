// // Print     1,4,12,32,80,...,N

{
    let num = parseInt(prompt("Enter any Number"));

    print(num);
}

function print(a){
    let i = 1, j = 1;
    for(i = 1; i < a ; i++){
        document.write(i * j, "\t");
        j *= 2;
    }
}