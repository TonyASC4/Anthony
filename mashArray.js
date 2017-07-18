var mashArray = ["Final Destination", "Nes", "Starfox", "Jungle"]
var firstQuestion = [5, 10];
var secondQuestion = ["Mario", "Luigi"]

for (var i = 0; i < 2; i++){
    firstQuestion.push(prompt("How many cities will you strike?"));
    secondQuestion.push(prompt("who willyou choose to fight?"));
}

console.log("You fought " + secondQuestion[2] 
                          + "in the"
                          + mashArray[math.floor(math.random()*3)]
                          + "and hit" + secondQuestion[Math.floor(Math.random()*1)]
                          + firstQuestion[2] + "times");