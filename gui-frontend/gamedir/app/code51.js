gdjs.Stix_32minigameCode = {};
gdjs.Stix_32minigameCode.GDNewObjectObjects1= [];
gdjs.Stix_32minigameCode.GDNewObjectObjects2= [];
gdjs.Stix_32minigameCode.GDNewObject2Objects1= [];
gdjs.Stix_32minigameCode.GDNewObject2Objects2= [];
gdjs.Stix_32minigameCode.GDNewObject3Objects1= [];
gdjs.Stix_32minigameCode.GDNewObject3Objects2= [];

gdjs.Stix_32minigameCode.conditionTrue_0 = {val:false};
gdjs.Stix_32minigameCode.condition0IsTrue_0 = {val:false};
gdjs.Stix_32minigameCode.condition1IsTrue_0 = {val:false};


gdjs.Stix_32minigameCode.mapOfGDgdjs_46Stix_9532minigameCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Stix_32minigameCode.GDNewObjectObjects1});gdjs.Stix_32minigameCode.mapOfGDgdjs_46Stix_9532minigameCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.Stix_32minigameCode.GDNewObject2Objects1});gdjs.Stix_32minigameCode.mapOfGDgdjs_46Stix_9532minigameCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Stix_32minigameCode.GDNewObjectObjects1});gdjs.Stix_32minigameCode.mapOfGDgdjs_46Stix_9532minigameCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.Stix_32minigameCode.GDNewObject3Objects1});gdjs.Stix_32minigameCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Stix_32minigameCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Stix_32minigameCode.GDNewObject2Objects1);

gdjs.Stix_32minigameCode.condition0IsTrue_0.val = false;
{
gdjs.Stix_32minigameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stix_32minigameCode.mapOfGDgdjs_46Stix_9532minigameCode_46GDNewObjectObjects1Objects, gdjs.Stix_32minigameCode.mapOfGDgdjs_46Stix_9532minigameCode_46GDNewObject2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Stix_32minigameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stix minigame", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Stix_32minigameCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Stix_32minigameCode.GDNewObject3Objects1);

gdjs.Stix_32minigameCode.condition0IsTrue_0.val = false;
{
gdjs.Stix_32minigameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stix_32minigameCode.mapOfGDgdjs_46Stix_9532minigameCode_46GDNewObjectObjects1Objects, gdjs.Stix_32minigameCode.mapOfGDgdjs_46Stix_9532minigameCode_46GDNewObject3Objects1Objects, false, runtimeScene, false);
}if (gdjs.Stix_32minigameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 24", false);
}}

}


};

gdjs.Stix_32minigameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Stix_32minigameCode.GDNewObjectObjects1.length = 0;
gdjs.Stix_32minigameCode.GDNewObjectObjects2.length = 0;
gdjs.Stix_32minigameCode.GDNewObject2Objects1.length = 0;
gdjs.Stix_32minigameCode.GDNewObject2Objects2.length = 0;
gdjs.Stix_32minigameCode.GDNewObject3Objects1.length = 0;
gdjs.Stix_32minigameCode.GDNewObject3Objects2.length = 0;

gdjs.Stix_32minigameCode.eventsList0(runtimeScene);
return;

}

gdjs['Stix_32minigameCode'] = gdjs.Stix_32minigameCode;
