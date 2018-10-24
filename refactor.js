'use strict';
/////////////////////////////////////////////////////////////////////////////////////////////////////
let die1 = document.getElementById("die1");
let die2 = document.getElementById("die2");
let place5Bet = document.getElementById("place5Bet");
let place10Bet = document.getElementById("place10Bet");
const snd = new Audio("images/dice.mp3");
/////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////
function toss(base) {
   if (base > 0) {
      console.log("toss");
      newGame.sound.play();
      newGame.die1 = newGame.flip();
      newGame.die2 = newGame.flip();
      document.getElementById("textarea1").src = "images/dice" + newGame.die1.toString() + ".jpg";
      document.getElementById("textarea2").src = "images/dice" + newGame.die2.toString() + ".jpg";
      document.getElementById("die1").value = newGame.die1.toString();
      document.getElementById("die2").value = newGame.die2.toString();
      setTimeout(function() {
         toss(base - 1);
      }, 200);
   } //end base case if
   else {
      newGame.result = newGame.die1 + newGame.die2;
      console.log("This result " + newGame.result);
   } ///end else
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////Start Craps Object
var Craps = function(data) {
   for (var key in data) {
      this[key] = data[key];
   }
/////////////////////////////////////////////////////////////////////////////////////////////////////
   this.getKeys = () => {
      //      return Object.keys(this);
      console.log("get keys");
   };
/////////////////////////////////////////////////////////////////////////////////////////////////////
   this.startGame = () => {
      console.log("start game");
      if (this.bet > 0) {
         this.result = "";
         document.getElementById("roll").disabled = true;
         this.tossHelper();
         console.log("bet > 0");
         setTimeout(function() {
            if (newGame.point == 0) {
               document.getElementById("roll").disabled = false;
               newGame.firstThrowresult();
            }
            else {
               newGame.pointThrowresult();
               console.log("Point > 0");
            }
            document.getElementById("roll").disabled = false;
         }, 1400);
      }
      else {
         document.getElementById("textarea3").className = "errors";
         document.getElementById("textarea3").value = "You must place a bet!!!";
         console.log("place a bet");
         setTimeout(function() {
            document.getElementById("textarea3").className = "";
            document.getElementById("textarea3").value = "";
         }, 1300);
      }
   };
/////////////////////////////////////////////////////////////////////////////////////////////////////
   this.tossHelper = () => {
      var count = 6;
      toss(count);
      console.log("toss helper");
   };
/////////////////////////////////////////////////////////////////////////////////////////////////////
   this.flip = () => {
      console.log("this.flip");
      return Math.floor((Math.random() * 6) + 1);
   };
/////////////////////////////////////////////////////////////////////////////////////////////////////
   this.firstThrowresult = () => {
      if (this.result == "2" || this.result == "3" || this.result == "12") {
         document.getElementById("textarea3").className = "errors";
         document.getElementById("textarea3").value = "You Crapped Out!!!\nSet your point..";
         this.bet = 0;
         document.getElementById("bet").value = this.bet;
         console.log("you crapped out on the first throw");
         return this.result;
      }
      else if (this.result == 7 || this.result == 11) {
         document.getElementById("textarea3").value = "You Won!!!\nSet your point..";
         this.bank = this.bank + (this.bet * 2);
         this.bet = 0;
         document.getElementById("bet").value = this.bet;
         document.getElementById("bank").value = this.bank;
         console.log("you won on the first throw");

      }
      else {
         this.result = this.die1 + this.die2;
         document.getElementById("textarea3").value = "Your point is " + this.result + ". \nRoll " + this.result + " to win. \nRoll 7 and crap out.";
         console.log("you set a point");
         this.point = this.result;
      }
   };
/////////////////////////////////////////////////////////////////////////////////////////////////////
   this.pointThrowresult = () => {
      if (this.result == 7) {
         document.getElementById("textarea3").value = "You Crapped Out with a " + this.result + "!!!\nSet your point..";
         this.point = 0;
         this.bet = 0;
         document.getElementById("bet").value = this.bet;
         console.log("you crapped out on the point");

      }
      else if (this.result == this.point) {
         document.getElementById("textarea3").value = "You Won!!!\nSet your point..";
         this.point = 0;
         this.bank = this.bank + (this.bet * 2);
         this.bet = 0;
         document.getElementById("bet").value = this.bet;
         document.getElementById("bank").value = this.bank;
         console.log("you won on the point");
      }
      else {
         document.getElementById("textarea3").value = "Roll again!! \nYou need a " + this.point;
      }
   };
/////////////////////////////////////////////////////////////////////////////////////////////////////
   this.bet5 = () => {
      const n1 = 5;
      if (n1 <= this.bank) {
         var newBank = this.bank - n1;
         this.bank = (newBank);
         console.log(this.bank);
         this.bet = n1 + this.bet;
         document.getElementById("bet").value = this.bet;
         document.getElementById("bank").value = this.bank;
         console.log("you bet 5");
      }
      else if (n1 > this.bank) {
         document.getElementById("textarea3").className = "errors";
         document.getElementById("textarea3").value = "You don't have enough...";
         console.log("you need more money");
         setTimeout(function() {
         document.getElementById("textarea3").className = "";
         document.getElementById("textarea3").value = "";
         }, 1300);
      }
   };
/////////////////////////////////////////////////////////////////////////////////////////////////////
   this.zeroOut = () => {
      this.point = 0;
      this.bet = 0;
      this.bank = 100;
      document.getElementById("textarea1").innerHTML = "<img src=../images/dice1.jpg>";
      document.getElementById("textarea2").innerHTML = "<img src=../images/dice2.jpg>";
      document.getElementById("textarea3").value = "";
      document.getElementById("bank").value = this.bank;
      document.getElementById("bet").value = this.bet;
      console.log("you reset out the game");
   };
};
/////End Craps Object
/////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
   $("#place5Bet").click(function() {
      newGame.bet5();
      //console.log("click 5 bet");
   });
   $("#place10Bet").click(function() {
      newGame.bet5();
      newGame.bet5();
      //console.log("cick 10 bet");
   });
   $("#roll").click(function() {
      newGame.startGame();
      //console.log("click start game");
   });

   $("#reset").click(function() {
      console.log("click reset");
      newGame.zeroOut();
   })
});
/////////////////////////////////////////////////////////////////////////////////////////////////////
var newGame = new Craps({
   bank: 100,
   bet: 0,
   die1: 0,
   die2: 0,
   point: 0,
   result: 0,
   message: "",
   sound: snd
});
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(newGame.bank);
console.log(newGame.bet);
console.log(newGame.die1);
console.log(newGame.die2);
console.log(newGame.point);
console.log(newGame.bet);
