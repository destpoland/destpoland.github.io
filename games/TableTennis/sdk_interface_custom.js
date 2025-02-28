// GAME-SPECIFIC SETTINGS / OVERRIDES

SDK_INTERFACE_SETTINGS.isProd = true;

if(SDK_INTERFACE_SETTINGS.isProd) {
	// PRODUCTION
	SDK_INTERFACE_SETTINGS.debugLevel = 0;
	SDK_INTERFACE_SETTINGS.forceMockObject = false;
} else {
	// TESTING
	SDK_INTERFACE_SETTINGS.debugLevel = 1;
	SDK_INTERFACE_SETTINGS.forceMockObject = true;
}

// overrides
SDK_INTERFACE_OVERRIDES.famobi.showInterstitialAd = (eventId, callback) => {
	let params = {};

	if(typeof eventId === "object") {
	    params = eventId;
	} else {
	    params.callback = typeof eventId === "function" ? eventId : typeof callback === "function" ? callback : undefined;
	    params.eventId = typeof eventId === "string" ? eventId : typeof callback === "string" ? callback : undefined;
	}

	SDK_LOG(">> showInterstitialAd skipped");

	if(typeof params.callback === "function") {
	    params.callback();
	}
	return Promise.resolve();
}

SDK_INTERFACE_OVERRIDES.famobi_analytics.trackEvent = (event, params) => {
	let score = 0;

	return new Promise(function(resolve, reject) {

		SDK_INTERFACE.getDebugLevel() && console.log(event, params);

		switch(event) {
			case "EVENT_LEVELFAIL":
				break;
			case "EVENT_LEVELRESTART":
				break;
			case "EVENT_LEVELSTART":
				break;
			case "EVENT_LEVELSUCCESS":
			case "EVENT_LEVELSCORE":
				break;
			case "EVENT_LIVESCORE":
				score = params.liveScore;
				SDK_LOG(`Send current score: ${score}`);

				return window.YOUTUBE.sendScore(score).then(() => {
					SDK_LOG(`Score updated`);
					resolve();
				});
			case "EVENT_TOTALSCORE":
				score = params.totalScore;
				SDK_LOG(`Send final score: ${score}`);

				return window.YOUTUBE.sendScore(score).then(() => {
					SDK_LOG(`Score updated`);
					resolve();
				});
			case "EVENT_VOLUMECHANGE":
				break;
			case "EVENT_CUSTOM":
				break;
			case "EVENT_TUTORIALCOMPLETED":
				break;
			case "EVENT_TUTORIALSKIPPED":
				break;
			case "EVENT_PAUSE":
				break;
			case "EVENT_RESUME":
				break;
			default:
				// do nothing
		};

		return resolve(event, params);
	});
};

SDK_INTERFACE_OVERRIDES.famobi_analytics.trackScreen = (screen, pageTitle) => {

	return new Promise(function(resolve, reject) {

		SDK_INTERFACE.getDebugLevel() && console.log(screen, pageTitle);

		switch(screen) {
			case "SCREEN_HOME":
				// ...
				break;
			default:
				// ...
		}

		return resolve(screen, pageTitle);
	});
};