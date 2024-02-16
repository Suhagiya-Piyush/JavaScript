// Print     1,2,4,8,16,...,N

{
    let num = parseInt(prompt("Enter any Number"));

    print(num);
}

function print(a){
    let i = 1, j = 1;
    for(i = 1; i <= a ; i++){
        document.write(j, "\t");
        j *= 2;
    }
}