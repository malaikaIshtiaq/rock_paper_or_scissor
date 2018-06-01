function computerPlay() {
    const choiceList = ['rock', 'paper', 'scissors'];
    const choiceNumber = Math.floor(Math.random() * 3);
  
    return choiceList[choiceNumber];
  } 
  
  function checkResults(playerChoice, computerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
      return 'win';
    } else if (computerChoice === 'rock' && playerChoice === 'scissors' ||
        computerChoice === 'paper' && playerChoice === 'rock' ||
        computerChoice === 'scissors' && playerChoice === 'paper') {
      return 'lose';
    } else {
      return 'tie';
    }
  }