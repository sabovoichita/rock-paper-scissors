console.log("Welcome!");
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomOptions = options[randomIndex];
  return randomOptions;
}

function hasPlayerWonTheRound(player, computer) {
  if (player === "Rock" && computer === "Scissors") {
    return true;
  } else if (player === "Scissors" && computer === "Paper") {
    return true;
  } else if (player === "Paper" && computer === "Rock") {
    return true;
  } else {
    return false;
  }
}

console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Paper"));
console.log(hasPlayerWonTheRound("Paper", "Rock"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));
// console.log(getRandomComputerResult());
