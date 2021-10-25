gdjs.Level_324Code = {};
gdjs.Level_324Code.GDNewObjectObjects1= [];
gdjs.Level_324Code.GDNewObjectObjects2= [];
gdjs.Level_324Code.GDNewObjectObjects3= [];
gdjs.Level_324Code.GDNewObject3Objects1= [];
gdjs.Level_324Code.GDNewObject3Objects2= [];
gdjs.Level_324Code.GDNewObject3Objects3= [];
gdjs.Level_324Code.GDNewObject2Objects1= [];
gdjs.Level_324Code.GDNewObject2Objects2= [];
gdjs.Level_324Code.GDNewObject2Objects3= [];
gdjs.Level_324Code.GDPlatObjects1= [];
gdjs.Level_324Code.GDPlatObjects2= [];
gdjs.Level_324Code.GDPlatObjects3= [];
gdjs.Level_324Code.GDNewObject4Objects1= [];
gdjs.Level_324Code.GDNewObject4Objects2= [];
gdjs.Level_324Code.GDNewObject4Objects3= [];
gdjs.Level_324Code.GDNewObject5Objects1= [];
gdjs.Level_324Code.GDNewObject5Objects2= [];
gdjs.Level_324Code.GDNewObject5Objects3= [];
gdjs.Level_324Code.GDNewObject6Objects1= [];
gdjs.Level_324Code.GDNewObject6Objects2= [];
gdjs.Level_324Code.GDNewObject6Objects3= [];
gdjs.Level_324Code.GDNewObject7Objects1= [];
gdjs.Level_324Code.GDNewObject7Objects2= [];
gdjs.Level_324Code.GDNewObject7Objects3= [];
gdjs.Level_324Code.GDNewObject8Objects1= [];
gdjs.Level_324Code.GDNewObject8Objects2= [];
gdjs.Level_324Code.GDNewObject8Objects3= [];
gdjs.Level_324Code.GDNewObject9Objects1= [];
gdjs.Level_324Code.GDNewObject9Objects2= [];
gdjs.Level_324Code.GDNewObject9Objects3= [];
gdjs.Level_324Code.GDNewObject10Objects1= [];
gdjs.Level_324Code.GDNewObject10Objects2= [];
gdjs.Level_324Code.GDNewObject10Objects3= [];
gdjs.Level_324Code.GDNewObject11Objects1= [];
gdjs.Level_324Code.GDNewObject11Objects2= [];
gdjs.Level_324Code.GDNewObject11Objects3= [];
gdjs.Level_324Code.GDScoreObjects1= [];
gdjs.Level_324Code.GDScoreObjects2= [];
gdjs.Level_324Code.GDScoreObjects3= [];
gdjs.Level_324Code.GDNewObject12Objects1= [];
gdjs.Level_324Code.GDNewObject12Objects2= [];
gdjs.Level_324Code.GDNewObject12Objects3= [];
gdjs.Level_324Code.GDNewObject13Objects1= [];
gdjs.Level_324Code.GDNewObject13Objects2= [];
gdjs.Level_324Code.GDNewObject13Objects3= [];
gdjs.Level_324Code.GDmyElapsedObjects1= [];
gdjs.Level_324Code.GDmyElapsedObjects2= [];
gdjs.Level_324Code.GDmyElapsedObjects3= [];
gdjs.Level_324Code.GDNewObject14Objects1= [];
gdjs.Level_324Code.GDNewObject14Objects2= [];
gdjs.Level_324Code.GDNewObject14Objects3= [];
gdjs.Level_324Code.GDNewObject15Objects1= [];
gdjs.Level_324Code.GDNewObject15Objects2= [];
gdjs.Level_324Code.GDNewObject15Objects3= [];
gdjs.Level_324Code.GDNewObject16Objects1= [];
gdjs.Level_324Code.GDNewObject16Objects2= [];
gdjs.Level_324Code.GDNewObject16Objects3= [];
gdjs.Level_324Code.GDNewObject152Objects1= [];
gdjs.Level_324Code.GDNewObject152Objects2= [];
gdjs.Level_324Code.GDNewObject152Objects3= [];
gdjs.Level_324Code.GDNewObject17Objects1= [];
gdjs.Level_324Code.GDNewObject17Objects2= [];
gdjs.Level_324Code.GDNewObject17Objects3= [];

gdjs.Level_324Code.conditionTrue_0 = {val:false};
gdjs.Level_324Code.condition0IsTrue_0 = {val:false};
gdjs.Level_324Code.condition1IsTrue_0 = {val:false};


gdjs.Level_324Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_324Code.GDPlatObjects1, gdjs.Level_324Code.GDPlatObjects2);


gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_324Code.GDPlatObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_324Code.GDPlatObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_324Code.condition0IsTrue_0.val = true;
        gdjs.Level_324Code.GDPlatObjects2[k] = gdjs.Level_324Code.GDPlatObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDPlatObjects2.length = k;}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_324Code.GDPlatObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDPlatObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlatObjects2[i].setAnimationName("idle");
}
}}

}


{

/* Reuse gdjs.Level_324Code.GDPlatObjects1 */

gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_324Code.GDPlatObjects1.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDPlatObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_324Code.condition0IsTrue_0.val = true;
        gdjs.Level_324Code.GDPlatObjects1[k] = gdjs.Level_324Code.GDPlatObjects1[i];
        ++k;
    }
}
gdjs.Level_324Code.GDPlatObjects1.length = k;}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_324Code.GDPlatObjects1 */
{for(var i = 0, len = gdjs.Level_324Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlatObjects1[i].setAnimationName("run");
}
}}

}


};gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDPlatObjects1Objects = Hashtable.newFrom({"Plat": gdjs.Level_324Code.GDPlatObjects1});gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Level_324Code.GDNewObjectObjects1});gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Level_324Code.GDNewObjectObjects1});gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDPlatObjects1Objects = Hashtable.newFrom({"Plat": gdjs.Level_324Code.GDPlatObjects1});gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObject12Objects1Objects = Hashtable.newFrom({"NewObject12": gdjs.Level_324Code.GDNewObject12Objects1});gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDPlatObjects1Objects = Hashtable.newFrom({"Plat": gdjs.Level_324Code.GDPlatObjects1});gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObject14Objects1Objects = Hashtable.newFrom({"NewObject14": gdjs.Level_324Code.GDNewObject14Objects1});gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Level_324Code.GDNewObjectObjects1});gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDPlatObjects1Objects = Hashtable.newFrom({"Plat": gdjs.Level_324Code.GDPlatObjects1});gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObject16Objects1Objects = Hashtable.newFrom({"NewObject16": gdjs.Level_324Code.GDNewObject16Objects1});gdjs.Level_324Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_324Code.GDPlatObjects1);

gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_324Code.GDPlatObjects1.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDPlatObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_324Code.condition0IsTrue_0.val = true;
        gdjs.Level_324Code.GDPlatObjects1[k] = gdjs.Level_324Code.GDPlatObjects1[i];
        ++k;
    }
}
gdjs.Level_324Code.GDPlatObjects1.length = k;}if (gdjs.Level_324Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_324Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level_324Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_324Code.GDPlatObjects1);

gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDPlatObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObjectObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_324Code.GDNewObjectObjects1 */
/* Reuse gdjs.Level_324Code.GDPlatObjects1 */
{for(var i = 0, len = gdjs.Level_324Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlatObjects1[i].separateFromObjectsList(gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObjectObjects1Objects, false);
}
}}

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
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.Level_324Code.GDmyElapsedObjects1);
{runtimeScene.getVariables().get("myElapsed").setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "elapsedTimer"));
}{runtimeScene.getVariables().get("myElapsed").setString(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("myElapsed"))), 0, 5));
}{for(var i = 0, len = gdjs.Level_324Code.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDmyElapsedObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("myElapsed")));
}
}}

}


{


gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "elapsedTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject12"), gdjs.Level_324Code.GDNewObject12Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_324Code.GDPlatObjects1);

gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDPlatObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObject12Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject14"), gdjs.Level_324Code.GDNewObject14Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_324Code.GDPlatObjects1);

gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDPlatObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObject14Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 5", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.Level_324Code.GDNewObject10Objects1);
{for(var i = 0, len = gdjs.Level_324Code.GDNewObject10Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewObject10Objects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, 16, 816);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level_324Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject16"), gdjs.Level_324Code.GDNewObject16Objects1);
{for(var i = 0, len = gdjs.Level_324Code.GDNewObject16Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewObject16Objects1[i].getBehavior("Bounce").BounceOff(gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject16"), gdjs.Level_324Code.GDNewObject16Objects1);
{for(var i = 0, len = gdjs.Level_324Code.GDNewObject16Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewObject16Objects1[i].setDirectionOrAngle(gdjs.random(360));
}
}{for(var i = 0, len = gdjs.Level_324Code.GDNewObject16Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewObject16Objects1[i].addForce(gdjs.randomInRange(-(150), -(300)) + gdjs.randomInRange(150, 300), gdjs.randomInRange(600, -(600)), 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject16"), gdjs.Level_324Code.GDNewObject16Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_324Code.GDPlatObjects1);

gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDPlatObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDNewObject16Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 4", false);
}}

}


{


gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause");
}}

}


{


gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_324Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlatObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_324Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlatObjects1[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{


gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_324Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlatObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.Level_324Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlatObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


{
}

}


};

gdjs.Level_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_324Code.GDNewObjectObjects1.length = 0;
gdjs.Level_324Code.GDNewObjectObjects2.length = 0;
gdjs.Level_324Code.GDNewObjectObjects3.length = 0;
gdjs.Level_324Code.GDNewObject3Objects1.length = 0;
gdjs.Level_324Code.GDNewObject3Objects2.length = 0;
gdjs.Level_324Code.GDNewObject3Objects3.length = 0;
gdjs.Level_324Code.GDNewObject2Objects1.length = 0;
gdjs.Level_324Code.GDNewObject2Objects2.length = 0;
gdjs.Level_324Code.GDNewObject2Objects3.length = 0;
gdjs.Level_324Code.GDPlatObjects1.length = 0;
gdjs.Level_324Code.GDPlatObjects2.length = 0;
gdjs.Level_324Code.GDPlatObjects3.length = 0;
gdjs.Level_324Code.GDNewObject4Objects1.length = 0;
gdjs.Level_324Code.GDNewObject4Objects2.length = 0;
gdjs.Level_324Code.GDNewObject4Objects3.length = 0;
gdjs.Level_324Code.GDNewObject5Objects1.length = 0;
gdjs.Level_324Code.GDNewObject5Objects2.length = 0;
gdjs.Level_324Code.GDNewObject5Objects3.length = 0;
gdjs.Level_324Code.GDNewObject6Objects1.length = 0;
gdjs.Level_324Code.GDNewObject6Objects2.length = 0;
gdjs.Level_324Code.GDNewObject6Objects3.length = 0;
gdjs.Level_324Code.GDNewObject7Objects1.length = 0;
gdjs.Level_324Code.GDNewObject7Objects2.length = 0;
gdjs.Level_324Code.GDNewObject7Objects3.length = 0;
gdjs.Level_324Code.GDNewObject8Objects1.length = 0;
gdjs.Level_324Code.GDNewObject8Objects2.length = 0;
gdjs.Level_324Code.GDNewObject8Objects3.length = 0;
gdjs.Level_324Code.GDNewObject9Objects1.length = 0;
gdjs.Level_324Code.GDNewObject9Objects2.length = 0;
gdjs.Level_324Code.GDNewObject9Objects3.length = 0;
gdjs.Level_324Code.GDNewObject10Objects1.length = 0;
gdjs.Level_324Code.GDNewObject10Objects2.length = 0;
gdjs.Level_324Code.GDNewObject10Objects3.length = 0;
gdjs.Level_324Code.GDNewObject11Objects1.length = 0;
gdjs.Level_324Code.GDNewObject11Objects2.length = 0;
gdjs.Level_324Code.GDNewObject11Objects3.length = 0;
gdjs.Level_324Code.GDScoreObjects1.length = 0;
gdjs.Level_324Code.GDScoreObjects2.length = 0;
gdjs.Level_324Code.GDScoreObjects3.length = 0;
gdjs.Level_324Code.GDNewObject12Objects1.length = 0;
gdjs.Level_324Code.GDNewObject12Objects2.length = 0;
gdjs.Level_324Code.GDNewObject12Objects3.length = 0;
gdjs.Level_324Code.GDNewObject13Objects1.length = 0;
gdjs.Level_324Code.GDNewObject13Objects2.length = 0;
gdjs.Level_324Code.GDNewObject13Objects3.length = 0;
gdjs.Level_324Code.GDmyElapsedObjects1.length = 0;
gdjs.Level_324Code.GDmyElapsedObjects2.length = 0;
gdjs.Level_324Code.GDmyElapsedObjects3.length = 0;
gdjs.Level_324Code.GDNewObject14Objects1.length = 0;
gdjs.Level_324Code.GDNewObject14Objects2.length = 0;
gdjs.Level_324Code.GDNewObject14Objects3.length = 0;
gdjs.Level_324Code.GDNewObject15Objects1.length = 0;
gdjs.Level_324Code.GDNewObject15Objects2.length = 0;
gdjs.Level_324Code.GDNewObject15Objects3.length = 0;
gdjs.Level_324Code.GDNewObject16Objects1.length = 0;
gdjs.Level_324Code.GDNewObject16Objects2.length = 0;
gdjs.Level_324Code.GDNewObject16Objects3.length = 0;
gdjs.Level_324Code.GDNewObject152Objects1.length = 0;
gdjs.Level_324Code.GDNewObject152Objects2.length = 0;
gdjs.Level_324Code.GDNewObject152Objects3.length = 0;
gdjs.Level_324Code.GDNewObject17Objects1.length = 0;
gdjs.Level_324Code.GDNewObject17Objects2.length = 0;
gdjs.Level_324Code.GDNewObject17Objects3.length = 0;

gdjs.Level_324Code.eventsList1(runtimeScene);
return;

}

gdjs['Level_324Code'] = gdjs.Level_324Code;
