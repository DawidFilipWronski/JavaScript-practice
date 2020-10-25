//queryselectors
const wins = document.querySelector('.wins span');
const draws = document.querySelector('.draws span');
const failures = document.querySelector('.losses span');
const games = document.querySelector('.numbers span');
const whoWin = document.querySelector('span[data-summary="who-win"]');
const playerChoice = document.querySelector('span[data-summary="your-choice"]');
const aiChoice = document.querySelector('span[data-summary="ai-choice"]');
const play = document.querySelector('.start');
const hands = document.querySelectorAll('img');

//objects
const game = {
    playerMove: '',
    aiMove: '',
}

const board = {
    gameCounter: 0,
    wins: 0,
    failures: 0,
    draws: 0,
}

// draw ai choice
function drawForAi(){
    return hands[Math.floor(Math.random() * hands.length)].dataset.option;   
}

//clear AI choice and who win after player change for next round
function clearMatch(){
    aiChoice.textContent ='';
    whoWin.textContent ='';
}

//change player choice in game object, add border to choice, delet border from no choosen 
function choice (){
    clearMatch();
    game.playerMove = this.dataset.option;    
    hands.forEach(hand =>{
        hand.style.boxShadow = '';
    })      
    this.style.boxShadow = '0 0 0 10px black';
    playerChoice.textContent = game.playerMove;
}
/* draw ai choice when click play, change game counter in board object,
set value on text content, compare player choice to ai choice and get a winner. Modifies wins, failures and draws on board object and print it on text content
*/
const winner = () =>{
    game.aiMove = drawForAi(); 
    board.gameCounter++;   
    aiChoice.textContent = game.aiMove;
    switch(game.playerMove){
        case game.aiMove:
                board.draws++;
                whoWin.textContent = 'Remis';
                break;
        case 'papier':
            if(game.aiMove === 'nożyczki'){
                board.failures++;
                whoWin.textContent = 'AI!';    
            }
            else{
                board.wins++;
                whoWin.textContent = 'Gracz!';    
            }
            break;
        case 'nożyczki': 
            if(game.aiMove === 'kamień'){
            board.failures++;
            whoWin.textContent = 'AI!';    
            }
            else{
            board.wins++;
            whoWin.textContent = 'Gracz!';    
            }
            break; 
        case 'kamień': 
            if(game.aiMove === 'papier'){
            board.failures++;
            whoWin.textContent = 'AI!';    
            }
            else{
            board.wins++;
            whoWin.textContent = 'Gracz!';    
            }
            break;     
    }    
    wins.textContent = board.wins;
    draws.textContent = board.draws;
    failures.textContent = board.failures;
    games.textContent = board.gameCounter;
}
//event listeners 
hands.forEach(hand =>{
    hand.addEventListener('click', choice); 
})
play.addEventListener('click', winner);