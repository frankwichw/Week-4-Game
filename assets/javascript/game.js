$(document).ready(function(){
	randomImg();
});

function randomImg(){
var randomNumber = Math.floor(Math.random()*(4-1+1)+1);
var imgName = "yourghost" + randomNumber + ".png";
document.getElementById("imageid").src= "assets/images/" + imgName;
};