$(document).ready(function(){
	// initializing variables
	var wins = 0;
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
	var imgName = "yourghost" + randomNumber + ".png";
	document.getElementById("imageid").src= "assets/images/" + imgName;

	// generate random number for your ghost's weight
	var randomGhostNumber = Math.floor(Math.random()*(120-1+19)+1);
	var ghostWeight = randomGhostNumber
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
		wins++;
		$("#winsHere").text(wins);

		randomGhostNumber = Math.floor(Math.random()*(120-1+19)+1);
		ghostWeight = randomGhostNumber
		$("#weight").text(ghostWeight);

		score = 0;
		$("#theirWeight").text(score);

		alert("Finally I can go to bed.");
	};

	function losing(){
		losses++;
		$("#lossesHere").text(losses);
		randomGhostNumber = Math.floor(Math.random()*(120-1+19)+1);
		ghostWeight = randomGhostNumber
		$("#weight").text(ghostWeight);

		score = 0;
		$("#theirWeight").text(score);

		alert("Just a few more minutes, then I can go to bed.");
	};

});


