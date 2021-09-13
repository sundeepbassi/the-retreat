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

// Display question and answers for quiz


document.getElementsByClassName("display-questions")[0].innerHTML = "hello"

// loop

var questions=["levelOne","levelTwo","levelThree",'levelFour','levelFive'];
for (let i = 0; i < colors.length; i++) { 
  console.log(colors[i]);
}

const questions =

{ levelOne: [{
    question: "What's the biggest night for movie awards?",
    answer: "Oscar Night",
    type: "text"
    }, {
    question: "in which movie did terror lurk under the water?",
    answer: "Jaws",
    type: "Multiple Choice",
    options: ["Jaws", "King Kong"]
    }, {
    question: "In which movie did an actor refuse an award at the big night out at the movies",
    answer: "Godfather",
    type: "Multiple Choice",
    options: ["Sins of The Father", "Godfather"]
    },

],

 levelTwo: [{
    question: "What place is famous for making movies?",
    answer: "Hollywood",
    type: "text"
    }, {
    question: "What is the highest-grossing movie of all time?",
    answer: "Avatar",
    type: "Multiple Choice",
    options: ["Star Wars", "Avatar"]
    }, {
    question: "Where was the Lord of The Rings movie filmed?",
    answer: "New Zealand",
    type: "Multiple Choice",
    options: ["Ireland", "New Zealand"]
    },

],


 levelThree: [{
    question: "What snack would you usually eat in a cinema watching a movie?",
    answer: "popcorn",
    type: "text"
    }, {
    question: "Which movie was not directed by Tim Burton?",
    answer: "Witches",
    type: "Multiple Choice",
    options: ["Witches", "Corpse Bride"]
    }, {
    question: "In which movie was a new language created by the Directors?",
    answer: "Despicable Me",
    type: "Multiple Choice",
    options: ["Lion King", "Despicable Me"]
    },

],


   levelFour: [{
    question: "A person who doubles up for an actor during the filming of dangerous scenes is a?",
    answer: "stunt person",
    type: "text"
    }, {
    question: "In which film did John Travolta star in singing and dancing??",
    answer: "Grease",
    type: "Multiple Choice",
    options: ["Grease", "Sound Of Music"]
    }, {
    question: "Which is the most popular Christmas movie of all time?",
    answer: "Grinch",
    type: "Multiple Choice",
    options: ["The Snowman", "Grinch"]
    },

],
    levelFive: [{
    question: "Who is in charge of making a movie?",
    answer: "director",
    type: "text"
    }, {
    question: "Jimmy Stewart did not want to do it's a wonderful?",
    answer: "True",
    type: "Multiple Choice",
    options: ["True", "False"]
    }, {
    question: "In which movie did Will Smith star in?",
    answer: "Godfather",
    type: "Multiple Choice",
    options: ["Alien Resurrection", "Independance Day"]
    },

]
}




