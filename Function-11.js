// Print   1,4,3,16,5,...,N

{
    let num = parseInt(prompt("Enter any Number"));

    print(num);
}

function print(a){
    for(let i = 1; i <= a ; i++){
        if(i % 2 == 0){
            document.write(i*i, "\t");
        }else{
            document.write(i, "\t");
        }
    }
}