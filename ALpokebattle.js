var PokeName = ["Pikachu", "Sunkern", "Magikarp", "Metang", "Arceus", "Giratina"];

function Pokemon(PokeName, PokeMoves){//this function is used to declare the class and the objects in the classes.
    this.name=PokeName;
    this.moves=PokeMoves;
}

var Pikachu = new Pokemon("Pikachu", "lightning bolt");
var Sunkern = new Pokemon("Sunkern", "chlorophyll");
var Magikarp = new Pokemon("Magikarp", "lightning bolt");
var Metang = new Pokemon("Metang", "light metal",); 
var Arceus = new Pokemon("Arceus", "1000 Arms");
var Giratina = new Pokemon("Giratina","telepathy");

console.log(Sunkern.moves);

function PokeRiot(PokemonName, PokemonMoves){
    this.name=Pokemon-Name;
    this.moves=Poke-Moves;
}

//var Pokelun = new PokeRiot(PokeName[1], PokemonMoves[1]);

function mouseClicked(){ //there should always be the word function when you declare a fucntion or when you make a function.
    //mouseX
    //mouseY
    if (mouseX < 200){// If else statemtns or others canbe without functions declared.
        userpokemon = Pikachu
    }
    else if (mouseX < 400){
        userpokemon = Sunkern 
    }
    else if (mouseX < 600){
        userpokemon = Magikarp
    }
    else if (mouseX < 800){
        userpokemon = Metang
    }
    else if (mouseX < 1000){
        userpokemon = Arceus
    }
    else{ //do not put (mouseX < )
        userpokemon = Giratina
    }
}


/*var Pokeduddete = new Pokemon(PokeName[3]);
var Pokedude = new Pokemon(PokeMoves);
console.log(Pokeduddete.name);



var PokeMoves = [];

function Pokemon(PokeName){
    this.name=PokeName;
}

var Pokeduddete = new Pokemon(Poke1Name[3]);
console.log(Pokeduddete.name);


function(){
    this.Pokename
}*/