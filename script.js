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
			alert("TYpe in a number");
		}
	else
		{
			document.getElementById("LblNumberGrades").textContent = "Grades: ";
			document.getElementById("txtGrades").value = "";
			Grade(Grade_number)
		}
}

function Grade(Amount_Grade)
{                          
	document.getElementById("btnSubmit").addEventListener("click",Grade);
}
