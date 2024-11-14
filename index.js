console.log("Welcome!");
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomOptions = options[randomIndex];
  return randomOptions;
}
console.log(getRandomComputerResult());
