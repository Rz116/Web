window.addEventListener("load",events); 
function events()
{
	document.getElementById("Home").addEventListener("click",home);
	stuff()
}
function home()
{
	window.location.href = "Home.html";
}
function stuff()
{
	var Bmi_original = localStorage.getItem("Bmi_Original"); 
	document.getElementById("BMI_current").textContent = Bmi_original;
	document.getElementById("BMI_current").style.fontWeight = "bold";

	var Bmi_after = localStorage.getItem("Bmi_after"); 
	document.getElementById("BMI_Goal").textContent = Bmi_after;
	document.getElementById("BMI_Goal").style.fontWeight = "bold";

	var Bmr_maintain = localStorage.getItem("BMR_Maintain"); 
	document.getElementById("Calories_Maintain").textContent = Bmr_maintain;
	document.getElementById("Calories_Maintain").style.fontWeight = "bold";

	var Bmr_deficit = localStorage.getItem("Bmr_deficit"); 
	document.getElementById("Calories_deficit").textContent = Bmr_deficit;
	document.getElementById("Calories_deficit").style.fontWeight = "bold";
}