"use strict";

/*
/  This is for making games that only use keyboard inputs.
/  Keyboard events do not function in the same way that gamepads do.
/  This also excludes the mouse even though it functions similarly to key events.
*/

var debug_inputs = document.querySelector("#inputs");
var debug_control = document.querySelector("#control");

var keyBinds = {
  "fire1": {
    "code": "KeyZ",
    "state": false
  },
  "fire2": {
    "code": "KeyX",
    "state": false
  },
  "left": {
    "code": "ArrowLeft",
    "state": false
  },
  "right": {
    "code": "ArrowRight",
    "state": false
  },
  "up": {
    "code": "ArrowUp",
    "state": false
  },
  "down": {
    "code": "ArrowDown",
    "state": false
  }
};

function keyHandler (event) {
  for (var actions in keyBinds) {
    if (keyBinds[actions].code === event.code) {
      if (event.type === "keydown") {
        keyBinds[actions].state = true;
      } else {
        keyBinds[actions].state = false;
      };
    };
  };

  if (debug) {
    //DEBUG information display to page!!!//
    console.log(event);
    if (debug_inputs.innerHTML.length > 70) {
      debug_inputs.innerHTML = "";
    };
    debug_inputs.innerHTML = debug_inputs.innerHTML + " " +event.code + " " + (event.type === "keyup" ? '&uarr;' : '&darr;');
    
    debug_control.innerHTML = "";
    for (var actions in keyBinds) {
      debug_control.innerHTML = debug_control.innerHTML + " " + actions + ":" + keyBinds[actions].state;
    }
  };
};

//move this to engine initilization
window.addEventListener("keydown", keyHandler, false);
window.addEventListener("keyup", keyHandler, false);
