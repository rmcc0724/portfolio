const pic1 = "url('../images/dice1.jpg')";
const pic2 = "url('../images/dice2.jpg')";
const pic3 = "url('../images/dice3.jpg')";
const pic4 = "url('../images/dice4.jpg')";
const pic5 = "url('../images/dice5.jpg')";
const pic6 = "url('../images/dice6.jpg')";
const pics = [pic1, pic2, pic3, pic4, pic5, pic6];
const snd = new Audio("../images/dice.mp3");
let die1;
let die2;
let n1;



/*Shows and Hides the Instructions*/

$(function() {
   $("#dialog").dialog({
      autoOpen: false,
      show: {
         effect: "blind",
         duration: 1000
      },
      hide: {
         effect: "explode",
         duration: 1000
      }
   });
   $("#opener").click(function() {
      $("#dialog").dialog("open");
   });
});

/* Functions for the click events on the buttons */

$(document).ready(function() {
   $("#roll").click(function() {
      start();
      playSound();
   }); //end click function
   $("#place5Bet").click(function() {
      player5Bet();
   }); //end click function
   $("#place10Bet").click(function() {
      player5Bet();
      player5Bet();
   }); //end click function
}); //end doc.ready

/*Bets 5 dollars from the players Bank*/

function player5Bet() {
   const n1 = 5;
   if (n1 <= checkBank()) {
      var newBank = checkBank() - n1;
      document.myForm.bank.value = (newBank);
      document.myForm.bet.value = n1 + checkBet();
   }
   else if (n1 > checkBank()) {
      $("#errors").addClass("errors");
      $("#errors").text("You don't have enough...");

      myVar = setTimeout(function() {
         $("#errors").removeClass("errors");
         $("#errors").text("");
      }, 1300);
   }
} //end function playerBet


/*Checks the state of the game too see if this is a first roll or point roll*/
/*Also checks to see if there's a bet in place/The player can't play unless money is in the pot*/

function start() {
   if(checkBet() > 0) {
   document.myForm.result.value = ("");
   document.getElementById("roll").disabled = true;
   tossHelper();
   myVar = setTimeout(function() {
      if (document.myForm.point.value == "Off") {
         firstThrowResult();
         document.getElementById("roll").disabled = false;
      }
      else {
         pointThrowResult();
      }
      document.getElementById("roll").disabled = false;
   }, 1400);
   }
   else {
   $("#errors").addClass("errors");
   $("#errors").text("You must place a bet!!!");

   
   myVar = setTimeout(function() {
   $("#errors").removeClass("errors");
   $("#errors").text("");
      }, 1300);
   }
} //end start

/*This is the Dice rolling function*/

function tossHelper() {
   var count = 6;
   toss(count);
}

function toss(base) {
   if (base > 0) {
      die1 = flip();
      die2 = flip();
      document.myForm.die1.value = die1;
      document.myForm.die2.value = die2;
      document.getElementById("textarea1").style.backgroundImage = pics[die1 - 1];
      document.getElementById("textarea2").style.backgroundImage = pics[die2 - 1];
      myVar = setTimeout(function() { toss(base - 1) }, 200);
   } //end base case if
   else {
      document.myForm.result.value = (die1 + die2);
   } ///end else
} 

function flip() {
   return Math.floor((Math.random() * 6) + 1);
}
//end Dice roll function

/*Plays the sound of the Dice rolling*/

function playSound() {
   snd.play();
}

/*Checks to see if the result of the first throw is a win, lose or point*/

function checkBank () {
   let bank = parseInt(document.getElementById("bank").value);
   return bank;
}

function checkBet () {
   let bet = parseInt(document.getElementById("bet").value);
   return bet;
}

function checkResult () {
   result = $("#result").val();
   return result;
}

function zeroOut () {
   document.myForm.point.value = "Off";
   document.myForm.bet.value = 0;
   document.myForm.bank.value = 100;
   document.getElementById("textarea1").style.backgroundImage = "";
   document.getElementById("textarea2").style.backgroundImage = "";
}

function firstThrowResult() {
   if (checkResult() == "2" || checkResult() == "3" || checkResult() == "12") {
      $("#textarea3").text("You Crapped Out!!!\nSet your point..");
      document.myForm.bet.value = 0;
   }
   else if (checkResult() == 7 || checkResult() == 11) {
      $("#textarea3").text("You Won!!!\nSet your point..");
      document.myForm.bank.value = checkBank() + (checkBet() * 2);
      document.myForm.bet.value = 0;
   }
   else {
      document.myForm.point.value = checkResult();
      $("#textarea3").text("Your point is " + checkResult() + ". \nRoll " + checkResult() + " to win. \nRoll 7 and crap out.");
   }
} //end firstThrow Result

/*Checks the result of the throw after the point has been set, if the result is 7, then the players craps out*/

function pointThrowResult() {
   point = $("#point").val();
   if (checkResult() == 7) {
      $("#textarea3").text("You Crapped Out!!!\nSet your point..");
      document.myForm.point.value = "Off";
      document.myForm.bet.value = 0;
   }
   else if (checkResult() == point) {
      $("#textarea3").text("You Won!!!\nSet your point..");
      document.myForm.point.value = "Off";
      document.myForm.bank.value = checkBank() + (checkBet() * 2);
      document.myForm.bet.value = 0;
   }
   else {
      $("#textarea3").text("Roll Again!!!");
   }
} //end pointThrow