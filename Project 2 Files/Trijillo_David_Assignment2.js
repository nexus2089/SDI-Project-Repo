// SDI Project 2 1301
// Author David Trijillo
// 01/17/2013



alert("JavaScript works!");

var name = ("David");
var morning = true

//Boolean Function

if (morning === true) {
	console.log(" My alarm wakes me up at 6 am");
	}   else { console.log("It's not time to get up yet so " + name + " goes back to sleep")
};

//Procedure 

var whatToWear = function(warm, cold) {
	console.log("I need to know how nice it is outside to decide what to wear.");
	console.log("If it's cold I will wear jeans.");
	console.log("If it's warm i will wear shorts.");
	console.log("I looked outside and saw that it was warm so I decided to wear " + warm + ".");
};
whatToWear("shorts", "jeans")

//String Function

var day = function(time, weather, temp) {
		console.log("At " + time + " I checked the news and saw it was " + weather + " and " 
		 + temp + " degrees");

};
day(6 + ":" + 30, "Sunny", 73);

// Number Function

var timeSpent = function(firstNum, secondNum, thirdNum) {
	var finalNum = firstNum + secondNum + thirdNum; 
	console.log("I spent " + firstNum + " minutes getting ready, " + secondNum + " minutes eating breakfast, and " 
	+ thirdNum + " minutes watching the news. I don't usually get this much done in " + finalNum + " minutes.");
};
timeSpent(30, 20, 10);

//Array Function

var startDay = function( WU, TS, BT, GD, GTW )		{
		console.log("Everyday I follow the same routine, first I " + WU + ", then I " + TS + 
		", next I " + BT + ", after that I " + GD + " and once I'm dressed I'm ready to " + GTW + "!");


};
		
startDay("wake up", "take a shower", "brush teeth", "get dressed", "go to work")



// Mr Lewis,
// I hope that the functions don't have to be in a specific order as it was hard enough trying to figure out what "real life" actions
// would fit with which function. 
// Thanks, David Trijillo



