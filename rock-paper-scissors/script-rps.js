// Score configurations

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = 
 `Wins: ${score.wins} Loses: ${score.losses} Ties: ${score.ties}`;
}

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement();

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
};

// The computer picks a random move

function pickComputerMove() {

  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

// Compare moves to find out the result

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "You &nbsp &nbsp Computer";

  if (playerMove === "rock") {
    pdir = 'images-rps/rock';

    if (computerMove === "rock") {
      result = "Tie";
      cdir = 'images-rps/rock';
    } else if (computerMove === "paper") {
      cdir = 'images-rps/paper';
      result = "You Lose";
    } else if (computerMove === "scissors") {
      cdir = 'images-rps/scissors';
      result = "You Win";
    }
  } else if (playerMove === "paper") {
    pdir = 'images-rps/paper';

    if (computerMove === "rock") {
      cdir = 'images-rps/rock';
      result = "You Win";
    } else if (computerMove === "paper") {
      cdir = 'images-rps/paper';
      result = "Tie";
    } else if (computerMove === "scissors") {
      cdir = 'images-rps/scissors';
      result = "You Lose";
    }
  } else if (playerMove === "scissors") {
    pdir = 'images-rps/scissors';

    if (computerMove === "rock") {
      cdir = 'images-rps/rock';
      result = "You Lose";
    } else if (computerMove === "paper") {
      cdir = 'images-rps/paper';
      result = "You Win";
    } else if (computerMove === "scissors") {
      cdir = 'images-rps/scissors';
      result = "Tie";
    }
  }

  // Update Score

  if (result === 'You Win') {
    score.wins += 1;
  } else if (result === 'You Lose'){
    score.losses +=1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = 
  `You<img src="${pdir}.png" class="move-icon">
  <img src="${cdir}.png" class="move-icon">Computer`;

  updateScoreElement();

  // Store score in local storage

  localStorage.setItem('score', JSON.stringify(score));
}



        