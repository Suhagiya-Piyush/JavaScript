function Backspace(){
	let a = document.calculator.result.value;
	document.calculator.result.value = a.substr(0, a.length-1);
}
function number(a){
    document.calculator.result.value += a;
}
function equal(){
	document.calculator.result.value=eval(document.calculator.result.value);
}
function clearAll(){
	document.calculator.result.value="";
	}