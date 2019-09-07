function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    rightanswer.push(answer);
};
// These will be used to store the correct answers
var rightanswer = [];
var indices = [];
var store = [];
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            var buttonid = "btn"+i;
            document.getElementById(buttonid).style.display="inline";
            guess(buttonid, choices[i]);
        
                    }
       
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        document.getElementById("btn2").style.display="none";
        document.getElementById("btn3").style.display="none";
        quiz.guess(guess);
        populate();
        document.getElementById("Intro").style.display="none";
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
var gifsrc = ["","",""];
 
function showScores() {
    var gameOverHTML = "<h2>Result</h2>";
    gameOverHTML += "<div id='score'><p> Your score: " + quiz.score + " correct out of " + questions.length + "</p><p>I hope you enjoyed the quiz!<br>Here is a gif for the effort.</p></div>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    document.getElementById("retry").style.display="block";
    document.getElementById("obama").style.display="block";
};
function reviewAnswers(){
    for (var i = 0; i < questions.length; i++){
    indices.push(i+1);
    store.push("Question "+ indices[i] + ". " + rightanswer[i]);};
    document.getElementById("obama").style.display="none";
    var text = store.join("<br>");
    var frozen = Object.freeze(store);
    document.getElementById("solution").innerHTML = "Correct answers:<br><br>"+ text;
};
// create questions here
var questions = [
    new Question("Which Latin dance is my favourite?", ["Salsa", "Bachata","Merengue", "Samba"], "Salsa"),
    new Question("Where am I from?", ["France","The Netherlands","Hungary"], "France"),
    new Question("Which \"IEP\" did I attend?", ["IEP Aix", "IEP Bordeaux", "IEP Grenoble", "IEP Paris"], "IEP Paris"),
    new Question("Do I have a driving licence?", ["Yes", "No"], "Yes"),
    new Question("Do I have a car?", ["Apparently yes", "Apparently no"], "Apparently no"),
    new Question("What is SQL?", ["A markup language","A software","A programming language"], "A programming language"),
    new Question("Which one is supposedly the more straightforward?", ["Python", "R"], "Python"),
    new Question("What can I do in R?", ["Nice plots", "Regression trees", "Neural networks", "All of these"], "All of these"),
    new Question("Javascript, the language that runs this quiz, is closest to:", ["HTML", "SQL", "Python", "CSS"], "Python"),
    new Question("In which country have I not lived \(so far\)?", ["Belgium","France","Luxembourg","The Netherlands"], "Belgium"),
    new Question("Which of these languages did I study?",["Greek","Italian","Persian","Turkish"],"Turkish"),
    new Question("Where is the HQ of BNP Paribas Cardif located?",["In Cardiff","In Paris"],"In Paris"),
    new Question("In which field would you apply Holt's model?",["Equity research","Supply chain management"],"Supply chain management"),
    new Question("What subject have I not studied at the university?",["International Relations","Corporate Finance","Public speaking"], "Public speaking"),
    new Question("Which of these is NOT a MENA country?",["Israel","Morocco","Iran","Azerbaijan"],"Azerbaijan"),
    new Question("What is the most complicated in Excel?",["Pivot tables","VBA","Vlookups","Power Query"],"VBA"),
    new Question("In what software can you create structured equation models (SEM)?",["RStudio","SPSS","SmartPLS", "All of these"],"All of these"),
    new Question("Where did I study for one year?",["In Budapest","In Bucharest"], "In Budapest"),
    new Question("¿Qué tal me queda el español?", ["Muy bien","Si señor"], "Muy bien"),
    new Question("Do you need a degree in STEM to know about Tech and IT?", ["Yes", "No"],"No")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
