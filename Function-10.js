// Print 1,4,9,16,.....,N

{
    let num = parseInt(prompt("Enter any Number"));

    print(num);
}

function print(a){
    for(let i = 1; i <= a ; i++){
        document.write(i*i, "\t");
    }
}