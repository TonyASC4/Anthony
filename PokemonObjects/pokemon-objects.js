var Array = [
 {
        "atk": 35,
        "def": 55,
        "hp": 30,
        legend: false,
        "name": "Pikachu",
        "type": "Lightning"  
    },
{
        "atk": 62,
        "def": 63,
        "hp": 60,
        legend: false,
        "name": "Ivysaur",
        "type": "Grass"
    },
{
        "atk": 89,
        "def": 85,
        "hp": 75,
        legend: false,
        "name": "Grotle",
        "type": "Grass"
    },
{
        "atk": 30,
        "def": 30,
        "hp": 30,
        legend: false,
        "name": "Sunkern",
        "type": "Grass"  
    }, 
{
        "atk": 120,
        "def": 100,
        "hp": 90,
        legend: true,
        "name": "Palkia",
        "type": "Water/Dragon"
    },
{
        "atk": 50,
        "def": 70,
        "hp": 60,
        legend: false,
        "name": "Electrode",
        "type": "Lightning"

    }
];

// function printRoster(Array){
//     for (var i=0; i < Array.length; i++)
//     console.log(Array[i]);

// } 

function pokemonAttacked(){
    for (var i=0; i < 6; i++) {
    Array[i].atk -= 10;
    
}

  return Array;
  
};

pokemonAttacked();
