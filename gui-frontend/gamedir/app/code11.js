gdjs.New_32scene4Code = {};
gdjs.New_32scene4Code.GDNewObjectObjects1= [];
gdjs.New_32scene4Code.GDNewObjectObjects2= [];
gdjs.New_32scene4Code.GDNewObjectObjects3= [];
gdjs.New_32scene4Code.GDNewObject3Objects1= [];
gdjs.New_32scene4Code.GDNewObject3Objects2= [];
gdjs.New_32scene4Code.GDNewObject3Objects3= [];
gdjs.New_32scene4Code.GDNewObject2Objects1= [];
gdjs.New_32scene4Code.GDNewObject2Objects2= [];
gdjs.New_32scene4Code.GDNewObject2Objects3= [];
gdjs.New_32scene4Code.GDPlat2222Objects1= [];
gdjs.New_32scene4Code.GDPlat2222Objects2= [];
gdjs.New_32scene4Code.GDPlat2222Objects3= [];
gdjs.New_32scene4Code.GDPlat222Objects1= [];
gdjs.New_32scene4Code.GDPlat222Objects2= [];
gdjs.New_32scene4Code.GDPlat222Objects3= [];
gdjs.New_32scene4Code.GDPlat22Objects1= [];
gdjs.New_32scene4Code.GDPlat22Objects2= [];
gdjs.New_32scene4Code.GDPlat22Objects3= [];
gdjs.New_32scene4Code.GDPlat2Objects1= [];
gdjs.New_32scene4Code.GDPlat2Objects2= [];
gdjs.New_32scene4Code.GDPlat2Objects3= [];
gdjs.New_32scene4Code.GDPlatObjects1= [];
gdjs.New_32scene4Code.GDPlatObjects2= [];
gdjs.New_32scene4Code.GDPlatObjects3= [];
gdjs.New_32scene4Code.GDNewObject4Objects1= [];
gdjs.New_32scene4Code.GDNewObject4Objects2= [];
gdjs.New_32scene4Code.GDNewObject4Objects3= [];
gdjs.New_32scene4Code.GDNewObject5Objects1= [];
gdjs.New_32scene4Code.GDNewObject5Objects2= [];
gdjs.New_32scene4Code.GDNewObject5Objects3= [];
gdjs.New_32scene4Code.GDNewObject6Objects1= [];
gdjs.New_32scene4Code.GDNewObject6Objects2= [];
gdjs.New_32scene4Code.GDNewObject6Objects3= [];
gdjs.New_32scene4Code.GDNewObject7Objects1= [];
gdjs.New_32scene4Code.GDNewObject7Objects2= [];
gdjs.New_32scene4Code.GDNewObject7Objects3= [];
gdjs.New_32scene4Code.GDNewObject8Objects1= [];
gdjs.New_32scene4Code.GDNewObject8Objects2= [];
gdjs.New_32scene4Code.GDNewObject8Objects3= [];
gdjs.New_32scene4Code.GDNewObject9Objects1= [];
gdjs.New_32scene4Code.GDNewObject9Objects2= [];
gdjs.New_32scene4Code.GDNewObject9Objects3= [];
gdjs.New_32scene4Code.GDNewObject10Objects1= [];
gdjs.New_32scene4Code.GDNewObject10Objects2= [];
gdjs.New_32scene4Code.GDNewObject10Objects3= [];
gdjs.New_32scene4Code.GDNewObject11Objects1= [];
gdjs.New_32scene4Code.GDNewObject11Objects2= [];
gdjs.New_32scene4Code.GDNewObject11Objects3= [];
gdjs.New_32scene4Code.GDScoreObjects1= [];
gdjs.New_32scene4Code.GDScoreObjects2= [];
gdjs.New_32scene4Code.GDScoreObjects3= [];
gdjs.New_32scene4Code.GDNewObject12Objects1= [];
gdjs.New_32scene4Code.GDNewObject12Objects2= [];
gdjs.New_32scene4Code.GDNewObject12Objects3= [];
gdjs.New_32scene4Code.GDNewObject13Objects1= [];
gdjs.New_32scene4Code.GDNewObject13Objects2= [];
gdjs.New_32scene4Code.GDNewObject13Objects3= [];
gdjs.New_32scene4Code.GDmyElapsedObjects1= [];
gdjs.New_32scene4Code.GDmyElapsedObjects2= [];
gdjs.New_32scene4Code.GDmyElapsedObjects3= [];
gdjs.New_32scene4Code.GDNewObject18Objects1= [];
gdjs.New_32scene4Code.GDNewObject18Objects2= [];
gdjs.New_32scene4Code.GDNewObject18Objects3= [];
gdjs.New_32scene4Code.GDNewObject172Objects1= [];
gdjs.New_32scene4Code.GDNewObject172Objects2= [];
gdjs.New_32scene4Code.GDNewObject172Objects3= [];
gdjs.New_32scene4Code.GDNewObject14Objects1= [];
gdjs.New_32scene4Code.GDNewObject14Objects2= [];
gdjs.New_32scene4Code.GDNewObject14Objects3= [];
gdjs.New_32scene4Code.GDNewObject182Objects1= [];
gdjs.New_32scene4Code.GDNewObject182Objects2= [];
gdjs.New_32scene4Code.GDNewObject182Objects3= [];
gdjs.New_32scene4Code.GDNewObject15Objects1= [];
gdjs.New_32scene4Code.GDNewObject15Objects2= [];
gdjs.New_32scene4Code.GDNewObject15Objects3= [];
gdjs.New_32scene4Code.GDNewObject16Objects1= [];
gdjs.New_32scene4Code.GDNewObject16Objects2= [];
gdjs.New_32scene4Code.GDNewObject16Objects3= [];

gdjs.New_32scene4Code.conditionTrue_0 = {val:false};
gdjs.New_32scene4Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene4Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene4Code.condition2IsTrue_0 = {val:false};
gdjs.New_32scene4Code.conditionTrue_1 = {val:false};
gdjs.New_32scene4Code.condition0IsTrue_1 = {val:false};
gdjs.New_32scene4Code.condition1IsTrue_1 = {val:false};
gdjs.New_32scene4Code.condition2IsTrue_1 = {val:false};


gdjs.New_32scene4Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32scene4Code.GDPlatObjects1, gdjs.New_32scene4Code.GDPlatObjects2);


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDPlatObjects2.length;i<l;++i) {
    if ( !(gdjs.New_32scene4Code.GDPlatObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32scene4Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDPlatObjects2[k] = gdjs.New_32scene4Code.GDPlatObjects2[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDPlatObjects2.length = k;}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDPlatObjects2 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlatObjects2.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlatObjects2[i].setAnimationName("idle");
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene4", false);
}}

}


{

/* Reuse gdjs.New_32scene4Code.GDPlatObjects1 */

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDPlatObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDPlatObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32scene4Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDPlatObjects1[k] = gdjs.New_32scene4Code.GDPlatObjects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDPlatObjects1.length = k;}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDPlatObjects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlatObjects1[i].setAnimationName("run");
}
}}

}


};gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlatObjects1Objects = Hashtable.newFrom({"Plat": gdjs.New_32scene4Code.GDPlatObjects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene4Code.GDNewObjectObjects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene4Code.GDNewObjectObjects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlatObjects1Objects = Hashtable.newFrom({"Plat": gdjs.New_32scene4Code.GDPlatObjects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject12Objects1Objects = Hashtable.newFrom({"NewObject12": gdjs.New_32scene4Code.GDNewObject12Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlatObjects1Objects = Hashtable.newFrom({"Plat": gdjs.New_32scene4Code.GDPlatObjects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject14Objects1Objects = Hashtable.newFrom({"NewObject14": gdjs.New_32scene4Code.GDNewObject14Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlatObjects1Objects = Hashtable.newFrom({"Plat": gdjs.New_32scene4Code.GDPlatObjects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject18Objects1Objects = Hashtable.newFrom({"NewObject18": gdjs.New_32scene4Code.GDNewObject18Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject172Objects1Objects = Hashtable.newFrom({"NewObject172": gdjs.New_32scene4Code.GDNewObject172Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat22Objects1Objects = Hashtable.newFrom({"Plat22": gdjs.New_32scene4Code.GDPlat22Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject18Objects1Objects = Hashtable.newFrom({"NewObject18": gdjs.New_32scene4Code.GDNewObject18Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject172Objects1Objects = Hashtable.newFrom({"NewObject172": gdjs.New_32scene4Code.GDNewObject172Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat2Objects1Objects = Hashtable.newFrom({"Plat2": gdjs.New_32scene4Code.GDPlat2Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject18Objects1Objects = Hashtable.newFrom({"NewObject18": gdjs.New_32scene4Code.GDNewObject18Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject172Objects1Objects = Hashtable.newFrom({"NewObject172": gdjs.New_32scene4Code.GDNewObject172Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat222Objects1Objects = Hashtable.newFrom({"Plat222": gdjs.New_32scene4Code.GDPlat222Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject18Objects1Objects = Hashtable.newFrom({"NewObject18": gdjs.New_32scene4Code.GDNewObject18Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject172Objects1Objects = Hashtable.newFrom({"NewObject172": gdjs.New_32scene4Code.GDNewObject172Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat2222Objects1Objects = Hashtable.newFrom({"Plat2222": gdjs.New_32scene4Code.GDPlat2222Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject18Objects1Objects = Hashtable.newFrom({"NewObject18": gdjs.New_32scene4Code.GDNewObject18Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject172Objects1Objects = Hashtable.newFrom({"NewObject172": gdjs.New_32scene4Code.GDNewObject172Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat2Objects1Objects = Hashtable.newFrom({"Plat2": gdjs.New_32scene4Code.GDPlat2Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject12Objects1Objects = Hashtable.newFrom({"NewObject12": gdjs.New_32scene4Code.GDNewObject12Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat222Objects1Objects = Hashtable.newFrom({"Plat222": gdjs.New_32scene4Code.GDPlat222Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject12Objects1Objects = Hashtable.newFrom({"NewObject12": gdjs.New_32scene4Code.GDNewObject12Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat2222Objects1Objects = Hashtable.newFrom({"Plat2222": gdjs.New_32scene4Code.GDPlat2222Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject12Objects1Objects = Hashtable.newFrom({"NewObject12": gdjs.New_32scene4Code.GDNewObject12Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat22Objects1Objects = Hashtable.newFrom({"Plat22": gdjs.New_32scene4Code.GDPlat22Objects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject12Objects1Objects = Hashtable.newFrom({"NewObject12": gdjs.New_32scene4Code.GDNewObject12Objects1});gdjs.New_32scene4Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.New_32scene4Code.GDPlatObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDPlatObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDPlatObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32scene4Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDPlatObjects1[k] = gdjs.New_32scene4Code.GDPlatObjects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDPlatObjects1.length = k;}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene4Code.eventsList0(runtimeScene);} //End of subevents
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

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene4Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.New_32scene4Code.GDPlatObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlatObjects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObjectObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDNewObjectObjects1 */
/* Reuse gdjs.New_32scene4Code.GDPlatObjects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlatObjects1[i].separateFromObjectsList(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObjectObjects1Objects, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.New_32scene4Code.GDmyElapsedObjects1);
{runtimeScene.getVariables().get("myElapsed").setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "elapsedTimer"));
}{runtimeScene.getVariables().get("myElapsed").setString(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("myElapsed"))), 0, 5));
}{for(var i = 0, len = gdjs.New_32scene4Code.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDmyElapsedObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("myElapsed")));
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "elapsedTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject12"), gdjs.New_32scene4Code.GDNewObject12Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.New_32scene4Code.GDPlatObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlatObjects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject12Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject14"), gdjs.New_32scene4Code.GDNewObject14Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.New_32scene4Code.GDPlatObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlatObjects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject14Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 11", false);
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause");
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.New_32scene4Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlatObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.New_32scene4Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlatObjects1[i].getBehavior("PlatformerObject").simulateUpKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.New_32scene4Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlatObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.New_32scene4Code.GDPlatObjects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlatObjects1[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject18"), gdjs.New_32scene4Code.GDNewObject18Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat"), gdjs.New_32scene4Code.GDPlatObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlatObjects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject18Objects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene4Code.conditionTrue_1 = gdjs.New_32scene4Code.condition1IsTrue_0;
gdjs.New_32scene4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(27941284);
}
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDNewObject18Objects1 */
/* Reuse gdjs.New_32scene4Code.GDPlatObjects1 */
gdjs.New_32scene4Code.GDNewObject172Objects1.length = 0;

{for(var i = 0, len = gdjs.New_32scene4Code.GDPlatObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlatObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject18Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject18Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject172Objects1Objects, (( gdjs.New_32scene4Code.GDNewObject18Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject18Objects1[0].getPointX("")), (( gdjs.New_32scene4Code.GDNewObject18Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject18Objects1[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject18"), gdjs.New_32scene4Code.GDNewObject18Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat22"), gdjs.New_32scene4Code.GDPlat22Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat22Objects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject18Objects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene4Code.conditionTrue_1 = gdjs.New_32scene4Code.condition1IsTrue_0;
gdjs.New_32scene4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(27942732);
}
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDNewObject18Objects1 */
/* Reuse gdjs.New_32scene4Code.GDPlat22Objects1 */
gdjs.New_32scene4Code.GDNewObject172Objects1.length = 0;

{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat22Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat22Objects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject18Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject18Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject172Objects1Objects, (( gdjs.New_32scene4Code.GDNewObject18Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject18Objects1[0].getPointX("")), (( gdjs.New_32scene4Code.GDNewObject18Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject18Objects1[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject18"), gdjs.New_32scene4Code.GDNewObject18Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat2"), gdjs.New_32scene4Code.GDPlat2Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat2Objects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject18Objects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene4Code.conditionTrue_1 = gdjs.New_32scene4Code.condition1IsTrue_0;
gdjs.New_32scene4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(27944180);
}
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDNewObject18Objects1 */
/* Reuse gdjs.New_32scene4Code.GDPlat2Objects1 */
gdjs.New_32scene4Code.GDNewObject172Objects1.length = 0;

{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat2Objects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject18Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject18Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject172Objects1Objects, (( gdjs.New_32scene4Code.GDNewObject18Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject18Objects1[0].getPointX("")), (( gdjs.New_32scene4Code.GDNewObject18Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject18Objects1[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject18"), gdjs.New_32scene4Code.GDNewObject18Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat222"), gdjs.New_32scene4Code.GDPlat222Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat222Objects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject18Objects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene4Code.conditionTrue_1 = gdjs.New_32scene4Code.condition1IsTrue_0;
gdjs.New_32scene4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(27945756);
}
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDNewObject18Objects1 */
/* Reuse gdjs.New_32scene4Code.GDPlat222Objects1 */
gdjs.New_32scene4Code.GDNewObject172Objects1.length = 0;

{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat222Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat222Objects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject18Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject18Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject172Objects1Objects, (( gdjs.New_32scene4Code.GDNewObject18Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject18Objects1[0].getPointX("")), (( gdjs.New_32scene4Code.GDNewObject18Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject18Objects1[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject18"), gdjs.New_32scene4Code.GDNewObject18Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat2222"), gdjs.New_32scene4Code.GDPlat2222Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat2222Objects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject18Objects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene4Code.conditionTrue_1 = gdjs.New_32scene4Code.condition1IsTrue_0;
gdjs.New_32scene4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(27947204);
}
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDNewObject18Objects1 */
/* Reuse gdjs.New_32scene4Code.GDPlat2222Objects1 */
gdjs.New_32scene4Code.GDNewObject172Objects1.length = 0;

{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat2222Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat2222Objects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject18Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject18Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject172Objects1Objects, (( gdjs.New_32scene4Code.GDNewObject18Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject18Objects1[0].getPointX("")), (( gdjs.New_32scene4Code.GDNewObject18Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject18Objects1[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject12"), gdjs.New_32scene4Code.GDNewObject12Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat2"), gdjs.New_32scene4Code.GDPlat2Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat2Objects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject12Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject12"), gdjs.New_32scene4Code.GDNewObject12Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat222"), gdjs.New_32scene4Code.GDPlat222Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat222Objects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject12Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject12"), gdjs.New_32scene4Code.GDNewObject12Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat2222"), gdjs.New_32scene4Code.GDPlat2222Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat2222Objects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject12Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject12"), gdjs.New_32scene4Code.GDNewObject12Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plat22"), gdjs.New_32scene4Code.GDPlat22Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDPlat22Objects1Objects, gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject12Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene4", false);
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat2"), gdjs.New_32scene4Code.GDPlat2Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat2Objects1[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat2"), gdjs.New_32scene4Code.GDPlat2Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat2Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat2"), gdjs.New_32scene4Code.GDPlat2Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat2Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat22"), gdjs.New_32scene4Code.GDPlat22Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat22Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat22Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat22"), gdjs.New_32scene4Code.GDPlat22Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat22Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat22Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat22"), gdjs.New_32scene4Code.GDPlat22Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat22Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat22Objects1[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat222"), gdjs.New_32scene4Code.GDPlat222Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat222Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat222Objects1[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat222"), gdjs.New_32scene4Code.GDPlat222Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat222Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat222Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat222"), gdjs.New_32scene4Code.GDPlat222Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat222Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat222Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat2222"), gdjs.New_32scene4Code.GDPlat2222Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat2222Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat2222Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat2222"), gdjs.New_32scene4Code.GDPlat2222Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat2222Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat2222Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Plat2222"), gdjs.New_32scene4Code.GDPlat2222Objects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDPlat2222Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDPlat2222Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


{
}

}


};

gdjs.New_32scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene4Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene4Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene4Code.GDNewObjectObjects3.length = 0;
gdjs.New_32scene4Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject3Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject2Objects3.length = 0;
gdjs.New_32scene4Code.GDPlat2222Objects1.length = 0;
gdjs.New_32scene4Code.GDPlat2222Objects2.length = 0;
gdjs.New_32scene4Code.GDPlat2222Objects3.length = 0;
gdjs.New_32scene4Code.GDPlat222Objects1.length = 0;
gdjs.New_32scene4Code.GDPlat222Objects2.length = 0;
gdjs.New_32scene4Code.GDPlat222Objects3.length = 0;
gdjs.New_32scene4Code.GDPlat22Objects1.length = 0;
gdjs.New_32scene4Code.GDPlat22Objects2.length = 0;
gdjs.New_32scene4Code.GDPlat22Objects3.length = 0;
gdjs.New_32scene4Code.GDPlat2Objects1.length = 0;
gdjs.New_32scene4Code.GDPlat2Objects2.length = 0;
gdjs.New_32scene4Code.GDPlat2Objects3.length = 0;
gdjs.New_32scene4Code.GDPlatObjects1.length = 0;
gdjs.New_32scene4Code.GDPlatObjects2.length = 0;
gdjs.New_32scene4Code.GDPlatObjects3.length = 0;
gdjs.New_32scene4Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject4Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject5Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject5Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject6Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject7Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject8Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject8Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject8Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject9Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject9Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject9Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject10Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject10Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject10Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject11Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject11Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject11Objects3.length = 0;
gdjs.New_32scene4Code.GDScoreObjects1.length = 0;
gdjs.New_32scene4Code.GDScoreObjects2.length = 0;
gdjs.New_32scene4Code.GDScoreObjects3.length = 0;
gdjs.New_32scene4Code.GDNewObject12Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject12Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject12Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject13Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject13Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject13Objects3.length = 0;
gdjs.New_32scene4Code.GDmyElapsedObjects1.length = 0;
gdjs.New_32scene4Code.GDmyElapsedObjects2.length = 0;
gdjs.New_32scene4Code.GDmyElapsedObjects3.length = 0;
gdjs.New_32scene4Code.GDNewObject18Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject18Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject18Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject172Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject172Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject172Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject14Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject14Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject14Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject182Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject182Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject182Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject15Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject15Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject15Objects3.length = 0;
gdjs.New_32scene4Code.GDNewObject16Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject16Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject16Objects3.length = 0;

gdjs.New_32scene4Code.eventsList1(runtimeScene);
return;

}

gdjs['New_32scene4Code'] = gdjs.New_32scene4Code;
