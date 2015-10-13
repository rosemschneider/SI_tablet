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

//for book positions - you can just shuffle at the beginning of each trial to assign what quantifier goes where

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

	next: function() {

		//returns the list of all imgs to use in the study - list dependent
  		var imgList = allimages[trialImgNums];
  		var nameList = allimages[trialImgNums];
  		//returns the list of all images to use in the study - list dependent
		var imageArray = makeImageArray(experiment.order);

		var objects_html = "";
		var counter = 1;
 			
   		// Create the object table (tr=table row; td= table data)
		//objects_html = '<table class = "centered" ><tr><td id=word colspan="2">' + wordList[0] + '</td></tr><tr>';;
	    
	   	//HTML for the first object on the left
		leftname = "tabletobjects/" + imageArray[0] + ".jpg";
		objects_html += '<table align = "center" cellpadding="30"><tr></tr><tr><td align="center"><img class="pic" src="' + leftname +  '"alt="' + leftname + '" id= "leftPic"/></td>';
	
		//HTML for the first object on the right
		rightname = "tabletobjects/" + imageArray[1] + ".jpg";
	   	objects_html += '<td align="center"><img class="pic" src="' + rightname +  '"alt="' + rightname + '" id= "rightPic"/></td>';
		
    	objects_html += '</tr></table>';
	    $("#objects").html(objects_html); 

	    $("#stage").fadeIn();

	    var startTime = (new Date()).getTime();
	    playPrompt(wordList[0]);
		
		//click disable for the first slide
		var clickDisabled = true;
		setTimeout(function() {clickDisabled = false;}, (spriteData[wordList[0]].onset - spriteData[wordList[0]].start)*1000 + 300);

	    $('.pic').bind('click touchstart', function(event) {

	    	if (clickDisabled) return;
	    	
	    	//disable subsequent clicks once the participant has made their choice
			clickDisabled = true; 

	    	//time the participant clicked - the time the audio began - the amount of time between the beginning of the audio and the 
	    	//onset of the word 
	    	experiment.reactiontime = (new Date()).getTime() - startTime - (spriteData[wordList[0]].onset-spriteData[wordList[0]].start)*1000; 

	    	experiment.trialnum = counter;
	    	experiment.word = wordList[0];
	    	experiment.pic1 = imageArray[0];
	    	experiment.pic2 = imageArray[1];

	    	//get whether the left and right pictures were familiar or novel
	    	if (novelWords.indexOf(imageArray[0]) === -1) {
	    		experiment.pic1type = "familiar";
	    	} else {
	    		experiment.pic1type = "novel";
	    	}
	    	if (novelWords.indexOf(imageArray[1]) === -1) {
	    		experiment.pic2type = "familiar";
	    	} else {
	    		experiment.pic2type = "novel";
	    	}

	    	//Was the picture clicked on the right or the left?
	    	var picID = $(event.currentTarget).attr('id');
	    	if (picID === "leftPic") {
				experiment.side = "L";
				experiment.chosenpic = imageArray[0];
	    	} else {
				experiment.side = "R";
				experiment.chosenpic = imageArray[1];
			}
			
			//If the child picked the picture that matched with the word, then they were correct. If they did not, they were not correct.
			if (experiment.chosenpic === experiment.word) {
				experiment.response = "Y";
			} else {
				experiment.response = "N"
			}

			//what kind of trial was this?
			experiment.trialtype = getTrialType(experiment.word, imageArray[0], imageArray[1]);

			//Add one to the counter and process the data to be saved; the child completed another "round" of the experiment
			experiment.processOneRow();
	    	counter++;

	    	$(document.getElementById(picID)).css('margin', "-8px");
			$(document.getElementById(picID)).css('border', "solid 8px red");


















}



//Deal with the audio
//Sprite stuff goes here

//Images go here

//