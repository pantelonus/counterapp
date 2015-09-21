
var output = 0;

function reset() {
	var reset = confirm('Do you want to reset your balance to 0.00?');
	if (reset) {
		output = 0;
		var update = document.getElementById('output');
		update.innerHTML = output.toFixed(2);
	}
}

function plus(amt) {
	output += amt
	var update = document.getElementById('output');
	update.innerHTML = output.toFixed(2);
}

function minus(amt) {
	output -= amt
	var update = document.getElementById('output');
	update.innerHTML = output.toFixed(2);
}

var toggle;

function menuSlide() {
	var menuButton = document.getElementById("menu_button");
	var menu = document.getElementById("menu");
	
	if(toggle) {
		menuButton.style.left = "1em";
		menu.style.left = "-53%"
		toggle = false;
	} else {
		menuButton.style.left = "8.5em";
		menu.style.left = "0";
		toggle = true;
	}
}