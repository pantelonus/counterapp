
var output = 0,
    updateOutput = document.getElementById('output'),
    menuButton = document.getElementById('menu_button'),
    resetConfirm = document.getElementById('reset_confirm'),
    resetCancel = document.getElementById('reset_cancel'),
    overlay = document.getElementById('overlay'),
    menu = {
      dom: document.getElementById('menu'),
      toggled: false
    },
    resetBalance = {
      dom: document.getElementById('reset'),
      toggled: false
    },
    toggle;


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

function reset() {
  toggle = toggle ?
  		(resetConfirm.style.top = "-10%",
  		resetCancel.style.top = "-10%",
  		overlay.style.opacity = "0",
  		toggle = false)
  	:
  		(resetConfirm.style.top = "3.5em",
  		resetCancel.style.top = "7em",
  		overlay.style.opacity = "0.75",
  		toggle = true);
}

menuButton.addEventListener('click', function () {
  toggle = toggle ?
		(menuButton.style.left = "1em",
		menu.dom.style.left = "-53%",
		toggle = false)
	:
		(menuButton.style.left = "8.5em",
		menu.dom.style.left = "0",
		toggle = true);
});

resetBalance.dom.addEventListener('click', reset);
resetConfirm.addEventListener('click', function(){
  output = 0;
  updateOutput.innerHTML = output.toFixed(2);
  reset();
});
resetCancel.addEventListener('click', reset);
overlay.addEventListener('click', reset);