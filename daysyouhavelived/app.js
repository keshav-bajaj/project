var stylesheet = document.createElement("link");
stylesheet.setAttribute("rel" , "stylesheet");
stylesheet.setAttribute("href" , "style.css");
document.head.appendChild(stylesheet);

var heading = document.createElement("h1");
heading.innerHTML = "Find How Many Days You Have Lived";
document.body.appendChild(heading);

var headlink = document.createElement("a");
headlink.setAttribute("id" , "head-link");
headlink.setAttribute("href" , "https://keshav-bajaj.github.io/")
headlink.setAttribute("target" , "__blank")
document.body.appendChild(headlink);

var heading2 = document.createElement("h2");
heading2.innerHTML = "Made By Keshav Bajaj :)";
heading2.setAttribute("id" , "heading2");
document.getElementById("head-link").appendChild(heading2);

var container = document.createElement("DIV");
container.setAttribute("id" , "main-container");
document.body.appendChild(container);

var declare = document.createElement("div");
declare.innerHTML = "You Have Lived :\n";
declare.setAttribute("id" , "you-box");
container.appendChild(declare);

var timebox = document.createElement("div");
timebox.innerHTML = "Hello";
timebox.setAttribute("id" , "time");
container.appendChild(timebox);

var myform = document.createElement("form");
myform.setAttribute("id" , "main-form");
myform.setAttribute("method" , "post");
container.appendChild(myform);

var label1 = document.createElement("label");
label1.setAttribute("id" , "date-label");
label1.setAttribute("for" , "datetime-local");
label1.innerHTML = "Your Birthday:";
document.getElementById("main-form").appendChild(label1);

var dateinput = document.createElement("input");
dateinput.setAttribute("id" , "date");
dateinput.setAttribute("type" , "datetime-local");
dateinput.setAttribute("name" , "date");
myform.appendChild(dateinput);

var findbutton = document.createElement("button");
findbutton.innerHTML = "Find";
findbutton.setAttribute("id" , "btn");
container.appendChild(findbutton);

var resetbutton = document.createElement("button");
resetbutton.innerHTML = "Reset";
resetbutton.setAttribute("id" , "reset");
container.appendChild(resetbutton);

var doctitle = document.createElement("title");
doctitle.innerHTML = ("How Many Days You Have Lived");
document.head.appendChild(doctitle);

var findbtn = document.getElementById("btn");
var resetbtn = document.getElementById("reset");
resetbtn.classList.add("change");


findbtn.onclick = 
    function hello() {
        var y = document.forms["main-form"]["date"].value;
        if (y == "") {
            alert("You Must Enter A Date !");
        } else {
        findbtn.classList.add("change");
        resetbtn.classList.remove("change");
        var x = document.getElementById("main-form").elements.item(0).value;
        var countDownDate = new Date(x).getTime();
        setInterval(function() {
        var now = new Date().getTime();
        var distance = now - countDownDate;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("time").innerHTML = days + "\nDays; " + hours + "\nHours; " + minutes + "\nMinutes; " + seconds + "\nSeconds; ";}, 1000);
        document.getElementById("date").style.display = "none";
        document.getElementById("date-label").style.display = "none";
        declare.style.display = "block";};
        };

document.getElementById("reset").onclick = 
function name() {
   findbtn.classList.remove("change");
   resetbtn.classList.add("change");
   window.location.reload();

};