function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomOptions = options[randomIndex];
  return randomOptions;
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}
// console.log(getRoundResults("Rock"));
// console.log(getRoundResults("Paper"));
console.log(getRoundResults("Scissors"));
console.log("Player Score: ", playerScore, "Computer Score:", computerScore);

// console.log(hasPlayerWonTheRound("Rock", "Scissors"));
// console.log(hasPlayerWonTheRound("Scissors", "Paper"));
// console.log(hasPlayerWonTheRound("Paper", "Rock"));
// console.log(hasPlayerWonTheRound("Scissors", "Rock"));
// console.log(getRandomComputerResult());
