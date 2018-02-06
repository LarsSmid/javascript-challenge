var currentSubject = 0;

//loop door alle  vragen
for( let subject of subjects){

  //console.log(subject);
}

function setSubjectNumber(){
		return currentSubject += 1;
}

function checkSubject(){
	console.log("checkSubject");
	setSubjectNumber();
	if(currentSubject == 1){
			console.log("if");
			document.getElementById("title").innerHTML = (subjects[0].title);
			document.getElementById("statement").innerHTML = (subjects[0].statement);
	}else if(currentSubject == 2){
			document.getElementById("title").innerHTML = (subjects[1].title);
			document.getElementById("statement").innerHTML = (subjects[1].statement);
	}
}
