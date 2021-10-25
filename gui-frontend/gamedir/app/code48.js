gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDNewObjectObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNewObjectObjects1[k] = gdjs.New_32scene2Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNewObjectObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;

gdjs.New_32scene2Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
