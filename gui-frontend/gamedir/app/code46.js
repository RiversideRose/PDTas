gdjs.PauseCode = {};
gdjs.PauseCode.GDNewObjectObjects1= [];
gdjs.PauseCode.GDNewObjectObjects2= [];
gdjs.PauseCode.GDNewObject2Objects1= [];
gdjs.PauseCode.GDNewObject2Objects2= [];
gdjs.PauseCode.GDNewObject3Objects1= [];
gdjs.PauseCode.GDNewObject3Objects2= [];
gdjs.PauseCode.GDNewObject4Objects1= [];
gdjs.PauseCode.GDNewObject4Objects2= [];

gdjs.PauseCode.conditionTrue_0 = {val:false};
gdjs.PauseCode.condition0IsTrue_0 = {val:false};
gdjs.PauseCode.condition1IsTrue_0 = {val:false};
gdjs.PauseCode.condition2IsTrue_0 = {val:false};
gdjs.PauseCode.conditionTrue_1 = {val:false};
gdjs.PauseCode.condition0IsTrue_1 = {val:false};
gdjs.PauseCode.condition1IsTrue_1 = {val:false};
gdjs.PauseCode.condition2IsTrue_1 = {val:false};


gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.PauseCode.GDNewObject2Objects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.PauseCode.GDNewObject2Objects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.PauseCode.GDNewObject3Objects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.PauseCode.GDNewObject3Objects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.PauseCode.GDNewObject4Objects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.PauseCode.GDNewObject4Objects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.PauseCode.GDNewObject2Objects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.PauseCode.GDNewObject3Objects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.PauseCode.GDNewObject4Objects1});gdjs.PauseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.PauseCode.GDNewObject2Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
{gdjs.PauseCode.conditionTrue_1 = gdjs.PauseCode.condition1IsTrue_0;
gdjs.PauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29357636);
}
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.PauseCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject2Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(99999, 5, 5, 5, 0.9, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PauseCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject2Objects1[i].setOutline("21;255;0", 5);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "switch.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.PauseCode.GDNewObject2Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject2Objects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.PauseCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject2Objects1[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PauseCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject2Objects1[i].setOutline("21;255;0", 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.PauseCode.GDNewObject3Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
{gdjs.PauseCode.conditionTrue_1 = gdjs.PauseCode.condition1IsTrue_0;
gdjs.PauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29360188);
}
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.PauseCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject3Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(99999, 5, 5, 5, 0.9, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PauseCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject3Objects1[i].setOutline("21;255;0", 5);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "switch.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.PauseCode.GDNewObject3Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject3Objects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.PauseCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject3Objects1[i].setOutline("21;255;0", 0);
}
}{for(var i = 0, len = gdjs.PauseCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject3Objects1[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.PauseCode.GDNewObject4Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
{gdjs.PauseCode.conditionTrue_1 = gdjs.PauseCode.condition1IsTrue_0;
gdjs.PauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29362716);
}
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDNewObject4Objects1 */
{for(var i = 0, len = gdjs.PauseCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject4Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(99999, 5, 5, 5, 0.9, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PauseCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject4Objects1[i].setOutline("21;255;0", 5);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "switch.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.PauseCode.GDNewObject4Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject4Objects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDNewObject4Objects1 */
{for(var i = 0, len = gdjs.PauseCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject4Objects1[i].setOutline("21;255;0", 0);
}
}{for(var i = 0, len = gdjs.PauseCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDNewObject4Objects1[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.PauseCode.GDNewObject2Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.PauseCode.GDNewObject3Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.PauseCode.GDNewObject4Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "pause.mp3", false, 100, 1);
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDNewObjectObjects1.length = 0;
gdjs.PauseCode.GDNewObjectObjects2.length = 0;
gdjs.PauseCode.GDNewObject2Objects1.length = 0;
gdjs.PauseCode.GDNewObject2Objects2.length = 0;
gdjs.PauseCode.GDNewObject3Objects1.length = 0;
gdjs.PauseCode.GDNewObject3Objects2.length = 0;
gdjs.PauseCode.GDNewObject4Objects1.length = 0;
gdjs.PauseCode.GDNewObject4Objects2.length = 0;

gdjs.PauseCode.eventsList0(runtimeScene);
return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
