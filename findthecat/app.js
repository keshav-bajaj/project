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
      setTimeout(() => {
        new cat();
        img.remove();
      }, 2500);
      var score = document.getElementById("score").innerHTML;
      score++;
      document.getElementById("score").innerHTML = score;
    });
    document.body.appendChild(img);
  }
}

const startbtn = document.getElementById("start");
const timer = document.getElementById("timer");
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

  setInterval(() => {
    if (seconds <= 0) {
      clearInterval(clock);
    }
  }, 1);
}

function game() {
    document.getElementById("start-div").remove();
    document.getElementById("game-div").style.display = "block";
    gametimer();
    new cat();
}

startbtn.addEventListener("click" , game);
document.getElementById("start-again").addEventListener("click" , game);

function endgame() {
    var cats = document.querySelectorAll("#cat");
    for (i=0;i<cats.length;i++){
        cats[i].remove();
    }
    document.getElementById("game-div").style.display = "none";
    document.getElementById("end-game").style.display = "block";
}

