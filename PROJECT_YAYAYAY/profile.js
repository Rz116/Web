window.addEventListener("load",information); 
function profile()
{
    document.getElementById("Heading").addEventListener("click",home);
}
function home()
{
    window.location.href = "home.html";
}
function information()
{
    var username = localStorage.getItem("username_value"); 
    document.getElementById("user").textContent = username;
    document.getElementById("user").style.textDecoration = "underline";
    var email = localStorage.getItem("email_value"); 
    document.getElementById("email").textContent = email; 
    document.getElementById("email").style.textDecoration = "underline"; 
    var start = localStorage.getItem("Current_weight"); 
    document.getElementById("Starting").textContent = start + " Lbs";
    document.getElementById("Starting").style.textDecoration = "underline"; 
    var end = localStorage.getItem("Goal_weight");
    document.getElementById("goal").textContent = end + " Lbs"; 
    document.getElementById("goal").style.textDecoration = "underline";
    profile();
}