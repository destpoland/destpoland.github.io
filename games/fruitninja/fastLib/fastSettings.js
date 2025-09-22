export default new Promise(async $export => {
var settings = `
//============================================
//DO NOT EDIT/MODIFY ABOVE THIS LINE
//============================================


DEBUG,0
DEBUG_WHERE,console
DEBUG_UAGENT,0
DEBUG_IFRAME,0
DEBUG_LOCALE,0
DEBUG_FSCREEN,0
DEBUG_ID_LOG,
//============================================
STORAGE_EMULATION,
STORAGE_POSTMESSAGE,0
STORAGE_POSTWAITING,1000
//============================================
FSCREEN_SIZE,screen
FSCREEN_ACTION,click
FSCREEN_COLOR,#000000
FSCREEN_OPACITY,70
FSCREEN_ICON,#ffffff
//============================================
PACKAGE_NAME,html5.fruitninja
CHANNEL_ID,Mondia
STORE_ID,vf-es-games
USE_REMOTE,0
NUM_HOPS,-3
//============================================
VIEWPORT,
VIEWPORT_TARGET,
SPINNER_COLOR,
//============================================
ORIENTATION_FORCED,gamelandscape
ORIENTATION_STYLE,
ORIENTATION_LOCK,all
ORIENTATION_FIX,
//============================================
LANG_LIST,en
LANG_DEFAULT,en
LANG_FORCED,
//============================================
TUNEIN_SKIP,1
TUNEIN_PATH,tunein.png
TUNEIN_FLOOR,#000000
TUNEIN_TIMEOUT,3000
//============================================
DELAY_WEBVIEW,1000
DELAY_GAME,0
//============================================
MORE_GAMES,0
MORE_GAMES_FOLDED,0
MORE_GAMES_WV_BLOCK,0
MORE_GAMES_GET_PARAMS,
SLIDE_REMOTE,8
SLIDE_ANALYTICS,1
SLIDE_ELEMENT,panel
SLIDE_POSITION,top
SLIDE_DIRECTION,up_to_down
SLIDE_FORCED_ORIENTATION,landscape
SLIDE_WIDTH,60
SLIDE_HEIGHT,60
SLIDE_BORDER,5,5,5,5
SLIDE_BORDER_COLOR,#ffffff
SLIDE_CONTENT_BGCOLOR,#ffffff
SLIDE_CONTENT_MARGIN,6
SLIDE_CONTENT_ICONS,
SLIDE_CONTENT_URLS,
SLIDE_CONTENT_NAMES,
SLIDE_HANDLER_POSITION,bottomcustom
SLIDE_HANDLER_POSITION_CUSTOM,26
SLIDE_HANDLER_ROTATION,0
SLIDE_HANDLER_WIDTH,64
SLIDE_HANDLER_HEIGHT,32
SLIDE_HANDLER_AUTOCLOSE,5000
SLIDE_HANDLER_CONTENT,
//============================================
GAMETITLE,Fruit Ninja
GAMETITLE_EN,Fruit Ninja
//============================================
GA_INIT,ga4
GA_PROFILE,G-EJHPE02RXR
GA_PROFILE_GMG,G-EJHPE02RXR
GA_PROFILE_EXT,
GA_SECRET,
GA_SECRET_GMG,
GA_SECRET_EXT,
GA_COOKIE_FLAGS,secure;samesite=none;partitioned


//============================================
//DO NOT EDIT/MODIFY BELOW THIS LINE
//============================================
`;
$export({rules:settings, local:'1.5', path:'./', remote:0, verbose:0});
});