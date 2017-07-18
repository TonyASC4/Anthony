var alphabet = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

function randLetter(){
  console.log(alphabet[Math.floor(Math.random()*26)]);
}

randLetter();
/*function randWord(){
    var
    return 
}*/


function randLetter(){
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters[rand

function randWord(){
    var word = '';
    var length = 1 + rand(15)
    for ( var i = 0; i < length; i++){
        word = word + randLetter();
    }
    return word;
}
