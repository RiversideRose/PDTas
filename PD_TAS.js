window.inputs = {
	"level 1": [
		[0, 300, "d"],
		[33, 48, "jump"],
		[95, 114, "jump"],
	],
	"level 2": [
		[0, 300, "d"],
		[42, 43, "e"],
	],
	"level 3": [
		[0, 300, "d"],
		[10, 13, "jump"],
		[50, 53, "jump"],
		[90, 93, "jump"],
		[100, 102, "e"],
		[120, 122, "jump"],
	],
	"level 4": [
		[0, 135, "d"],
		[137, 147, "jump"],
		[136, 237, "a"],
		[240, 327, "d"],
		[241, 248, "jump"],
		[328, 402, "a"],
		[329, 338, "jump"],
		[403, 496, "d"],
		[404, 416, "jump"],
		[497, 669, "a"],
		[498, 505, "jump"],
	],
	"level 5": [
		[0, 109, "d"],
		[110, 120, "a"],
		[131, 200, "d"],
		[45, 130, "jump"],
		[150, 162, "a"],
	],
	"level 7": [
		[0, 145, "d"],
		[20, 22, "jump"],
		[62, 65, "jump"],
		[140, 192, "w"],
		[146, 149, "a"],
		[160, 165, "d"],
		[165, 279, "a"],
		[150, 192, "jump"],
		[240, 245, "jump"],
		[305, 390, "a"],
		[288, 305, "jump"],
	],
	"level 8": [
		[0, 112, "d"],
		[19, 30, "jump"],
		[63, 72, "jump"],
		[113, 180, "w"],
		[112, 180, "jump"],
		[130, 250, "d"],
	],
	"level 9": [
		[0, 0, "rclick", 1290, -20],
		[1, 1, "lclick", -78, 800],
	],
	"new scene4": [		// ty river, this is l10
		[0, 43, "d"],
		[44, 100, "a"],
		[94, 96, "jump"],
		[115, 137, "a"],
		[123, 125, "jump"],
		[145, 150, "d"],
		[153, 155, "jump"],
		[144, 170, "a"],
		[177, 192, "jump"],
		[175, 203, "a"],
		[219, 235, "a"],
		[255, 900, "a"],
		[210, 270, "jump"],
		
	],
	"level 11": [
		[0, 200, "e"],
		[0, 45, "d"],
		[46, 47, "jump"],
		[88, 89, "jump"],
		[133, 134, "jump"],
		[175, 176, "jump"],
		[250, 260, "jump"],
		[175, 238, "d"],
		[239, 320, "a"],
		[216, 320, "jump"],
		[330, 339, "a"],
		[365, 700, "a"],
		[324, 400, "jump"],

	],
	"level 12": [
		[0, 40, "a"],
		[62, 300, "a"],
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
		[0, 120, "d"],
		[136, 300, "a"],
		[310, 312, "d"],
		[312, 314, "d"],
		[314, 316, "d"],
		[316, 400, "d"],
		[54, 80, "jump"],
		[111, 190, "jump"],
		[213, 254, "jump"],
		[269, 400, "jump"],
	],

	
	"level 14" : [
		[25, 130, "d"],
		[131, 400, "a"],
		[25, 143, "jump"],
		[147, 200, "jump"],
		[210, 250, "jump"],

	],
    "level 15" : [
    [0, 600, "d"],
    [14, 65, "jump"],
    [100, 600, "jump"],
    ],
	"level 16" : [
		[0, 131, "d"],
		[133, 255, "a"],
		[256, 400, "d"],
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
		[0, 168, "d"],
		[169, 184, "a"],
		[185, 600, "d"],
		[260, 265, "jump"],
		[303, 358, "jump"],
		[387, 415, "jump"],
		[420, 430, "jump"],
		[455, 480, "jump"],					
	],
	"level 18" : [
		[0, 190, "d"],
		[6, 6, "jump"],
		[107, 107, "jump"],		
	],
}

gdjs.evtTools.input._isKeyPressed = gdjs.evtTools.input.isKeyPressed;

gdjs.evtTools.input.isKeyPressed = function(runtimeScene, key) {
	if(!runtimeScene._keyPressFrame) runtimeScene._keyPressFrame = 0;
	if(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.01, "TASTimer")) {
		runtimeScene._keyPressFrame++; 
		runtimeScene.getObjects("myElapsed").forEach(a=>a.setString(runtimeScene._keyPressFrame.toString()));
		gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TASTimer");
	}
	var inp = window.inputs[runtimeScene._name.toLowerCase()];
	if(inp) {	
		
		for(var i=0; i<inp.length; i++) {
			if(runtimeScene._keyPressFrame >= inp[i][0] && runtimeScene._keyPressFrame <= inp[i][1]) {
				if(inp[i][2] == "ladder") {
					var platObjects = runtimeScene.getObjects("Plat");
					for(var i = 0, len = platObjects.length ;i < len;++i) {
							console.log(platObjects[i].getBehavior("PlatformerObject"));
							platObjects[i].getBehavior("PlatformerObject").simulateLadderKey();
							platObjects[i].getBehavior("PlatformerObject").simulateUpKey();
					}
					continue;
				} else if (inp[i][2] == "jump") {
					var platObjects = runtimeScene.getObjects("Plat");
					for(var i = 0, len = platObjects.length ;i < len;++i) {
							platObjects[i].getBehavior("PlatformerObject").simulateJumpKey();
					}
					if(runtimeScene._name.toLowerCase() == "new scene4") { 
						// jank for l10
						platObjects = runtimeScene.getObjects("Plat2");
						for(var i = 0, len = platObjects.length ;i < len;++i) {
								platObjects[i].getBehavior("PlatformerObject").simulateJumpKey();
						}
						platObjects = runtimeScene.getObjects("Plat22");
						for(var i = 0, len = platObjects.length ;i < len;++i) {
								platObjects[i].getBehavior("PlatformerObject").simulateJumpKey();
						}
						platObjects = runtimeScene.getObjects("Plat222");
						for(var i = 0, len = platObjects.length ;i < len;++i) {
								platObjects[i].getBehavior("PlatformerObject").simulateJumpKey();
						}
						platObjects = runtimeScene.getObjects("Plat2222");
						for(var i = 0, len = platObjects.length ;i < len;++i) {
								platObjects[i].getBehavior("PlatformerObject").simulateJumpKey();
						}
					}
					return;
				} else {
					if(key.toLowerCase() == inp[i][2]) return true;
				}
			}
		}
	}
	return gdjs.evtTools.input._isKeyPressed(runtimeScene, key);
}

gdjs.evtTools.input._wasKeyReleased = gdjs.evtTools.input.wasKeyReleased;

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
