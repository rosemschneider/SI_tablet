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
    if (experiment.selectionType === experiment.trialType) {
        experiment.response = "Y";
    } else {
        experiment.response = "N"
    }

    experiment.processOneRow();

    //incrementing the trial number
    trialNum++;

    //set the timeout
    setTimeout(function() {
        $("#stage").fadeOut();

        //there are no more trials for the experiment to run
        if (trialNum === numTrials + 1) {
            experiment.end();
            return;
        }
    });
}
