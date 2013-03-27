// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<i.feelinglucky#gmail.com>
 * @date   2013-03-27
 * @link   http://www.gracecode.com/
 */

~function(cscope) {
    var ATTR_VIDEO_ADDRESS = "data-video-url";
    var isSupportM3U8 = (document.createElement('video').canPlayType('application/x-mpegURL')) ? true : false;

    function getScript(url, success, error) {
         var script = document.createElement("script");
         script.setAttribute("src", url);
         script.addEventListener("load",  success);
         script.addEventListener("error", error);
         document.body.appendChild(script);
    };

    function log(message) {
        console.log("[HTML5 Player] " + message);
    };

    cscope.HTML5PlayerToolKit = {
        log: log,
        isSupportM3U8: isSupportM3U8,
        getScript: getScript,
        markVideoUrl: function(url) {
            log("HTML5 Video Founded, The address is " + url);
            document.body.setAttribute(ATTR_VIDEO_ADDRESS, url);
        },
        getVideoUrl: function() {
             var body  = document.body, value = body.getAttribute(ATTR_VIDEO_ADDRESS);
             if (!value) {
                 return false;
             }
             return value;
        }
    }
}(window);
