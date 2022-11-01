var readLineSync =require('readline-sync');
var score =0;

var highestScores=[
  {
    name:'Saurav',
    score:5
  },
  
  {
    name:'Anish',
      score:3
  }
]

var questions=[
  {
    question:'Where do i live? ',
    answer:'Ambala'
  },
  {
    question:'what is my dog name? ',
    answer:'messi'
    
  },
  {
    question:'what is my favourite sport? ',
    answer:'cricket'
  },
  {
    question:'Who is my fav sports person? ',
    answer:'MS Dhoni'
  },
  {
    question:'in which field i have done my bachelors? ',
    answer:'Engineering'
  },
];

function entry(){
  var user=readLineSync.question("What's your name? ");
  console.log("Welcome to game "+ user + " to check do you know Ashish");
}

function game(question,answer){
  var userAnswer=readLineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log("Yeah! you're right");
    score =score+1;
  }
  else{
    console.log('Wrong ');
  }
console.log("Current Score is :", score);
console.log("*********")
}


function setup(){
  for(var i=0;i<questions.length;i++){
    var currentQuestion=questions[i];
    game(currentQuestion.question, currentQuestion.answer)
   
  }
}

function displayScore(){
  console.log("this is your score ", score);
  console.log("check out the highest scores of the players");
  highestScores.map(score =>console.log(score.name ,":",score.score))
  
}

entry();
setup();
displayScore();

if(score==5){
  console.log("you known me we are buddy");
}


if(score>=4){
  console.log('you have beaten anish ');
}
else{
  console.log("You don't know me");
}