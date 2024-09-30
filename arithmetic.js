window.addEventListener("load",buttons);
var num1, num2, result;

function buttons()
{
	document.getElementById("Biginput").disabled = true;
	document.getElementById("one").addEventListener("click",one);
	document.getElementById("Clear").addEventListener("click",clear);
}
function one()
{
		num1 = 1;
		document.getElementById("Biginput").value = num1;
		document.getElementById("Biginput").disabled = true;
}
function clear()
{
	num1 = document.getElementById("Biginput").value = "";
	document.getElementById("Biginput").disabled = true;
}
