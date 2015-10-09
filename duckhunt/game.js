
function init(){

	var canvas = document.getElementById('game_canvas');
	var ctx = canvas.getContext('2d');

	var img = new Image();
	img.src = "duckhunt-background.gif";

	var duck = new Image();
	duck.src = "duckhunt_various_sheet.png";

	img.onload = function(){
		ctx.drawImage(img, 0, 0);
		ctx.drawImage(duck, 125, 115, 40, 30, 150, 40, 40, 30);
		ctx.drawImage(duck, 35, 110, 40, 40, 75, 60, 40, 30);
	}
}