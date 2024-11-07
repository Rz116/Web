window.addEventListener("load",big);
var Name, Grade, Classes,Class, count = 0,Osis;
function big()
{
	document.getElementById("Name_Submit").addEventListener("click",Check1);
	document.getElementById("Grade_Submit").addEventListener("click",Check2);
	document.getElementById("Osis_Submit").addEventListener("click",Check3)
	document.getElementById("submit").addEventListener("click",Check4);
	document.getElementById("Class_Submit").addEventListener("click",Check5);
	document.getElementById("Teacher_Submit").addEventListener("click",Check6);
}	

function Check1()
{
	localStorage.clear();
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
			document.getElementById("txtOsis").focus();
		}
}
function Check3()
{
	Osis = document.getElementById("txtOsis").value; 
	var check = Osis % 1; 
	if(check == "" || check != 0)
		{
			alert("Type in a correct input"); 
			document.getElementById("txtOsis").focus();
		}
	else
	{
		localStorage.setItem("Osis_num",Osis); 
		document.getElementById("txtClasses").focus();
	}
}
function Check4()
{
	Classes = document.getElementById("txtClasses").value; 
	var Check2 = Classes % 1;
	
	if(Classes == "" || Check2 != 0)
	{
		alert("Input a correct input")
		document.getElementById("txtClasses").focus();
	}
	else 
	{
		document.getElementById("txtClassname").focus();
	}
}
function Check5()
{
	Class = document.getElementById("txtClassname").value; 
	
	if(Class == "")
	{	
		alert("Type in a correct input")
		document.getElementById("txtClassname").focus();
	}
	else
	{
		localStorage.setItem("Class_name", Class);
		document.getElementById("txtClassname").value = "";
		document.getElementById("txtClassname").focus();
		count = count + 1 
		if(count == Classes)
		{
			document.getElementById("txtTeacher").focus();
		}
	}
}
