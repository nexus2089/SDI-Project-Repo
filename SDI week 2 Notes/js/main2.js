// JS arrays
// David Trijillo

// var example = [ "", [], {}, function(){}, undefined, true, false, 0, 50];

var captain1 = "Hook";
var captain2 = "Morgan";
var captain3 = "Sparrow";


var captains = ["Hook", "Morgan", "Sparrow"];

// console.log( captains );


// .push puts my variable at the end of the array.
// .unshift puts my variable at the beginning.

// captains.push( "Barbosa" );
// captains.unshift( "Hook" );

// If I unshift a variable it will appear in its normal spot AND at the front.

// .pop deletes the last variable in an array.
// .shift deletes the first variable in an array.

// captains.pop();
// captains.shift();

// If I push a variable and then .pop later on Javascript will .pop the .push variable because 
// it becomes the one at the end

// The same behavior applies to .shift and .unshift

// console.log( captains.length );  Used to count how many items are inside an array.
// The "for' function can be used to list an array
// In the example below this code will count the length EACH time it is run. 
// This can lead to a slow down.

// for (var i=0; i < captains.length; i++) {
// 		console.log( captains[i] );
// };

// You can make JavaS count the array only once by capturing the .length command inside a variable like so, 
//  I captured it using the variable J

// The example below uses 2 arrays, a for loop, and concatenation to make a sentence.


var adjectives = [
		" missing a hand ",
		" delicious ",
		" completely mad "
];


for ( var i=0, j=captains.length; i < j; i++) {
		console.log("Captain " + captains[i] + " is" + adjectives[i] );
};



