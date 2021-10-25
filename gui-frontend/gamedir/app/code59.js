gdjs.CreditsCode = {};
gdjs.CreditsCode.GDNewObjectObjects1= [];
gdjs.CreditsCode.GDNewObjectObjects2= [];
gdjs.CreditsCode.GDNewObject2Objects1= [];
gdjs.CreditsCode.GDNewObject2Objects2= [];
gdjs.CreditsCode.GDNewObject3Objects1= [];
gdjs.CreditsCode.GDNewObject3Objects2= [];
gdjs.CreditsCode.GDNewObject4Objects1= [];
gdjs.CreditsCode.GDNewObject4Objects2= [];
gdjs.CreditsCode.GDNewObject5Objects1= [];
gdjs.CreditsCode.GDNewObject5Objects2= [];
gdjs.CreditsCode.GDNewObject6Objects1= [];
gdjs.CreditsCode.GDNewObject6Objects2= [];
gdjs.CreditsCode.GDNewObject7Objects1= [];
gdjs.CreditsCode.GDNewObject7Objects2= [];
gdjs.CreditsCode.GDNewObject8Objects1= [];
gdjs.CreditsCode.GDNewObject8Objects2= [];
gdjs.CreditsCode.GDNewObject9Objects1= [];
gdjs.CreditsCode.GDNewObject9Objects2= [];
gdjs.CreditsCode.GDNewObject10Objects1= [];
gdjs.CreditsCode.GDNewObject10Objects2= [];
gdjs.CreditsCode.GDNewObject11Objects1= [];
gdjs.CreditsCode.GDNewObject11Objects2= [];
gdjs.CreditsCode.GDNewObject12Objects1= [];
gdjs.CreditsCode.GDNewObject12Objects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};
gdjs.CreditsCode.condition2IsTrue_0 = {val:false};
gdjs.CreditsCode.condition3IsTrue_0 = {val:false};
gdjs.CreditsCode.conditionTrue_1 = {val:false};
gdjs.CreditsCode.condition0IsTrue_1 = {val:false};
gdjs.CreditsCode.condition1IsTrue_1 = {val:false};
gdjs.CreditsCode.condition2IsTrue_1 = {val:false};
gdjs.CreditsCode.condition3IsTrue_1 = {val:false};


gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.CreditsCode.GDNewObject2Objects1});gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.CreditsCode.GDNewObject3Objects1});gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject11Objects1Objects = Hashtable.newFrom({"NewObject11": gdjs.CreditsCode.GDNewObject11Objects1});gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.CreditsCode.GDNewObject4Objects1});gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.CreditsCode.GDNewObject5Objects1});gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.CreditsCode.GDNewObject7Objects1});gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject8Objects1Objects = Hashtable.newFrom({"NewObject8": gdjs.CreditsCode.GDNewObject8Objects1});gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject9Objects1Objects = Hashtable.newFrom({"NewObject9": gdjs.CreditsCode.GDNewObject9Objects1});gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject10Objects1Objects = Hashtable.newFrom({"NewObject10": gdjs.CreditsCode.GDNewObject10Objects1});gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition0IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29484108);
}
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "pixel_dash_theme_song (1).mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.CreditsCode.GDNewObject2Objects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
gdjs.CreditsCode.condition2IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CreditsCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition2IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29485804);
}
}}
}
if (gdjs.CreditsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCMgXX6KBCqUzi3_qJPhjsRA/videos", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.CreditsCode.GDNewObject3Objects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
gdjs.CreditsCode.condition2IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CreditsCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition2IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29487396);
}
}}
}
if (gdjs.CreditsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCIsMTMstISOtTeLpaM571WQ", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject11"), gdjs.CreditsCode.GDNewObject11Objects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
gdjs.CreditsCode.condition2IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject11Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CreditsCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition2IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29489300);
}
}}
}
if (gdjs.CreditsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCvnT-JP68QAmrxEiHIjvKaw", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.CreditsCode.GDNewObject4Objects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
gdjs.CreditsCode.condition2IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CreditsCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition2IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29491060);
}
}}
}
if (gdjs.CreditsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCW8zfo1g-GtVA2cs2chPMhw", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.CreditsCode.GDNewObject5Objects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
gdjs.CreditsCode.condition2IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CreditsCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition2IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29492620);
}
}}
}
if (gdjs.CreditsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UC8yiDM0dJv3WQlcFe_6aQUg", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.CreditsCode.GDNewObject7Objects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
gdjs.CreditsCode.condition2IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CreditsCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition2IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29494364);
}
}}
}
if (gdjs.CreditsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCj3z2LS4MNB4wG7c3Md2EBA", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.CreditsCode.GDNewObject8Objects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
gdjs.CreditsCode.condition2IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject8Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CreditsCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition2IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29496108);
}
}}
}
if (gdjs.CreditsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCehEwYCk44MGdG-lg-FAwsw", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.CreditsCode.GDNewObject9Objects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
gdjs.CreditsCode.condition2IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject9Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CreditsCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition2IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29498188);
}
}}
}
if (gdjs.CreditsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UChBg3xTzsr8g2eXZFXj8BqA", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.CreditsCode.GDNewObject10Objects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
gdjs.CreditsCode.condition2IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject10Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CreditsCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition2IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29500148);
}
}}
}
if (gdjs.CreditsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCmSOBOnbRkyL4qQM3ko6UvA", runtimeScene);
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDNewObjectObjects1.length = 0;
gdjs.CreditsCode.GDNewObjectObjects2.length = 0;
gdjs.CreditsCode.GDNewObject2Objects1.length = 0;
gdjs.CreditsCode.GDNewObject2Objects2.length = 0;
gdjs.CreditsCode.GDNewObject3Objects1.length = 0;
gdjs.CreditsCode.GDNewObject3Objects2.length = 0;
gdjs.CreditsCode.GDNewObject4Objects1.length = 0;
gdjs.CreditsCode.GDNewObject4Objects2.length = 0;
gdjs.CreditsCode.GDNewObject5Objects1.length = 0;
gdjs.CreditsCode.GDNewObject5Objects2.length = 0;
gdjs.CreditsCode.GDNewObject6Objects1.length = 0;
gdjs.CreditsCode.GDNewObject6Objects2.length = 0;
gdjs.CreditsCode.GDNewObject7Objects1.length = 0;
gdjs.CreditsCode.GDNewObject7Objects2.length = 0;
gdjs.CreditsCode.GDNewObject8Objects1.length = 0;
gdjs.CreditsCode.GDNewObject8Objects2.length = 0;
gdjs.CreditsCode.GDNewObject9Objects1.length = 0;
gdjs.CreditsCode.GDNewObject9Objects2.length = 0;
gdjs.CreditsCode.GDNewObject10Objects1.length = 0;
gdjs.CreditsCode.GDNewObject10Objects2.length = 0;
gdjs.CreditsCode.GDNewObject11Objects1.length = 0;
gdjs.CreditsCode.GDNewObject11Objects2.length = 0;
gdjs.CreditsCode.GDNewObject12Objects1.length = 0;
gdjs.CreditsCode.GDNewObject12Objects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
