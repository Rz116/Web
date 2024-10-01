window.addEventListener("load",buttons);
var num1, num2, result;
var operation = ''
function buttons()
{
	document.getElementById("Biginput").disabled = true;
	document.getElementById("one").addEventListener("click",one);
	document.getElementById("two").addEventListener("click",two);
	document.getElementById("three").addEventListener("click",three);
	document.getElementById("four").addEventListener("click",four);
	document.getElementById("five").addEventListener("click",five);
	document.getElementById("six").addEventListener("click",six);
	document.getElementById("Seven").addEventListener("click",seven);
	document.getElementById("eight").addEventListener("click",eight);
	document.getElementById("nine").addEventListener("click",nine);
	document.getElementById("zero").addEventListener("click",zero);
	document.getElementById("Add").addEventListener("click",add);
	document.getElementById("Pi").addEventListener("click",pi);
	document.getElementById("Sqrt").addEventListener("click",sqrt);
	document.getElementById("Sq").addEventListener("click",sq);
	document.getElementById("Exp").addEventListener("click",exp);
	document.getElementById("sin").addEventListener("click",sin);
	document.getElementById("Cos").addEventListener("click",cos);
	document.getElementById("Tan").addEventListener("click",tan);
	document.getElementById("log").addEventListener("click",log);
	document.getElementById("naturalog").addEventListener("click",naturallog);
	document.getElementById("Equal").addEventListener("click",equals);
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
function add()
{
	document.getElementById("Biginput").value += "+";
	num2 = document.getElementById("Biginput").value;
}
function pi()
{
	num1 = document.getElementById("Biginput").value;
	if (num1  == "")
	{
		alert("Type in a input")
	}
	else
	{
		document.getElementById("Biginput").value += "π";
		if(document.getElementById("Biginput").value == "π")
		{
			result = Math.PI;
		}
		else
		{
			result = parseInt(num1) * Math.PI;
		}
	}
}
function sqrt()
{
	num1 = document.getElementById("Biginput").value;
	if (num1 == "") 
	{
		alert("Type in a input")
	}
	else
	{
		document.getElementById("Biginput").value += ")Sqrt";
		result = Math.sqrt(parseInt(num1));
	}
}
function sq()
{
	num1 = document.getElementById("Biginput").value;
	if(num1 == "")
	{
		alert("Type in a input")
	}
	else
	{
		document.getElementById("Biginput").value += "^2";
		result = parseInt(num1) ** 2;
	}
}
function exp()
{
	num1 = document.getElementById("Biginput").value;
	if (num1 == "")
	{
		alert("Type in a input")
	}
	else
	{
		document.getElementById("Biginput").value = "";
		document.getElementById("Biginput").value = "e^" + num1;
		result = Math.exp(parseInt(num1));
	}
}
function sin()
{
	num1 = document.getElementById("Biginput").value;
	if (num1 == "")
	{
		alert("Type in a input")
	}
	else
	{
		document.getElementById("Biginput").value += " Sin";
		result = Math.sin(parseInt(num1));
	}
}
function cos()
{
	num1 = document.getElementById("Biginput").value;
	if(num1 == "")
	{
		alert("Type in a input")
	}
	else
	{
		document.getElementById("Biginput").value += " Cos";
		result = Math.cos(parseInt(num1));
	}
}
function tan()
{
	num1 = document.getElementById("Biginput").value; 
	if(num1 == "")
	{
		alert("Type in a input")
	}
	else
	{
		document.getElementById("Biginput").value += " Tan";
		result = Math.tan(parseInt(num1));
	}
}
function log()
{
	num1 = document.getElementById("Biginput").value; 
	if(num1 == "")
	{
		alert("Type in a input")
	}
	else
	{
		document.getElementById("Biginput").value += " Log";
		result = Math.log10(parseInt(num1));
	}
}
function naturallog()
{
	num1 = document.getElementById("Biginput").value;
	if(num1 == "")
	{
		alert("Type in a input")
	}
	else
	{
		document.getElementById("Biginput").value += " ln"
		result = Math.log(parseInt(num1))
	}
}
function equals()
{
	document.getElementById("Biginput").value = result; 
	result = null; 
}
function clear()
{
	document.getElementById("Biginput").value = "";
	document.getElementById("Biginput").disabled = true;
}
