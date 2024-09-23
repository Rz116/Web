window.addEventListener("load",addlistener);
var Num1, Num2, Result;

function addlistener()
{
	document.getElementById("BtnAdd").addEventListener("click",Addition);
}
function Addition()
{
	Num1 = document.getElementById("intnum1").value;
	Num2 = document.getElementById("intnum2").value;
	if(Firstname == " " || Lastname == " " )
		{
			alert("You didnt type a input in one of the boxes");
			autofocus();
		}
	else
		{
			Result = Number(Num1) + Number(Num2);
			document.getElementById("lblmessage").textContent = "Result" + Result;
		}
}

function autofocus()
{
	if(Firstname == " ")
		{
			document.getElementById("intnum1").focus();
		}
	else
		{
			document.getElementById("intnum2").focus();
		}
}
