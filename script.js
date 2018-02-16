//set default value
var currentSubject = 0;
var choices = [];
var weigthPoints = [];
var subject = subjects[currentSubject];
document.getElementById("vragen").style.display = "none";

//display current subject
function display(){
	document.getElementById("title").innerHTML = subjects[currentSubject].title;
	document.getElementById("statement").innerHTML = subjects[currentSubject].statement;
	document.getElementById("resultaat").style.display = "none";
}
display();

//hide buttons
function hideButtons() {
	document.getElementById("eens").style.display = "none";
	document.getElementById("geenMening").style.display = "none";
	document.getElementById("oneens").style.display = "none";
	document.getElementById("vorige").style.display = "none";
	document.getElementById("volgende").style.display = "none";
}
//show with new currentSubject
function currentDisplay() {
	if(currentSubject < subjects.length-1){
			currentSubject++;
			display();
	}else{
			extraPoints();
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
	}else {
		alert("Je moet minstes 1 keuze maken!");
	}
}

function vorige(){
		currentSubject--;
		if(currentSubject <= -1){
			currentSubject = 0;
			location.reload();
		}
		display();
}
//functie voor "eens"
function eens(){
	choices[currentSubject] = "pro";
	currentDisplay();
}

//functie voor "geen van beide"
function geenVanBeide(){
	choices[currentSubject] = "ambivalent";
	currentDisplay();
}

//functie voor "oneens"
function oneens(){
	choices[currentSubject] = "contra";
	currentDisplay();
}

//functie voor de extra punten pagina
function extraPoints() {
	hideButtons();
	document.getElementById("title").innerHTML = "Welke onderwerpen vind u extra belangrijk";
	document.getElementById("statement").innerHTML = "Klik de vinkjes aan bij welk onderwerp u belangrijk vind";
	document.getElementById("resultaat").style.display = "";
	for (var i = 0; i < subjects.length; i++) {
		document.getElementById("checkboxes").innerHTML += "<label for='" + subjects[i].title + "'>" + subjects[i].title + "</label> <input type='checkbox' id='" + subjects[i].title + "' value='" + subjects[i].title + "'><br>";
	}
}


function calculateWeight() {
	for (var i = 0; i < subjects.length; i++) {
		if (document.getElementById(subjects[i].title).checked == true) {
			weigthPoints[subjects[i].title] = "plus";
			console.log(weigthPoints);
		}
	}
	calculatePoints();
}
//function om punten te berekenen
function calculatePoints(){
	hideButtons();
	document.getElementById("checkboxes").style.display = "none";
	document.getElementById("resultaat").style.display = "none";
	document.getElementById("title").innerHTML = "Klaar met de stemwijzer";
	document.getElementById("statement").innerHTML = "Bekijk hier je resultaten:";

	for (var i = 0; i < subjects.length; i++) {
		//console.log(subjects[i].title);

		for (var x = 0; x < subjects[i].parties.length; x++) {
			var currentParty = subjects[i].parties[x];
			var choice = choices[i];

			if(currentParty.position == choice){
				//console.log(`currentParty: ${currentParty.name} | partyPosition: ${currentParty.position} | myChoice: ${choice}`);

				//console.log(subjects[i].parties[x].name, subjects[i].parties[x].position, "dit is gelijk aan de partijen");

				partyPoint = points.find(function(element) {
					return (element.name == currentParty.name);
				});
				if (typeof partyPoint != 'undefined') {
					partyPoint.countPoints += 1;
					console.log(weigthPoints[i]);
					if (weigthPoints[subjects[i].title] = "plus") {
						partyPoint.countPoints += 10;
					}
					//console.log(`partyPoint: ${partyPoint}`);
				}

			}
		}
	}
	console.log(points);
	sortPoints();
	printPoints();
}

//functie om alles in de goede volgorde te zetten
function sortPoints() {
	// sort by value
	points.sort(function (a, b) {
		return b.countPoints - a.countPoints;
	});
}

//functie om alles in de html pagina te krijgen
function printPoints() {
	for (var i = 0; i < points.length; i++) {
		document.getElementById("lijst").innerHTML += points[i].name + "<br>";
	}
}
