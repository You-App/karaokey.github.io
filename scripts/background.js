
function randomBackground(){
	var images = [
	'ariana-background.jpg',
	'taeyeon_stage.png',
	'taeyeon_rain.png',
	'taeyeon_rain2.png',
	'lemonade-background.jpg'];

	var size = images.length;
	var x = Math.floor(size*Math.random());
	console.log(x);
	var element = document.getElementsByClassName('dynamic_bg');
	element[0].style["background-image"] = "url(" + images[x] +") no repeat;";
}

document.addEventListener("DOMContentLoaded", randomBackground);