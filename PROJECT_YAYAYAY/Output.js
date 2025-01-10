window.addEventListener("load",events); 
var Bmr_deficit,Bmr_deficit;
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

	Bmr_maintain = localStorage.getItem("BMR_Maintain"); 
	document.getElementById("Calories_Maintain").textContent = Bmr_maintain;
	document.getElementById("Calories_Maintain").style.fontWeight = "bold";

	Bmr_deficit = localStorage.getItem("Bmr_deficit"); 
	document.getElementById("Calories_deficit").textContent = Bmr_deficit;
	document.getElementById("Calories_deficit").style.fontWeight = "bold";
	workout()
}
function workout()
{
	let Day_1 = ["Bench Press: 4 sets of 8 to 10 reps","Incline Press 3 sets of 10 to 12 reps","Chest Fly 3 sets of 12 to 15 reps",
				  "Tricep Extension: 3 sets of 10 to 12 reps","Tricep Pushdown: 3 sets of 12 to 15 reps"];
	let element_1 = document.getElementById("day_1"); 
	let length_1 = Day_1.length;
	for(let i = 0; i < length_1; i++ )
	{
		let li = document.createElement("li"); 
		li.innerText = Day_1[i]; 
		element_1.appendChild(li);
		li.style.fontSize = "16px";
		li.style.marginBottom = "10%";
	}

	let Day_2 = ["Deadlift: 4 sets of 6 to 8 reps","Lat Pulldown 3 sets 10 to 12 Reps","Barbell Row: 4 sets of 8 to 10 reps",
				"Seated Cable Row: 3 sets of 12 to 15 reps", "Bicep Curl: 3 sets of 10 to 12 reps","Hammer Curl: 3 sets of 12 to 15 reps"];
	let element_2 = document.getElementById("day_2"); 
	let length_2 = Day_2.length; 
	for(let i = 0; i < length_2; i++) 
	{
		let li = document.createElement("li"); 
		li.innerText = Day_2[i]; 
		element_2.appendChild(li);
		li.style.fontSize = "16px";
		li.style.marginBottom = "10%";
	}
	let Day_4 = ["Overhead Press: 4 sets of 8 to 10 reps","Lateral Raise: 3 sets of 12 to 15 reps","Arnold Press: 3 sets of 10 to 12 reps",
				"Face Pulls: 3 sets of 12 to 15 reps", "Shrugs: 3 sets of 15 to 20 reps"];
	let element_4 = document.getElementById("day_4"); 
	let length_4 = Day_4.length; 
	for(let i = 0; i < length_4; i++) 
	{
		let li = document.createElement("li"); 
		li.innerText = Day_4[i]; 
		element_4.appendChild(li);
		li.style.fontSize = "16px";
		li.style.marginBottom = "10%";
	}
	let Day_5 = ["Back Squat: 4 sets of 8 to 10 reps","Leg Press: 3 sets of 12 to 15 reps", "Walking Lunges: 3 sets of 12 steps per leg", 
				"Leg Curl: 3 sets of 12 to 15 reps", "Calf Raise: 3 sets of 15 to 20 reps"];
	let element_5 = document.getElementById("day_5"); 
	let length_5 = Day_5.length; 
	for(let i = 0; i < length_5; i++) 
	{
		let li = document.createElement("li"); 
		li.innerText = Day_5[i]; 
		element_5.appendChild(li);
		li.style.fontSize = "16px";
		li.style.marginBottom = "10%";
	}
	Nutri()
}
function Nutri()
{
	var cal_deficit = localStorage.getItem("Bmr_deficit"); 
	document.getElementById("cals1").textContent = cal_deficit + " Calories";
	document.getElementById("cals2").textContent = cal_deficit + " Calories";
	document.getElementById("cals3").textContent = cal_deficit + " Calories";
	document.getElementById("cals4").textContent = cal_deficit + " Calories";
	document.getElementById("cals5").textContent = cal_deficit + " Calories";
	document.getElementById("cals6").textContent = cal_deficit + " Calories";
	document.getElementById("cals7").textContent = cal_deficit + " Calories";

	var protein = localStorage.getItem("Goal_weight"); 
	document.getElementById("protein1").textContent = protein + "g of protein";
	document.getElementById("protein2").textContent = protein + "g of protein";
	document.getElementById("protein3").textContent = protein + "g of protein";
	document.getElementById("protein4").textContent = protein + "g of protein";
	document.getElementById("protein5").textContent = protein + "g of protein";
	document.getElementById("protein6").textContent = protein + "g of protein";
	document.getElementById("protein7").textContent = protein + "g of protein";

	var fat = (Bmr_deficit * 0.25) / 9; 
	let round_fat = Math.round(fat);
	document.getElementById("fats1").textContent = round_fat + "g of fats";
	document.getElementById("fats2").textContent = round_fat + "g of fats";
	document.getElementById("fats3").textContent = round_fat + "g of fats";
	document.getElementById("fats4").textContent = round_fat + "g of fats";
	document.getElementById("fats5").textContent = round_fat + "g of fats";
	document.getElementById("fats6").textContent = round_fat + "g of fats";
	document.getElementById("fats7").textContent = round_fat + "g of fats";


	var carb = (protein * 1.5)
	let round_carb = Math.round(carb); 
	document.getElementById("carbs1").textContent = round_carb + "g of carbs";
	document.getElementById("carbs2").textContent = round_carb + "g of carbs";
	document.getElementById("carbs3").textContent = round_carb + "g of carbs";
	document.getElementById("carbs4").textContent = round_carb + "g of carbs";
	document.getElementById("carbs5").textContent = round_carb + "g of carbs";
	document.getElementById("carbs6").textContent = round_carb + "g of carbs";
	document.getElementById("carbs7").textContent = round_carb + "g of carbs";

}	
