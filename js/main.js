
/*var myAge = 29;

MyAge = myAge++;




alert("I wanna die in my age of " + MyAge); */




/*var hobbies = ["jakol", "editing", "toyi", "rides"];

hobbies.push("working");
hobbies.shift();
hobbies.unshift("rapping");



if(hobbies.indexOf('jakol') === -1 ) {
	console.log("I fuck with that")
}

if(hobbies.indexOf('carti') > -1) {

}else {
	console.log("the goat doe")
} */


/*var btn = document.getElementById("go-button");

function buttonClicked() { 
	console.log("Button clicked!");

	var customText = document.getElementsByClassName("my-input");
	var results = document.getElementById("text");

	console.log(customText);
	results.innerHTML = "Wassup nigga, " + customText[0].value;
}


btn.addEventListener("click", buttonClicked);  */

/*function saysum(what) {
	console.log("say it bitch " + what)
}

function getPhraseLength(what, when) {

	var l = what.length;

	if (typeof when !== "undefined") {

		l += when.length;

	}

	return l;
}


var p1 = "This is cash carti my nigga wassuh";
var p2 = "Sir cartier in the house pull up";

var thisLength = getPhraseLength(p1, p2);

console.log(thisLength); */

/*function missingno(numbers) {

	var missing = -1;

	var sorted = numbers.sort(function(a, b) {return a - b; });

	for(var i = sorted[0]; i <= numbers.length - 1; i++) {
		if (numbers.indexOf(i) === -1) {
			missing = i;
		}
	}

	return missing; 

}


var numbers = [3, 8, 7, 9, 6, 4, 12, 5, 14, 19, 16, 18, 11, 10, 13, 17, 20];

console.log(missingno(numbers))*/


class Rappers {

	constructor(name, gender, height) {
		console.log("you created a rapper named: ", name)

		this.name = name;
		this.gender = gender;
		this.height = height;
	}

	nameLength() {
		return this.name.length;
	}

}

//var rocky = new Rappers("A$AP R0CKY", "alpha male", "6'0", "Praise Da Lord", 3000);
//var carti = new Rappers("playboi carti", "male", "6'2", "BROKE BOI", 2000);

//console.log(carti);

class Carti extends Rappers {
	constructor(name, gender, height, bestSong, fansCount) {
		super(name, height, weight)

		this.name = name;
		this.height = height;
		this.weight = this.weight;

	}

	songs() {
		if(this.fansCount > 1000) {
			console.log(this.name, "HOT!");
		} else {
			console.log(this.name, "WACK");

		} 
		
	}

}









