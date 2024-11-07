
gdjs.evtsExt__FPS__FPSDisplayer = gdjs.evtsExt__FPS__FPSDisplayer || {};

/**
 * Behavior generated from FPS Displayer
 */
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer = class FPSDisplayer extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.prefix = behaviorData.prefix !== undefined ? behaviorData.prefix : "FPS: ";
    this._behaviorData.DecimalDigits = behaviorData.DecimalDigits !== undefined ? behaviorData.DecimalDigits : Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.prefix !== newBehaviorData.prefix)
      this._behaviorData.prefix = newBehaviorData.prefix;
    if (oldBehaviorData.DecimalDigits !== newBehaviorData.DecimalDigits)
      this._behaviorData.DecimalDigits = newBehaviorData.DecimalDigits;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    prefix: this._behaviorData.prefix,
    DecimalDigits: this._behaviorData.DecimalDigits,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.prefix !== undefined)
      this._behaviorData.prefix = networkSyncData.props.prefix;
    if (networkSyncData.props.DecimalDigits !== undefined)
      this._behaviorData.DecimalDigits = networkSyncData.props.DecimalDigits;
  }

  // Properties:
  
  _getprefix() {
    return this._behaviorData.prefix !== undefined ? this._behaviorData.prefix : "FPS: ";
  }
  _setprefix(newValue) {
    this._behaviorData.prefix = newValue;
  }
  _getDecimalDigits() {
    return this._behaviorData.DecimalDigits !== undefined ? this._behaviorData.DecimalDigits : Number("0") || 0;
  }
  _setDecimalDigits(newValue) {
    this._behaviorData.DecimalDigits = newValue;
  }
}

/**
 * Shared data generated from FPS Displayer
 */
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.SharedData = class FPSDisplayerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._FPS_FPSDisplayerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._FPS_FPSDisplayerSharedData = new gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.SharedData(
      initialData
    );
  }
  return instanceContainer._FPS_FPSDisplayerSharedData;
}

// Methods:
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__FPS").getChild("UnformattedFPS").concatenateString(".");
}}

}


{

/* Reuse gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1 */

const repeatCount2 = (( gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDecimalDigits());
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getScene().getVariables().get("__FPS").getChild("UnformattedFPS").concatenateString("0");
}}
}

}


};gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1);
{runtimeScene.getScene().getVariables().get("__FPS").getChild("UnformattedFPS").setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (( gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDecimalDigits()))));
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDecimalDigits()) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strFind(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__FPS").getChild("UnformattedFPS")), ".") == -(1));
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1[i].setString((gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getprefix()) + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__FPS").getChild("UnformattedFPS")));
}
}}

}


};

gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FPS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FPS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
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
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("FPS::FPSDisplayer", gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer);
