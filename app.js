function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    return computerChoice;
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter Rock, Paper, or Scissors");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.startsWith("You win!")) {
        playerScore++;
      } else if (result.startsWith("You lose!")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log(`You win the game! ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
      console.log(`You lose the game! ${computerScore} to ${playerScore}`);
    } else {
      console.log("It's a tie game!");
    }
  }
  
  game();
  