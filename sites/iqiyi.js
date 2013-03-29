// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<i.feelinglucky#gmail.com>
 * @date   2013-03-27
 * @link   http://www.gracecode.com/
 */

~function() {
     // playerPlaceholder
    var ToolKit = window.HTML5PlayerToolKit, 
        getScript = ToolKit.getScript, log = ToolKit.log, FLAG_SUCCESS = 0,
        info = window.info,
        playerPlaceholder = document.getElementById("flashbox");

    var videoId = info.videoId, 
        requestUrl = 'http://cache.video.qiyi.com/m/201971/'+ videoId +'/';

    getScript(requestUrl, function() {
        if (window.ipadUrl) {
            if (ToolKit.isSupportM3U8) {
                ToolKit.launchPlayer(playerPlaceholder, ipadUrl.data.url);
            } else {
                var mp4VideoRequest = ipadUrl.data.mp4Url;
                getScript(mp4VideoRequest, function() {
                    if (window.videoUrl) {
                        ToolKit.launchPlayer(playerPlaceholder, videoUrl.data.l);
                    } 
                });
            }
        } else {
            log("Sorry, not found any html5 video address.");
        }
    });
}();
