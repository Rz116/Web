window.addEventListener("load",button); 
function button()
{
    document.getElementById("question_2").style.display = "none";
    document.getElementById("question_3").style.display = "none";
    document.getElementById("question_4").style.display = "none";
    document.getElementById("question_5").style.display = "none";
    document.getElementById("question_6").style.display = "none";
    document.getElementById("Home").addEventListener("click",Home_Page);
    document.getElementById("Submit_1").addEventListener("click",Question_1); 
    document.getElementById("submit_2").addEventListener("click",Question_2); 
    document.getElementById("submit_3").addEventListener("click",Question_3); 
    document.getElementById("submit_4").addEventListener("click",Question_4); 
    document.getElementById("submit_5").addEventListener("click",Question_5); 
    document.getElementById("submit_6").addEventListener("click",Question_6); 
}
function Home_Page()
{
    window.location.href = "Home.html";
}
function Question_1()
{
    document.getElementById("question_1").style.display = "none";
    document.getElementById("question_2").style.display = "block";
    document.getElementById("answer_2").focus();
}
function Question_2()
{
    document.getElementById("question_2").style.display = "none";
    document.getElementById("question_3").style.display = "block";
    document.getElementById("answer_3").focus();
}
function Question_3()
{
    document.getElementById("question_3").style.display = "none";
    document.getElementById("question_4").style.display = "block";
    document.getElementById("answer_4").focus();
}
function Question_4()
{
    document.getElementById("question_4").style.display = "none";
    document.getElementById("question_5").style.display = "block";
    document.getElementById("answer_5").focus();
}
function Question_5()
{
    document.getElementById("question_5").style.display = "none";
    document.getElementById("question_6").style.display = "block";
}
function Question_6()
{
    document.getElementById("answer_6").focus();
    var answer = document.getElementById("answer_6").value;
    alert(answer)
}

