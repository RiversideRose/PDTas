gdjs.Static2Code = {};
gdjs.Static2Code.GDNewObjectObjects1= [];
gdjs.Static2Code.GDNewObjectObjects2= [];
gdjs.Static2Code.GDNewObject2Objects1= [];
gdjs.Static2Code.GDNewObject2Objects2= [];

gdjs.Static2Code.conditionTrue_0 = {val:false};
gdjs.Static2Code.condition0IsTrue_0 = {val:false};
gdjs.Static2Code.condition1IsTrue_0 = {val:false};
gdjs.Static2Code.conditionTrue_1 = {val:false};
gdjs.Static2Code.condition0IsTrue_1 = {val:false};
gdjs.Static2Code.condition1IsTrue_1 = {val:false};


gdjs.Static2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Static2Code.condition0IsTrue_0.val = false;
{
{gdjs.Static2Code.conditionTrue_1 = gdjs.Static2Code.condition0IsTrue_0;
gdjs.Static2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(26608772);
}
}if (gdjs.Static2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Static2Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.Static2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Static2Code.GDNewObjectObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Static2Code.GDNewObject2Objects1);

gdjs.Static2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Static2Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.Static2Code.GDNewObject2Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Static2Code.condition0IsTrue_0.val = true;
        gdjs.Static2Code.GDNewObject2Objects1[k] = gdjs.Static2Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.Static2Code.GDNewObject2Objects1.length = k;}if (gdjs.Static2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


{
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "YOU CANT ESCAPE");
}}

}


{


gdjs.Static2Code.condition0IsTrue_0.val = false;
{
{gdjs.Static2Code.conditionTrue_1 = gdjs.Static2Code.condition0IsTrue_0;
gdjs.Static2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10780340);
}
}if (gdjs.Static2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://cdn.discordapp.com/attachments/866108030215389184/875124604182597653/unknown.png", runtimeScene);
}}

}


{


gdjs.Static2Code.condition0IsTrue_0.val = false;
{
{gdjs.Static2Code.conditionTrue_1 = gdjs.Static2Code.condition0IsTrue_0;
gdjs.Static2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(30012084);
}
}if (gdjs.Static2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://cdn.discordapp.com/attachments/866108030215389184/875124604182597653/unknown.png", runtimeScene);
}}

}


{


gdjs.Static2Code.condition0IsTrue_0.val = false;
{
{gdjs.Static2Code.conditionTrue_1 = gdjs.Static2Code.condition0IsTrue_0;
gdjs.Static2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(27029540);
}
}if (gdjs.Static2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://cdn.discordapp.com/attachments/866108030215389184/875124604182597653/unknown.png", runtimeScene);
}}

}


};

gdjs.Static2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Static2Code.GDNewObjectObjects1.length = 0;
gdjs.Static2Code.GDNewObjectObjects2.length = 0;
gdjs.Static2Code.GDNewObject2Objects1.length = 0;
gdjs.Static2Code.GDNewObject2Objects2.length = 0;

gdjs.Static2Code.eventsList0(runtimeScene);
return;

}

gdjs['Static2Code'] = gdjs.Static2Code;
