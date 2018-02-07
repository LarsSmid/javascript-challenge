//set default value
var currentSubject = 0;
var choices = [];
var subject = subjects[currentSubject];

document.getElementById("title").innerHTML = subject.title;
document.getElementById("statement").innerHTML = subject.statement;

console.log(subjects.length);
//document.getElementById("title").innerHTML = (subjects[currentSubject].title);
//document.getElementById("statement").innerHTML = (subjects[currentSubject].statement);
function start(){
		currentSubject++;
}
function volgende(){
	console.log("volgende");
	if(currentSubject < subjects.length){
		currentSubject++;
		var subject = subjects[currentSubject];
		document.getElementById("title").innerHTML = (subject.title);
		document.getElementById("statement").innerHTML = (subject.statement);
	}else{
		console.log("apple");
	}
}

function vorige(){
		currentSubject--;

		if(currentSubject <= -1){
			currentSubject = 0;
		}

		document.getElementById("title").innerHTML = (subject.title);
		document.getElementById("statement").innerHTML = (subject.statement);
}

function eens(){
	choices[currentSubject] = "eens";

	currentSubject++;

	var subject = subjects[currentSubject];

	if(typeof subject != "undefined") {
		document.getElementById("title").innerHTML = subject.title;
		document.getElementById("statement").innerHTML = subject.statement;
	}else if(currentSubject == subjects.length){
		document.getElementById("eens").style.visibility = "hidden";
		document.getElementById("geenMening").style.visibility = "hidden";
		document.getElementById("oneens").style.visibility = "hidden";
		document.getElementById("eens").style.visibility = "hidden";
		document.getElementById("title").innerHTML = "Klaar met de stemwijzer";
		document.getElementById("statement").innerHTML = "Bekijk hier je resultaten:";
	}


	console.dir(choices);
}

function geenVanBeide(){
	choices[currentSubject] = "Geen van beide";

	currentSubject++;

	var subject = subjects[currentSubject];

	if(typeof subject != "undefined") {
		document.getElementById("title").innerHTML = subject.title;
		document.getElementById("statement").innerHTML = subject.statement;
	}else if(currentSubject == subjects.length){
		document.getElementById("eens").style.visibility = "hidden";
		document.getElementById("geenMening").style.visibility = "hidden";
		document.getElementById("oneens").style.visibility = "hidden";
		document.getElementById("eens").style.visibility = "hidden";
		document.getElementById("title").innerHTML = "Klaar met de stemwijzer";
		document.getElementById("statement").innerHTML = "Bekijk hier je resultaten:";
	}
	
	console.dir(choices);
}

function oneens(){
	choices[currentSubject] = "oneens";

	currentSubject++;

	var subject = subjects[currentSubject];

	if(typeof subject != "undefined"){
		document.getElementById("title").innerHTML = (subjects[currentSubject].title);
		document.getElementById("statement").innerHTML = (subjects[currentSubject].statement);
	}else if(currentSubject == subjects.length){
		document.getElementById("eens").style.visibility = "hidden";
		document.getElementById("geenMening").style.visibility = "hidden";
		document.getElementById("oneens").style.visibility = "hidden";
		document.getElementById("eens").style.visibility = "hidden";
		document.getElementById("title").innerHTML = "Klaar met de stemwijzer";
		document.getElementById("statement").innerHTML = "Bekijk hier je resultaten:";
	}

	console.dir(choices);
}
