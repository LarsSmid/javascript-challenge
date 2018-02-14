//set default value
var currentSubject = 0;
var choices = ["pro", "pro", "contra", "contra", "pro", "pro", "contra"];
var subject = subjects[currentSubject];
document.getElementById("vragen").style.display = "none";

//display current subject
function display(){
	document.getElementById("title").innerHTML = subjects[currentSubject].title;
	document.getElementById("statement").innerHTML = subjects[currentSubject].statement;
}
display();

//show with new currentSubject
function currentDisplay() {
	if(currentSubject < subjects.length-1){
			currentSubject++;
			display();
	}else{
			finish();
	}
}

//start function
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
		currentSubject--;
		if(currentSubject <= -1){
			currentSubject = 0;
		}
		display();
}

function eens(){
	choices[currentSubject] = "pro";
	currentDisplay();
	console.dir(choices);
}

function geenVanBeide(){
	choices[currentSubject] = "ambivalent";
	currentDisplay();
	console.dir(choices);
}

function oneens(){
	choices[currentSubject] = "contra";
	currentDisplay();
	console.dir(choices);
}

//function for last page
function finish(){
	document.getElementById("eens").style.visibility = "hidden";
	document.getElementById("geenMening").style.visibility = "hidden";
	document.getElementById("oneens").style.visibility = "hidden";
	document.getElementById("vorige").style.visibility = "hidden";
	document.getElementById("title").innerHTML = "Klaar met de stemwijzer";
	document.getElementById("statement").innerHTML = "Bekijk hier je resultaten:";
}

for (var i = 0; i < subjects.length; i++) {
	//console.log(subjects[i].parties[i]);
	for (var x = 0; x < subjects[i].parties.length; x++) {
		for (var m = 0; m < choices.length; m++) {
			if(subjects[i].parties[x].position == choices[m]){
				//console.log(subjects[i].parties[x].name, subjects[i].parties[x].position, "dit is gelijk aan de partijen");

				for (var y = 0; y < points.length; y++) {
					if (points[y].name == subjects[i].parties[x].name) {
						points[y].countPoints++;
					}
				}

			}
		}
	}
}
console.log(points);
