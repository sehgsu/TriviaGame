
var currentQ = 0;
var correctAnsw = 0;
var wrongAnsw = 0;
var unAnswd = 0;
var timeLeft = 75;
var intID;
// var songPlay = document.getElementById("#themesong")

var trivQnA = [{
        q: "What is are the words of house Stark?",
        choices: ["Fierce like the wolves", "Our's is the fury", "Winter is coming"],
        a: "Winter is coming."},
        {
        q: "What is the sigil of house Stark?",
        choices: ["A direwolf", "A bear", "A werewolf"],
        a: "A direwolf"},
        {
        q: "What is the sigil of house Targaryen?",
        choices: ["A two-headed lizard", "A three-headed dragon", "A flaming knight"],
        a: "A three-headed dragon"},
        {
        q: "What are the words of house Targaryen?",
        choices: ["Burn them all", "Fire and blood", "The night is dark and full of terrors"],
        a: "Fire and blood"},
        {
        q: "What are the words of house Baratheon?",
        choices: ["Our's is the fury", "Heavy is the crown", "Bend the knee"],
        a: "Out's is the fury"},
        {
        q: "What is the sigil of house Baratheon?",
        choices: ["A dothraki horde", "A black stag", "A boar"],
        a: "A black stag"},
        {
        q: "What is the sigil of house Lannister?",
        choices: ["A golden lion", "A fighting griffin", "A jaguar"],
        a: "A golden lion",
        },
        {
        q: "What are the words of house Lannister?",
        choices: ["A Lannister always pays his debts", "Hear me roar", "Gold as a lion"],
        a: "Hear me roar"},
        {
        q: "What is the sigil of house Greyjoy?",
        choices: ["Towers rising in the sea", "A golden kraken", "A fleet of ships"],
        a: "A golden kraken"},
        {
        q: "What are the words of house Greyjoy?",
        choices: ["Iron born, iron strong", "Be way of the sea", "We do not sow"],
        a: "We do not sow"},
    ];
    console.log("javascript is running");

function gameStart(){
    $("#slideshow").toggle();
    console.log("Let the games begin!")
    $("#start").toggle();
    $("#submit").toggle();
    $("timer").toggle();
};
function qstnDisplay() {

    
}

$(document).ready(function(){
$("#start").click(function(){
    event.preventDefault();
    console.log("button works");
    $(gameStart);
});

});
   

