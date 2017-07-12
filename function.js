//function WelloHorld(){
 //   console.log("Wello Horld!");
//}

WelloHorld();
function WelloHorld(){
    console.log("Wello Horld!");
    return "Wello Horld!";
}


function rand(num){
    //this function returns a random number 
    //between 0 and num
    var randNum = Math.random()*num;
    var result = Math.floor(randNum);
    return result; 
}

console.log(rand(60)); 
//any number can replace 60