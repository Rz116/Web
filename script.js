window.addEventListener("load",buttons); 

function buttons()
{
	document.getElementById("btnSubmit").addEventListener("click",Number);
}

function Number()
{
	var Grade_number = document.getElementById("txtGrades").value;
	if (Grade_number == "")
		{
			alert("Type in a number");
		}
	else
		{
			document.getElementById("LblNumberGrades").textContent = "Grades: ";
			document.getElementById("txtGrades").value = "";
			Grade(Grade_number)
		}
}
function Grade(Amount)
{
	var sum = 0
	for (let i = 0; i <= Amount; i++)
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
