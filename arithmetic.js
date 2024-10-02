window.addEventListener("load",buttons);
var num1, num2, result;
function buttons()
{
	document.getElementById("Biginput").disabled = true;
	document.getElementById("Input").disabled = true; 
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
	document.getElementById("Plusminus").addEventListener("click",plusminus);
	document.getElementById("Decimal").addEventListener("click",float);
	document.getElementById("Exponent").addEventListener("click",exponent);
	document.getElementById("Percent").addEventListener("click",percent);
	document.getElementById("Add").addEventListener("click",add);
	document.getElementById("Subtract").addEventListener("click",subtract);
	document.getElementById("Division").addEventListener("click",division);
	document.getElementById("Multiply").addEventListener("click",multiply);
	document.getElementById("Pi").addEventListener("click",pi);
	document.getElementById("Sqrt").addEventListener("click",sqrt);
	document.getElementById("Sq").addEventListener("click",sq);
	document.getElementById("Exp").addEventListener("click",exp);
	document.getElementById("sin").addEventListener("click",sin);
	document.getElementById("Cos").addEventListener("click",cos);
	document.getElementById("Tan").addEventListener("click",tan);
	document.getElementById("log").addEventListener("click",log);
	document.getElementById("Radians").addEventListener("click",radians);
	document.getElementById("degrees").addEventListener("click",degree);
	document.getElementById("Factorial").addEventListener("click",factorialize)
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
}
function subtract()
{
	document.getElementById("Biginput").value += "-";
}
function division()
{
	document.getElementById("Biginput").value += "÷";
}
function multiply()
{
	document.getElementById("Biginput").value += "*";
}
function plusminus()
{
	document.getElementById("Biginput").value += "-";
	num1 = parseInt(document.getElementById("Biginput").value);
}
function float()
{
	document.getElementById("Biginput").value +=".";
	num1 = document.getElementById("Biginput").value;
	num1 = parseFloat(num1);
}
function exponent()
{
	document.getElementById("Biginput").value += "^";
}
function percent()
{
	document.getElementById("Biginput").value += "%"
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
			result = parseFloat(num1) * Math.PI;
			document.getElementById("Input").value = result; 
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
		result = Math.sqrt(parseFloat(num1));
		document.getElementById("Input").value = result; 
	}
}
function sq()
{
	num1 = document.getElementById("Biginput").value;
	if(num1 == "")
	{
		alert("Type in a input");
	}
	else
	{
		document.getElementById("Biginput").value += "^2"
		result = parseFloat(num1) ** 2;
		document.getElementById("Input").value = result; 
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
		result = Math.exp(parseFloat(num1));
		document.getElementById("Input").value = result; 
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
		result = Math.sin(parseFloat(num1));
		document.getElementById("Input").value = result; 
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
		result = Math.cos(parseFloat(num1));
		document.getElementById("Input").value = result; 
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
		result = Math.tan(parseFloat(num1));
		document.getElementById("Input").value = result; 
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
		result = Math.log10(parseFloat(num1));
		document.getElementById("Input").value = result; 
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
		result = Math.log(parseFloat(num1))
		document.getElementById("Input").value = result; 
	}
}
function degree()
{
	num1 = document.getElementById("Biginput").value; 
	if(num1 == "")
	{
		alert("Type in a number first")
	}
	else
	{
		document.getElementById("Biginput").value += " Degrees"
		result = (parseFloat(num1) * 180) / Math.PI;
		document.getElementById("Input").value = result; 
	}
}
function radians()
{
	num1 = document.getElementById("Biginput").value; 
	if (num1 == "")
	{
		alert("Type in a number first")
	}
	else
	{
		document.getElementById("Biginput").value += " Radians"
		result = (parseFloat(num1) * Math.PI) / 180;
		document.getElementById("Input").value = result; 
	}
}
function factorialize()
{
	num1 = document.getElementById("Biginput");
	if(parseInt(num1) == 0)
	{
		alert("You cannot factorialize 0")
	}
	else
	{
		var factor = 1
		for(let i = 1; i <= parseInt(num1); i++);
		{
			result = factor * i
		}
		document.getElementById("Input").value = result;
	}
}
function equals()
{
	var equation = document.getElementById("Biginput").value;
	result = math.evaluate(equation);
	document.getElementById("Input").value = result; 
	result = null; 
}
function clear()
{
	document.getElementById("Biginput").value = "";
	document.getElementById("Input").value = "";
}
