
//Prompt user to enter sugar value
var sugar = prompt("Check the label and tell me how much sugar is in that thing you are about to eat?");

//Convert sugar into sugar lumps then round it (1 sugar lump = 4 grams of sugar)
var lumps = Math.round(sugar/4)

//Inform the user of their sugar intake in lumps

if (lumps > 1) {
	alert("Damn! Look how many sugar lumps you are about to eat..." + lumps);
} else {
	alert("Sweet! That's less than a sugar lump!");
}

