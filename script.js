window.addEventListener("load",big);
var Name, Grade, Classes
function big()
{
	document.getElementById("Name_Submit").addEventListener("click",Check1);
	document.getElementById("Grade_Submit").addEventListener("click",Check2);
	document.getElementById("submit").addEventListener("click",Check3);
	document.getElementById("Class_Submit").addEventListener("click",Check4);
	document.getElementById("Teacher_Submit").addEventListener("click",Check5);

}	

function Check1()
{
	Name = document.getElementById("txtName").value; 
	if (Name == "")
	{
		alert("Type in a correct input")
		document.getElementById("Name_Submit").focus();
	}
	else
	{
		localStorage.setItem("FUllname",Name); 
		document.getElementById("txtGradeLevel").focus();
	}
}
function Check2()
{
	Grade = document.getElementById("txtGradeLevel").value; 
	var Check = Grade % 1;
	if(Grade == "" || Check != 0)
		{
			alert("Input a correct input")
			document.getElementById("txtGradeLevel").focus();
		}
	else
		{
			localStorage.setItem("Grade_level",Grade);
			document.getElementById("txtClasses").focus();
		}
}
