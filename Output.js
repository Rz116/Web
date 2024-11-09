window.addEventListener("load",Content);
var classone, classtwo, classthree, classfour, classfive, classsix, classseven,classeight;
function Content()
{
	Osis_num = localStorage.getItem("Osis_num"); 
	document.getElementById("OsisNumber").textContent = Osis_num;
	
	Full_name = localStorage.getItem("FUllname");
	document.getElementById("fullname").textContent = Full_name; 
	
	Grade_level = localStorage.getItem("Grade_level"); 
	document.getElementById("Grade_level").textContent = Grade_level;
	Textcontent()
}
function Textcontent()
{
	classone = localStorage.getItem("Class_name1"); 
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
	
	classtwo = localStorage.getItem("Class_name2"); 
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
	
	classthree = localStorage.getItem("Class_name3"); 
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
	
	classfour = localStorage.getItem("Class_name4"); 
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
	
	classfive = localStorage.getItem("Class_name5"); 
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
	
	classsix = localStorage.getItem("Class_name6"); 
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
	
	classseven = localStorage.getItem("Class_name7"); 
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
	
	classeight = localStorage.getItem("Class_name8"); 
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

}
