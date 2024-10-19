window.addEventListener("load",buttons); 
var Grade_number

function buttons()
{
	document.getElementById("btnSubmit").addEventListener("click",Number);
}

function Number()
{
	Grade_number = document.getElementById("txtGrades").value;
	if (Grade_number == "")
		{
			alert("Type in a number");
		}
	else
		{
			document.getElementById("LblNumberGrades").textContent = "Grades: ";
			document.getElementById("txtGrades").value = "";
			Function()
		}
}
function Function()
{
	document.getElementById("btnSubmit").addEventListener("click",Grade);
}
function Grade()
{
	var sum = 0
	for (let i; i < Grade_number; i++)
	{
		var grade = parseFloat(document.getElementById("txtGrades").value);
		document.getElementById("txtGrades").value = "";
		if(grade > 100 && grade < 0)
		{
			alert("Type in a correct input")
			document.getElementById("txtGrades").focus(); 
			Grade()
		}
		else
		{
			document.getElementById("txtGrades").value = "";
			sum = sum + grade; 
		}
	}
	document.getElementById("lblmessage").textContent = sum;
}
