//  Students marks weather pass or not

{
    let maths = parseInt(prompt("Enter Maths Marks"));
    let hindi = parseInt(prompt("Enter Hindi Marks"));
    let eng = parseInt(prompt("Enter English Marks"));

    student_result(maths, hindi, eng);

}
function student_result(a, b, c){
    if(a < 35 || b < 35 || c < 35){
        document.write("You are Fail...");
    }else{
        document.write("Your Maths Mark : ", a, "<br>");
        document.write("Your Hindi Mark : ", b, "<br>");
        document.write("Your English Mark : ", c, "<br>");
        document.write("Total Marks : ", a + b + c);
    }
};