//SI_tablet using JS/HTML/CSS

//-------HELPER FUNCTIONS------
// show slide function
function showSlide(id) {
  $(".slide").hide(); //jquery - all elements with class of slide - hide
  $("#"+id).show(); //jquery - element with given id - show
}

//Handles audio; indexes into the sprite to play the prompt associated with a critical word
////playPrompt = function(word) {
////	audioSprite.removeEventListener('timeupdate', handler);
////	audioSprite.currentTime = spriteData[word].start;
////	audioSprite.play();
//
//	endTime = spriteData[word].end;
//	if(word.substring(0,4) == "look")
//		endTime = endTime - 1.2;
//
//	handler = function() {
//		if (this.currentTime >= (endTime)) {
//			this.pause();
//		}
//	};
//	audioSprite.addEventListener('timeupdate', handler, false);
//}

//removes file names
//trim = function(item) {
//	var tmp = item;
//	return tmp.slice(tmp.lastIndexOf("/")+1,tmp.lastIndexOf("."));
//};

//for critical trials and fillers
// var images = new Array();
// for (i = 0; i < allimages.length; i++) {
// images[i] = new Image();
// images[i].src = "imgs/" + allimages[i] + ".png";
// };

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


//-------DOT GAME-----
createDot = function(dotx, doty, i, tag) {
	var dots;
	if (tag === "smiley") {
		dots = ["smiley1", "smiley2", "smiley3", "smiley4", "smiley5"];
	} else {
		dots = [1, 2, 3, 4, 5];
	}

	var dot = document.createElement("img");
	dot.setAttribute("class", "dot");
	dot.id = "dot_" + dots[i];
	if (tag === "smiley") {
		dot.src = "dots/dot_" + "smiley" + ".jpg";
	} else {
		dot.src = "dots/dot_" + dots[i] + ".jpg";
	}

	var x = Math.floor(Math.random()*950);
	var y = Math.floor(Math.random()*540);

	var invalid = "true";

	//make sure dots do not overlap
	while (true) {
		invalid = "true";
		for (j = 0; j < dotx.length ; j++) {
			if (Math.abs(dotx[j] - x) + Math.abs(doty[j] - y) < 250) {
				var invalid = "false";
				break;
			}
		}
		if (invalid === "true") {
			dotx.push(x);
			doty.push(y);
			break;
		}
		x = Math.floor(Math.random()*400);
		y = Math.floor(Math.random()*400);
	}

	dot.setAttribute("style","position:absolute;left:"+x+"px;top:"+y+"px;");
	training.appendChild(dot);
}

var images=[];
var dots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5", "x", "dot_smiley"];
for (i = 0; i<dots.length; i++) {
	images[i] = new Image();
	images[i].src = "dots/" + dots[i] + ".jpg";
}

//--------------PARAMETERS----------------
//Basics of the experiment go here

//******for handling sound; see helper function playPrompt(word)
//var audioSprite = $("#sound_player")[0];
//var handler;

//--first, practice trials--
// var practiceCounter = 0;

// var numPractice = 2;

// var practiceImgs = ["tv", "couch", "fridge"];
// var practiceNames = ["tv", "couch", "fridge"];

//number of images and words in each trial
// var numTrialImgs = 15;
// var numTrialWords = 1;

//------randomize trial types---------
//first, create an array of the number of quantifiers used in the study
//note: this will be much larger (eventually 33 quantifiers)
var trialQuants = ["some", "some", "some", "some", "some",
					"some", "some", "some", "some", "some",
					"all", "all", "all", "all", "all",
					"all", "all", "all", "all", "all",
					"none", "none", "none", "none", "none",
					"none", "none", "none", "none", "none"];
//shuffle these quantifiers
//We will index this array based on our trial number: this will determine the trial type
trialQuants = shuffle(trialQuants);

//--now, experiment trials--
//keeps track of trial you're on
var numTrials = 30;



//-----book covers------
//books are bookL, bookC, bookR (left, center, right); 
//these will be empty variables, and this array of quantifiers will be shuffled at the start of every trial to determine book type
var bookQuants = ["some", "all", "none"];

//-----items and names -----
//first, load all the images and names in the same order
var food = ["carrot", "cake", "cookie", "pizza", "apple", "banana",
			"orange", "pear", "strawberry","pretzel", "popsicle", "donut"];
var animals = ["dog", "cat", "bird", "horse", "cow", "sheep", "tiger", "lion",
			"bear", "frog", "turtle", "fish", "giraffe", "elephant", "monkey", "pig",
			"goat", "duck", "penguin", "tiger", "chicken"];
var clothing = ["hat", "shoe", "necklace", "watch", "glasses", "purse", "dress", "shirt",
			"shorts", "sock", "mitten", "zipper"];
var toys = ["balloon", "book", "soccer", "pencil", "scissors", "paintbrush", "bell", "drum", "guitar",
			"boat", "bucket", "bike", "crayon", "teddybear", "block"];
var misc = ["car", "train", "firetruck", "toothbrush", "key", "comb", "plate", "cup", "spoon",
			"clock", "lamp", "phone", "flower", "butterfly", "bee", "map", "bus", "trafficlight",
			"present", "cupcake", "party_hat", "tree", "barn", "fence", "chair", "house",
			"table", "plane", "stroller", "fork"];

//shuffle these arrays
food = shuffle(food);
animals = shuffle(animals);
clothing = shuffle(clothing);
toys = shuffle(toys);
misc = shuffle(misc);

//now slice them into 3 per trial
//note that this contains ALL the items in the study - 90 total
//this is done this way to make sure that all the images stay in the same category
var trialItems = [
	food.slice(0, 3),
	food.slice(3, 6),
	food.slice(6, 9),
	food.slice(9, 12),
	animals.slice(0, 3),
	animals.slice(3, 6),
	animals.slice(6, 9),
	animals.slice(9, 12),
	animals.slice(12, 15),
	animals.slice(15, 18),
	animals.slice(18, 21),
	clothing.slice(0, 3),
	clothing.slice(3, 6),
	clothing.slice(6, 9),
	clothing.slice(9, 12),
	toys.slice(0, 3),
	toys.slice(3, 6),
	toys.slice(6, 9),
	toys.slice(9, 12),
	toys.slice(12, 15),
	misc.slice(0, 3),
	misc.slice(3, 6),
	misc.slice(6, 9),
	misc.slice(9, 12),
	misc.slice(12, 15),
	misc.slice(15, 18),
	misc.slice(18, 21),
	misc.slice(21, 24),
	misc.slice(24, 27),
	misc.slice(27, 30)
];

//now shuffle that list to randomize trials
trialItems = shuffle(trialItems);

//
//var allimages = ["donut", "peach", "pear", "popcorn",
//				"popsicle", "strawberry", "mitten", "sock", "zipper",
//				"chicken", "duck", "goat", "penguin", "pig", "tiger"];
//var allnames = ["donut", "peach", "pear", "popcorn",
//				"popsicle", "strawberry", "mitten", "sock", "zipper",
//				"chicken", "duck", "goat", "penguin", "pig", "tiger"];

//then make an array of numbers from 0 to the length of the images-1 (for indexing)
//var itemNums = [];
//for (var i = 0; i <= (allimages.length-1); i++) {
//    itemNums.push(i);
//}

//now shuffle that array 
//itemNums = shuffle(itemNums);

//create empty arrays for the trial images and trial names
//var trialImgs = [];
//var trialNames = [];

//using this array of numbers to index both the names and the images
//build up the trials with their 3 items and names,
// maintaining random order in itemNums
//for (var i = 0; i <= allimages.length-1; i += 3) {
//	trialImgs.push(allimages[itemNums[i]]);
//	trialImgs.push(allimages[itemNums[i+1]]);
//	trialImgs.push(allimages[itemNums[i+2]]);
//
//	trialNames.push(allnames[itemNums[i]]);
//	trialNames.push(allnames[itemNums[i+1]]);
//	trialNames.push(allnames[itemNums[i+2]]);
//}

// //slice those numbers
// //this is taking 3 random images for each trial
// we will index the trial items by the trial number
//var trialItems = [
// 	trialImgs.slice(0, 3),
//	trialImgs.slice(3, 6),
// 	trialImgs.slice(6, 9),
// 	trialImgs.slice(9, 12),
// 	trialImgs.slice(12, 15)
// ];


//--other parameters--
//keeps track of the number of trial you've done
var trialCounter = 0;
var counter = 0;

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
	trialNum: 0,
	//trial number - this is important because the trial number will be used to index array of trial type
	//what number trial you're one
	date: getCurrentDate(),
	//the date of the experiment
	timestamp: getCurrentTime(),
	prompt: "",
	//name of the item that child is queried on
	bookL: "",
	//quantifier of book 1 - left
	bookC: "",
	//quantifier of book 2 - middle
	bookR: "",
	//quantifier of book 3 - right
	bookLImgs: [],
	//items on book 1 - left
	bookCImgs: [],
	//items on book 2 - middle
	bookRImgs: [],
	//items on book 3 - right
	itemList: [],
	//the 3 items that appear in this trial
	allItems: [],
	//the name of the images for quantifier "all"
	someItems: [],
	//the name of the images for quantifier "some"
	noneItems: [],
	//the name of the images for quantifier "none"
	side: "",
	//whether the child picked the left (L), center (C), or the right (R) picture
	selectionType: "",
	//the quantifier selection child made
	response: "",
	//whether the response was the correct response (Y) or the incorrect response (N)
	//the time that the trial was completed
	reactiontime: 0,
	//TODO : add reaction time variable *****

	preStudy: function () {
		document.body.style.background = "white";
		$("#prestudy").hide();
		setTimeout(function () {
			experiment.test();
		}, normalpause);
	},

	training: function (dotgame) {
		var allDots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5",
			"dot_smiley1", "dot_smiley2", "dot_smiley3",
			"dot_smiley4", "dot_smiley5"];
		var xcounter = 0;
		var dotCount = 5;

		//preload sound
		//if (dotgame === 0) {
		//	audioSprite.play();
		//	audioSprite.pause();
		//}

		var dotx = [];
		var doty = [];

		if (dotgame === 0) {
			for (i = 0; i < dotCount; i++) {
				createDot(dotx, doty, i, "");
			}
		} else {
			for (i = 0; i < dotCount; i++) {
				createDot(dotx, doty, i, "smiley");
			}
		}
		showSlide("training");
		$('.dot').bind('click touchstart', function (event) {
			var dotID = $(event.currentTarget).attr('id');

			//only count towards completion clicks on dots that have not yet been clicked
			if (allDots.indexOf(dotID) === -1) {
				return;
			}
			allDots.splice(allDots.indexOf(dotID), 1);
			document.getElementById(dotID).src = "dots/x.jpg";
			xcounter++
			if (xcounter === dotCount) {
				setTimeout(function () {
					$("#training").hide();
					if (dotgame === 0) {
						//hide old x marks before game begins again
						var dotID;
						for (i = 1; i <= dotCount; i++) {
							dotID = "dot_" + i;
							training.removeChild(document.getElementById(dotID));
						}
						experiment.training();
						dotgame++;
					} else {
						//document.body.style.background = "black";
						setTimeout(function () {
							showSlide("prestudy");
							//experiment.test();
						}, normalpause * 2);
					}
				}, normalpause * 2);
			}
		});
	},

	//checks the input information to make sure it's accurate
	checkInput: function () {
		//subject ID
		if (document.getElementById("subjectID").value.length < 1) {
			$("#checkMessage").html('<font color="red">You must input a subject ID</font>');
			return;
		}

		experiment.subid = document.getElementById("subjectID").value;
		if (experiment.subid == 1) {
			experiment.test();
		}
		experiment.training(0);
	},

	//the end of the experiment, where the background becomes completely black
	end: function () {
		setTimeout(function () {
			$("#stage").fadeOut();
		}, normalpause);
		showSlide("finish");
		document.body.style.background = "black";
	},

	test: function () {
		$("#stage").hide();
		//$('body').css('background-image', 'images/background.png')
		//document.body.style.backgroundImage = "images/background.png";
		$(document).ready(function() {
			$('body').css('background-image', 'images/background.png');
		});

		//reset selection type
		experiment.selectionType = "";

		//determines the trial type of this trial
		//this is indexing the quantifier with the trial number
		trialType = trialQuants[experiment.trialNum];
		alert(trialType);

		//determines which quantifier is assigned to which book
		//this happens in every trial
		bookQuants = shuffle(bookQuants);
		bookL = bookQuants[0];
		bookC = bookQuants[1];
		bookR = bookQuants[2];

		//get the trial names for this trial - we are referencing this with the number of the trial we're on
		itemList = trialItems[experiment.trialNum];

		//This is assigning the books the particular images based on their quantifiers
		//this creates an array of four items

		//book left
		if (bookL == "all") {
			bookLImgs = [itemList[0], itemList[0], itemList[0], itemList[0]];
			allItems = bookLImgs;
		} else if (bookL == "some") {
			bookLImgs = shuffle([itemList[0], itemList[0], itemList[1], itemList[1]]);
			someItems = bookLImgs;
		} else {
			bookLImgs = [itemList[2], itemList[2], itemList[2], itemList[2]];
			noneItems = bookLImgs;
		}
		//book center
		if (bookC == "all") {
			bookCImgs = [itemList[0], itemList[0], itemList[0], itemList[0]];
			allItems = bookCImgs;
		} else if (bookC == "some") {
			bookCImgs = shuffle([itemList[0], itemList[0], itemList[1], itemList[1]]);
			someItems = bookCImgs;
		} else {
			bookCImgs = [itemList[2], itemList[2], itemList[2], itemList[2]];
			noneItems = bookCImgs;
		}
		//book right
		if (bookR == "all") {
			bookRImgs = [itemList[0], itemList[0], itemList[0], itemList[0]];
			allItems = bookRImgs;
		} else if (bookR == "some") {
			bookRImgs = shuffle([itemList[0], itemList[0], itemList[1], itemList[1]]);
			someItems = bookRImgs;
		} else {
			bookRImgs = [itemList[2], itemList[2], itemList[2], itemList[2]];
			noneItems = bookRImgs;
		}

		bookLitem = [];
		//actual file names of the images displayed on left book
		bookCitem = [];
		//files names of the images displayed on center book
		bookRitem = [];
		//file names of images displayed on right book

		//This is getting the file names for the actual images
		//this results in an array of four image paths
		for (i = 0; i < bookLImgs.length; i++) {
			bookLitem.push("images/" + bookLImgs[i] + ".png");
		}
		for (i = 0; i < bookCImgs.length; i++) {
			bookCitem.push("images/" + bookCImgs[i] + ".png");
		}
		for (i = 0; i < bookRImgs.length; i++) {
			bookRitem.push("images/" + bookRImgs[i] + ".png");
		}

		//here we are determining the item queried (prompt) in each trial
		//this is dependent on the quantifier
		//note that this is for only all, none, and ambig. 'some' trials
		if (trialType == "all" || trialType == "some") {
			experiment.prompt = itemList[0];
		}
		else {
			experiment.prompt = itemList[2];
		}

		//now we are going to build the table in HTML
		//this part takes the item names above, and, writes HTML script to show the images
		var objects_html = "";
		objects_html += '<table align = "center" table id = "leftbook" cellpadding="10"><tr></tr><tr>';
		objects_html += '<td align="center"><img class="pic" id= "leftbook1" img src="src"/>';
		objects_html += '<td align="center"><img class="pic" id="leftbook2" img src="src2"/>';
		objects_html += '</td>';
		objects_html += '</tr><tr>';
		objects_html += '<td align="center"><img class="pic" id= "leftbook3" img src="src7"/>';
		objects_html += '<td align="center"><img class="pic" id="leftbook4" img src="src8"/>';
		objects_html += '</tr></table>';

		objects_html += '<table align = "center" table id = "centerbook" cellpadding="10"><tr></tr><tr>';
		objects_html += '<td align="center"><img class="pic" id="centerbook1" img src="src3"/>';
		objects_html += '<td align="center"><img class="pic" id="centerbook2" img src="src4">';
		objects_html += '</td>';
		objects_html += '</tr><tr>';
		objects_html += '<td align="center"><img class="pic" id="centerbook3" img src="src9"/>';
		objects_html += '<td align="center"><img class="pic" id="centerbook4" img src="src10">';
		objects_html += '</tr></table>';

		objects_html += '<table align = "center" table id = "rightbook" cellpadding="10"><tr></tr><tr>';
		objects_html += '<td align="center"><img class="pic" id="rightbook1" img src="src5"/>';
		objects_html += '<td align="center"><img class="pic" id="rightbook2" img src="src6"/>';
		objects_html += '</td>';
		objects_html += '</tr><tr>';
		objects_html += '<td align="center"><img class="pic" id="rightbook3" img src="src11"/>';
		objects_html += '<td align="center"><img class="pic" id="rightbook4" img src="src12"/>';
		objects_html += '</tr></table>';
		$("#objects").html(objects_html);


		//show the correct images
		//left book 1
		$("#leftbook1").attr("name", bookLImgs);
		$("[name='bookLitem']").attr("src", bookLitem);
		$('img[src="src"]').attr('src', bookLitem[0]);
		//left book 2
		$("#leftbook2").attr("name", bookLImgs);
		$("[name='bookLitem']").attr("src", bookLitem);
		$('img[src="src2"]').attr('src', bookLitem[1]);
		//center book 1
		$("#centerbook1").attr("name", bookCImgs);
		$("[name='bookCitem']").attr("src", bookCitem);
		$('img[src="src3"]').attr('src', bookCitem[0]);
		//center book 2
		$("#centerbook2").attr("name", bookCImgs);
		$("[name='bookCitem']").attr("src", bookCitem);
		$('img[src="src4"]').attr('src', bookCitem[1]);
		//right book 1
		$("#rightbook1").attr("name", bookRImgs);
		$("[name='bookRitem']").attr("src", bookRitem);
		$('img[src="src5"]').attr('src', bookRitem[0]);
		//right book 2
		$("#rightbook2").attr("name", bookRImgs);
		$("[name='bookRitem']").attr("src", bookRitem);
		$('img[src="src6"]').attr('src', bookRitem[1]);

		//left book 3
		$("#leftbook3").attr("name", bookLImgs);
		$("[name='bookLitem']").attr("src", bookLitem);
		$('img[src="src7"]').attr('src', bookLitem[2]);
		//left book 4
		$("#leftbook2").attr("name", bookLImgs);
		$("[name='bookLitem']").attr("src", bookLitem);
		$('img[src="src8"]').attr('src', bookLitem[3]);
		//center book 3
		$("#centerbook1").attr("name", bookCImgs);
		$("[name='bookCitem']").attr("src", bookCitem);
		$('img[src="src9"]').attr('src', bookCitem[2]);
		//center book 4
		$("#centerbook2").attr("name", bookCImgs);
		$("[name='bookCitem']").attr("src", bookCitem);
		$('img[src="src10"]').attr('src', bookCitem[3]);
		//right book 3
		$("#rightbook1").attr("name", bookRImgs);
		$("[name='bookRitem']").attr("src", bookRitem);
		$('img[src="src11"]').attr('src', bookRitem[2]);
		//right book 4
		$("#rightbook2").attr("name", bookRImgs);
		$("[name='bookRitem']").attr("src", bookRitem);
		$('img[src="src12"]').attr('src', bookRitem[3]);

		$("#stage").fadeIn();


		//get the response
		clickDisabled = false; //is false now until the audio is done
		//this will be enabled after the audio is done playing
		$('.pic').bind('click touchstart', function(event) {
			if (clickDisabled) return;

			//disable subsequent clicks once the participant has made their choice
			clickDisabled = true;

			//time the participant clicked - the time the audio began - the amount of time between the beginning of the audio and the
			//onset of the word
			//commented now until the audio data is ready
			//experiment.reactiontime = (new Date()).getTime() - startTime - (spriteData[wordList[0]].onset-spriteData[wordList[0]].start)*1000;

			//which book was selected?
			var picID = $(event.currentTarget).attr('id');
			if (picID === "leftbook1" || picID === "leftbook2" || picID === "leftbook3" || picID === "leftbook4") {
				experiment.side = "L";
				experiment.selectionType += bookL;
			} else if (picID === "centerbook1" || picID === "centerbook2" || picID === "centerbook3" || picID === "centerbook4") {
				experiment.side = "C";
				experiment.selectionType += bookC;
			} else {
				experiment.side = "R";
				experiment.selectionType += bookR;
			}

			//check if the child got the trial correct
			if (experiment.selectionType === trialType) {
				experiment.response = "Y";
			} else {
				experiment.response = "N";
			}

			counter++;
			experiment.trialNum = counter;

			experiment.processOneRow();

			//incrementing the trial number
			//experiment.processOneRow();

			//if (type == "practice") {
			//	practiceCounter++;
			//} else if (type == "exp") {
			//	trialCounter++;
			//}

			//set the timeout
			setTimeout(function () {
				$("#stage").fadeOut();

				//there are no more trials for the experiment to run
				if (counter == numTrials) {
					experiment.end();
				} else {
					experiment.test();
				}
			});
		});
	},

	//concatenates all experimental variables into a string which represents one "row" of data in the eventual csv
	processOneRow: function() {
		var dataForTrial = experiment.subid;
		dataForTrial += "," + experiment.trialNum + "," + experiment.date + "," + experiment.timestamp + ","+ experiment.prompt + "," + trialType + "," + experiment.reactiontime;
		dataForTrial += "," + bookL + "," + bookC + "," + bookR;
		dataForTrial += "," + bookLitem + "," + bookCitem + "," + bookRitem + "," + allItems;
		dataForTrial += "," + someItems + "," + noneItems + "," + itemList + "," + experiment.side + "," + experiment.response + "," + experiment.selectionType + "\n";
		$.post("http://langcog.stanford.edu/cgi-bin/SI_tablet/tabletstudysave.php", {postresult_string : dataForTrial});
	},
}
