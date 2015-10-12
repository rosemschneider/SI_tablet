//SI_tablet using JS/HTML/CSS

//-------HELPER FUNCTIONS------
// show slide function
function showSlide(id) {
  $(".slide").hide(); //jquery - all elements with class of slide - hide
  $("#"+id).show(); //jquery - element with given id - show
}

//Handles audio; indexes into the sprite to play the prompt associated with a critical word
playPrompt = function(word) {
	audioSprite.removeEventListener('timeupdate', handler);
	audioSprite.currentTime = spriteData[word].start;
	audioSprite.play();

	endTime = spriteData[word].end;
	if(word.substring(0,4) == "look")
		endTime = endTime - 1.2;

	handler = function() {
		if (this.currentTime >= (endTime)) {
			this.pause();
		}
	};
	audioSprite.addEventListener('timeupdate', handler, false);
}

trim = function(item) {
	var tmp = item;
	return tmp.slice(tmp.lastIndexOf("/")+1,tmp.lastIndexOf("."));
};

//for critical trials and fillers
var images = new Array();
for (i = 0; i < allimages.length; i++) {
	images[i] = new Image();
	images[i].src = "imgs/" + allimages[i] + ".png";
};

//array shuffle function
shuffle = function (o) { //v1.0
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

//date function - will be used in recording data
getCurrentDate = function() {
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	return (month + "/" + day + "/" + year);
}

//this could be used for RTs?
getCurrentTime = function() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();

	if (minutes < 10) minutes = "0" + minutes;
	return (hours + ":" + minutes);
}

//--------------PARAMETERS----------------
//Basics of the experiment go here

//******for handling sound; see helper function playPrompt(word)
var audioSprite = $("#sound_player")[0];
var handler;

//--first, practice trials--
var practiceCounter = 0;

var numPractice = 2;

var practiceImgs = ["tv", "couch", "fridge"];
var practiceNames = ["tv", "couch", "fridge"];

//--now, experiment trials--
//keeps track of trial you're on
var trialCounter = 0;

var numTrials = 3;

//number of images and words in each trial
var numTrialImgs = 15;
var numTrialWords = 1;

//an array of all the quantifiers used in the study
var quantifiers = ["some", "all", "none"];

//book covers 
var books = ["some", "all", "none"];

//arrays of the all different items
var allimages = ["donut", "peach", "pear", "popcorn", 
				"popsicle", "strawberry", "mitten", "sock", "zipper",
				"chicken", "duck", "goat", "penguin", "pig", "tiger"];
var allnames = ["donut", "peach", "pear", "popcorn", 
				"popsicle", "strawberry", "mitten", "sock", "zipper",
				"chicken", "duck", "goat", "penguin", "pig", "tiger"];


//selecting three random images from the array of images would be easier - then you can assign them to the book covers in different quantities
//selecting the items that get assigned to books

//here I'm creating an array of numbers that I will then shuffle; these will be used to index the names and the images used
//this generates an array based on the length of the image list
var imgNums = [];
for (var i = 0; i <= allimages.length; i++) {
    imgNums.push(i);
}
//now shuffle those numbers
imgNums = shuffle(imgNums);

//slice those numbers
//this is taking 3 random images for each trial
var trialImgNums = [
	imgNums.slice(0, 3),
	imgNums.slice(3, 6),
	imgNums.slice(6, 9),
	imgNums.slice(9, 12),
	imgNums.slice(12, 15)
];

//Now create an array of 1, 2, and 3 - this will be used to index the quantifier
//This is hardcoded for now but will be softcoded later to adapt to trial nums
var quantNums = [1, 1, 2, 2, 3];
quantNums = shuffle(quantNums); 

//


//now shuffle where the books go


//--other parameters--

//amount of white space between trials
var normalpause = 1500;

//pause after picture chosen, to display red border around picture selected
var timeafterClick = 1000;

//length of filler (every time fill2 comes up, add 1sec of time)
var fillerpause = 5000;

//-----------------------EXPERIMENT------------------
showSlide("instructions");

var experiment = {
	subid: "",
		//input at beginning of experiment
	trialnum: 0,
		//trial number
	word: "",
		//name of the item that child is queried on
	quant: ""
		//quantifier name that child is queried on	
	book1: "",
		//quantifier of book 1 - left
	book2: "",
		//quantifier of book 2 - middle
	book3: "",
		//quantifier of book 3 - right
	book1imgs: "",
		//items on book 1 - left
	book2imgs: "",
		//items on book 2 - middle
	book3imgs: "", 
		//items on book 3 - right
	side: "",
		//whether the child picked the left (L), middle (M), or the right (R) picture
	chosenbook: "",
		//the number of the book the child picked
	response: "",
		//whether the response was the correct response (Y) or the incorrect response (N)
	date: getCurrentDate(),
		//the date of the experiment
	timestamp: getCurrentTime(),
		//the time that the trial was completed at 
	reactiontime: 0,
	//TODO : add reaction time variable ***** 

	preStudy: function() {
		document.body.style.background = "white";
		$("#prestudy").hide();
		setTimeout(function () {
			experiment.next();
		}, normalpause);
	},

	//checks the input information to make sure it's accurate
	checkInput: function() {
		//subject ID
  		if (document.getElementById("subjectID").value.length < 1) {
			$("#checkMessage").html('<font color="red">You must input a subject ID</font>');
			return;
		}
  		experiment.subid = document.getElementById("subjectID").value;
	},
	//the end of the experiment, where the background becomes completely black
	end: function () {
    	setTimeout(function () {
    		$("#stage").fadeOut();
    	}, normalpause);
    	showSlide("finish");
    	document.body.style.background = "black";
    },



















}



//Deal with the audio
//Sprite stuff goes here

//Images go here

//