window.addEventListener("load",buttons);
var num1, num2, result;

function buttons()
{
	document.getElementById("Biginput").disabled = true;
	document.getElementById("one").addEventListener("click",one);
	Document.getElementById("two").addEventListener("click",two);
	Document.getElementById("three").addEventListener("click",three);
	Document.getElementById("four").addEventListener("click",four);
	Document.getElementById("five").addEventListener("click",five);
	Document.getElementById("six").addEventListener("click",six);
	Document.getElementById("seven").addEventListener("click",seven);
	Document.getElementById("eight").addEventListener("click",eight);
	Document.getElementById("nine").addEventListener("click",nine);
	Document.getElementById("zero").addEventListener("click",zero);
	document.getElementById("Clear").addEventListener("click",clear);
}
function one()
{
	num1 = 1;
	document.getElementById("Biginput").value += num1;
}
function two()
{
        num2 = 2;
	document.getElementById("Biginput").value += num2; 
}
function three()
{
        var num3 = 3;
	document.getElementById("Biginput").value += num3; 
}
function four()
{
        var num4 = 4;
	document.getElementById("Biginput").value += num4; 
}
function five()
{
        var num5 = 5;
	document.getElementById("Biginput").value += num5; 
}
function six()
{
        var num6 = 6;
	document.getElementById("Biginput").value += num6; 
}
function seven()
{
        var num7 = 7;
	document.getElementById("Biginput").value += num7; 
}
function eight()
{
        var num8 = 8;
	document.getElementById("Biginput").value += num8; 
}
function nine()
{
        var num9 = 9;
	document.getElementById("Biginput").value += num9; 
}
function zero()
{
        var num0 = 0;
	document.getElementById("Biginput").value += num0; 
}
function clear()
{
	num1 = document.getElementById("Biginput").value = "";
	document.getElementById("Biginput").disabled = true;
}
