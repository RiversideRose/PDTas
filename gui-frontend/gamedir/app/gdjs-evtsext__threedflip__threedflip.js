
gdjs.evtsExt__ThreeDFlip__ThreeDFlip = gdjs.evtsExt__ThreeDFlip__ThreeDFlip || {};

/**
 * Behavior generated from 3D flip
 */
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip = class ThreeDFlip extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.isFlipped = false;
    this._behaviorData.isFlipping = false;
    this._behaviorData.width = Number("") || 0;
    this._behaviorData.speed = behaviorData.speed !== undefined ? behaviorData.speed : Number("100") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.isFlipped !== newBehaviorData.isFlipped)
      this._behaviorData.isFlipped = newBehaviorData.isFlipped;
    if (oldBehaviorData.isFlipping !== newBehaviorData.isFlipping)
      this._behaviorData.isFlipping = newBehaviorData.isFlipping;
    if (oldBehaviorData.width !== newBehaviorData.width)
      this._behaviorData.width = newBehaviorData.width;
    if (oldBehaviorData.speed !== newBehaviorData.speed)
      this._behaviorData.speed = newBehaviorData.speed;

    return true;
  }

  // Properties:
  
  _getisFlipped() {
    return this._behaviorData.isFlipped !== undefined ? this._behaviorData.isFlipped : false;
  }
  _setisFlipped(newValue) {
    this._behaviorData.isFlipped = newValue;
  }
  _getisFlipping() {
    return this._behaviorData.isFlipping !== undefined ? this._behaviorData.isFlipping : false;
  }
  _setisFlipping(newValue) {
    this._behaviorData.isFlipping = newValue;
  }
  _getwidth() {
    return this._behaviorData.width !== undefined ? this._behaviorData.width : Number("") || 0;
  }
  _setwidth(newValue) {
    this._behaviorData.width = newValue;
  }
  _getspeed() {
    return this._behaviorData.speed !== undefined ? this._behaviorData.speed : Number("100") || 0;
  }
  _setspeed(newValue) {
    this._behaviorData.speed = newValue;
  }
}

// Methods:
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX() ) {
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].getWidth() - (0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX()) ) {
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].getWidth() + (0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[0].getWidth()) <= 0);
}
}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[0].getWidth()) >= 0);
}
}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[i].setWidth(0);
}
}{();
}{();
}}

}


};gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX() ) {
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].getWidth() + (0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX()) ) {
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].getWidth() - (0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[0].getWidth()) <= 0);
}
}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[0].getWidth()) >= 0);
}
}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[i].setWidth(0);
}
}{();
}{();
}}

}


};gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(29529116);
}
}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
{();
}}

}


{


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = ();
}if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition1IsTrue_0.val = ();
}}
if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val = ();
}if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition1IsTrue_0.val = !(());
}}
if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2= [];

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{();
}{();
}}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.Flip = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects2= [];

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{();
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1);

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i].isFlippedX() ) {
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.condition0IsTrue_0.val) {
{();
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1);

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i].isFlippedX()) ) {
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.condition0IsTrue_0.val) {
{();
}}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlip = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects2= [];

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.condition0IsTrue_0.val = ();
}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlipping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects2= [];

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.condition0IsTrue_0.val = ();
}if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlipped = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2= [];

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.conditionTrue_1 = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition0IsTrue_0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("direction") : "") == "Left");
}
}if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition1IsTrue_0.val = !(());
}if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.conditionTrue_1 = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition2IsTrue_0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(29544492);
}
}}
}
if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition2IsTrue_0.val) {
{();
}}

}


{


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.conditionTrue_1 = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition0IsTrue_0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("direction") : "") == "Right");
}
}if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition1IsTrue_0.val = ();
}if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.conditionTrue_1 = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition2IsTrue_0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(29545612);
}
}}
}
if (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.condition2IsTrue_0.val) {
{();
}}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipTo = function(direction, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "direction") return direction;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerBehavior("ThreeDFlip::ThreeDFlip", gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip);
