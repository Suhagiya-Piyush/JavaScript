//  Year find its leap year or not

{
    let year = prompt("Enter Any Year on Formate YYYY");

    check_to_leap_year(year);
}
 function check_to_leap_year(year){
    if((year % 4 == 0  && year % 100 != 0) || year % 400 == 0){
        document.write(year, " is Leap Year");
    }else{
        document.write(year, " is Not Leap Year");
    }
 };