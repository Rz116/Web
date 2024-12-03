window.addEventListener("load",big);
var Name, Grade, Classes,Class, count = 0,Osis,Teacher;
function big()
{
	document.getElementById("Input3").style.display = "none";
	document.getElementById("Input4").style.display = "none";
	document.getElementById("Input5").style.display = "none";
	document.getElementById("Input6").style.display = "none";
	document.getElementById("Input7").style.display = "none";
	document.getElementById("Input2").style.display = "none";
    document.getElementById("Output").style.display = "none";
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
	var thingy = !isNaN(Name);
	if (Name == "" || thingy == true)
	{
		alert("Type in a correct input")
		document.getElementById("txtName").value = "";
		document.getElementById("txtName").focus();
	}
	else
	{
		localStorage.setItem("FUllname",Name); 
		document.getElementById("Input1").style.display = "none"; 
		document.getElementById("Input2").style.display = "block"; 
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
			document.getElementById("Input3").style.display = "none"; 
			document.getElementById("Input4").style.display = "block";
			localStorage.setItem("Grade_level",Grade);
			document.getElementById("txtClasses").focus();
		}
}
function Check3()
{
	Osis = document.getElementById("txtOsis").value; 
	var check = Osis % 1; 
	var length = Osis.length;
	if(Osis == "" || check != 0 || length < 9 || length > 9)
		{
			alert("Type in a correct input"); 
			document.getElementById("txtOsis").value = "";
			document.getElementById("txtOsis").focus();
		}
	else
	{
		document.getElementById("Input2").style.display = "none"; 
		document.getElementById("Input3").style.display = "block";
		localStorage.setItem("Osis_num",Osis); 
		document.getElementById("txtGradeLevel").focus();
	}
}
function Check4()
{
	Classes = document.getElementById("txtClasses").value; 
	var Check2 = Classes % 1;
	
	if(Classes == "" || Check2 != 0 || Classes > 8 || Classes < 8)
	{
		alert("Input a correct input")
		document.getElementById("txtClasses").value = "";
		document.getElementById("txtClasses").focus();
	}
	else 
	{
		document.getElementById("Input4").style.display = "none"; 
		document.getElementById("Input5").style.display = "block";
		document.getElementById("txtClassname").focus();
	}
}
function Check5()
{
	Class = document.getElementById("txtClassname").value; 
	var checker = !isNaN(Class);
	if(Class == "" || checker == true)
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
			document.getElementById("Input5").style.display = "none"; 
			document.getElementById("Input6").style.display = "block";
			document.getElementById("txtRoom").focus();
			count = 0;
		}
	}
}
function Check6()
{
	var Room = document.getElementById("txtRoom").value; 
	var Check = Room % 1;
	var length = Room.length;
	if(Room == "" || Check != 0 || length > 3 || length < 3)
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
		document.getElementById("InputRoom").textContent = "Input Period " + Inputter + " Room (3 Digits):";
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
			document.getElementById("Input6").style.display = "none"; 
			document.getElementById("Input7").style.display = "block";
			document.getElementById("txtTeacher").focus();
			count = 0;
		}
	}
}

function Check7()
{
	Teacher = document.getElementById("txtTeacher").value;
	var WoW = !isNaN(Teacher);
	if(Teacher == "" || WoW == true)
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
			Content();
		}
	}
}
function Content()
{
    document.getElementById("Input7").style.display = "none"; 
    document.getElementById("header").style.display = "none";
    document.getElementById("Output").style.display = "block";
    var Osis_num = localStorage.getItem("Osis_num"); 
	document.getElementById("OsisNumber").textContent = Osis_num;
	
	var Full_name = localStorage.getItem("FUllname");
	document.getElementById("fullname").textContent = Full_name; 
	
	var Grade_level = localStorage.getItem("Grade_level"); 
	document.getElementById("Grade_level").textContent = Grade_level;
	classes()
}
function classes()
{
    var classone = localStorage.getItem("Class_name1"); 
	document.getElementById("Period1_Class_Day1").textContent = classone; 
	document.getElementById("Period1_Class_Day2").textContent = classone; 
	document.getElementById("Period1_Class_Day3").textContent = classone; 
	document.getElementById("Period1_Class_Day4").textContent = classone; 
	document.getElementById("Period1_Class_Day5").textContent = classone; 
	
	var TeacherOne = localStorage.getItem("Teacher_name1"); 
	document.getElementById("Period1_Teacher_Day1").textContent = TeacherOne;
	document.getElementById("Period1_Teacher_Day2").textContent = TeacherOne;
	document.getElementById("Period1_Teacher_Day3").textContent = TeacherOne;
	document.getElementById("Period1_Teacher_Day4").textContent = TeacherOne;
	document.getElementById("Period1_Teacher_Day5").textContent = TeacherOne;

	var classtwo = localStorage.getItem("Class_name2"); 
	document.getElementById("Period2_Class_Day1").textContent = classtwo; 
	document.getElementById("Period2_Class_Day2").textContent = classtwo; 
	document.getElementById("Period2_Class_Day3").textContent = classtwo; 
	document.getElementById("Period2_Class_Day4").textContent = classtwo; 
	document.getElementById("Period2_Class_Day5").textContent = classtwo; 
	
	var TeacherTwo = localStorage.getItem("Teacher_name2"); 
	document.getElementById("Period2_Teacher_Day1").textContent = TeacherTwo; 
	document.getElementById("Period2_Teacher_Day2").textContent = TeacherTwo; 
	document.getElementById("Period2_Teacher_Day3").textContent = TeacherTwo; 
	document.getElementById("Period2_Teacher_Day4").textContent = TeacherTwo; 
	document.getElementById("Period2_Teacher_Day5").textContent = TeacherTwo; 
	
	var classthree = localStorage.getItem("Class_name3"); 
	document.getElementById("Period3_Class_Day1").textContent = classthree; 
	document.getElementById("Period3_Class_Day2").textContent = classthree; 
	document.getElementById("Period3_Class_Day3").textContent = classthree; 
	document.getElementById("Period3_Class_Day4").textContent = classthree; 
	document.getElementById("Period3_Class_Day5").textContent = classthree; 
	
	var Teacherthree = localStorage.getItem("Teacher_name3"); 
	document.getElementById("Period3_Teacher_Day1").textContent = Teacherthree; 
	document.getElementById("Period3_Teacher_Day2").textContent = Teacherthree; 
	document.getElementById("Period3_Teacher_Day3").textContent = Teacherthree; 
	document.getElementById("Period3_Teacher_Day4").textContent = Teacherthree; 
	document.getElementById("Period3_Teacher_Day5").textContent = Teacherthree; 
	
	var classfour = localStorage.getItem("Class_name4"); 
	document.getElementById("Period4_Class_Day1").textContent = classfour; 
	document.getElementById("Period4_Class_Day2").textContent = classfour; 
	document.getElementById("Period4_Class_Day3").textContent = classfour; 
	document.getElementById("Period4_Class_Day4").textContent = classfour; 
	document.getElementById("Period4_Class_Day5").textContent = classfour; 
	
	var TeacherFour = localStorage.getItem("Teacher_name4"); 
	document.getElementById("Period4_Teacher_Day1").textContent = TeacherFour; 
	document.getElementById("Period4_Teacher_Day2").textContent = TeacherFour; 
	document.getElementById("Period4_Teacher_Day3").textContent = TeacherFour; 
	document.getElementById("Period4_Teacher_Day4").textContent = TeacherFour; 
	document.getElementById("Period4_Teacher_Day5").textContent = TeacherFour; 
	
	var classfive = localStorage.getItem("Class_name5"); 
	document.getElementById("Period5_Class_Day1").textContent = classfive; 
	document.getElementById("Period5_Class_Day2").textContent = classfive; 
	document.getElementById("Period5_Class_Day3").textContent = classfive; 
	document.getElementById("Period5_Class_Day4").textContent = classfive; 
	document.getElementById("Period5_Class_Day5").textContent = classfive; 
	
	var TeacherFive = localStorage.getItem("Teacher_name5"); 
	document.getElementById("Period5_Teacher_Day1").textContent = TeacherFive; 
	document.getElementById("Period5_Teacher_Day2").textContent = TeacherFive; 
	document.getElementById("Period5_Teacher_Day3").textContent = TeacherFive; 
	document.getElementById("Period5_Teacher_Day4").textContent = TeacherFive; 
	document.getElementById("Period5_Teacher_Day5").textContent = TeacherFive; 
	
	var classsix = localStorage.getItem("Class_name6"); 
	document.getElementById("Period6_Class_Day1").textContent = classsix; 
	document.getElementById("Period6_Class_Day2").textContent = classsix; 
	document.getElementById("Period6_Class_Day3").textContent = classsix; 
	document.getElementById("Period6_Class_Day4").textContent = classsix; 
	document.getElementById("Period6_Class_Day5").textContent = classsix; 
	
	var TeacherSix = localStorage.getItem("Teacher_name6"); 
	document.getElementById("Period6_Teacher_Day1").textContent = TeacherSix; 
	document.getElementById("Period6_Teacher_Day2").textContent = TeacherSix; 
	document.getElementById("Period6_Teacher_Day3").textContent = TeacherSix; 
	document.getElementById("Period6_Teacher_Day4").textContent = TeacherSix; 
	document.getElementById("Period6_Teacher_Day5").textContent = TeacherSix; 
	
	var classseven = localStorage.getItem("Class_name7"); 
	document.getElementById("Period7_Class_Day1").textContent = classseven; 
	document.getElementById("Period7_Class_Day2").textContent = classseven; 
	document.getElementById("Period7_Class_Day3").textContent = classseven; 
	document.getElementById("Period7_Class_Day4").textContent = classseven; 
	document.getElementById("Period7_Class_Day5").textContent = classseven; 
	
	var TeacherSeven = localStorage.getItem("Teacher_name7");
	document.getElementById("Period7_Teacher_Day1").textContent = TeacherSeven; 
	document.getElementById("Period7_Teacher_Day2").textContent = TeacherSeven; 
	document.getElementById("Period7_Teacher_Day3").textContent = TeacherSeven; 
	document.getElementById("Period7_Teacher_Day4").textContent = TeacherSeven; 
	document.getElementById("Period7_Teacher_Day5").textContent = TeacherSeven; 
	
	var classeight = localStorage.getItem("Class_name8"); 
	document.getElementById("Period8_Class_Day1").textContent = classeight; 
	document.getElementById("Period8_Class_Day2").textContent = classeight; 
	document.getElementById("Period8_Class_Day3").textContent = classeight; 
	document.getElementById("Period8_Class_Day4").textContent = classeight; 
	document.getElementById("Period8_Class_Day5").textContent = classeight; 

	var TeacherEight = localStorage.getItem("Teacher_name8"); 
	document.getElementById("Period8_Teacher_Day1").textContent = TeacherEight; 
	document.getElementById("Period8_Teacher_Day2").textContent = TeacherEight; 
	document.getElementById("Period8_Teacher_Day3").textContent = TeacherEight; 
	document.getElementById("Period8_Teacher_Day4").textContent = TeacherEight; 
	document.getElementById("Period8_Teacher_Day5").textContent = TeacherEight; 
	Rooms()
}
function Rooms()
{
    var RoomOne = localStorage.getItem("Class_Room1"); 
	document.getElementById("Period1_room_1").textContent = RoomOne;
	document.getElementById("Period1_room_2").textContent = RoomOne;
	document.getElementById("Period1_room_3").textContent = RoomOne;
	document.getElementById("Period1_room_4").textContent = RoomOne;
	document.getElementById("Period1_room_5").textContent = RoomOne;
	
	var RoomTwo = localStorage.getItem("Class_Room2"); 
	document.getElementById("Period2_room_1").textContent = RoomTwo;
	document.getElementById("Period2_room_2").textContent = RoomTwo;
	document.getElementById("Period2_room_3").textContent = RoomTwo;
	document.getElementById("Period2_room_4").textContent = RoomTwo;
	document.getElementById("Period2_room_5").textContent = RoomTwo;
	
	var RoomThree = localStorage.getItem("Class_Room3"); 
	document.getElementById("Period3_room_1").textContent = RoomThree;
	document.getElementById("Period3_room_2").textContent = RoomThree;
	document.getElementById("Period3_room_3").textContent = RoomThree;
	document.getElementById("Period3_room_4").textContent = RoomThree;
	document.getElementById("Period3_room_5").textContent = RoomThree;	
	
	var RoomFour = localStorage.getItem("Class_Room4"); 
	document.getElementById("Period4_room_1").textContent = RoomFour;
	document.getElementById("Period4_room_2").textContent = RoomFour;
	document.getElementById("Period4_room_3").textContent = RoomFour;
	document.getElementById("Period4_room_4").textContent = RoomFour;
	document.getElementById("Period4_room_5").textContent = RoomFour;
	
	var RoomFive = localStorage.getItem("Class_Room5"); 
	document.getElementById("Period5_room_1").textContent = RoomFive;
	document.getElementById("Period5_room_2").textContent = RoomFive;
	document.getElementById("Period5_room_3").textContent = RoomFive;
	document.getElementById("Period5_room_4").textContent = RoomFive;
	document.getElementById("Period5_room_5").textContent = RoomFive;
	
	var RoomSix = localStorage.getItem("Class_Room6"); 
	document.getElementById("Period6_room_1").textContent = RoomSix;
	document.getElementById("Period6_room_2").textContent = RoomSix;
	document.getElementById("Period6_room_3").textContent = RoomSix;
	document.getElementById("Period6_room_4").textContent = RoomSix;
	document.getElementById("Period6_room_5").textContent = RoomSix;

	var RoomSeven = localStorage.getItem("Class_Room7"); 
	document.getElementById("Period7_room_1").textContent = RoomSeven;
	document.getElementById("Period7_room_2").textContent = RoomSeven;
	document.getElementById("Period7_room_3").textContent = RoomSeven;
	document.getElementById("Period7_room_4").textContent = RoomSeven;
	document.getElementById("Period7_room_5").textContent = RoomSeven;	
	
	var RoomEight = localStorage.getItem("Class_Room8"); 
	document.getElementById("Period8_room_1").textContent = RoomEight;
	document.getElementById("Period8_room_2").textContent = RoomEight;
	document.getElementById("Period8_room_3").textContent = RoomEight;
	document.getElementById("Period8_room_4").textContent = RoomEight;
	document.getElementById("Period8_room_5").textContent = RoomEight;
}
