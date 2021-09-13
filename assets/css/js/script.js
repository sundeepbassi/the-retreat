const navSlide = () => {
    const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
	

	burger.addEventListener('click',() => {
    //Toggle Nav
		nav.classList.toggle('nav-active');
	});
		
	
//Animate Links
navLinks.forEach((link,index) => {
	if (link.style.animation) {
		link.style.animation = '';
	} else {link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+2}s`
	}
	});
}

navSlide();

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "oscars") {
		correct++;
}
	if (question2 == "Godfather") {
		correct++;
}	
	if (question3 == "Jaws") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
