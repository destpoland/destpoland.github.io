gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDtittuloObjects1= [];
gdjs.MenuCode.GDtittuloObjects2= [];
gdjs.MenuCode.GDtittuloObjects3= [];
gdjs.MenuCode.GDtittuloObjects4= [];
gdjs.MenuCode.GDtittuloObjects5= [];
gdjs.MenuCode.GDgradienteObjects1= [];
gdjs.MenuCode.GDgradienteObjects2= [];
gdjs.MenuCode.GDgradienteObjects3= [];
gdjs.MenuCode.GDgradienteObjects4= [];
gdjs.MenuCode.GDgradienteObjects5= [];
gdjs.MenuCode.GDfundoObjects1= [];
gdjs.MenuCode.GDfundoObjects2= [];
gdjs.MenuCode.GDfundoObjects3= [];
gdjs.MenuCode.GDfundoObjects4= [];
gdjs.MenuCode.GDfundoObjects5= [];
gdjs.MenuCode.GDplayObjects1= [];
gdjs.MenuCode.GDplayObjects2= [];
gdjs.MenuCode.GDplayObjects3= [];
gdjs.MenuCode.GDplayObjects4= [];
gdjs.MenuCode.GDplayObjects5= [];
gdjs.MenuCode.GDsettingsObjects1= [];
gdjs.MenuCode.GDsettingsObjects2= [];
gdjs.MenuCode.GDsettingsObjects3= [];
gdjs.MenuCode.GDsettingsObjects4= [];
gdjs.MenuCode.GDsettingsObjects5= [];
gdjs.MenuCode.GDplay_9595textoObjects1= [];
gdjs.MenuCode.GDplay_9595textoObjects2= [];
gdjs.MenuCode.GDplay_9595textoObjects3= [];
gdjs.MenuCode.GDplay_9595textoObjects4= [];
gdjs.MenuCode.GDplay_9595textoObjects5= [];
gdjs.MenuCode.GDsettings_9595textoObjects1= [];
gdjs.MenuCode.GDsettings_9595textoObjects2= [];
gdjs.MenuCode.GDsettings_9595textoObjects3= [];
gdjs.MenuCode.GDsettings_9595textoObjects4= [];
gdjs.MenuCode.GDsettings_9595textoObjects5= [];
gdjs.MenuCode.GDloadingObjects1= [];
gdjs.MenuCode.GDloadingObjects2= [];
gdjs.MenuCode.GDloadingObjects3= [];
gdjs.MenuCode.GDloadingObjects4= [];
gdjs.MenuCode.GDloadingObjects5= [];
gdjs.MenuCode.GDtittulo_9595loadingObjects1= [];
gdjs.MenuCode.GDtittulo_9595loadingObjects2= [];
gdjs.MenuCode.GDtittulo_9595loadingObjects3= [];
gdjs.MenuCode.GDtittulo_9595loadingObjects4= [];
gdjs.MenuCode.GDtittulo_9595loadingObjects5= [];
gdjs.MenuCode.GDsettings_9595fundoObjects1= [];
gdjs.MenuCode.GDsettings_9595fundoObjects2= [];
gdjs.MenuCode.GDsettings_9595fundoObjects3= [];
gdjs.MenuCode.GDsettings_9595fundoObjects4= [];
gdjs.MenuCode.GDsettings_9595fundoObjects5= [];
gdjs.MenuCode.GDefeitos_9595sonorosObjects1= [];
gdjs.MenuCode.GDefeitos_9595sonorosObjects2= [];
gdjs.MenuCode.GDefeitos_9595sonorosObjects3= [];
gdjs.MenuCode.GDefeitos_9595sonorosObjects4= [];
gdjs.MenuCode.GDefeitos_9595sonorosObjects5= [];
gdjs.MenuCode.GDsettings_9595textosvolumesObjects1= [];
gdjs.MenuCode.GDsettings_9595textosvolumesObjects2= [];
gdjs.MenuCode.GDsettings_9595textosvolumesObjects3= [];
gdjs.MenuCode.GDsettings_9595textosvolumesObjects4= [];
gdjs.MenuCode.GDsettings_9595textosvolumesObjects5= [];
gdjs.MenuCode.GDmusicaObjects1= [];
gdjs.MenuCode.GDmusicaObjects2= [];
gdjs.MenuCode.GDmusicaObjects3= [];
gdjs.MenuCode.GDmusicaObjects4= [];
gdjs.MenuCode.GDmusicaObjects5= [];
gdjs.MenuCode.GDXObjects1= [];
gdjs.MenuCode.GDXObjects2= [];
gdjs.MenuCode.GDXObjects3= [];
gdjs.MenuCode.GDXObjects4= [];
gdjs.MenuCode.GDXObjects5= [];
gdjs.MenuCode.GDfpsObjects1= [];
gdjs.MenuCode.GDfpsObjects2= [];
gdjs.MenuCode.GDfpsObjects3= [];
gdjs.MenuCode.GDfpsObjects4= [];
gdjs.MenuCode.GDfpsObjects5= [];
gdjs.MenuCode.GDtela_9595pretaObjects1= [];
gdjs.MenuCode.GDtela_9595pretaObjects2= [];
gdjs.MenuCode.GDtela_9595pretaObjects3= [];
gdjs.MenuCode.GDtela_9595pretaObjects4= [];
gdjs.MenuCode.GDtela_9595pretaObjects5= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("preferencias", "musica");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("preferencias", "efeitos");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("preferencias", "fps");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("efeitos_sonoros"), gdjs.MenuCode.GDefeitos_9595sonorosObjects2);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MenuCode.GDfpsObjects2);
gdjs.copyArray(runtimeScene.getObjects("musica"), gdjs.MenuCode.GDmusicaObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("preferencias", "musica", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("preferencias", "efeitos", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("preferencias", "fps", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs.MenuCode.GDmusicaObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDmusicaObjects2[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDefeitos_9595sonorosObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDefeitos_9595sonorosObjects2[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDfpsObjects2[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDXObjects1Objects = Hashtable.newFrom({"X": gdjs.MenuCode.GDXObjects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.MenuCode.GDXObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDXObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13206124);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("efeitos_sonoros"), gdjs.MenuCode.GDefeitos_9595sonorosObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MenuCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("musica"), gdjs.MenuCode.GDmusicaObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("preferencias", "musica", (( gdjs.MenuCode.GDmusicaObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDmusicaObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.storage.writeNumberInJSONFile("preferencias", "efeitos", (( gdjs.MenuCode.GDefeitos_9595sonorosObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDefeitos_9595sonorosObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.storage.writeNumberInJSONFile("preferencias", "fps", (( gdjs.MenuCode.GDfpsObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDfpsObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.storage.unloadJSONFile("preferencias");
}}

}


};gdjs.MenuCode.asyncCallback13213804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("musica"), gdjs.MenuCode.GDmusicaObjects5);

{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "33.wav", 0, true, (( gdjs.MenuCode.GDmusicaObjects5.length === 0 ) ? 0 :gdjs.MenuCode.GDmusicaObjects5[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 0.75, 1);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
/* Don't save musica as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback13213804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback13212964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.MenuCode.GDsettingsObjects4);
gdjs.copyArray(asyncObjectsList.getObjects("settings_texto"), gdjs.MenuCode.GDsettings_9595textoObjects4);

{for(var i = 0, len = gdjs.MenuCode.GDsettingsObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDsettingsObjects4[i].getBehavior("Tween").addObjectPositionXTween2("direita", 210, "easeOutCubic", 2, false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDsettings_9595textoObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595textoObjects4[i].getBehavior("Tween").addObjectPositionXTween2("direita", 270, "easeOutCubic", 2, false);
}
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
/* Don't save musica as it will be provided by the parent asyncObjectsList. */
/* Don't save settings_texto as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback13212964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("fundo"), gdjs.MenuCode.GDfundoObjects4);

{for(var i = 0, len = gdjs.MenuCode.GDfundoObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDfundoObjects4[i].getBehavior("Tween").addObjectPositionXTween2("direita", -(150), "easeOutCubic", 2, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.MenuCode.GDplayObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("play_texto"), gdjs.MenuCode.GDplay_9595textoObjects3);

{for(var i = 0, len = gdjs.MenuCode.GDplayObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDplayObjects3[i].getBehavior("Tween").addObjectPositionXTween2("direita", 200, "easeOutCubic", 2, false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDplay_9595textoObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDplay_9595textoObjects3[i].getBehavior("Tween").addObjectPositionXTween2("direita", 320, "easeOutCubic", 2, false);
}
}
{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.MenuCode.asyncCallback13211444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);

{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDfundoObjects2) asyncObjectsList.addObject("fundo", obj);
for (const obj of gdjs.MenuCode.GDmusicaObjects2) asyncObjectsList.addObject("musica", obj);
for (const obj of gdjs.MenuCode.GDplay_9595textoObjects2) asyncObjectsList.addObject("play_texto", obj);
for (const obj of gdjs.MenuCode.GDsettings_9595textoObjects2) asyncObjectsList.addObject("settings_texto", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback13211444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.MenuCode.GDXObjects2);
gdjs.copyArray(runtimeScene.getObjects("efeitos_sonoros"), gdjs.MenuCode.GDefeitos_9595sonorosObjects2);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MenuCode.GDfpsObjects2);
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.MenuCode.GDfundoObjects2);
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.MenuCode.GDloadingObjects2);
gdjs.copyArray(runtimeScene.getObjects("musica"), gdjs.MenuCode.GDmusicaObjects2);
gdjs.copyArray(runtimeScene.getObjects("play_texto"), gdjs.MenuCode.GDplay_9595textoObjects2);
gdjs.copyArray(runtimeScene.getObjects("settings_fundo"), gdjs.MenuCode.GDsettings_9595fundoObjects2);
gdjs.copyArray(runtimeScene.getObjects("settings_texto"), gdjs.MenuCode.GDsettings_9595textoObjects2);
gdjs.copyArray(runtimeScene.getObjects("settings_textosvolumes"), gdjs.MenuCode.GDsettings_9595textosvolumesObjects2);
gdjs.copyArray(runtimeScene.getObjects("tela_preta"), gdjs.MenuCode.GDtela_9595pretaObjects2);
gdjs.copyArray(runtimeScene.getObjects("tittulo"), gdjs.MenuCode.GDtittuloObjects2);
gdjs.copyArray(runtimeScene.getObjects("tittulo_loading"), gdjs.MenuCode.GDtittulo_9595loadingObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "33.wav", 0, true, 50 / 100 * (( gdjs.MenuCode.GDmusicaObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDmusicaObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.MenuCode.GDloadingObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDloadingObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtittulo_9595loadingObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDtittulo_9595loadingObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDplay_9595textoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDplay_9595textoObjects2[i].setOutlineColor("0;0;0");
}
for(var i = 0, len = gdjs.MenuCode.GDsettings_9595textoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595textoObjects2[i].setOutlineColor("0;0;0");
}
for(var i = 0, len = gdjs.MenuCode.GDloadingObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDloadingObjects2[i].setOutlineColor("0;0;0");
}
for(var i = 0, len = gdjs.MenuCode.GDsettings_9595textosvolumesObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595textosvolumesObjects2[i].setOutlineColor("0;0;0");
}
for(var i = 0, len = gdjs.MenuCode.GDXObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDXObjects2[i].setOutlineColor("0;0;0");
}
}{for(var i = 0, len = gdjs.MenuCode.GDplay_9595textoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDplay_9595textoObjects2[i].setOutlineEnabled(true);
}
for(var i = 0, len = gdjs.MenuCode.GDsettings_9595textoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595textoObjects2[i].setOutlineEnabled(true);
}
for(var i = 0, len = gdjs.MenuCode.GDloadingObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDloadingObjects2[i].setOutlineEnabled(true);
}
for(var i = 0, len = gdjs.MenuCode.GDsettings_9595textosvolumesObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595textosvolumesObjects2[i].setOutlineEnabled(true);
}
for(var i = 0, len = gdjs.MenuCode.GDXObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDXObjects2[i].setOutlineEnabled(true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDplay_9595textoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDplay_9595textoObjects2[i].setOutlineThickness(6);
}
for(var i = 0, len = gdjs.MenuCode.GDsettings_9595textoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595textoObjects2[i].setOutlineThickness(6);
}
for(var i = 0, len = gdjs.MenuCode.GDloadingObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDloadingObjects2[i].setOutlineThickness(6);
}
for(var i = 0, len = gdjs.MenuCode.GDsettings_9595textosvolumesObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595textosvolumesObjects2[i].setOutlineThickness(6);
}
for(var i = 0, len = gdjs.MenuCode.GDXObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDXObjects2[i].setOutlineThickness(6);
}
}{for(var i = 0, len = gdjs.MenuCode.GDefeitos_9595sonorosObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDefeitos_9595sonorosObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDmusicaObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDmusicaObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDfpsObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDefeitos_9595sonorosObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDefeitos_9595sonorosObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDmusicaObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDmusicaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDfpsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDsettings_9595fundoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595fundoObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDsettings_9595textosvolumesObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595textosvolumesObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDXObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDXObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDfundoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDfundoObjects2[i].setCenterPositionInScene(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) / 20 + 850,gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) / 20 + 180);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtela_9595pretaObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDtela_9595pretaObjects2[i].setCenterPositionInScene(640,370);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtela_9595pretaObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDtela_9595pretaObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeOut", 0, "linear", 2, false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtittuloObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDtittuloObjects2[i].getBehavior("Tween").addObjectPositionXTween2("direita", -(20), "easeOutCubic", 2, false);
}
}
{ //Subevents
gdjs.MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.MenuCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDfundoObjects1[i].setCenterPositionInScene(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) / 20 + 850,gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) / 20 + 180);
}
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDplayObjects2Objects = Hashtable.newFrom({"play": gdjs.MenuCode.GDplayObjects2});
gdjs.MenuCode.asyncCallback13221076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(2, 4)), (runtimeScene) => (gdjs.MenuCode.asyncCallback13221076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback13217724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("efeitos_sonoros"), gdjs.MenuCode.GDefeitos_9595sonorosObjects4);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MenuCode.GDfpsObjects4);
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.MenuCode.GDloadingObjects4);
gdjs.copyArray(runtimeScene.getObjects("musica"), gdjs.MenuCode.GDmusicaObjects4);
gdjs.copyArray(asyncObjectsList.getObjects("play"), gdjs.MenuCode.GDplayObjects4);

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.MenuCode.GDsettingsObjects4);
gdjs.copyArray(runtimeScene.getObjects("tittulo_loading"), gdjs.MenuCode.GDtittulo_9595loadingObjects4);
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDplayObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDplayObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MenuCode.GDsettingsObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDsettingsObjects4[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber((( gdjs.MenuCode.GDefeitos_9595sonorosObjects4.length === 0 ) ? 0 :gdjs.MenuCode.GDefeitos_9595sonorosObjects4[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 3);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber((( gdjs.MenuCode.GDmusicaObjects4.length === 0 ) ? 0 :gdjs.MenuCode.GDmusicaObjects4[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber((( gdjs.MenuCode.GDfpsObjects4.length === 0 ) ? 0 :gdjs.MenuCode.GDfpsObjects4[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{for(var i = 0, len = gdjs.MenuCode.GDtittulo_9595loadingObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDtittulo_9595loadingObjects4[i].getBehavior("Tween").addObjectOpacityTween2("fadeOut", 255, "linear", 0.5, false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDloadingObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDloadingObjects4[i].getBehavior("Tween").addObjectOpacityTween2("fadeOut", 255, "linear", 0.5, false);
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "axe-slash-1-106748.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "41. Land Of Green and Gold (Leah's Theme).mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "cash-register-purchase-87313.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "686558__robinhood76__12236-small-reception-push-bell.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "button-124476.mp3");
}
{ //Subevents
gdjs.MenuCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDplayObjects3) asyncObjectsList.addObject("play", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.MenuCode.asyncCallback13217724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback13217084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("play"), gdjs.MenuCode.GDplayObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("tela_preta"), gdjs.MenuCode.GDtela_9595pretaObjects3);

{for(var i = 0, len = gdjs.MenuCode.GDplayObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDplayObjects3[i].getBehavior("Animation").setAnimationName("normal");
}
}{for(var i = 0, len = gdjs.MenuCode.GDtela_9595pretaObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDtela_9595pretaObjects3[i].getBehavior("Tween").addObjectOpacityTween2("fadeOut", 255, "linear", 2, false);
}
}
{ //Subevents
gdjs.MenuCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDplayObjects2) asyncObjectsList.addObject("play", obj);
for (const obj of gdjs.MenuCode.GDtela_9595pretaObjects2) asyncObjectsList.addObject("tela_preta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback13217084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.MenuCode.GDplayObjects2);
gdjs.copyArray(runtimeScene.getObjects("settings_fundo"), gdjs.MenuCode.GDsettings_9595fundoObjects2);
gdjs.copyArray(runtimeScene.getObjects("tela_preta"), gdjs.MenuCode.GDtela_9595pretaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDplayObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDsettings_9595fundoObjects2.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDsettings_9595fundoObjects2[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDsettings_9595fundoObjects2[k] = gdjs.MenuCode.GDsettings_9595fundoObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDsettings_9595fundoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDtela_9595pretaObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDtela_9595pretaObjects2[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDtela_9595pretaObjects2[k] = gdjs.MenuCode.GDtela_9595pretaObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDtela_9595pretaObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDplayObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDplayObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDplayObjects2[i].getBehavior("Animation").setAnimationName("pressionado");
}
}
{ //Subevents
gdjs.MenuCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDsettingsObjects2Objects = Hashtable.newFrom({"settings": gdjs.MenuCode.GDsettingsObjects2});
gdjs.MenuCode.asyncCallback13222972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.MenuCode.GDXObjects3);
gdjs.copyArray(runtimeScene.getObjects("efeitos_sonoros"), gdjs.MenuCode.GDefeitos_9595sonorosObjects3);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MenuCode.GDfpsObjects3);
gdjs.copyArray(runtimeScene.getObjects("musica"), gdjs.MenuCode.GDmusicaObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("settings"), gdjs.MenuCode.GDsettingsObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("settings_fundo"), gdjs.MenuCode.GDsettings_9595fundoObjects3);

gdjs.copyArray(runtimeScene.getObjects("settings_textosvolumes"), gdjs.MenuCode.GDsettings_9595textosvolumesObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("tela_preta"), gdjs.MenuCode.GDtela_9595pretaObjects3);

{for(var i = 0, len = gdjs.MenuCode.GDtela_9595pretaObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDtela_9595pretaObjects3[i].getBehavior("Tween").addObjectOpacityTween2("fadeOut", 0, "linear", 0.5, false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDsettingsObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDsettingsObjects3[i].getBehavior("Animation").setAnimationName("normal");
}
}{for(var i = 0, len = gdjs.MenuCode.GDsettings_9595fundoObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595fundoObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDefeitos_9595sonorosObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDefeitos_9595sonorosObjects3[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDefeitos_9595sonorosObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDefeitos_9595sonorosObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDmusicaObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDmusicaObjects3[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDmusicaObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDmusicaObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDfpsObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDfpsObjects3[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDfpsObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDfpsObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDsettings_9595textosvolumesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595textosvolumesObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDXObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDXObjects3[i].hide(false);
}
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDsettingsObjects2) asyncObjectsList.addObject("settings", obj);
for (const obj of gdjs.MenuCode.GDsettings_9595fundoObjects2) asyncObjectsList.addObject("settings_fundo", obj);
for (const obj of gdjs.MenuCode.GDtela_9595pretaObjects2) asyncObjectsList.addObject("tela_preta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback13222972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDXObjects1Objects = Hashtable.newFrom({"X": gdjs.MenuCode.GDXObjects1});
gdjs.MenuCode.asyncCallback13226236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("X"), gdjs.MenuCode.GDXObjects2);

gdjs.copyArray(runtimeScene.getObjects("efeitos_sonoros"), gdjs.MenuCode.GDefeitos_9595sonorosObjects2);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MenuCode.GDfpsObjects2);
gdjs.copyArray(runtimeScene.getObjects("musica"), gdjs.MenuCode.GDmusicaObjects2);
gdjs.copyArray(runtimeScene.getObjects("settings_fundo"), gdjs.MenuCode.GDsettings_9595fundoObjects2);
gdjs.copyArray(runtimeScene.getObjects("settings_textosvolumes"), gdjs.MenuCode.GDsettings_9595textosvolumesObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("tela_preta"), gdjs.MenuCode.GDtela_9595pretaObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDsettings_9595fundoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595fundoObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDefeitos_9595sonorosObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDefeitos_9595sonorosObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDefeitos_9595sonorosObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDefeitos_9595sonorosObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDmusicaObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDmusicaObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDmusicaObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDmusicaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDfpsObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDfpsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDsettings_9595textosvolumesObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsettings_9595textosvolumesObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDXObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDXObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDtela_9595pretaObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDtela_9595pretaObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeOut", 0, "linear", 0.5, false);
}
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, (( gdjs.MenuCode.GDmusicaObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDmusicaObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 0.75);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDXObjects1) asyncObjectsList.addObject("X", obj);
for (const obj of gdjs.MenuCode.GDtela_9595pretaObjects1) asyncObjectsList.addObject("tela_preta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback13226236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.MenuCode.GDsettingsObjects2);
gdjs.copyArray(runtimeScene.getObjects("settings_fundo"), gdjs.MenuCode.GDsettings_9595fundoObjects2);
gdjs.copyArray(runtimeScene.getObjects("tela_preta"), gdjs.MenuCode.GDtela_9595pretaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDsettingsObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDtela_9595pretaObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDtela_9595pretaObjects2[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDtela_9595pretaObjects2[k] = gdjs.MenuCode.GDtela_9595pretaObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDtela_9595pretaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDsettings_9595fundoObjects2.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDsettings_9595fundoObjects2[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDsettings_9595fundoObjects2[k] = gdjs.MenuCode.GDsettings_9595fundoObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDsettings_9595fundoObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDsettingsObjects2 */
/* Reuse gdjs.MenuCode.GDtela_9595pretaObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDsettingsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsettingsObjects2[i].getBehavior("Animation").setAnimationName("pressionado");
}
}{for(var i = 0, len = gdjs.MenuCode.GDtela_9595pretaObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDtela_9595pretaObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeIn", 255, "linear", 0.5, false);
}
}
{ //Subevents
gdjs.MenuCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.MenuCode.GDXObjects1);
gdjs.copyArray(runtimeScene.getObjects("tela_preta"), gdjs.MenuCode.GDtela_9595pretaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDXObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDtela_9595pretaObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDtela_9595pretaObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDtela_9595pretaObjects1[k] = gdjs.MenuCode.GDtela_9595pretaObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDtela_9595pretaObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDtela_9595pretaObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDtela_9595pretaObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtela_9595pretaObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeIn", 255, "linear", 0.5, false);
}
}
{ //Subevents
gdjs.MenuCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList14 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList10(runtimeScene);
}


{


gdjs.MenuCode.eventsList13(runtimeScene);
}


};gdjs.MenuCode.eventsList15 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList1(runtimeScene);
}


{


gdjs.MenuCode.eventsList6(runtimeScene);
}


{


gdjs.MenuCode.eventsList14(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDtittuloObjects1.length = 0;
gdjs.MenuCode.GDtittuloObjects2.length = 0;
gdjs.MenuCode.GDtittuloObjects3.length = 0;
gdjs.MenuCode.GDtittuloObjects4.length = 0;
gdjs.MenuCode.GDtittuloObjects5.length = 0;
gdjs.MenuCode.GDgradienteObjects1.length = 0;
gdjs.MenuCode.GDgradienteObjects2.length = 0;
gdjs.MenuCode.GDgradienteObjects3.length = 0;
gdjs.MenuCode.GDgradienteObjects4.length = 0;
gdjs.MenuCode.GDgradienteObjects5.length = 0;
gdjs.MenuCode.GDfundoObjects1.length = 0;
gdjs.MenuCode.GDfundoObjects2.length = 0;
gdjs.MenuCode.GDfundoObjects3.length = 0;
gdjs.MenuCode.GDfundoObjects4.length = 0;
gdjs.MenuCode.GDfundoObjects5.length = 0;
gdjs.MenuCode.GDplayObjects1.length = 0;
gdjs.MenuCode.GDplayObjects2.length = 0;
gdjs.MenuCode.GDplayObjects3.length = 0;
gdjs.MenuCode.GDplayObjects4.length = 0;
gdjs.MenuCode.GDplayObjects5.length = 0;
gdjs.MenuCode.GDsettingsObjects1.length = 0;
gdjs.MenuCode.GDsettingsObjects2.length = 0;
gdjs.MenuCode.GDsettingsObjects3.length = 0;
gdjs.MenuCode.GDsettingsObjects4.length = 0;
gdjs.MenuCode.GDsettingsObjects5.length = 0;
gdjs.MenuCode.GDplay_9595textoObjects1.length = 0;
gdjs.MenuCode.GDplay_9595textoObjects2.length = 0;
gdjs.MenuCode.GDplay_9595textoObjects3.length = 0;
gdjs.MenuCode.GDplay_9595textoObjects4.length = 0;
gdjs.MenuCode.GDplay_9595textoObjects5.length = 0;
gdjs.MenuCode.GDsettings_9595textoObjects1.length = 0;
gdjs.MenuCode.GDsettings_9595textoObjects2.length = 0;
gdjs.MenuCode.GDsettings_9595textoObjects3.length = 0;
gdjs.MenuCode.GDsettings_9595textoObjects4.length = 0;
gdjs.MenuCode.GDsettings_9595textoObjects5.length = 0;
gdjs.MenuCode.GDloadingObjects1.length = 0;
gdjs.MenuCode.GDloadingObjects2.length = 0;
gdjs.MenuCode.GDloadingObjects3.length = 0;
gdjs.MenuCode.GDloadingObjects4.length = 0;
gdjs.MenuCode.GDloadingObjects5.length = 0;
gdjs.MenuCode.GDtittulo_9595loadingObjects1.length = 0;
gdjs.MenuCode.GDtittulo_9595loadingObjects2.length = 0;
gdjs.MenuCode.GDtittulo_9595loadingObjects3.length = 0;
gdjs.MenuCode.GDtittulo_9595loadingObjects4.length = 0;
gdjs.MenuCode.GDtittulo_9595loadingObjects5.length = 0;
gdjs.MenuCode.GDsettings_9595fundoObjects1.length = 0;
gdjs.MenuCode.GDsettings_9595fundoObjects2.length = 0;
gdjs.MenuCode.GDsettings_9595fundoObjects3.length = 0;
gdjs.MenuCode.GDsettings_9595fundoObjects4.length = 0;
gdjs.MenuCode.GDsettings_9595fundoObjects5.length = 0;
gdjs.MenuCode.GDefeitos_9595sonorosObjects1.length = 0;
gdjs.MenuCode.GDefeitos_9595sonorosObjects2.length = 0;
gdjs.MenuCode.GDefeitos_9595sonorosObjects3.length = 0;
gdjs.MenuCode.GDefeitos_9595sonorosObjects4.length = 0;
gdjs.MenuCode.GDefeitos_9595sonorosObjects5.length = 0;
gdjs.MenuCode.GDsettings_9595textosvolumesObjects1.length = 0;
gdjs.MenuCode.GDsettings_9595textosvolumesObjects2.length = 0;
gdjs.MenuCode.GDsettings_9595textosvolumesObjects3.length = 0;
gdjs.MenuCode.GDsettings_9595textosvolumesObjects4.length = 0;
gdjs.MenuCode.GDsettings_9595textosvolumesObjects5.length = 0;
gdjs.MenuCode.GDmusicaObjects1.length = 0;
gdjs.MenuCode.GDmusicaObjects2.length = 0;
gdjs.MenuCode.GDmusicaObjects3.length = 0;
gdjs.MenuCode.GDmusicaObjects4.length = 0;
gdjs.MenuCode.GDmusicaObjects5.length = 0;
gdjs.MenuCode.GDXObjects1.length = 0;
gdjs.MenuCode.GDXObjects2.length = 0;
gdjs.MenuCode.GDXObjects3.length = 0;
gdjs.MenuCode.GDXObjects4.length = 0;
gdjs.MenuCode.GDXObjects5.length = 0;
gdjs.MenuCode.GDfpsObjects1.length = 0;
gdjs.MenuCode.GDfpsObjects2.length = 0;
gdjs.MenuCode.GDfpsObjects3.length = 0;
gdjs.MenuCode.GDfpsObjects4.length = 0;
gdjs.MenuCode.GDfpsObjects5.length = 0;
gdjs.MenuCode.GDtela_9595pretaObjects1.length = 0;
gdjs.MenuCode.GDtela_9595pretaObjects2.length = 0;
gdjs.MenuCode.GDtela_9595pretaObjects3.length = 0;
gdjs.MenuCode.GDtela_9595pretaObjects4.length = 0;
gdjs.MenuCode.GDtela_9595pretaObjects5.length = 0;

gdjs.MenuCode.eventsList15(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
