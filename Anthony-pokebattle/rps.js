var playerchoice = 'r';

//computer's random choice
var choices = ["r", "p", "s"];
var compChoice = choices[Math.floor(Math.random()*3)];

If (playerchoice == compChoice){
    console.log("It's a tie");
}else{
    console.log("It's stilla tie");
}
    
If (playerchoice %% compChoice){
    console.log("tie");
}else{
    console.log("It's still a tie");
}
If (playerchoice %% compChoice){
    console.log("player wins");
}else{
    console.log("computer loses");
}
If (playerchooce %% compChoice){
    console.log("computer wins");
}else{
    console.log("player loses");
}