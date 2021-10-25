gdjs.GietieCode = {};
gdjs.GietieCode.GDNewObject182Objects1= [];
gdjs.GietieCode.GDNewObject182Objects2= [];
gdjs.GietieCode.GDNewObjectObjects1= [];
gdjs.GietieCode.GDNewObjectObjects2= [];
gdjs.GietieCode.GDNewObject2Objects1= [];
gdjs.GietieCode.GDNewObject2Objects2= [];

gdjs.GietieCode.conditionTrue_0 = {val:false};
gdjs.GietieCode.condition0IsTrue_0 = {val:false};
gdjs.GietieCode.condition1IsTrue_0 = {val:false};
gdjs.GietieCode.conditionTrue_1 = {val:false};
gdjs.GietieCode.condition0IsTrue_1 = {val:false};
gdjs.GietieCode.condition1IsTrue_1 = {val:false};


gdjs.GietieCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.GietieCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.GietieCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.GietieCode.GDNewObject2Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(999999, 8, 8, 8, 0.05, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.GietieCode.GDNewObject2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GietieCode.GDNewObject2Objects1.length !== 0 ? gdjs.GietieCode.GDNewObject2Objects1[0] : null), true, "", 0);
}}

}


{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}}

}


{


gdjs.GietieCode.condition0IsTrue_0.val = false;
{
{gdjs.GietieCode.conditionTrue_1 = gdjs.GietieCode.condition0IsTrue_0;
gdjs.GietieCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29470180);
}
}if (gdjs.GietieCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "[YTHUB.CC] TV static noise HD 1080p-320k.mp3", true, 20, 0.1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "[YTHUB.CC] TV static noise HD 1080p-320k.mp3", true, 30, 0.1);
}}

}


{


{
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "You cant escape");
}{gdjs.evtTools.advancedWindow.setOpacity(0.9);
}{gdjs.evtTools.advancedWindow.flash(true);
}}

}


{


gdjs.GietieCode.condition0IsTrue_0.val = false;
{
{gdjs.GietieCode.conditionTrue_1 = gdjs.GietieCode.condition0IsTrue_0;
gdjs.GietieCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29473788);
}
}if (gdjs.GietieCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://cdn.discordapp.com/attachments/866108030215389184/875124604182597653/unknown.png", runtimeScene);
}}

}


};

gdjs.GietieCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GietieCode.GDNewObject182Objects1.length = 0;
gdjs.GietieCode.GDNewObject182Objects2.length = 0;
gdjs.GietieCode.GDNewObjectObjects1.length = 0;
gdjs.GietieCode.GDNewObjectObjects2.length = 0;
gdjs.GietieCode.GDNewObject2Objects1.length = 0;
gdjs.GietieCode.GDNewObject2Objects2.length = 0;

gdjs.GietieCode.eventsList0(runtimeScene);
return;

}

gdjs['GietieCode'] = gdjs.GietieCode;
