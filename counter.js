
var output = 0,
    updateOutput = document.getElementById('output'),
    resetBalance = document.getElementById('reset'),
    menuButton = document.getElementById('menu_button'),
    menu = document.getElementById('menu'),
    toggle;

resetBalance.addEventListener('click', function () {
	var reset = confirm('Do you want to reset your balance to 0.00?');
	if (reset) {
		output = 0;
		updateOutput.innerHTML = output.toFixed(2);
	}
});


document.body.addEventListener('click', function(e){
  e = e || window.event;
  var target = e.target, x;
  if (target.className.match('minus')) {
    x = parseFloat(target.parentNode.id);
    minus(x);
  } else if (target.className.match('plus')) {
    x = parseFloat(target.parentNode.id);
    plus(x);
  }
});

function plus(amt) {
	output += amt;
	updateOutput.innerHTML = output.toFixed(2);
}

function minus(amt) {
	output -= amt;
	updateOutput.innerHTML = output.toFixed(2);
}

menuButton.addEventListener('click', function () {
  toggle = toggle ?
		(menuButton.style.left = "1em",
		menu.style.left = "-53%",
		toggle = false)
	:
		(menuButton.style.left = "8.5em",
		menu.style.left = "0",
		toggle = true);
});