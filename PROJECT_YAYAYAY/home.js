window.addEventListener("load",Page); 
function Page()
{
    let login = localStorage.getItem("login_status"); 
    if (login == "")
    {
        localStorage.setItem("login_status","")
        document.getElementById("Heading_2").style.display = "none";
    }
    else
    {
        document.getElementById("Heading").style.display = "none";
    }
    direct()
}
function direct()
{
    document.getElementById("Weight_Tracker_2").addEventListener("click",Tracker);
    document.getElementById("benefit1").addEventListener("click",Direct1);
    document.getElementById("benefit2").addEventListener("click",Direct2);
    document.getElementById("consequence1").addEventListener("click",Direct4);
    document.getElementById("consequence2").addEventListener("click",Direct5);
    document.getElementById("BM").addEventListener("click",Direct3);
    document.getElementById("BM_2").addEventListener("click",DirectLOg);
    document.getElementById("BM_login").addEventListener("click",DirectHome);
    document.getElementById("Weight_Tracker_login").addEventListener("click",DirectTracker);
    document.getElementById("BM_3").addEventListener("click",logout);
    document.getElementById("Weight_Tracker").addEventListener("click",Direct6);
    document.getElementById("PROFILE").addEventListener("click",profile);
}
function profile()
{
    window.location.href = "profile.html";
}
function Tracker()
{
    window.location.href = "tracker.html";
}
function logout()
{
    localStorage.setItem("login_status",""); 
    window.location.href = "home.html";
}
function DirectTracker()
{
    window.location.href = "Output.html";
}
function DirectHome()
{   
    window.location.href = "home.html";
}
function DirectLOg()
{
    window.location.href = "login.html";
}
function Direct1()
{
    window.location.href = "benefit1.html";
}
function Direct2()
{
    window.location.href = "benefit1.html";
}
function Direct3()
{
    window.location.href = "Home.html"
}
function Direct4()
{
    window.location.href = "consequence1.html";
}
function Direct5()
{
    window.location.href = "consequence1.html";
}
function Direct6()
{
    window.location.href = "tracker.html";
}
