//set default value
var currentSubject = 0;
var choices = [];
var subject = subjects[currentSubject];
document.getElementById("vragen").style.display = "none";

function display(){
	document.getElementById("title").innerHTML = subjects[currentSubject].title;
	document.getElementById("statement").innerHTML = subjects[currentSubject].statement;
}
function finish(){
	document.getElementById("eens").style.visibility = "hidden";
	document.getElementById("geenMening").style.visibility = "hidden";
	document.getElementById("oneens").style.visibility = "hidden";
	document.getElementById("eens").style.visibility = "hidden";
	document.getElementById("title").innerHTML = "Klaar met de stemwijzer";
	document.getElementById("statement").innerHTML = "Bekijk hier je resultaten:";
}

display();

function start(){
	document.getElementById("start").style.display = "none";
	document.getElementById("vragen").style.display = "";
}

function volgende(){
	if(currentSubject < subjects.length){
		currentSubject++;
		display();
	}
}

function vorige(){

		console.log("vorige");
		currentSubject--;

		if(currentSubject <= -1){
			currentSubject = 0;
		}
		display();
}

function eens(){
	choices[currentSubject] = "eens";

	if(currentSubject < subjects.length-1){
			currentSubject++;
			display();
  }else{
			finish();
	}


	console.dir(choices);
}

function geenVanBeide(){
	choices[currentSubject] = "Geen van beide";

	if(currentSubject < subjects.length-1){
			currentSubject++;
			display();
  }else{
			finish();
	}

	console.dir(choices);
}

function oneens(){
	choices[currentSubject] = "oneens";

	if(currentSubject < subjects.length-1){
			currentSubject++;
			display();
  }else{
			finish();
	}

	console.dir(choices);
}
