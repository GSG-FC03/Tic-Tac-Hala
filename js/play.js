//selecting all required elemnts

const selectBox = document.querySelector(".select-box"),
  selectBtnX = selectBox.querySelector(".options .playerX"),
  selectBtnO = selectBox.querySelector(".options .playerO"),
  playBoard = document.querySelector(".play-board"),
  players = document.querySelector(".players"),
  allBox = document.querySelectorAll("section span"),
  resultBox = document.querySelector(".result-box"),
  wonText = resultBox.querySelector(".won-text"),
  replayBtn = resultBox.querySelector("button");

window.onload = () => {
  //once window loaded
  //add onclick attribute in all avaiable section span
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }
};

//add on click on btn selectbox x
selectBtnX.onclick = () => {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
};

//add on click on btn selectbox o 
selectBtnO.onclick = () => {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
  players.setAttribute("class", "players active player");
};

let playerXIcon = "fas fa-times", //class name of font awesome cross icon
  playerOIcon = "far fa-circle", //class name of fontawesome cricle icon
  playerSign = "X",
  runBot = true;