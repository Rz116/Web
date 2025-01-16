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
	calories()
}	
function calories()
{
	let maintain_1 = Bmr_maintain - 100;
	document.getElementById("maintain_1").textContent = maintain_1 + " calories";
	let maintain_2 = maintain_1 - 100;
	document.getElementById("maintain_2").textContent = maintain_2 + " calories";
	let maintain_3 = maintain_2 - 100;
	document.getElementById("maintain_3").textContent = maintain_3 + " calories";
	let maintain_4 = maintain_3 - 100; 
	document.getElementById("maintain_4").textContent = maintain_4 + " calories";
	let maintain_5 = maintain_4 - 100; 
	document.getElementById("maintain_5").textContent = maintain_5 + " calories";
	let maintain_6 = maintain_5 - 100; 
	document.getElementById("maintain_6").textContent = maintain_6 + " calories";

	var deficit_1 = maintain_1 - 500;
	document.getElementById("deficit_1").textContent = deficit_1 + " calories";
	var deficit_2 = maintain_2 - 500; 
	document.getElementById("deficit_2").textContent = deficit_2 + " calories";
	var deficit_3 = maintain_3 - 500; 
	document.getElementById("deficit_3").textContent = deficit_3 + " calories";
	var deficit_4 = maintain_4 - 500; 
	document.getElementById("deficit_4").textContent = deficit_4 + " calories";
	var deficit_5 = maintain_5 - 500; 
	document.getElementById("deficit_5").textContent = deficit_5 + " calories";
	var deficit_6 = maintain_6 - 500; 
	document.getElementById("deficit_6").textContent = deficit_6 + " calories";

	monthly_loss()
}
function monthly_loss()
{
	var Weight = localStorage.getItem("Current_weight"); 
	var goal = localStorage.getItem("Goal_weight");
	let month_1 = Weight - 4; 
	document.getElementById("month_1").textContent = month_1 + " pounds";
	let month_2 = month_1 - 4; 
	document.getElementById("month_2").textContent = month_2 + " pounds";
	let month_3 = month_2 - 4; 
	document.getElementById("month_3").textContent = month_3 + " pounds";
	let month_4 = month_3 - 4; 
	document.getElementById("month_4").textContent = month_4 + " pounds";
	let month_5 = month_4 - 4; 
	document.getElementById("month_5").textContent = month_5 + " pounds";
	let month_6 = month_5 - 4; 
	document.getElementById("month_6").textContent = month_6 + " pounds";

	let weight_lost = Weight - goal; 
	let time = weight_lost/4;
	switch(true)
	{
		case time < 1:
			document.getElementById("expected_1").textContent = "You will reach your goal weight here"; 
			document.getElementById("expected_1").style.fontWeight = "bold";
			break; 
		case time <= 2:
			document.getElementById("expected_2").textContent = "You will reach your goal weight here";
			document.getElementById("expected_2").style.fontWeight = "bold";
			break; 
		case time <= 3:
			document.getElementById("expected_3").textContent = "You will reach your goal weight here"; 
			document.getElementById("expected_3").style.fontWeight = "bold";
			break; 
		case time <= 4:
			document.getElementById("expected_4").textContent = "You will reach your goal weight here";
			document.getElementById("expected_4").style.fontWeight = "bold"; 
			break; 
		case time <= 5:
			document.getElementById("expected_5").textContent = "You will reach your goal weight here"; 
			document.getElementById("expected_5").style.fontWeight = "bold";
			break; 
		case time <= 6 : 
			document.getElementById("expected_6").textContent = "You will reach your goal weight here"; 
			document.getElementById("expected_6").style.fontWeight = "bold";
			break; 
		default:
			let excess = time - 6;
			let rounded_excess = Math.round(excess);
			if(rounded_excess > 12)
			{
				let years = rounded_excess/12;
				let rounded_years = Math.round(years)
				if(rounded_years == 1)
				{
					document.getElementById("Expected").textContent = "It will take an extra Year to reach your goal weight";
					document.getElementById("Expected").style.fontWeight = "bold";
				}
				else
				{
					document.getElementById("Expected").textContent = "It will take an extra " + rounded_years + " years to reach your goal weight";
					document.getElementById("Expected").style.fontWeight = "bold";
				}
			}
			else
			{
				document.getElementById("Expected").textContent = "You will reach your goal weight in  " + rounded_excess + " extra months";
				document.getElementById("Expected").style.fontWeight = "bold";
			}
			break;
	}
}