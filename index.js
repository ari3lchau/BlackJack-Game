let sum = 0;
let isAlive = false;
let message = "";
let cards = [];
let moneyWin = 100;
let userMoney = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");


let playermoney = document.getElementById("player-mon");


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber === 1){
        return 11
    }
    else if(randomNumber > 10){
        return 10
    }
    else{
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

function renderGame(){
    
    if(sum <= 20){
        message = "Do you want to draw a new card? ";
    }
    else if(sum === 21){
        message = "You've got BalckJack!";
        
        userMoney += 100;
    }
    else{
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: ";
    playermoney.textContent = "Money: $" + userMoney;
    
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
}

function newcard(){
    if(isAlive === true){
        let drawcard = getRandomCard();
        sum += drawcard;
        cards.push(drawcard);
        console.log(cards);
        renderGame();
    }
    
}


