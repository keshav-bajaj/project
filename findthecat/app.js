const scorebox = document.getElementById("score");
class cat {
  constructor() {
    var img = document.createElement("img");
    img.src = "cat.png";
    img.id = "cat";
    img.style.height = window.innerHeight / 6 + "px";
    img.style.top =
      Math.floor(Math.random() * (window.innerHeight - 250)) + "px";
    img.style.left =
      Math.floor(Math.random() * (window.innerWidth - 100)) + "px";
    img.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";
    img.addEventListener("click", () => {
      img.classList.add("appear");
      new cat();
      setTimeout(() => {
        img.remove();
      }, 2500);
      var score = scorebox.innerHTML;
      score++;
      scorebox.innerHTML = score;
    });
    document.body.appendChild(img);
  }
}
const startbtn = document.getElementById("start");
const timer = document.getElementById("timer");
const gamediv = document.getElementById("game-div");
const endbox = document.getElementById("end-game");
const startdiv = document.getElementById("start-div");
function gametimer() {
  var seconds = 59;
  timer.innerHTML = 0 + ":" + seconds;
  timer.addEventListener("click", () => {
    seconds--;
    timer.innerHTML = 0 + ":" + seconds;
  });

  var clock = setInterval(() => {
    timer.click();
  }, 1000);

  var endtimer = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(clock);
      clearInterval(endtimer);
      endgame();
    }
  }, 1);
}

function game() {
  scorebox.innerHTML = 0;
  startdiv.style.display = "none";
  gamediv.style.display = "block";
  endbox.style.display = "none";
  gametimer();
  new cat();
}

startbtn.addEventListener("click", game);
document.getElementById("start-again").addEventListener("click", game);

function endgame() {
  removecats();
  gamediv.style.display = "none";
  endbox.style.display = "block";
  document.getElementById("current-score").innerHTML = scorebox.innerHTML;
  setscore();
  document.getElementById("high-score").innerHTML = localStorage.getItem(
    "Hscore"
  );
}

function setscore() {
  var score = scorebox.innerHTML;
  if (localStorage.getItem("Hscore") === null) {
    localStorage.setItem("Hscore", score);
  } else {
    if (localStorage.getItem("Hscore") > score) {
      return false;
    } else {
      localStorage.setItem("Hscore", score);
    }
  }
}

function removecats() {
  var cats = document.querySelectorAll("img");
  for(i=0;i<cats.length;i++){
    cats[i].remove();
  }
}
