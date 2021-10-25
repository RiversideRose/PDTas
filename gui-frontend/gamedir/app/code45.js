gdjs.LimitCode = {};
gdjs.LimitCode.GDNewObjectObjects1= [];
gdjs.LimitCode.GDNewObjectObjects2= [];

gdjs.LimitCode.conditionTrue_0 = {val:false};
gdjs.LimitCode.condition0IsTrue_0 = {val:false};
gdjs.LimitCode.condition1IsTrue_0 = {val:false};


gdjs.LimitCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{


gdjs.LimitCode.condition0IsTrue_0.val = false;
{
gdjs.LimitCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.LimitCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.LimitCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LimitCode.GDNewObjectObjects1.length = 0;
gdjs.LimitCode.GDNewObjectObjects2.length = 0;

gdjs.LimitCode.eventsList0(runtimeScene);
return;

}

gdjs['LimitCode'] = gdjs.LimitCode;
