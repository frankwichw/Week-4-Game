$(document).ready(function(){
	// generate random image of your ghost
	randomImg();
	// generate random number for your ghost's weight
	generateGhostWeight();
});

function randomImg(){
	var randomNumber = Math.floor(Math.random()*(4-1+1)+1);
	var imgName = "yourghost" + randomNumber + ".png";
	document.getElementById("imageid").src= "assets/images/" + imgName;
};

function generateGhostWeight(){
	var randomGhostNumber = Math.floor(Math.random()*(120-1+19)+1);
	var ghostWeight = randomGhostNumber
	$("#weight").text(ghostWeight);
};