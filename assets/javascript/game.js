$(document).ready(function(){
	// initializing variables
	var wins = 0;
	// adding wins number to page using jQuery
	$("#winsHere").text(wins);

	var losses = 0;
	$("#lossesHere").text(losses);

	var score = 0;
	$("#theirWeight").text(score);

	var ghostOneWeight = 0;
	var ghostTwoWeight = 0;
	var ghostThreeWeight = 0;
	var ghostFourWeight = 0;

	// generate random image of your ghost
	var randomNumber = Math.floor(Math.random()*(4-1+1)+1);
	// generate the image path
	var imgName = "yourghost" + randomNumber + ".png";
	// set the image source on the page to the image path generated
	document.getElementById("imageid").src= "assets/images/" + imgName;

	// generate random number for your ghost's weight
	var randomGhostNumber = Math.floor(Math.random()*(120-1+19)+1);
	var ghostWeight = randomGhostNumber
	// set text on page to the weight
	$("#weight").text(ghostWeight);

	// ghost click functions

	$(".firstGhost").click(function(){
		// choosing random number
		var randomNumber = Math.floor(Math.random()*(12-1+1)+1);
		var ghostOneWeight = randomNumber;
		// adding random number to score
		score += ghostOneWeight;
		$("#theirWeight").text(score);
		// deciding whether game has been won or lost
		if (score == ghostWeight){
			// printing last score
			$("#theirWeight").text(score);
			// winning function, set to wait to execute 
			setTimeout(function(){winning(); }, 100);
		} else if (score > ghostWeight){
			$("#theirWeight").text(score);
			// losing function, set to wait to execute
			setTimeout(function(){losing(); }, 100);
	};
	});

	$(".secondGhost").click(function(){
		var randomNumber = Math.floor(Math.random()*(12-1+1)+1);
		var ghostTwoWeight = randomNumber;
		score += ghostTwoWeight;
		$("#theirWeight").text(score);

		if (score == ghostWeight){
			$("#theirWeight").text(score);
			setTimeout(function(){winning(); }, 100);
		} else if (score > ghostWeight){
			$("#theirWeight").text(score);
			setTimeout(function(){losing(); }, 100);
		};
	});

	$(".thirdGhost").click(function(){
		var randomNumber = Math.floor(Math.random()*(12-1+1)+1);
		var ghostThreeWeight = randomNumber;
		score += ghostThreeWeight;
		$("#theirWeight").text(score);

		if (score == ghostWeight){
			$("#theirWeight").text(score);
			setTimeout(function(){winning(); }, 100);
		} else if (score > ghostWeight){
			$("#theirWeight").text(score);
			setTimeout(function(){losing(); }, 100);
		};
	});

	$(".fourthGhost").click(function(){
		var randomNumber = Math.floor(Math.random()*(12-1+1)+1);
		var ghostFourWeight = randomNumber;
		score += ghostFourWeight;
		$("#theirWeight").text(score);

		if (score == ghostWeight){
			$("#theirWeight").text(score);
			setTimeout(function(){winning(); }, 100);
		} else if (score > ghostWeight){
			$("#theirWeight").text(score);
			setTimeout(function(){losing(); }, 100);
		};
	});

	// functions for winning and losing
	function winning(){
		// add to wins number
		wins++;
		// adds text to page using jQuery
		$("#winsHere").text(wins);

		// resets game
		randomGhostNumber = Math.floor(Math.random()*(120-1+19)+1);
		ghostWeight = randomGhostNumber
		$("#weight").text(ghostWeight);

		score = 0;
		$("#theirWeight").text(score);

		// alerts you that you've won
		alert("Finally I can go to bed.");
	};

	function losing(){
		// adds to losses number
		losses++;
		// adds text to page using jQuery
		$("#lossesHere").text(losses);

		// resets game
		randomGhostNumber = Math.floor(Math.random()*(120-1+19)+1);
		ghostWeight = randomGhostNumber
		$("#weight").text(ghostWeight);

		score = 0;
		$("#theirWeight").text(score);

		// alerts you that you've lost
		alert("Just a few more minutes, then I can go to bed.");
	};

});


