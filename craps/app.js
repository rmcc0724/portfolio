//Data Controller

var bankController = (function() {
    let data = {
        dice: {
            die1: 5,
            die2: 5,
        },
        bet: 0,
        bank: 100,
        point: "Off",
        message: ""
    };
    let placeBet = () => {
        if (data.bank > 0 && 5 <= data.bank) {
            data.bank -= 5;
            data.bet += 5;
            sendMessage(`Player has placed a bet of 5$ with a total bet of ${getBet()} and bank of ${getBank()}`);
        }
        else {
            sendMessage("You don't have enough money!");
        }
    };
    let rollDice = () => {
        if (data.bet > 0) {
            data.dice.die1 = Math.floor(Math.random() * 6) + 1;
            data.dice.die2 = Math.floor(Math.random() * 6) + 1;
        }
        else {
            console.log("You need to place a bet first");
        }
    };
    let playerWins = () => {
        data.bank += data.bet * 2;
        if (getDiceTotal === 7 || getDiceTotal === 11) {
            sendMessage(`Player Wins because you rolled ${getDiceTotal()} on the first roll when the point was off. \nThe player has the amount of ${getBank()} left.`);
        }
        else {
            sendMessage(`Player Wins because you rolled ${getDiceTotal()} prior to crapping out by rolling 7. \nThe player has the amount of ${getBank()} left.`);

        }
        data.bet = 0;
        setPoint("Off");
    };
    let playerLoses = () => {
        if (getDiceTotal() === 2 || getDiceTotal() === 3 || getDiceTotal() === 12 ) {
            sendMessage(`Player Loses because you rolled ${getDiceTotal()} on the first roll when the point was off. \nThe player has the amount of ${getBank()} left.`);
        }
        else {
            sendMessage(`Player Loses because you rolled ${getDiceTotal()} prior to rolling ${getDiceTotal()} \nThe player has the amount of ${getBank()} left. `);

        }
        data.bet = 0;
        setPoint("Off");
    };
    let setPoint = (point) => {
        data.point = point;
        if (getPoint() === "Off") {
        }
        else {
        }
    };
    let resetGame = () => {
        data = {
            dice: {
                die1: 5,
                die2: 5,
            },
            bet: 0,
            bank: 100,
            point: "Off"
        };
        setPoint("Off");
        sendMessage("Game Reset");
    };

    let getDie1 = () => (data.dice.die1);
    let getDie2 = () => (data.dice.die2);
    let getDiceTotal = () => parseInt(data.dice.die1) + parseInt(data.dice.die2);
    let getBank = () => data.bank;
    let getBet = () => data.bet;
    let getPoint = () => data.point;
    let sendMessage = (message) => this.message = message;
    let getMessage = () => this.message;
    let checkWinner = () => {
        getBet() > 0 ? rollDice() : sendMessage("You must first place a bet!!");
        if (getBet() > 0) {
            if (getPoint() === "Off") {
                getDiceTotal() === 2 || getDiceTotal() === 3 || getDiceTotal() === 12 ? playerLoses() :
                    getDiceTotal() === 7 || getDiceTotal() === 11 ? playerWins() : (setPoint(getDiceTotal()), sendMessage(`Your point is now set to ${getPoint()} and you must roll that to win. \nIf you roll a 7 prior to that you lose.`));
            }
            else {
                getDiceTotal() === 7 ? playerLoses() : getDiceTotal() === getPoint() ? playerWins() : (sendMessage(`Roll Again but dont crap out. You rolled a ${getDiceTotal()} \nTry to hit ${getPoint()}`));

            }
        }
    };
    return {
        resetGamePublic: () => resetGame(),
        getPublicDie1: () => getDie1(),
        getPublicDie2: () => getDie2(),
        placeBetPublic: () => placeBet(),
        rollDicePublic: (bet) => rollDice(),
        checkWinnerPublic: () => checkWinner(),
        getBankPublic: () => getBank(),
        getBetPublic: () => getBet(),
        getPointPublic: () => getPoint(),
        getDiceTotalPublic: () => getDiceTotal(),
        getPublicMessage: () => getMessage()
    };
})();


// UI CONTROLLER
let UIController = (function() {

    var DOMstrings = {
        bet5Btn: '.btn-bet',
        btnRoll: '.btn-roll',
        btnNew: '.btn-new',
        textArea: '.text__area'
    };

    var placeBet = (bet) => {
        document.getElementById("bet").innerHTML = bet;
    };

    var updateBank = (bank) => {
        document.getElementById("bank").innerHTML = bank;
    };

    var updatePoint = (point) => {
        document.getElementById("point").innerHTML = point;
    };

    var displayMessage = (message) => {
        document.getElementById("message").value = message;
    };

    var updateDice = (die1, die2) => {
        document.getElementById("die-1-img").src = "dice-" + die1 + ".png";
        document.getElementById("die-2-img").src = "dice-" + die2 + ".png";
        document.getElementById("score-1").innerHTML = die1;
        document.getElementById("score-2").innerHTML = die2;
    };


    return {
        getDOMstrings: () => DOMstrings,
        placeBetPublic: (bet) => placeBet(bet),
        updateBankPublic: (bank) => updateBank(bank),
        updatePointPublic: (point) => updatePoint(point),
        updatePublicDice: (die1, die2) => updateDice(die1, die2),
        displayPublicMessage: (message) => displayMessage(message)
    };
})();

let controller = (function(bankCtrl, UICtrl) {
    let setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.bet5Btn).addEventListener('click', ctrlBet5);
        document.querySelector(DOM.btnRoll).addEventListener('click', ctrlRollDice);
        document.querySelector(DOM.btnNew).addEventListener('click', ctrlReset);
    };
    let ctrlBet5 = () => {
        //1. When the bet 5 button is clicked we call the public placeBet function
        bankCtrl.placeBetPublic();

        //2. We update the UI controller using the public getBet function
        UICtrl.placeBetPublic(bankCtrl.getBetPublic());

        //3. Update the Bank UI controller to reflect the total
        UICtrl.updateBankPublic(bankCtrl.getBankPublic());

        UICtrl.displayPublicMessage(bankCtrl.getPublicMessage());
    };

    let ctrlReset = () => {
        //1. When the new game button is clicked we call the resetGamePublic function
        bankCtrl.resetGamePublic();

        //2. We update Bet UI controller using the public getBet function
        UICtrl.placeBetPublic(bankCtrl.getBetPublic());

        //3. Update the Bank UI controller to reset the bank to 100
        UICtrl.updateBankPublic(bankCtrl.getBankPublic());

        //4. Update the Point UI controller to "Off"
        UICtrl.updatePointPublic(bankCtrl.getPointPublic());

        UICtrl.displayPublicMessage(bankCtrl.getPublicMessage());

    };
    
    //Main App Controller

    let ctrlRollDice = () => {

        //1. Here we run through the game
        bankCtrl.checkWinnerPublic();
        UICtrl.displayPublicMessage(bankCtrl.getPublicMessage());


        console.log("Update Bet UI");
        //2. We update Bet UI controller using the public getBet function
        UICtrl.placeBetPublic(bankCtrl.getBetPublic());

        //3. Update the Bank UI controller to get the bank value for the UI
        UICtrl.updateBankPublic(bankCtrl.getBankPublic());

        //4. Update the Point UI controller to the point value
        UICtrl.updatePointPublic(bankCtrl.getPointPublic());

        //5. Update the Dice Images and Values
        UICtrl.updatePublicDice(bankCtrl.getPublicDie1(), bankCtrl.getPublicDie2());
    };
    return {
        init: () => (console.log('Application has started.'),
            setupEventListeners()),
    };
})(bankController, UIController);
controller.init();