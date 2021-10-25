//Defines what inputs will be done per-scene
window.inputs  = {
//Defines the scene
		"level 1"  : [
		[0, 300, "right"],
		[33, 48, "jump"],
		[95, 114, "jump"],
	],
//Start Frame, End Frame, Input			
	"level 2": [
		[0, 300, "right"],
		[42, 43, "e"],
	],
	"level 3": [
		[0, 300, "right"],
		[10, 13, "jump"],
		[50, 53, "jump"],
		[90, 93, "jump"],
		[100, 102, "e"],
		[120, 122, "jump"],
	],
	"level 4": [
		[0, 135, "right"],
		[137, 147, "jump"],
		[136, 237, "left"],
		[240, 324, "right"],
		[241, 248, "jump"],
		[325, 399, "left"],
		[326, 336, "jump"],
		[400, 494, "right"],
		[401, 407, "jump"],
		[495, 669, "left"],
		[496, 498, "jump"],
	],
	"level 5": [
		[0, 109, "right"],
		[110, 120, "left"],
		[131, 200, "right"],
		[45, 130, "jump"],
		[150, 162, "left"],
	],
	"level 7": [
		[0, 145, "right"],
		[20, 22, "jump"],
		[62, 65, "jump"],
		[140, 192, "up"],
		[146, 149, "left"],
		[160, 165, "right"],
		[165, 279, "left"],
		[150, 192, "jump"],
		[240, 245, "jump"],
		[305, 390, "left"],
		[288, 305, "jump"],
	],
	"level 8": [
		[0, 112, "right"],
		[19, 30, "jump"],
		[63, 72, "jump"],
		[113, 180, "up"],
		[112, 180, "jump"],
		[130, 250, "right"],
	],
	"level 9": [
		[0, 0, "rclick", 1290, -20],
		[1, 1, "lclick", -78, 800],
	],
	"new scene4": [		// ty river, this is l10
		[0, 43, "right"],
		[44, 100, "left"],
		[94, 96, "jump"],
		[115, 137, "left"],
		[123, 125, "jump"],
		[145, 150, "right"],
		[153, 155, "jump"],
		[144, 170, "left"],
		[177, 192, "jump"],
		[175, 203, "left"],
		[219, 235, "left"],
		[255, 900, "left"],
		[210, 270, "jump"],
		
	],
		"level 11": [
		[0, 200, "e"],
		[0, 45, "right"],
		[175, 238, "right"],
		[46, 47, "jump"],
		[88, 89, "jump"],
		[133, 134, "jump"],
		[175, 176, "jump"],
		[239, 314, "left"],
		[314, 320, "right"],
		[216, 290, "jump"],
		[292, 300, "jump"],
		[328, 700, "left"],
		[317, 325, "jump"],
		[351, 390, "jump"],
	],
	"level 12": [
		[0, 40, "left"],
		[62, 300, "left"],
		[0, 200, "jump"],
		[0, 0, "lclick", 200, 756],
		[1, 1, "lclick", 141, 674],			
		[2, 2, "lclick", 41, 590],
		[3, 3, "lclick", 45, 553],
		[4, 4, "lclick", -7, 455],
		[5, 5, "lclick", -57, 397],
		[6, 6, "lclick", -82, 303],
		[7, 7, "lclick", -105, 244],
		[8, 8, "lclick", -123, 212],
		[9, 9, "lclick", -143, 129],
		[10, 10, "lclick", -173, 47],						


	],

	"level 13" : [
		[0, 120, "right"],
		[136, 300, "left"],
		[310, 312, "right"],
		[312, 314, "right"],
		[314, 316, "right"],
		[316, 400, "right"],
		[54, 80, "jump"],
		[111, 190, "jump"],
		[213, 254, "jump"],
		[269, 400, "jump"],
	],

	
	"level 14" : [
		[25, 130, "right"],
		[131, 400, "left"],
		[25, 143, "jump"],
		[147, 200, "jump"],
		[210, 250, "jump"],

	],
    "level 15" : [
    [0, 600, "right"],
    [14, 65, "jump"],
    [100, 600, "jump"],
    ],
	"level 16" : [
		[0, 131, "right"],
		[133, 255, "left"],
		[256, 400, "right"],
		[21, 29, "jump"],
		[55, 59, "jump"],
		[96, 125, "jump"],
		[135, 170, "jump"],
		[175, 180, "jump"],
		[200, 240, "jump"],
		[253, 271, "jump"],
		[280, 280, "jump"],
	],

	"level 17" : [
		[0, 168, "right"],
		[169, 184, "left"],
		[185, 600, "right"],
		[260, 265, "jump"],
		[303, 358, "jump"],
		[387, 415, "jump"],
		[420, 430, "jump"],
		[455, 480, "jump"],					
	],
	"level 18" : [
		[0, 190, "right"],
		[6, 6, "jump"],
		[107, 107, "jump"],		
	],
}
//Gets keycodes for arrowkeys
window.fromKeyCode = function(keyCode) {
	var keyCodes = {
		37: "left",
		38: "up",
		39: "right",
		40: "down",
		32: "space"
	}
	return keyCodes[keyCode];
}
gdjs.evtTools.input._isKeyPressed = gdjs.evtTools.input.isKeyPressed;
window._globalScene = "";
window._globalPress = 0;
function keyPressedIM(keyCode) {
	var inp = window.inputs[window._globalScene];
	if(inp) {	
		for(var i=0; i<inp.length; i++) {
			if(window._globalPress >= inp[i][0] && window._globalPress <= inp[i][1]) {
				if (inp[i][2] == "jump") {
					if(keyCode == 32) return true;
					return;
				} else {
					if(fromKeyCode(keyCode) == inp[i][2]) return true;
				}
			}
		}
	}
	return this._isKeyPressed(keyCode);	
}
//Checks If Key Is Pressed
gdjs.evtTools.input.isKeyPressed = function(runtimeScene, key) {
	if(!runtimeScene._keyPressFrame) runtimeScene._keyPressFrame = 0;
	var inputManager = runtimeScene.getGame().getInputManager();
	if(!inputManager._hooked) {
		inputManager._isKeyPressed = inputManager.isKeyPressed;
		inputManager.isKeyPressed = keyPressedIM;
		inputManager._hooked = true;
	}
	if(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.01, "TASTimer")) {
		runtimeScene._keyPressFrame++; 
		window._globalPress = runtimeScene._keyPressFrame;
		runtimeScene.getObjects("myElapsed").forEach(a=>a.setString(runtimeScene._keyPressFrame.toString()));
		gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TASTimer");
	}
	window._globalScene = runtimeScene._name.toLowerCase();
	var inp = window.inputs[runtimeScene._name.toLowerCase()];
	if(inp) {	
		
		for(var i=0; i<inp.length; i++) {
			if(runtimeScene._keyPressFrame >= inp[i][0] && runtimeScene._keyPressFrame <= inp[i][1]) {
				if(key.toLowerCase() == inp[i][2]) return true;
			}
		}
	}
	return gdjs.evtTools.input._isKeyPressed(runtimeScene, key);
}

gdjs.evtTools.input._wasKeyReleased = gdjs.evtTools.input.wasKeyReleased;
//Checks If Key Is Released
gdjs.evtTools.input.wasKeyReleased = function(runtimeScene, key) {
	if(!runtimeScene._keyPressFrame) runtimeScene._keyPressFrame = 0;
	var inp = window.inputs[runtimeScene._name.toLowerCase()];
	if(inp) {	
		
		for(var i=0; i<inp.length; i++) {
			if(runtimeScene._keyPressFrame >= inp[i][1]) {
				if(key.toLowerCase() == inp[i][2]) return true;
			}
		}
	}
	return gdjs.evtTools.input._wasKeyReleased(runtimeScene, key);
}

gdjs.evtTools.input._isMouseButtonPressed = gdjs.evtTools.input.isMouseButtonPressed;
//Checks If M1 or M2 is pressed
gdjs.evtTools.input.isMouseButtonPressed = function(runtimeScene, button) {
	if(!runtimeScene._keyPressFrame) runtimeScene._keyPressFrame = 0;
	var inp = window.inputs[runtimeScene._name.toLowerCase()];
	if(inp) {	
		
		for(var i=0; i<inp.length; i++) {
			if(runtimeScene._keyPressFrame >= inp[i][0] && runtimeScene._keyPressFrame <= inp[i][1]) {
				if(button.toLowerCase() == "left" && inp[i][2] == "lclick") return true;
				if(button.toLowerCase() == "right" && inp[i][2] == "rclick") return true;
			}
		}
	}
	return gdjs.evtTools.input._isMouseButtonPressed(runtimeScene, button);
}

gdjs.evtTools.input._isMouseButtonReleased = gdjs.evtTools.input.isMouseButtonReleased;

gdjs.evtTools.input.isMouseButtonReleased = function(runtimeScene, button) {
	if(!runtimeScene._keyPressFrame) runtimeScene._keyPressFrame = 0;
	var inp = window.inputs[runtimeScene._name.toLowerCase()];
	if(inp) {	
		
		for(var i=0; i<inp.length; i++) {
			if(runtimeScene._keyPressFrame == inp[i][1]) {
				if(button.toLowerCase() == "left" && inp[i][2] == "lclick") return true;
				if(button.toLowerCase() == "right" && inp[i][2] == "rclick") return true;
			}
		}
	}
	return gdjs.evtTools.input._isMouseButtonReleased(runtimeScene, button);
}

//Checks Mouse X Position
gdjs.evtTools.input._getMouseX = gdjs.evtTools.input.getMouseX;

gdjs.evtTools.input.getMouseX = function(runtimeScene, layer, camera) {
	if(!runtimeScene._keyPressFrame) runtimeScene._keyPressFrame = 0;
	var inp = window.inputs[runtimeScene._name.toLowerCase()];
	if(inp) {	
		for(var i=0; i<inp.length; i++) {
			if(runtimeScene._keyPressFrame >= inp[i][0] && runtimeScene._keyPressFrame <= inp[i][1]) {
				if(inp[i][2] == "lclick" || inp[i][2] == "rclick") return inp[i][3];
			}
		}
	}
	return gdjs.evtTools.input._getMouseX(runtimeScene, layer, camera);
}
//Checks Mouse Y Position
gdjs.evtTools.input._getMouseY = gdjs.evtTools.input.getMouseY;

gdjs.evtTools.input.getMouseY = function(runtimeScene, layer, camera) {
	if(!runtimeScene._keyPressFrame) runtimeScene._keyPressFrame = 0;
	var inp = window.inputs[runtimeScene._name.toLowerCase()];
	if(inp) {	
		for(var i=0; i<inp.length; i++) {
			if(runtimeScene._keyPressFrame >= inp[i][0] && runtimeScene._keyPressFrame <= inp[i][1]) {
				if(inp[i][2] == "lclick" || inp[i][2] == "rclick") return inp[i][4];
			}
		}
	}
	return gdjs.evtTools.input._getMouseY(runtimeScene, layer, camera);
}
