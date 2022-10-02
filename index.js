var readline = require("readline-sync");
var chalk = require("chalk");
var name = readline.question("What is your Name?   ");
console.log(chalk.bgBlue.underline.bold("\n Welcome "+name));
console.log("\n How well do you know me?! Let's Find out .\n Tell me ....\n")

var score = 0;
function quiz(ques , ans)
  {
    var userAns = readline.question(chalk.magenta(ques));
    if(userAns === ans)
    { 
      score = score + 5;
      console.log(chalk.bgGreen("\n Correct Answer ! Your score is " + score +"\n"))
    }
    else{
      
      console.log(chalk.bgRed("\n Wrong Answer! score is " +score));
      
    }
    
  }


var Questions = [ {
  question: "\n where is my birth place?  ",
  answer: "darbhanga"
},

 {
  question: "\n who is my favorite superhero   ",
  answer: "ben10"
},

 {
  question : "\n When do i celebrate my birthday? ",
  answer: "29 november"
},

 {
  question : "\n What is my favorite color? ",
  answer : "red"
},

 {
  question : "\n Who is my bestfriend? ",
  answer: "shilpi"
}
]

for(var i = 0; i < Questions.length; i++){
  
  quiz(Questions[i].question,Questions[i].answer)
}
console.log(chalk.bgCyan("\nGAME OVER\nYour Final score is "+score));
