
const getComputerChoice = () => {
    const rand = Math.random(0, 1);
    const computerChoice = ((rand >= 0 && rand <= .33) ? "rock" : ((rand >= .33 && rand <= .66) ? "paper" : "scissors")); 
    return computerChoice;
}
const getHumanChoice = () => {
    let humanAns = prompt("Enter your choice:");
    humanAns = humanAns.toLowerCase();
    if(humanAns === "rock" || humanAns == "paper" || humanAns == "scissors"){
        return humanAns;
    }
    alert("Invalid choice. Please try again.");
    getHumanChoice();
}

const playRound = (humanChoice, computerChoice) => {
    let isUserWin;
    switch(computerChoice){
        case "rock": 
            (humanChoice === "paper") ? (alert("You win! Paper beats rock!"), isUserWin = 0) : ((humanChoice === "scissors") ? (alert("You lose! Rock beats scissors!"), isUserWin = 1): (alert("It's a tie!"), isUserWin = 2));
            break;
        case "paper":
            (humanChoice === "scissors") ? (alert("You win! Scissors beats rock!"), isUserWin = 0)  : ((humanChoice === "rock") ? (alert("You lose! paper beats rock!"), isUserWin = 1) : (alert("It's a tie!"), isUserWin = 2));
            break; 
        case "scissors":
            (humanChoice === "rock") ? (alert("You win! Rock beats scissors!"), isUserWin = 0) : ((humanChoice === "paper") ? (alert("You lose! Scissors beats paper!"), isUserWin = 1) : (alert("It's a tie!"), isUserWin = 2));
            break;
    }
    return isUserWin;
}

const playGame =  () => {
    const humanScoreHTML = document.getElementById("Human");
    const computerScoreHTML = document.getElementById("Computer");
    let humanScore = 0;
    let computerScore = 0; 
    console.log("Started")

    for(let i = 0; i < 5; i++){
        const computerChoice =  getComputerChoice();
        const humanChoice =  getHumanChoice();
            console.log(`CPU: ${computerChoice} User: ${humanChoice}`)
        const outcome =  playRound(humanChoice, computerChoice);
            console.log(outcome)
        if(outcome === 0) {
            humanScoreHTML.textContent = `Human score: ${++humanScore}`;
        } else if(outcome === 1){
            computerScoreHTML.textContent = `Computer score: ${++computerScore}`;
        }
    }
}
playGame();