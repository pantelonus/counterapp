
var output = 0,
    updateOutput = document.getElementById('output'),
    menuButton = document.getElementById('menu_button'),
    resetConfirm = document.getElementById('reset_confirm'),
    resetCancel = document.getElementById('reset_cancel'),
    overlay = document.getElementById('overlay'),
    menu = {
      dom: document.getElementById('menu'),
      toggled: false,
      transition: function() {
        this.toggled = this.toggled ?
		    (menuButton.style.left = "1em",
		    menu.dom.style.left = "-53%",
		    this.toggled = false)
	    :
		    (menuButton.style.left = "8.5em",
		    menu.dom.style.left = "0",
		    this.toggled = true);
		    overlayTransition();
        }
    },
    reset = {
      dom: document.getElementById('reset'),
      toggled: false,
      transition: function() {
        this.toggled = this.toggled ?
  	  	(resetConfirm.style.top = "-25%",
  	  	resetCancel.style.top = "-25%",
  	  	this.toggled = false)
  	  :
  	    (resetConfirm.style.top = "3.5em",
  	  	resetCancel.style.top = "7em",
  	  	this.toggled = true);
  	  	overlayTransition();
       }
    };

// Functions:

function plus(amt) {
	output += amt;
	updateOutput.innerHTML = output.toFixed(2);
}

function minus(amt) {
	output -= amt;
	updateOutput.innerHTML = output.toFixed(2);
}

function overlayTransition() {
  if (menu.toggled === true || reset.toggled === true) {
    overlay.style.opacity = "0.75";
    overlay.style.zIndex = "2";
    if (reset.toggled) {
      menuButton.style.zIndex = "1";
    }
    if (menu.toggled) {
      reset.dom.style.zIndex = "1";
    }
  } else {
    overlay.style.opacity = "0";
    setTimeout(function(){
      overlay.style.zIndex = "-1";
      menuButton.style.zIndex = "4";
      reset.dom.style.zIndex = "4";
    }, 500); //allots for opacity transition time
  }
}

// Add event listeners:

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
menuButton.addEventListener('click', function() {
  menu.transition();
});
reset.dom.addEventListener('click', function(){
  reset.transition();
});
resetConfirm.addEventListener('click', function(){
  output = 0;
  updateOutput.innerHTML = output.toFixed(2);
  reset.transition();
});
resetCancel.addEventListener('click', function(){
  reset.transition();
});
overlay.addEventListener('click', function(){
  overlayTransition();
  if (reset.toggled) {
  reset.transition();
  } else if (menu.toggled) {
    menu.transition();
  }
});