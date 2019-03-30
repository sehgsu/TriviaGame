var corAnsw = 0;
var wrongAnsw = 0;
var unAnsw = 0;
var timeLeft = 5;
var intID;
var trivQnA = [{
        q: "What is are the words of house Stark?",
        choices: ["Fierce like the wolves", "Our's is the fury", "Winter is coming"],
        a: "Winter is coming"},
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
        a: "Our's is the fury"},
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
    $("#qna").toggle();
    $("#questions").toggle();
    console.log("Let the games begin!")
    $(qstnDisplay);
    $("#start").toggle();
    $("#submit").toggle();
    $("#timer").toggle();
    $("#submit").click(endGame);
    clearInterval(intID);
    intID = setInterval(runTime, 1000)
};
function qstnDisplay() {
    $("#questions").empty();
    for (i = 0; i < trivQnA.length; i++) {
        $("#questions").append("<h5> " + trivQnA[i].q + '</h5><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions' + [i] + '" id="inlineRadio1' + [i] + '" value="option1"><label class="form-check-label" for="inlineRadio1' + [i] + '">' + trivQnA[i].choices[0] + '</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions' + [i] + '" id="inlineRadio2' + [i] + '" value="option2"><label class="form-check-label" for="inlineRadio2' + [i] + '">' + trivQnA[i].choices[1] + '</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions' + [i] + '" id="inlineRadio3' + [i] + '" value="option3"><label class="form-check-label" for="inlineRadio3' + [i] + '">' + trivQnA[i].choices[2] + '</label></div>');
  
}   
}
function grading() {
    for (i = 0; i < trivQnA.length; i++) {
        var userPick = $("input:radio[name='inlineRadioOptions" + [i] + "']:checked").parent().text()
        if (userPick === trivQnA[i].a) {
            corAnsw++;
        }
        else if (userPick.length === 0) {
        unAnsw++;
        } 
        else {
        wrongAnsw++;
        }
    }
    $("#results").html("<h3><u> Results </u></h3><br><h4><u>Correct: " + corAnsw + "</u></h4><br><h4><u>Incorrect: " + wrongAnsw + "</u></h4><br><h4><u>Unanswered: " + unAnsw + "</u></h4>")
    console.log("correct: " + corAnsw);
    console.log("unanswered: " + unAnsw);
    console.log("wrong: " + wrongAnsw);
    
    
}
$(document).ready(function(){
    $("#start").click(function(){
        event.preventDefault();
        console.log("button works");
        $(gameStart);
    });
});


function runTime() {
    timeLeft--;
    $("#timer").html("<h2><u>Time Left: " + timeLeft + "</u></h2>");
    if (timeLeft === 0) {
        $(endGame);
        $("#questions").hide();
        $("#timer").html("<h2><u>Times up!</u></h2>")
    }
}
function endGame() {
    $(grading);
        event.preventDefault();
        console.log("Thank you for playing, play again?")
        $("#submit").toggle();
        $("#questions").toggle();
        $("#restart").toggle();
        clearInterval(intID);

}


