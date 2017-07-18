function Superhero (realName, power, justice, height, health){
    this.name = realName;
    this.superPower = power;
    this.justice = justice;
    this.height = height;
    this.health = health
}

var superman = new Superhero ("Clark Kent", "Super Strength", True, 6, 3);

var retcon = new Superhero ("Doug Pierre", "Timeline Manipulation", True, 5, 11);

retcon.superPower = "flashing"; 
console.log(retcon.superPower);

this.fight = function (){
    var num = Math.fllor(Math.random()*100);
    this.health = this.health - num;
    //this.health -= num;  

  }

}; 