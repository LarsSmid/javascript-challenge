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

	console.log(subjects[currentSubject]);

	var subject = subjects[currentSubject];

	if(typeof subject != "undefined") {
		document.getElementById("title").innerHTML = subject.title;
		document.getElementById("statement").innerHTML = subject.statement;
	}


	console.dir(choices);
}

function oneens(){
	choices[currentSubject] = "oneens";

	currentSubject++;

	console.log(subjects[currentSubject]);

	var subject = subjects[currentSubject];
	
	if(typeof subject != "undefined"){
		document.getElementById("title").innerHTML = (subjects[currentSubject].title);
		document.getElementById("statement").innerHTML = (subjects[currentSubject].statement);
	}

	console.dir(choices);
}
/*
function checkSubject(){
	console.log("checkSubject");
	setSubjectNumber();
	if(currentSubject == 1){
			console.log("if");
			document.getElementById("title").innerHTML = (subjects[0].title);
			document.getElementById("statement").innerHTML = (subjects[0].statement);
	}

	else if(currentSubject == 2){
			document.getElementById("title").innerHTML = (subjects[1].title);
			document.getElementById("statement").innerHTML = (subjects[1].statement);
			//gekeuze deel = eens
	}else if(currentSubject == 3){
			document.getElementById("title").innerHTML = (subjects[2].title);
			document.getElementById("statement").innerHTML = (subjects[2].statement);
	}
}
*/
