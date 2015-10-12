//ME-INFO
//Replication of Ramscar, Dye, & Klein (2013)

// --------------- HELPER FUNCTIONS ----------------
// show slide function
function showSlide(id) {
	$(".slide").hide(); //jquery - all elements with class of slide - hide
	$("#" + id).show(); //jquery - element with given id - show
}

//Handles audio; indexes into the sprite to play the prompt associated with a critical word
playPrompt = function(word) {
	audioSprite.removeEventListener('timeupdate', handler);
	audioSprite.currentTime = spriteData[word].start;
	audioSprite.play();

	handler = function() {
		if (this.currentTime >= spriteData[word].end) {
			this.pause();
		}
	};
	audioSprite.addEventListener('timeupdate', handler, false);
}

//Trims directories and extensions off of fileNames
trim = function(item) {
	var tmp = item;
	return tmp.slice(tmp.lastIndexOf("/") + 1, tmp.lastIndexOf("."));
};

//PRELOAD ALL IMAGES
var allimages = ["bread", "chair", "cup", "flower", "lion",
	"Novel1", "Novel2", "Novel3", "Novel4", "Novel5", "Novel6",
	"Novel7", "Novel8", "Novel9", "shoe", "sweater", "tomato", "truck"
];
//for critical trials and fillers
var images = new Array();
for (i = 0; i < allimages.length; i++) {
	images[i] = new Image();
	images[i].src = "imgs/" + allimages[i] + ".jpg";
};
// //for dot game
// //not needed for adults
// var dots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5", "x", "dot_smiley"];
// for (i = 0; i < dots.length; i++) {
// 	images[i] = new Image();
// 	images[i].src = "dots/" + dots[i] + ".jpg";
// }

// --------------- PARAMETERS ----------------

//******for handling sound; see helper function playPrompt(word)
var audioSprite = $("#sound_player")[0];
var handler;

// -----Practice trials-----
//counter keeps track of the trial you are on
var practiceCounter = 0;

//total number of trials
var numPractice = 2;

//number of images & words
var numPracticeImgs = 6;
var numPracticeWords = 4;

//List of images to use
practiceImgs = [
	["cup", "lion", "flower"],
	["shoe", "truck", "chair"]
];

practiceWords = [
	[1, ["cup", "flower"]],
	[2, ["shoe", "truck"]]
];

// practiceTrialOrder = shuffle([1, 2]);

//List of words to use
//an array of all the novel words used in the study
// var novelWords = ["cup", "flower", "shoe", "truck"];

// var trialWords = [
// 	novelWords.slice(0, 2),
// 	novelWords.slice(2, 4),
// 	novelWords.slice(4, 7)
// ]; // The trial with three words is the "ME" trial
// trialWords = trialOrder.map(function(elem) {
// 	return trialWords.slice(elem - 1, elem);
// });


// -----Experiment trials-----
//counter keeps track of the trial you are on
var trialCounter = 0;

//total number of trials
var numTrials = 3;

//number of images & words
var numTrialImgs = 9;
var numTrialWords = 7;

//List of images to use
allImgs = range(1, numTrialImgs);
allImgs = shuffle(allImgs);


allImgs = allImgs.map(function(elem) {
	return 'Novel' + elem;
});
//$(allImgs.map(function(elem){return 'stimuli/images/'+elem+'.jpg';})).preload();

var trialImgs = [

	allImgs.slice(0, 3),
	allImgs.slice(3, 6),
	allImgs.slice(6, 9)
]; // 3 Images for each trial


//List of words to use
//an array of all the novel words used in the study
var novelWords = shuffle(["fenam", "jic", "kumo", "loga", "pel", "rudd", "vot"]);

var trialWords = [
	[1, novelWords.slice(0, 2)],
	[2, novelWords.slice(2, 4)],
	[3, novelWords.slice(4, 7)]
];
trialWords = shuffle(trialWords)
	// The trial with three words is the "ME" trial
	// trialWords = trialOrder.map(function(elem) {
	// 	return trialWords.slice(elem - 1, elem);
	// });

// --------------- EXPERIMENT ----------------------------------------
showSlide("instructions");

//Disable start button in turk until HIT is accepted
if (turk.previewMode == true) {
	$("#startButton").attr("disabled", "disabled");
}

//Start button is disabled until all images are preloaded.  
$("#pleaseWait").html("Please wait while the experiment loads...");
$(window).load(function() {
	document.getElementById("startButton").disabled = false;
	$("#pleaseWait").html("");
})

var experiment = {
	data: [],
	check1: "",
	check2: "",
	//gender: [],
	//age: "",
	//nativeLanguage: "",
	//comments: "",

	//TRAINING GOES HERE FOR IPAD VERSION

	//TODO: Practice trials.  Do we want/need these for adults?

	moreInstructions: function() {
		showSlide("moreInstructions");
	},

	startGame: function() {
		document.body.style.background = "white";
		showSlide("startGame");
	},

	practiceTrain: function() {
		$("#moreInstructions").hide();
		document.body.style.background = "black";
		setTimeout(function() {
			experiment.train(practiceCounter, practiceWords, practiceImgs, "practice");
		}, 500)
	},

	practiceTest: function() {
		document.body.style.background = "black";
		setTimeout(function() {
			experiment.test(practiceCounter, numPractice, practiceWords, practiceImgs, "practice");
		}, 500)
	},

	experimentTrain: function() {
		document.body.style.background = "black";
		$("#startGame").hide();
		setTimeout(function() {
			experiment.train(trialCounter, trialWords, trialImgs, "exp");
		}, 500)
	},

	experimentTest: function() {
		document.body.style.background = "black";
		setTimeout(function() {
			experiment.test(trialCounter, numTrials, trialWords, trialImgs, "exp");
		}, 500)
	},

	train: function(counter, words, imgs, type) {
		document.body.style.background = "black";
		$("#manipulationCheck").hide()

			//returns the list of words to use in this trial
		var wordList = words[counter][1];

		//returns the list of images to use in this trial
		var imageArray = imgs[counter];

		//src for each object
		var objectA = "imgs/" + imageArray[0] + ".jpg";
		var objectB = "imgs/" + imageArray[1] + ".jpg";
		var objectC = "imgs/" + imageArray[2] + ".jpg";

		//build table in html.  
		var objects_html = "";
		objects_html += '<table align = "center" cellpadding="30"><tr></tr><tr>';
		objects_html += '<td align="center"><img class="pic" id= "leftPic"/></td>';
		objects_html += '<td align="center"><img class="pic" id= "rightPic"/></td>';
		objects_html += '</tr></table>';
		$("#objects").html(objects_html);

		//show objects A & B and play word 1
		//TODO: FIgure out counterbalancing?  Right now everything is randomized
		//order that pictures will be presented in
		var picOrderAB = shuffle(["objectA", "objectB"]);

		//set names based on object that will be shown
		$("#leftPic").attr("name", picOrderAB[0]);
		$("#rightPic").attr("name", picOrderAB[1]);

		//show images
		$("[name='objectA']").attr("src", objectA);
		$("[name='objectB']").attr("src", objectB);

		$("#stage").fadeIn();

		//play word 1
		playPrompt("look_" + wordList[0]);

		//fade out
		setTimeout(function() {
			$("#manipulationCheck").show()

			//place cursor in text box
			$("#checkText").focus()

			//activate click if participant hits "return"
			$("#checkText").keypress(function(event) {
				var keycode = (event.keyCode ? event.keyCode : event.which);
				if (keycode == '13') {
					event.preventDefault();
					$('#checkButton').click();
					$("#checkButton").off('click')
				}
			})


			$("#checkButton").off('click').on('click', function() {

				check1 = $("#checkText").val();

				if (check1.length == 0) {

					alert("Please fill in the blank!")

				} else {

					$("#stage").fadeOut();
					$("#manipulationCheck").hide()
					$("#checkForm").trigger("reset");
					setTimeout(function() {
						//show objects B & C and play word 2
						//order that pictures will be presented in
						var picOrderBC = shuffle(["objectB", "objectC"]);

						//set names based on object that will be shown
						$("#leftPic").attr("name", picOrderBC[0]);
						$("#rightPic").attr("name", picOrderBC[1]);

						//show images
						$("[name='objectB']").attr("src", objectB);
						$("[name='objectC']").attr("src", objectC);


						$("#stage").fadeIn();

						//Play word 2.  label twice per pair
						playPrompt("look_" + wordList[1]);


						//fade out and go to test
						setTimeout(function() {
							$("#manipulationCheck").show()

							//place cursor in text box
							$("#checkText").focus()

							$("#checkButton").off('click').on('click', function() {

								check2 = $("#checkText").val();

								if (check2.length == 0) {

									alert("Please fill in the blank!")

								} else {

									$("#stage").fadeOut();
									$("#manipulationCheck").hide()
									$("#checkForm").trigger("reset");

									// var manipulation_check = {
									// 	trialNum: counter,
									// 	check1: check1,
									// 	check2: check2
									// };

									// experiment.data.push(manipulation_check);

									if (type == "practice") {
										experiment.practiceTest();
									} else if (type == "exp") {
										experiment.experimentTest();
									}
								}

							});
						}, 6500); 
					}, 1000);
				};
			});
		}, 6500); 


	},

	test: function(counter, total, words, imgs, type) {
		$("#manipulationCheck").hide()
		$("#stage").hide();
		document.body.style.background = "black";

		//returns the list of words to use in this trial
		var wordList = words[counter][1];

		//returns the trial type (whether we will play word 1, 2, or 3)
		var trialType = words[counter][0];

		//returns the list of images to use in this trial
		var imageArray = imgs[counter];

		//src for each object
		var objectA = "imgs/" + imageArray[0] + ".jpg";
		var objectB = "imgs/" + imageArray[1] + ".jpg";
		var objectC = "imgs/" + imageArray[2] + ".jpg";

		//build table in html.  
		var objects_html = "";
		objects_html += '<table align = "center" cellpadding="30"><tr></tr><tr>';
		objects_html += '<td align="center"><img class="pic" id= "leftPic"/></td>';
		objects_html += '<td align="center"><img class="pic" id= "centerPic"/></td>';
		objects_html += '<td align="center"><img class="pic" id= "rightPic"/></td>';
		objects_html += '</tr></table>';
		$("#objects").html(objects_html);


		//order that pictures will be presented in
		var picOrderABC = shuffle(["objectA", "objectB", "objectC"]);

		//set names based on object that will be shown
		$("#leftPic").attr("name", picOrderABC[0]);
		$("#centerPic").attr("name", picOrderABC[1]);
		$("#rightPic").attr("name", picOrderABC[2]);

		//show all three images
		$("[name='objectA']").attr("src", objectA);
		$("[name='objectB']").attr("src", objectB);
		$("[name='objectC']").attr("src", objectC);

		$("#stage").fadeIn();

		//TODO: Do we want reaction time?
		//var startTime = (new Date()).getTime();

		//Either label 1, label 2, or label 3, depending on the trial.
		//If they hear label 1, we expect adults to select object A
		//If they hear label 2, we expect adults to select object C
		//If they hear a novel label (label 3), we expect adults to select object B


		if (trialType == 1) {
			var testWord = wordList[0];
		} else if (trialType == 2) {
			var testWord =  wordList[1];
		} else if (trialType == 3) {
			var testWord = wordList[2];
		}

		playPrompt("find_" + testWord);

		$(".pic").on("click", function() {
			if (audioSprite.paused == true) {
				$(".pic").off('click');

				$(this).attr("class", "selectedPic");

				var selectedPic = this.src;

				//TODO: Do we want reaction time?
				// endTime = (new Date()).getTime()

				trialTypes = ["FirstLabel", "SecondLabel", "New Label"]

				//data collection
				var data = {
					//TODO: get info about trial type/what label they heard
					practiceOrExp: type,
					FirstObj: imageArray[0],
					BothObj: imageArray[1],
					SecondObj: imageArray[2],
					trialType: trialTypes[trialType - 1],
					response: trim(selectedPic),
					trialNum: counter,
					word1: wordList[0],
					word2: wordList[1],
					testWord: testWord,
					check1: check1,
					check2: check2
						//rt: endTime - startTime
				}

				experiment.data.push(data);

				counter++;
				if (type == "practice") {
					practiceCounter++;
				} else if (type == "exp") {
					trialCounter++;
				}

				setTimeout(function() {
					$("#stage").fadeOut();

					if (counter == total) {
						if (type == "practice") {
							experiment.startGame();
						} else if (type == "exp") {
							experiment.end();
						}
					} else {
						if (type == "practice") {
							experiment.practiceTrain();
						} else if (type == "exp") {
							experiment.experimentTrain();
						}
					}
				}, 1000);
			}
		});

	},

	//TODO: Do we want to collect demographic info?

	end: function() {
		document.body.style.background = "white";
		showSlide("finished");

		setTimeout(function() {
			turk.submit(experiment.data);
		}, 1000);
	}
}