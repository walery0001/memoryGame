// get Element
const container = document.querySelector(".container");
let imgDiv = document.querySelectorAll(".imgDiv");
const timerOut = document.getElementById("timerOut");
const gameAgain = document.getElementById("gameAgain");
const btnText = document.querySelector(".btnText");
const btnOver = document.querySelector(".btnOver");
//nodelist to array
let newImgDiv = [...imgDiv];
// number fotos
const nrFotos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// mix and add Fotos
function addNr() {
  newImgDiv.forEach((e) => {
    const mixFotos = Math.floor(Math.random() * nrFotos.length);
    e.style.backgroundImage = `url(foto/${nrFotos[mixFotos]}.png)`;
    nrFotos.splice(mixFotos, 1);
  });
}
addNr();
// game time to over
let twentySec = 45;
function twentySecTime() {
let twentySecInterval =  setInterval(function() {
    twentySec--;

    timerOut.innerHTML = twentySec;
    if (twentySec === -1) {
      playAgain()
	  timerOut.innerHTML = ''
	  clearInterval(twentySecInterval);
	  
    }
  },1000);
}
//time out background off
let timer = 8;
let turnOff = setInterval(function () {
  timer--;
  timerOut.innerHTML = timer
  if (timer === 0) {
	backgroundWhite();
	twentySecTime();
	
	clearInterval(turnOff);
    
  }
 
}, 1000);
//pkt base
pkt = '';
console.log(pkt)
//same pictures
let arrayClick = "";
let clicks = [];
let clicker = function () {
  arrayClick = this;
  arrayClick.classList.remove("coverImg");

  if (clicks.length === 0) {
    clicks[0] = arrayClick;
    return;
  } else {
    clicks[1] = arrayClick;

    newImgDiv.forEach((e) => e.removeEventListener("click", clicker));
  }
  setTimeout(function () {
    if (clicks[0].style.backgroundImage === clicks[1].style.backgroundImage) {
      clicks.forEach((e) => (e.style.background = "green"));
      pkt++;
    } else {
      clicks.forEach((e) => e.classList.add("coverImg"));
    }
    arrayClick = "";
    clicks = [];
    newImgDiv.forEach((e) => e.addEventListener("click", clicker));
  }, 800);
};

//make background all white
function backgroundWhite() {
  newImgDiv.forEach((e) => {
    e.classList.add("coverImg");
    e.addEventListener("click", clicker);
  });
}

function playAgain(){
  if(pkt === 10){
    gameAgain.style.visibility = 'visible';
    btnText.innerHTML = `You Won <br> Play Again`
   }else{
      gameAgain.style.visibility = 'visible';
     btnText.innerHTML = `Game Over <br> Try Again`
      }
  
  }

//location.reload();
function refreshBtn(){
  location.reload();
    }
  