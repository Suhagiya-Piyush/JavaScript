// Bill Counting

let rate = parseInt(prompt("Enter Rate"));
let qty = parseInt(prompt("Enter Quantity"));
(function(){
    let amt = rate * qty;
    let disc_amt = amt * 5 / 100;
    let bill_amt = amt - disc_amt;
    let gst = bill_amt * 18 / 100;
    let net_bill = bill_amt + gst;
    
    document.write("Product Rate is : ", rate,"<br>");
    document.write("Product Quantity is : ", qty,"<br>");
    document.write("<br>");
    document.write("Product Total Amount is : ", amt,"<br>");
    document.write("Product Discount Amount is : ", disc_amt,"<br>");
    document.write("Product Bill after Discount is : ", bill_amt,"<br>");
    document.write("Product GST Charges is : ", gst,"<br>");
    document.write("Product Final Amount with GST is : ", net_bill,"<br>");
})(rate, qty);
