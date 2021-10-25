gdjs.ballsCode = {};
gdjs.ballsCode.GDNewObjectObjects1= [];
gdjs.ballsCode.GDNewObjectObjects2= [];

gdjs.ballsCode.conditionTrue_0 = {val:false};
gdjs.ballsCode.condition0IsTrue_0 = {val:false};
gdjs.ballsCode.condition1IsTrue_0 = {val:false};


gdjs.ballsCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.ballsCode.GDNewObjectObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.ballsCode.GDNewObjectObjects1.length !== 0 ? gdjs.ballsCode.GDNewObjectObjects1[0] : null), true, "", 0);
}}

}


{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.2, "", 0);
}}

}


{


{
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.ballsCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.ballsCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.ballsCode.GDNewObjectObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.ballsCode.GDNewObjectObjects1);

gdjs.ballsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ballsCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.ballsCode.GDNewObjectObjects1[i].isEnded() ) {
        gdjs.ballsCode.condition0IsTrue_0.val = true;
        gdjs.ballsCode.GDNewObjectObjects1[k] = gdjs.ballsCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.ballsCode.GDNewObjectObjects1.length = k;}if (gdjs.ballsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ballsCode.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.ballsCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.ballsCode.GDNewObjectObjects1[i].setLoop(true);
}
}}

}


};

gdjs.ballsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ballsCode.GDNewObjectObjects1.length = 0;
gdjs.ballsCode.GDNewObjectObjects2.length = 0;

gdjs.ballsCode.eventsList0(runtimeScene);
return;

}

gdjs['ballsCode'] = gdjs.ballsCode;
