let selectedInput = (ele) => {
  const userChoiceDiv = document.getElementById("userChoice");

  const compChoiceDiv = document.getElementById("compChoice");

  // USER CHOICE CONDITION
  if (ele.id == "svg1") {
    showImgElement(ele.id, userChoiceDiv);
  } else if (ele.id == "svg2") {
    showImgElement(ele.id, userChoiceDiv);
  } else {
    showImgElement(ele.id, userChoiceDiv);
  }

  // COMPUTER CHOICE CONDITIONS
  const computerChoiceSelection = ["svg1", "svg2", "svg3"];
  const computerChoice =
    computerChoiceSelection[
      Math.floor(Math.random() * (computerChoiceSelection.length - 1))
    ];

  if (computerChoice == "svg1") {
    showImgElement(computerChoice, compChoiceDiv);
  } else if (computerChoice == "svg2") {
    showImgElement(computerChoice, compChoiceDiv);
  } else {
    showImgElement(computerChoice, compChoiceDiv);
  }

  // SCOREBOARD LOGIC
  let scoreBoard = document.getElementById("scoreBoard");

  let userScore;
  let compScore;

  if (scoreBoard.value == "") {
    userScore = 0;
    compScore = 0;
  } else {
    const scores = scoreBoard.value.split(":", 2);
    compScore = parseInt(scores[0]);
    userScore = parseInt(scores[1]);
  }

  if (ele.id == computerChoice) {
    // does nothing
  } else if (ele.id == "svg1" && computerChoice == "svg2") {
    // svg2 win paper
    compScore += 1;
    scoreBoard.value = compScore + ":" + userScore;
  } else if (ele.id == "svg1" && computerChoice == "svg3") {
    //svg3 win scissor
    userScore += 1;
    scoreBoard.value = compScore + ":" + userScore;
  } else if (ele.id == "svg2" && computerChoice == "svg1") {
    // do nothing
    userScore += 1;
    scoreBoard.value = compScore + ":" + userScore;
  } else if (ele.id == "svg2" && computerChoice == "svg3") {
    // do nothing
    compScore += 1;
    scoreBoard.value = compScore + ":" + userScore;
  } else if (ele.id == "svg3" && computerChoice == "svg1") {
    // do nothing
    compScore += 1;
    scoreBoard.value = compScore + ":" + userScore;
  } else if (ele.id == "svg3" && computerChoice == "svg2") {
    // do nothing
    userScore += 1;
    scoreBoard.value = compScore + ":" + userScore;
  }

  // WIN AND LOOSE SITUATATION LOGIC

  if (userScore == 2) {
    let message = document.getElementById("message");
    message.innerHTML = "You Win by 2 points lead";
    message.classList = "messageHeadingWin";
    scoreBoard.value = " ";
  } else if (compScore == 2) {
    let message = document.getElementById("message");
    message.innerHTML = "You lose!";
    message.classList = "messageHeadingLoose";
    scoreBoard.value = " ";
  }
};

const showImgElement = (ids, parentDiv) => {
  const image = document.createElement("img");
  if (parentDiv.hasChildNodes()) {
    parentDiv.innerHTML = "";
  }

  if (ids == "svg1") {
    image.id = "imgRock";
    image.classList.add("svg-input");
    image.src = "./assets/rock.svg";
  } else if (ids == "svg2") {
    image.id = "imgPaper";
    image.classList.add("svg-input");
    image.src = "./assets/paper.svg";
  } else {
    image.id = "imgscissors";
    image.classList.add("svg-input");
    image.src = "./assets/scissors.svg";
  }

  parentDiv.appendChild(image);
};
