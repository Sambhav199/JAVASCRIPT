const score = JSON.parse(localStorage.getItem('score')) || {wins : 0, losses : 0, ties : 0};
showscore();
/*let(score === null) {score = {wins : 0, losses : 0, ties : 0};}*/

function move() {
    
let random = Math.random();

let computerMove = '';

if (random >= 0 && random < 1/3) {computerMove ='rock';}
    
else if (random >= 1/3 && random < 2/3) {computerMove ='paper';}

else if (random >= 2/3 && random < 1) {computerMove ='scissors';}

return computerMove;
}
function play(playermove) {

const computerMove= move();

let result = '';

if (playermove === 'rock') {

if (computerMove === 'rock') {result ='It is a tie';}

else if (computerMove === 'paper') {result ='You lose';}

else if (computerMove === 'scissors') {result ='You win';}
}

else if (playermove === 'paper') {

if (computerMove === 'rock') {result ='You win';}

else if (computerMove === 'paper') {result ='It is a tie';}

else if (computerMove === 'scissors') {result ='You lose';}
}

else if (playermove === 'scissors') {

if (computerMove === 'rock') {result ='You lose';}

else if (computerMove === 'paper') {result ='You win';}

else if (computerMove === 'scissors') {result ='It is a tie';}

}
if (result === 'You win') {score.wins += 1}
else if (result === 'You lose') {score.losses += 1}
else if (result === 'It is a tie') {score.ties += 1}
showscore();
document.querySelector('.gameresult').innerHTML = ` ${result}.`;
document.querySelector('.game').innerHTML = `You <img class="signs2" src="${playermove}-emoji.png" > <img class="signs2" src="${computerMove}-emoji.png">  Computer `;
localStorage.setItem('score', JSON.stringify(score));

}
function showscore() {document.querySelector('.score').innerHTML = `Wins = ${score.wins}. Losses = ${score.losses}. Ties = ${score.ties}`};