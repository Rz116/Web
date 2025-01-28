window.addEventListener("load",addthings); 
function addthings()
{
    document.getElementById("Heading").addEventListener("click", home);
    document.getElementById("button_login").addEventListener("click",login);
    document.getElementById("button_SignUp").addEventListener("click",signup);
}
function home()
{
    window.location.href = "home.html";
}
function signup()
{
    var username = document.getElementById("user_name_new").value; 
    var email = document.getElementById("Email").value; 
    var password = document.getElementById("Password_new").value; 
    let check1 = email/1; 
    let check2 = parseInt(email)/1;
    let check3 = username.length; 
    let check4 = password.length;
    switch(true)
    {
        case username == "" || email == "" || password == "":
            document.getElementById("Password_new").value = ""; 
            document.getElementById("user_name_new").value = ""; 
            document.getElementById("Password_new").value = "";
            alert("You must type in a username,password and email!!"); 
            break; 
        case check1 == check2:
            document.getElementById("Email").value = ""; 
            document.getElementById("Email").focus();
            alert("You must type in a valid email address(It cannot be just a number)"); 
            break; 
        case check3 < 3:
            document.getElementById("user_name_new").value = "";
            document.getElementById("user_name_new").focus();
            alert("Your username must 3 or more characters long!");
            break; 
        case check4 < 6:
            document.getElementById("Password_new").value = "";
            document.getElementById("Password_new").focus();
            alert("Your password must be 6 or more characters long!"); 
            break; 
        default:
            localStorage.setItem("username_value",username); 
            localStorage.setItem("email_value",email); 
            localStorage.setItem("password_value",password);
            localStorage.setItem("login_status",true); 
            localStorage.setItem("BMR_Maintain",""); 
            localStorage.setItem("Bmi_Original",""); 
            localStorage.setItem("Bmi_after","");
            localStorage.setItem("Bmr_deficit",""); 
            localStorage.setItem("Current_weight","");
            localStorage.setItem("Goal_weight","");
            window.location.href = "tracker.html";
            break;
    }
}
function login()
{   
    var username_get = document.getElementById("user_name").value; 
    var password_get = document.getElementById("Password").value; 
    let actual_name = localStorage.getItem("username_value"); 
    let actual_password = localStorage.getItem("password_value"); 
    if(username_get != actual_name)
    {
        document.getElementById("user_name").value = ""; 
        document.getElementById("user_name").focus(); 
        alert("Your Username is Incorrect!"); 
    }
    else if(password_get != actual_password)
    {
        document.getElementById("Password").value = ""; 
        document.getElementById("Password").focus(); 
        alert("Your Password is Incorrect!");
    }
    else
    {
        localStorage.setItem("login_status",true);
        window.location.href = "home.html";
    }
}