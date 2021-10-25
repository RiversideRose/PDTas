gdjs.StaticCode = {};
gdjs.StaticCode.GDNewObjectObjects1= [];
gdjs.StaticCode.GDNewObjectObjects2= [];
gdjs.StaticCode.GDNewObject2Objects1= [];
gdjs.StaticCode.GDNewObject2Objects2= [];

gdjs.StaticCode.conditionTrue_0 = {val:false};
gdjs.StaticCode.condition0IsTrue_0 = {val:false};
gdjs.StaticCode.condition1IsTrue_0 = {val:false};
gdjs.StaticCode.conditionTrue_1 = {val:false};
gdjs.StaticCode.condition0IsTrue_1 = {val:false};
gdjs.StaticCode.condition1IsTrue_1 = {val:false};


gdjs.StaticCode.eventsList0 = function(runtimeScene) {

{


gdjs.StaticCode.condition0IsTrue_0.val = false;
{
{gdjs.StaticCode.conditionTrue_1 = gdjs.StaticCode.condition0IsTrue_0;
gdjs.StaticCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29455828);
}
}if (gdjs.StaticCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.StaticCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.StaticCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.StaticCode.GDNewObjectObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.StaticCode.GDNewObject2Objects1);

gdjs.StaticCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StaticCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.StaticCode.GDNewObject2Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.StaticCode.condition0IsTrue_0.val = true;
        gdjs.StaticCode.GDNewObject2Objects1[k] = gdjs.StaticCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.StaticCode.GDNewObject2Objects1.length = k;}if (gdjs.StaticCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 32", false);
}}

}


{


{
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Haha......");
}}

}


};

gdjs.StaticCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StaticCode.GDNewObjectObjects1.length = 0;
gdjs.StaticCode.GDNewObjectObjects2.length = 0;
gdjs.StaticCode.GDNewObject2Objects1.length = 0;
gdjs.StaticCode.GDNewObject2Objects2.length = 0;

gdjs.StaticCode.eventsList0(runtimeScene);
return;

}

gdjs['StaticCode'] = gdjs.StaticCode;
