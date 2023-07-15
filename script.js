var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var quizBody = document.getElementById("quiz");
var quizTimer = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var highscoreDisplayName = document.getElementById("highscore-initals");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreInputName = document.getElementById("initials");
var resultsEl = document.getElementById("result");
var highscoreDisplayScore = document.getElementById("highscore-score");
var finalScoreEl = document.getElementById("finalScore");
var submiteScoreBtn = document.getElementById("submitScore");
var gameoverDiv = document.getElementById("gameover");
var endGameBtns = document.getElementById("endGameBtns");

var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//Questions

var quizQuestions = [{
        question: "True or False. A string is a series of characters and is surrounded by quotes.",
        ChoiceA: "True",
        ChoiceB: "False",
        correctAnswer: "a"},
    {
        question: "How many values does booleans have?",
        ChoiceA: "one",
        ChoiceB: "two",
        ChoiceC: "three",
        ChoiceD: "four",
        correctAnswer: "b"},
    
    {
        question: "Fill in the blank. Modulus returns the ___ between two numbers.",
        ChoiceA: "Whole number",
        ChoiceB: "Boolean",
        ChoiceC: "Remainder",
        ChoiceD: "String",
        correctAnswer: "c"},
    {
        question: "What do we use to store groups of data in a single variable?",
        ChoiceA: "Iteration",
        ChoiceB: "Arrays",
        ChoiceC: "Functions",
        ChoiceD: "Objects",
        correctAnswer: "b"},
    {
        question: "What happens when the same variable is used in the local and global scope?",
        ChoiceA: "Shadowing",
        ChoiceB: "Null",
        ChoiceC: "Iteration",
        ChoiceD: "Error",
        correctAnswer: "a"},
    {
        question: "True or False. Objects are a collection of properties.",
        ChoiceA: "True",
        ChoiceB: "False",
        correctAnswer: "a"},
];






