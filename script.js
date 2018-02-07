//set default value
var currentSubject = 0;

//loop door alle  vragen
for( let subject of subjects){

  //console.log(subject);
}

document.getElementById("title").innerHTML = (subjects[currentSubject].title);
document.getElementById("statement").innerHTML = (subjects[currentSubject].statement);

function volgende(){
		currentSubject += 1;

		document.getElementById("title").innerHTML = (subjects[currentSubject].title);
		document.getElementById("statement").innerHTML = (subjects[currentSubject].statement);
}

function vorige(){
		currentSubject -= 1;

		document.getElementById("title").innerHTML = (subjects[currentSubject].title);
		document.getElementById("statement").innerHTML = (subjects[currentSubject].statement);
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
