gdjs.Level_3213Code = {};
gdjs.Level_3213Code.GDNewObjectObjects1= [];
gdjs.Level_3213Code.GDNewObjectObjects2= [];
gdjs.Level_3213Code.GDNewObjectObjects3= [];
gdjs.Level_3213Code.GDNewObject3Objects1= [];
gdjs.Level_3213Code.GDNewObject3Objects2= [];
gdjs.Level_3213Code.GDNewObject3Objects3= [];
gdjs.Level_3213Code.GDNewObject2Objects1= [];
gdjs.Level_3213Code.GDNewObject2Objects2= [];
gdjs.Level_3213Code.GDNewObject2Objects3= [];
gdjs.Level_3213Code.GDPlatObjects1= [];
gdjs.Level_3213Code.GDPlatObjects2= [];
gdjs.Level_3213Code.GDPlatObjects3= [];
gdjs.Level_3213Code.GDNewObject4Objects1= [];
gdjs.Level_3213Code.GDNewObject4Objects2= [];
gdjs.Level_3213Code.GDNewObject4Objects3= [];
gdjs.Level_3213Code.GDNewObject5Objects1= [];
gdjs.Level_3213Code.GDNewObject5Objects2= [];
gdjs.Level_3213Code.GDNewObject5Objects3= [];
gdjs.Level_3213Code.GDNewObject6Objects1= [];
gdjs.Level_3213Code.GDNewObject6Objects2= [];
gdjs.Level_3213Code.GDNewObject6Objects3= [];
gdjs.Level_3213Code.GDNewObject7Objects1= [];
gdjs.Level_3213Code.GDNewObject7Objects2= [];
gdjs.Level_3213Code.GDNewObject7Objects3= [];
gdjs.Level_3213Code.GDNewObject8Objects1= [];
gdjs.Level_3213Code.GDNewObject8Objects2= [];
gdjs.Level_3213Code.GDNewObject8Objects3= [];
gdjs.Level_3213Code.GDNewObject9Objects1= [];
gdjs.Level_3213Code.GDNewObject9Objects2= [];
gdjs.Level_3213Code.GDNewObject9Objects3= [];
gdjs.Level_3213Code.GDNewObject10Objects1= [];
gdjs.Level_3213Code.GDNewObject10Objects2= [];
gdjs.Level_3213Code.GDNewObject10Objects3= [];
gdjs.Level_3213Code.GDNewObject11Objects1= [];
gdjs.Level_3213Code.GDNewObject11Objects2= [];
gdjs.Level_3213Code.GDNewObject11Objects3= [];
gdjs.Level_3213Code.GDScoreObjects1= [];
gdjs.Level_3213Code.GDScoreObjects2= [];
gdjs.Level_3213Code.GDScoreObjects3= [];
gdjs.Level_3213Code.GDNewObject12Objects1= [];
gdjs.Level_3213Code.GDNewObject12Objects2= [];
gdjs.Level_3213Code.GDNewObject12Objects3= [];
gdjs.Level_3213Code.GDNewObject13Objects1= [];
gdjs.Level_3213Code.GDNewObject13Objects2= [];
gdjs.Level_3213Code.GDNewObject13Objects3= [];
gdjs.Level_3213Code.GDmyElapsedObjects1= [];
gdjs.Level_3213Code.GDmyElapsedObjects2= [];
gdjs.Level_3213Code.GDmyElapsedObjects3= [];
gdjs.Level_3213Code.GDNewObject14Objects1= [];
gdjs.Level_3213Code.GDNewObject14Objects2= [];
gdjs.Level_3213Code.GDNewObject14Objects3= [];
gdjs.Level_3213Code.GDNewObject15Objects1= [];
gdjs.Level_3213Code.GDNewObject15Objects2= [];
gdjs.Level_3213Code.GDNewObject15Objects3= [];

gdjs.Level_3213Code.conditionTrue_0 = {val:false};
gdjs.Level_3213Code.condition0IsTrue_0 = {val:false};
gdjs.Level_3213Code.condition1IsTrue_0 = {val:false};
gdjs.Level_3213Code.condition2IsTrue_0 = {val:false};


gdjs.Level_3213Code.mapOf = Hashtable.newFrom({});gdjs.Level_3213Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_3213Code.GDPlatObjects1, gdjs.Level_3213Code.GDPlatObjects2);


gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_3213Code.GDPlatObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_3213Code.GDPlatObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_3213Code.condition0IsTrue_0.val = true;
        gdjs.Level_3213Code.GDPlatObjects2[k] = gdjs.Level_3213Code.GDPlatObjects2[i];
        ++k;
    }
}
gdjs.Level_3213Code.GDPlatObjects2.length = k;}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_3213Code.GDPlatObjects2 */
{for(var i = 0, len = gdjs.Level_3213Code.GDPlatObjects2.length ;i < len;++i) {
    gdjs.Level_3213Code.GDPlatObjects2[i].setAnimationName("idle");
}
}}

}


{


gdjs.Level_3213Code.condition0IsTrue_0.val = false;
gdjs.Level_3213Code.condition1IsTrue_0.val = false;
if ( gdjs.Level_3213Code.condition0IsTrue_0.val ) {
{
gdjs.Level_3213Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_3213Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 13", false);
}}

}


{

/* Reuse gdjs.Level_3213Code.GDPlatObjects1 */

gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_3213Code.GDPlatObjects1.length;i<l;++i) {
    if ( gdjs.Level_3213Code.GDPlatObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_3213Code.condition0IsTrue_0.val = true;
        gdjs.Level_3213Code.GDPlatObjects1[k] = gdjs.Level_3213Code.GDPlatObjects1[i];
        ++k;
    }
}
gdjs.Level_3213Code.GDPlatObjects1.length = k;}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_3213Code.GDPlatObjects1 */
{for(var i = 0, len = gdjs.Level_3213Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_3213Code.GDPlatObjects1[i].setAnimationName("run");
}
}}

}


};gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDPlatObjects1Objects = Hashtable.newFrom({"Plat": gdjs.Level_3213Code.GDPlatObjects1});gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDNewObject12Objects1Objects = Hashtable.newFrom({"NewObject12": gdjs.Level_3213Code.GDNewObject12Objects1});gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDPlatObjects1Objects = Hashtable.newFrom({"Plat": gdjs.Level_3213Code.GDPlatObjects1});gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDNewObject14Objects1Objects = Hashtable.newFrom({"NewObject14": gdjs.Level_3213Code.GDNewObject14Objects1});gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDPlatObjects1Objects = Hashtable.newFrom({"Plat": gdjs.Level_3213Code.GDPlatObjects1});gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Level_3213Code.GDNewObjectObjects1});gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Level_3213Code.GDNewObjectObjects1});gdjs.Level_3213Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_3213Code.GDPlatObjects1);

gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_3213Code.GDPlatObjects1.length;i<l;++i) {
    if ( gdjs.Level_3213Code.GDPlatObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_3213Code.condition0IsTrue_0.val = true;
        gdjs.Level_3213Code.GDPlatObjects1[k] = gdjs.Level_3213Code.GDPlatObjects1[i];
        ++k;
    }
}
gdjs.Level_3213Code.GDPlatObjects1.length = k;}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_3213Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


{
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.4, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.Level_3213Code.GDmyElapsedObjects1);
{runtimeScene.getVariables().get("myElapsed").setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "elapsedTimer"));
}{runtimeScene.getVariables().get("myElapsed").setString(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("myElapsed"))), 0, 5));
}{for(var i = 0, len = gdjs.Level_3213Code.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.Level_3213Code.GDmyElapsedObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("myElapsed")));
}
}}

}


{


gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
gdjs.Level_3213Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "elapsedTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject12"), gdjs.Level_3213Code.GDNewObject12Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_3213Code.GDPlatObjects1);

gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
gdjs.Level_3213Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDPlatObjects1Objects, gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDNewObject12Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 13", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject14"), gdjs.Level_3213Code.GDNewObject14Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_3213Code.GDPlatObjects1);

gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
gdjs.Level_3213Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDPlatObjects1Objects, gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDNewObject14Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 14", false);
}}

}


{


gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
gdjs.Level_3213Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause");
}}

}


{


gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
gdjs.Level_3213Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_3213Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.Level_3213Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_3213Code.GDPlatObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
gdjs.Level_3213Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_3213Code.GDPlatObjects1);
{}}

}


{


gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
gdjs.Level_3213Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_3213Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.Level_3213Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_3213Code.GDPlatObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
gdjs.Level_3213Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_3213Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.Level_3213Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_3213Code.GDPlatObjects1[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level_3213Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_3213Code.GDPlatObjects1);

gdjs.Level_3213Code.condition0IsTrue_0.val = false;
{
gdjs.Level_3213Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDPlatObjects1Objects, gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDNewObjectObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_3213Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_3213Code.GDNewObjectObjects1 */
/* Reuse gdjs.Level_3213Code.GDPlatObjects1 */
{for(var i = 0, len = gdjs.Level_3213Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_3213Code.GDPlatObjects1[i].separateFromObjectsList(gdjs.Level_3213Code.mapOfGDgdjs_46Level_953213Code_46GDNewObjectObjects1Objects, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_3213Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.Level_3213Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_3213Code.GDPlatObjects1[i].getBehavior("PlatformerObject").setDeceleration(-(20));
}
}}

}


};

gdjs.Level_3213Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_3213Code.GDNewObjectObjects1.length = 0;
gdjs.Level_3213Code.GDNewObjectObjects2.length = 0;
gdjs.Level_3213Code.GDNewObjectObjects3.length = 0;
gdjs.Level_3213Code.GDNewObject3Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject3Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject3Objects3.length = 0;
gdjs.Level_3213Code.GDNewObject2Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject2Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject2Objects3.length = 0;
gdjs.Level_3213Code.GDPlatObjects1.length = 0;
gdjs.Level_3213Code.GDPlatObjects2.length = 0;
gdjs.Level_3213Code.GDPlatObjects3.length = 0;
gdjs.Level_3213Code.GDNewObject4Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject4Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject4Objects3.length = 0;
gdjs.Level_3213Code.GDNewObject5Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject5Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject5Objects3.length = 0;
gdjs.Level_3213Code.GDNewObject6Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject6Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject6Objects3.length = 0;
gdjs.Level_3213Code.GDNewObject7Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject7Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject7Objects3.length = 0;
gdjs.Level_3213Code.GDNewObject8Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject8Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject8Objects3.length = 0;
gdjs.Level_3213Code.GDNewObject9Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject9Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject9Objects3.length = 0;
gdjs.Level_3213Code.GDNewObject10Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject10Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject10Objects3.length = 0;
gdjs.Level_3213Code.GDNewObject11Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject11Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject11Objects3.length = 0;
gdjs.Level_3213Code.GDScoreObjects1.length = 0;
gdjs.Level_3213Code.GDScoreObjects2.length = 0;
gdjs.Level_3213Code.GDScoreObjects3.length = 0;
gdjs.Level_3213Code.GDNewObject12Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject12Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject12Objects3.length = 0;
gdjs.Level_3213Code.GDNewObject13Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject13Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject13Objects3.length = 0;
gdjs.Level_3213Code.GDmyElapsedObjects1.length = 0;
gdjs.Level_3213Code.GDmyElapsedObjects2.length = 0;
gdjs.Level_3213Code.GDmyElapsedObjects3.length = 0;
gdjs.Level_3213Code.GDNewObject14Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject14Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject14Objects3.length = 0;
gdjs.Level_3213Code.GDNewObject15Objects1.length = 0;
gdjs.Level_3213Code.GDNewObject15Objects2.length = 0;
gdjs.Level_3213Code.GDNewObject15Objects3.length = 0;

gdjs.Level_3213Code.eventsList1(runtimeScene);
return;

}

gdjs['Level_3213Code'] = gdjs.Level_3213Code;
