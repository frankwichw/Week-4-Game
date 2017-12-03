$(document).ready(function(){
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

	$(".firstGhost").click(function(){
		var randomNumber = Math.floor(Math.random()*(12-1+1)+1);
		var ghostOneWeight = randomNumber;
		score += ghostOneWeight;
		$("#theirWeight").text(score);
	});

	$(".secondGhost").click(function(){
		var randomNumber = Math.floor(Math.random()*(12-1+1)+1);
		var ghostTwoWeight = randomNumber;
		score += ghostTwoWeight;
		$("#theirWeight").text(score);
	});

	$(".thirdGhost").click(function(){
		var randomNumber = Math.floor(Math.random()*(12-1+1)+1);
		var ghostThreeWeight = randomNumber;
		score += ghostThreeWeight;
		$("#theirWeight").text(score);
	});

	$(".fourthGhost").click(function(){
		var randomNumber = Math.floor(Math.random()*(12-1+1)+1);
		var ghostFourWeight = randomNumber;
		score += ghostFourWeight;
		$("#theirWeight").text(score);
	});

	if (score === ghostWeight){
			winning();
		} else if (score > ghostWeight){
			losing();
	};

});

function winning(){
	wins++;
	$("#winsHere").text(wins);

	randomGhostNumber = Math.floor(Math.random()*(120-1+19)+1);
	ghostWeight = randomGhostNumber
	$("#weight").text(ghostWeight);
};

function losing(){
	losses++;
	$("#lossesHere").text(losses);
	randomGhostNumber = Math.floor(Math.random()*(120-1+19)+1);
	ghostWeight = randomGhostNumber
	$("#weight").text(ghostWeight);
};
