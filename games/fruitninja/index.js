System.register(["./application.js"], function (_export, _context) {
  "use strict";

  var createApplication;

  function loadJsListFile(url) {
    return new Promise(function (resolve, reject) {
      var err;

      function windowErrorListener(evt) {
        if (evt.filename === url) {
          err = evt.error;
        }
      }

      window.addEventListener('error', windowErrorListener);
      var script = document.createElement('script');
      script.charset = 'utf-8';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.addEventListener('error', function () {
        window.removeEventListener('error', windowErrorListener);
        reject(Error('Error loading ' + url));
      });
      script.addEventListener('load', function () {
        window.removeEventListener('error', windowErrorListener);
        document.head.removeChild(script); // Note that if an error occurs that isn't caught by this if statement,
        // that getRegister will return null and a "did not instantiate" error will be thrown.

        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
      script.src = url;
      document.head.appendChild(script);
    });
  }

  function fetchWasm(url) {
    return url;
  }

  function findCanvas() {
    var frame = document.querySelector('#GameDiv');
    var container = document.querySelector('#Cocos3dGameContainer');
    var canvas = document.querySelector('#GameCanvas');
    canvas.setAttribute('tabindex', '99');
    return {
      frame: frame,
      container: container,
      canvas: canvas
    };
  }

  function addClass(element, name) {
    var hasClass = (' ' + element.className + ' ').indexOf(' ' + name + ' ') > -1;

    if (!hasClass) {
      if (element.className) {
        element.className += ' ';
      }

      element.className += name;
    }
  }

  return {
    setters: [function (_applicationJs) {
      createApplication = _applicationJs.createApplication;
    }],
    execute: function () {
      createApplication({
        loadJsListFile: loadJsListFile,
        fetchWasm: fetchWasm
      }).then(function (application) {
        return application.start({
          findCanvas: findCanvas
        });
      })["catch"](function (err) {
        console.error(err);
      });
    }
  };
});

//fast
window.arrBGM = [];
window.arrCLIP = [];
window.wasIosDown = false;
window.gameisPaused = false;
window.isHomeScreen = false;
window.CCCanvas = document.getElementById('GameCanvas');
window.fastGamePause = function(){};
window.enlargeDarkBgs = function(){};
window.fastGameResume = function(){};
window.isHuaweiBrowser = (window.navigator.userAgent.indexOf("HuaweiBrowser")!==-1);
//WITHIN DOCVISIBLE IS ONLY FOR TESTING OUTSIDE THE YT ENVIRONMENTS
window.fastManageAudioContext = function()
{
	//@ts-ignore
	var ctxState = window.fastGetCtxState();
	//@ts-ignore
	if(window.fast.info.browser.name=="Safari" && (ctxState=="closed" || ctxState=="interrupted"))
	{
		window.wasIosDown = true;
		window.stopGameBGM('');
		setTimeout(function()
		{
			//@ts-ignore
			window.fastRenewCtx();
			//loop for each music and change each node
			for(var i=0; i<window.arrBGM.length; i++)
			{
				if(window.arrBGM[i]._loop)
				{
					//console.log('create new node '+i);
					//console.log(window.arrBGM[i]._src);
					//console.log('is the fast one? '+window.fastGetCtx()._fast);
					//console.log(window.arrBGM[i]);
					//window.arrBGM[i]._audioTimer = new window.fastGetAudioTimer(window.arrBGM[i]._audioBuffer);
					
					window.arrBGM[i]._gainNode.disconnect();
					window.arrBGM[i]._gainNode = void 0;
					window.arrBGM[i]._gainNode = window.fastGetCtxAgent().createGain();
					//window.fastGetCtxAgent().connectContext(window.arrBGM[i]._gainNode);
					
					//resets its audiotimer buffer and starts it again
					window.arrBGM[i]._sourceNode.buffer = null;
					window.arrBGM[i]._sourceNode.disconnect();
					window.arrBGM[i]._sourceNode = window.fastGetCtxAgent().createBufferSource(window.arrBGM[i]._audioBuffer, window.arrBGM[i].loop);
					window.arrBGM[i]._sourceNode.connect(window.arrBGM[i]._gainNode);
					
					//as last thing connect the node to the context (if it's done before the sourceNode it leads to double soundtrack instances)
					window.fastGetCtxAgent().connectContext(window.arrBGM[i]._gainNode);
					//window.arrBGM[i]._gainNode.connect(window.fastGetCtx().destination);
				}
			}
			//loop for each music and change each node
			for(var i=0; i<window.arrCLIP.length; i++)
			{
				if(window.arrCLIP[i]._loop)
				{
					var clip = window.arrCLIP[i]._clip;
					clip._player._player._gainNode.disconnect();
					clip._player._player._gainNode = void 0;
					clip._player._player._gainNode = window.fastGetCtxAgent().createGain();
					window.fastGetCtxAgent().connectContext(clip._player._player._gainNode);
					window.arrCLIP[i]._syncPlayer();
				}
			}
			//loop for each music and change each node
			var aMan = window.getAudioManager;
			for(var i=0; i<aMan._oneShotAudioInfoList.length; i++)
			{
				aMan._oneShotAudioInfoList[i].audio._audio._bufferSourceNode = window.fastGetCtxAgent().createBufferSource();
				window.fastGetCtxAgent().connectContext(aMan._oneShotAudioInfoList[i].audio._audio._bufferSourceNode);
			}
			
			window.wasIosDown = false;
			console.log('===== AUDIONODES REBUILDED =====');
		}, 700);
	}
	else
	{
		console.log('AUDIOCTX RESUMED BY BROWSER');
		//window.fastGetCtx().resume();
	}
}

window.playMusicGame = function()
{
	//return;
	setTimeout(function(){
		//var ctx = window.fastGetCtx();
		//console.log('pre resume ctxState: '+ctx.state+' with fast: '+ctx._fast);
		window.stopGameBGM('');
		if(!window.isHomeScreen)
		{
			//console.log('ctxState: '+ctx.state);
			//console.log('PRE PLAY GAMEPLAY MUSIC');
			window.playGameBGM('gameplay');
		}
		else
		{
			//console.log('ctxState: '+ctx.state);
			//console.log('TEST PLAY HOMESCREEN MUSIC');
			window.playGameBGM('homescreen');
		}
		//pause the music if the game is
		if(window.gameisPaused)
		{
			console.log('pausing music...');
			window.pauseGameBGM();
		}
		
		for(var i=0; i<window.arrBGM.length; i++)
		{
			if(window.arrBGM[i]._loop)
			//if(window.arrBGM[i]._loop && window.arrBGM[i]._src.indexOf('assets/main/')>-1)
			{
				//console.log('CTX ['+window.arrBGM[i]._gainNode.context.state+'] FAST ['+window.arrBGM[i]._gainNode.context._fast+'] timer ['+window.arrBGM[i]._currentTimer+']');
				//console.log('SRC ['+window.arrBGM[i]._sourceNode.context.state+'] FAST ['+window.arrBGM[i]._sourceNode.context._fast+'] timer ['+window.arrBGM[i]._currentTimer+']');
			}
		}
		for(var i=0; i<window.arrCLIP.length; i++)
		{
			if(window.arrCLIP[i]._loop)
			//if(window.arrBGM[i]._loop && window.arrBGM[i]._src.indexOf('assets/main/')>-1)
			{
				var clip = window.arrCLIP[i];
				//clip._player._player._gainNode.context.state;
				//console.log('CLP ['+clip._clip._player._player._gainNode.context.state+'] FAST ['+clip._player._player._gainNode.context._fast+']');
				//console.log('SRC ['+clip._player._player._sourceNode.context.state+'] FAST ['+clip._player._player._sourceNode.context._fast+']');
			}
		}
		var aMan = window.getAudioManager;
		for(var i=0; i<aMan._audioPlayerInfoList.length; i++)
		{
			//console.log('PLIS ['+aMan._audioPlayerInfoList[i].audio._audio._bufferSourceNode.context.state+'] FAST ['+aMan._audioPlayerInfoList[i].audio._audio._bufferSourceNode.context._fast+']');
		}
		for(var i=0; i<aMan._oneShotAudioInfoList.length; i++)
		{
			//console.log('ONES ['+aMan._oneShotAudioInfoList[i].audio._audio._bufferSourceNode.context.state+'] FAST ['+aMan._oneShotAudioInfoList[i].audio._audio._bufferSourceNode.context._fast+']');
		}
		
	}, 700);
}
//stuff for resizing window on desktop and retains a/r
var target_w = 1280;
var target_h = 768;
var maxRatio = 2.35;
var minRatio = 0.2;
var landscape = 90;
var portrait = 0;
var target_orientation = (target_w > target_h) ? landscape : portrait;
window.fastResizeCanvas = function()
{
	//if(window.fast.info.mobile) return;
	
	var ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
	var w = ww;
	var h = wh;
	var d = document.getElementById('GameDiv');
	var canvas = document.querySelector("canvas");
	var screen_orientation = ( window.fast.getRatio('inner')<=1.57 ) ? portrait : landscape;
	//var screen_orientation = ( ww > wh ) ? landscape : portrait;
	
	var w_ar = ww / wh;
	if ( w_ar > maxRatio )
	{
		h = wh;
		w = h * maxRatio;
	} 
	else if ( w_ar < minRatio )
	{
		h = wh;
		w = h * minRatio;
	} 
	else
	{
		w = ww;
		h = w / (ww/wh);
	}
	
	if(screen_orientation==target_orientation)
	{
		d.style.width = ""+w+"px";
		d.style.height = ""+h+"px";
		d.style.marginTop = 0;
	}
	else
	{
		/*
		console.log('gamediv '+w+', '+h);
		console.log('window '+ww+', '+wh);
		console.log('canvas '+canvas.width+', '+canvas.height);
		*/
		d.style.width = ""+w+"px";
		d.style.height = ""+Math.round(ww*(target_h/target_w))+"px";
		d.style.marginTop = (wh-parseInt(d.style.height))/2+"px";
	}
}

/*
window.fastManageAudioContext = function () {
  this._context.close();

  this._context = void 0;
  this._context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
  this._context._fast = 'fast_'+Date.now();
  //window.fastReloadAudioContext();
  
  this.runContext().then(function () {
	console.log('new context is go');
	window.fastReloadAudioContext();
	//window.playMusicGame();
	console.log('after context is go');
  }.bind(this));
  
}.bind(this);
*/
