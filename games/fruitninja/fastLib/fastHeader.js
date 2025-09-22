////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////
window._fast = {}, window.fast = {};
var fastLoaded = new CustomEvent('fastloaded', { detail: '' });
(async () => {
	const Main = await( await import('./fastMain.js') ).default;
	window._fast.gamePrepping = function()
	{
		window.fast = Main.getFastObject();
		//check if it's all set
		console.log("inside [gamePrepping] -> "+window.fast.lang);
		//fire the loaded event
		document.dispatchEvent(fastLoaded);
	}
	Main.initLibrary(window._fast.gamePrepping);
})();
////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////