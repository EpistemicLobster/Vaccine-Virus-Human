let output = document.querySelector('#showgameresults')
let output2 = document.querySelector('#showgameresults2')
let outputComputer = document.querySelector('#imagecontainer')
let chooseVaccine = document.querySelector('.button1');
let chooseVirus = document.querySelector('.button2');
let chooseHuman = document.querySelector('.button3');

var div = document.createElement('div');
output.textContent = "Play me human, if you dare!";
let playerSelection = '';
let computerSelection = '';
let arrayChoices = ['Vaccine', 'Virus', 'Human'];
let gameCounter = 0;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
outputComputer.style.backgroundImage = "url('images/computer1.svg')";

function game() {
    computerGenerator();
    determineWinner();
    output2.textContent = `Computer: ${computerScore}  |  Player: ${playerScore} | Tie: ${tieScore}`;
}

chooseVaccine.addEventListener('click', () => {
    playerSelection = 'Vaccine';
    checkWinner();
});
chooseVirus.addEventListener('click', () => {
    playerSelection = 'Virus';
    checkWinner();
});
chooseHuman.addEventListener('click', () => {
    playerSelection = 'Human';
    checkWinner();
});

function determineWinner() {
    if (playerSelection === 'Vaccine' && computerSelection === 'Virus' 
    || playerSelection === 'Virus' && computerSelection === 'Human'
    || playerSelection === 'Human' && computerSelection === 'Vaccine') {
        output.textContent = 'Computer: You win.';
        ++gameCounter;
        ++playerScore;
    } else if (computerSelection === 'Vaccine' && playerSelection === 'Virus' 
    || computerSelection === 'Virus' && playerSelection === 'Human'
    || computerSelection === 'Human' && playerSelection === 'Vaccine') {
        output.textContent = 'Compouter: I win!';
        ++gameCounter;
        ++computerScore;

    } else {
        output.textContent = 'Computer: It\'s a Draw';
        ++gameCounter;
        ++tieScore;
    }
}

function computerGenerator() {
computerSelection = arrayChoices[Math.floor(Math.random()*3)];
if(computerSelection === 'Human') {
outputComputer.style.backgroundImage = "url('images/human.svg')";
} else if (computerSelection === 'Virus') {
outputComputer.style.backgroundImage = "url('images/virus.svg')";
} else {
outputComputer.style.backgroundImage = "url('images/syringe.svg')";
}
return computerSelection;
}

function checkWinner () {
    if(playerScore >= 5 || computerScore >= 5) {
        declareGame();
        output2.textContent = `Computer: ${computerScore}  |  Player: ${playerScore} | Tie: ${tieScore}`;
    } else {
        game();
    }
}   



function declareGame() {
    outputComputer.style.backgroundImage = "url('images/computer1.svg')";
    if(computerScore > playerScore) {
        output.textContent = `Compouter: I win the game!`;
    } else if (playerScore > computerScore) {
        output.textContent = `Computer: You win the game. And now you shall pay.`;
    } else {
        output.textContent = `Computer: It's a draw game, there is no winner!`;
    }
}