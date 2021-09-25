var readLineSync = require('readline-sync');
var score = 0;
var userName = readLineSync.question("What's your name? ")
console.log("\nWelcome " + userName + " to Do you know Priyanka?")

// play function

function play(question, answer) {
  var userAnswer = readLineSync.question(question);


  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You're right! You get 1 point")
    score = score + 1;
  } else {
    console.log("Wrong answer!")
  }
  console.log("----------------------------");
}

var questions = [{
  question: "\nWhere do I live? ",
  answer: "Vadodara"
},
{
  question: "What's my favorite color? ",
  answer: "Blue"
},
{
  question: "What is my age? ",
  answer: "23"
},
{
  question: "What is my favourite food? ",
  answer: "Pasta"
},]

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("\nYour final score is ", score);
