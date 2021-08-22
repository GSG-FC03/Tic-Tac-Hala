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

  function clickedBox(element) {
    if (players.classList.contains("player")) {
      //if player has contains .player
      playerSign = "O";
      element.innerHTML = `<i class="${playerOIcon}"></i>`; //adding cross icon tag inside user clicked element
      players.classList.remove("active");
      element.setAttribute("id", playerSign);
    } else {
      element.innerHTML = `<i class="${playerXIcon}"></i>`; //adding circle icon tag inside user clicked element
      element.setAttribute("id", playerSign);
      players.classList.add("active");
    }
    selectWinner();
    element.style.pointerEvents = "none";
    playBoard.style.pointerEvents = "none";
    let randomTimeDelay = (Math.random() * 1000 + 200).toFixed();
    setTimeout(() => {
      bot(runBot); //boolean true or false
    }, randomTimeDelay); //passing random delay time
  }
  // bot click function
  function bot() {
    let array = []; //empty array to store unselected box index
    if (runBot) {
      playerSign = "O";
      for (let i = 0; i < allBox.length; i++) {
        if (allBox[i].childElementCount == 0) {
          array.push(i);
        }
      }
      let randomBox = array[Math.floor(Math.random() * array.length)];
      if (array.length > 0) {
        if (players.classList.contains("player")) {
          playerSign = "X";
          allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
          allBox[randomBox].setAttribute("id", playerSign);
          players.classList.add("active");
        } else {
          allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
          players.classList.remove("active");
          allBox[randomBox].setAttribute("id", playerSign);
        }
        selectWinner();
      }
      allBox[randomBox].style.pointerEvents = "none"; //once user select any box he can't select it again
      playBoard.style.pointerEvents = "auto";
      playerSign = "X"; //suppose player will be x
    }
  }
  function getIdVal(classname) {
    return document.querySelector(".box" + classname).id;
  }
  function checkIdSign(val1, val2, val3, sign) {
    if (
      getIdVal(val1) == sign &&
      getIdVal(val2) == sign &&
      getIdVal(val3) == sign
    ) {
      return true;
    }
  }
  //  Showing result box with winner sign (X or O)
  function selectWinner() {
    if (
      checkIdSign(1, 2, 3, playerSign) ||
      checkIdSign(4, 5, 6, playerSign) ||
      checkIdSign(7, 8, 9, playerSign) ||
      checkIdSign(1, 4, 7, playerSign) ||
      checkIdSign(2, 5, 8, playerSign) ||
      checkIdSign(3, 6, 9, playerSign) ||
      checkIdSign(1, 5, 9, playerSign) ||
      checkIdSign(3, 5, 7, playerSign)
    ) {
      runBot = false;
      bot(runBot);
      setTimeout(() => {
        resultBox.classList.add("show");
        playBoard.classList.remove("show");
      }, 700);
      wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
    } else {
      if (
        getIdVal(1) != "" &&
        getIdVal(2) != "" &&
        getIdVal(3) != "" &&
        getIdVal(4) != "" &&
        getIdVal(5) != "" &&
        getIdVal(6) != "" &&
        getIdVal(7) != "" &&
        getIdVal(8) != "" &&
        getIdVal(9) != ""
      ) {
        runBot = false;
        bot(runBot);
        setTimeout(() => {
          resultBox.classList.add("show");
          playBoard.classList.remove("show");
        }, 700);
        wonText.textContent = "Match has been drawn!";
      }
    }
  }

  //  Realoding current page on the replay button click
  replayBtn.onclick = () => {
    window.location.reload();
  };
