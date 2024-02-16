// Functions Practice

(function(){
    let rate = parseInt(prompt("Enter Rate"));
    let qty = parseInt(prompt("Enter Quantity"));
    let amt = rate * qty;
    let disc_amt = amt * 5 / 100;
    let bill_amt = amt - disc_amt;
    let gst = bill_amt * 18 / 100;
    let net_bill = bill_amt + gst;
    
    
    document.write("Your Rate is : ", rate,"<br>");
    document.write("Your Quantity is : ", qty,"<br>");
    document.write("<br>");
    document.write("Your Total Amount is : ", amt,"<br>");
    document.write("Your Discount Amount is : ", disc_amt,"<br>");
    document.write("Your Bill after Discount is : ", bill_amt,"<br>");
    document.write("Your GST Charges is : ", gst,"<br>");
    document.write("Your Final Amount with GST is : ", net_bill,"<br>");
})();
