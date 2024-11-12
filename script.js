window.addEventListener("load",big);
var Name, Grade, Classes,Class, count = 0,Osis,Teacher;
function big()
{
	document.getElementById("Name_Submit").addEventListener("click",Check1);
	document.getElementById("Grade_Submit").addEventListener("click",Check2);
	document.getElementById("Osis_Submit").addEventListener("click",Check3)
	document.getElementById("submit").addEventListener("click",Check4);
	document.getElementById("Class_Submit").addEventListener("click",Check5);
	document.getElementById("Room_Submit").addEventListener("click",Check6);
	document.getElementById("Teacher_Submit").addEventListener("click",Check7);
}	

function Check1()
{
	localStorage.clear();
	Name = document.getElementById("txtName").value; 
	if (Name == "")
	{
		alert("Type in a correct input")
		document.getElementById("txtName").value = "";
		document.getElementById("txtName").focus();
	}
	else
	{
		localStorage.setItem("FUllname",Name); 
		document.getElementById("txtOsis").focus();
	}
}
function Check2()
{
	Grade = document.getElementById("txtGradeLevel").value; 
	var Check = Grade % 1;
	if(Grade == "" || Check != 0 || Grade > 12 || Grade < 1)
		{
			alert("Input a correct input")
			document.getElementById("txtGradeLevel").value = "";
			document.getElementById("txtGradeLevel").focus();
		}
	else
		{
			localStorage.setItem("Grade_level",Grade);
			document.getElementById("txtClasses").focus();
		}
}
function Check3()
{
	Osis = document.getElementById("txtOsis").value; 
	var check = Osis % 1; 
	if(Osis == "" || check != 0)
		{
			alert("Type in a correct input"); 
			document.getElementById("txtOsis").value = "";
			document.getElementById("txtOsis").focus();
		}
	else
	{
		localStorage.setItem("Osis_num",Osis); 
		document.getElementById("txtGradeLevel").focus();
	}
}
function Check4()
{
	Classes = document.getElementById("txtClasses").value; 
	var Check2 = Classes % 1;
	
	if(Classes == "" || Check2 != 0 || Classes > 8 || Classes < 0)
	{
		alert("Input a correct input")
		document.getElementById("txtClasses").value = "";
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
		document.getElementById("txtClassname").value = "";
		document.getElementById("txtClassname").focus();
	}
	else
	{
		document.getElementById("txtClassname").value = "";
		count = count + 1 
		Inputter = count + 1
		document.getElementById("InputClassName").textContent = "Input Period " + Inputter + " Class:";
		switch(true)
		{
			case count == 1: 
				localStorage.setItem("Class_name1", Class);
				document.getElementById("txtClassname").focus();
				break;
			case count == 2: 
				localStorage.setItem("Class_name2", Class); 
				document.getElementById("txtClassname").focus();
				break;
			case count == 3: 
				localStorage.setItem("Class_name3", Class);
				document.getElementById("txtClassname").focus();
				break;
			case count == 4: 
				localStorage.setItem("Class_name4", Class);
				document.getElementById("txtClassname").focus();
				break; 
			case count == 5: 
				localStorage.setItem("Class_name5", Class);
				document.getElementById("txtClassname").focus();
				break;
			case count == 6: 
				localStorage.setItem("Class_name6", Class); 
				document.getElementById("txtClassname").focus();
				break;
			case count == 7: 
				localStorage.setItem("Class_name7", Class); 
				document.getElementById("txtClassname").focus();
				break; 
			case count == 8: 
				localStorage.setItem("Class_name8", Class); 
				document.getElementById("txtClassname").focus();
				break;
			default: 
				document.getElementById("txtClassname").focus();
				break;
		}
		if(count == Classes)
		{
			document.getElementById("txtRoom").focus();
			count = 0;
		}
	}
}
function Check6()
{
	var Room = document.getElementById("txtRoom").value; 
	var Check = Room % 1;
	if(Room == "" || Check != 0)
	{	
		alert("Type in a correct input")
		document.getElementById("txtRoom").value = "";
		document.getElementById("txtRoom").focus();
	}
	else
	{
		document.getElementById("txtRoom").value = "";
		count = count + 1 
		Inputter = count + 1
		document.getElementById("InputRoom").textContent = "Input Period " + Inputter + " Room:";
		switch(true)
		{
			case count == 1: 
				localStorage.setItem("Class_Room1", Room);
				document.getElementById("txtRoom").focus();
				break;
			case count == 2: 
				localStorage.setItem("Class_Room2", Room); 
				document.getElementById("txtRoom").focus();
				break;
			case count == 3: 
				localStorage.setItem("Class_Room3", Room);
				document.getElementById("txtRoom").focus();
				break;
			case count == 4: 
				localStorage.setItem("Class_Room4", Room);
				document.getElementById("txtRoom").focus();
				break; 
			case count == 5: 
				localStorage.setItem("Class_Room5", Room);
				document.getElementById("txtRoom").focus();
				break;
			case count == 6: 
				localStorage.setItem("Class_Room6", Room); 
				document.getElementById("txtRoom").focus();
				break;
			case count == 7: 
				localStorage.setItem("Class_Room7", Room); 
				document.getElementById("txtRoom").focus();
				break; 
			case count == 8: 
				localStorage.setItem("Class_Room8", Room); 
				document.getElementById("txtRoom").focus();
				break;
			default: 
				document.getElementById("txtRoom").focus();
				break;
		}
		if(count == Classes)
		{
			document.getElementById("txtTeacher").focus();
			count = 0;
		}
	}
}

function Check7()
{
	Teacher = document.getElementById("txtTeacher").value;
	
	if(Teacher == "")
	{
		alert("Type in a correct input");
		document.getElementById("txtTeacher").value = "";
		document.getElementById("txtTeacher").focus();
	}
	else
	{
		document.getElementById("txtTeacher").value = "";
		count = count + 1; 
		Inputter = count + 1
		document.getElementById("InputTeacher").textContent = "Input Period " + Inputter + " Teacher: ";
		switch(true)
		{
			case count == 1: 
				localStorage.setItem("Teacher_name1", Teacher);
				document.getElementById("txtTeacher").focus();
				break;
			case count == 2: 
				localStorage.setItem("Teacher_name2", Teacher); 
				document.getElementById("txtTeacher").focus();
				break;
			case count == 3: 
				localStorage.setItem("Teacher_name3", Teacher);
				document.getElementById("txtTeacher").focus();
				break;
			case count == 4: 
				localStorage.setItem("Teacher_name4", Teacher);
				document.getElementById("txtTeacher").focus();
				break; 
			case count == 5: 
				localStorage.setItem("Teacher_name5", Teacher);
				document.getElementById("txtTeacher").focus();
				break;
			case count == 6: 
				localStorage.setItem("Teacher_name6", Teacher); 
				document.getElementById("txtTeacher").focus();
				break;
			case count == 7: 
				localStorage.setItem("Teacher_name7", Teacher); 
				document.getElementById("txtTeacher").focus();
				break; 
			case count == 8: 
				localStorage.setItem("Teacher_name8", Teacher); 
				document.getElementById("txtTeacher").focus();
				break;
			default: 
				document.getElementById("txtTeacher").focus();
				break;
		}
		if(count == Classes)
		{
			window.location.href = "YESS.html";
		}
	}
}

