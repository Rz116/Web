window.addEventListener("load",buttons); 
var Grade_number = "", sum = 0, grade;
function buttons()
{	
	document.getElementById("btnSubmit").addEventListener("click",Check);
}
function Check()
{
	if(Grade_number == "")
	{
		Number()
	}
	else
	{
		grade = document.getElementById("txtGrades").value;
		Grade(Grade_number)
	}
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
			Grade_number = parseInt(Grade_number);
			document.getElementById("txtGrades").value = null;
			document.getElementById("txtGrades").focus();
			document.getElementById("LblNumberGrades").textContent = "Grades: ";
		}
}
function Grade(Amount)
{
	for (let i = 1; i <= Amount; i++)
	{
		if(grade >= 100 || grade < 0)
		{
			alert("Type in a correct input"); 
			document.getElementById("txtGrades").value = ""; 
			document.getElementById("txtGrades").focus();
		}
		else
		{
			document.getElementById("txtGrades").value = "";
			document.getElementById("txtGrades").focus();
			sum = sum + parseFloat(grade);
		}
	}
	document.getElementById("lblmessage").textContent = sum;
}
