window.addEventListener("load",buttons); 
var Grade_number = "";
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
		Grade(Grade_number)
	}
}
function Number()
{
	Grade_number = parseInt(document.getElementById("txtGrades").value);
	if (Grade_number == "")
		{
			alert("Type in a number");
		}
	else
		{
			alert(Grade_number);
			document.getElementById("txtGrades").value = null;
			document.getElementById("txtGrades").focus();
			document.getElementById("LblNumberGrades").textContent = "Grades: ";
		}
}
function Grade(Amount)
{
	var sum = 0
	for (let i = 1; i <= Amount; i++)
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
		document.getElementById("lblmessage").textContent = sum;
		
		
	}
}
