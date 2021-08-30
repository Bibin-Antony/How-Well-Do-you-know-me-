var readlineSync = require('readline-sync');
var score = 0;
const chalk = require('chalk');

function seprators() {
  console.log("\n");
  console.log(chalk.greenBright("*************************"));
  console.log("\n");
}

function exit(){
  console.log(chalk.blue("Thanks For participating " + username));
}
var username = readlineSync.question("Enter your name ");

console.log("\nWelcome " + username +", now lets play a game");
console.log( chalk.blue("\nHow well do you know me?"));

var start = readlineSync.question("Do you wish to continue?" + "(Press S to start) : ");

var upperinp = start.toUpperCase();

seprators();

if(upperinp == "S"){
  function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
  }
}
  else {
    console.log("Thanks For participating " + username);
  }

function play(question, answer){
  var useranswer = readlineSync.question(question);
  
  if(useranswer == answer){
    console.log("Your are correct!");
    score = score + 1;
    console.log("Your current score is " + score);
    seprators();

  }
  else{
    console.log("Your are wrong!");
    score = score - 1;
    console.log("Your current score is " + score);
    seprators();
  }
}

var questions = [{
  question: "where do i live? ",
  answer: "mysuru"
},{
  question: "What is my sur name? ",
  answer: "antony"
},{
  question: "Do i have a Sibling? ",
  answer: "yes"
},{
  question: "How old am i? ",
  answer: "21"
},{
  question: "Do i have a Tatto? ",
  answer: "no"
}];


console.log("\nYour current score is " + score +"\n");

function showScores() {
  console.log("Your final score is " + score);
}

game();
showScores();
exit();