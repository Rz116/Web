window.addEventListener("load",buttons); 
var Grade_number = "", sum = 0, grade,count = 0,Average, gpa;
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
	
	if(grade >= 100 || grade < 0)
	{
	        alert("Type in a correct input"); 
		document.getElementById("txtGrades").value = ""; 
		document.getElementById("txtGrades").focus();
	}
	else
	{
		for (let i = 1 ; i <= Amount; i++) 
		{
			sum = sum + parseFloat(grade);
			document.getElementById("txtGrades").value = "";
		        document.getElementById("txtGrades").focus()
			grade = 0 
		}
		count = count + 1
		if (count == Amount) 
		{
			Average = sum/Amount; 
			gpa = Average/25; 
		} 
	}
	
	document.getElementById("lblmessage").textContent = gpa;
}
