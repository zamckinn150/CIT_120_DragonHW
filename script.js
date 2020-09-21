var PDmg = document.body.querySelector("#PlayerDmg");
var DDmg = document.body.querySelector("#DragonDmg");
var PHp = document.body.querySelector(".Playerhealth");
var DHp = document.body.querySelector(".Dragonhealth");
var PHp = 5;
var DHp = 10; 

var PDmg = prompt ("How many hits will you attempt"); 

while(DHp>=0 || PHp>=0);{

if(isNaN(PDmg)){
 document.body.querySelector(".stop").innerHTML = "Please enter a number"
}
if(PDmg>5){
var PDmg = 1
}
var PDmg = Math.floor(Math.random() = PDmg + 1);
var DDmg = Math.floor((Math.random() * 2 ) + 1);

PHp = PHp - DDmg;
DHp = DHp - PDmg;
} 
if(0>=DHp){
document.body.querySelector(".stop").innerHTML = "You Beat the Dragon,Victory"
}
if(0>=PHp){
 document.body.querySelector(".stop").innerHTML = "Another Hero Slain,Defeat"
}

document.body.querySelector(".Playerhealth").innerHTML = PHp;
document.body.querySelector(".Dragonhealth").innerHTML = DHp;

//var x=Math.floor((Math.random() * 5)+ 1);
//document.body.querySelector(".wrapper").innerHTML = x;