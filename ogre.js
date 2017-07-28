var life= 100;

var gold= 0;

var numberDefeated= 0;

function updateStatus(){
    $('#stats').text("HP: "+ life + "  Gold: "+ gold + "  DEAD: " +numberDefeated);
}

function attack(){
    if(life>0){
        if(Math.random()*100>gold){
            gold=gold+10;
            numberDefeated++;
            $('#ogres').prepend(
                "<p style='color:green'> YOU WON! some gold. </p>"
            );
        }//When player loses gold and life.
        else{
            gold--;
            life--;
            $('#ogres').prepend(
              "<p style= 'color: red'> YOU LOST -1 gold. </p>"
            );
                
        }
        updateStatus();
        makeOgre();
    
}
//Dead Player
else {
    $('#ogres').prepend(
        "<h1>Game Over!!!!!</h1>"
    );
}

}

function makeOgre(){
    $('#ogres').prepend(
        "<img src = 'https://vignette1.wikia.nocookie.net/shrek/images/7/72/Shrek_is_posing.png/revision/latest?cb=20141122050757'>"
    );
}




function setup(){


$("body").append(
    "<h1>Welcome to Ogre Fighter!!!!!</h1>"
); /*goes to html files, why there are parenthesis*/

$("body").append(
    "<div> <h3> STATS </h3><p id = 'stats'></p></div>" 
); /*stats to update later*/

$("body").append(
    "<button onClick='attack()'> Attack the OGRE! </button>"
); /*Add an attack button*/

$("body").append(
    "<div id= 'ogres'></div>"
); /*Mkae shte container of the animated ogre*/

updateStatus(); 


}

$(document).ready(setup);



