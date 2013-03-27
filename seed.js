// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<i.feelinglucky#gmail.com>
 * @date   2013-03-27
 * @link   http://www.gracecode.com/
 */

~function() {
    // http://developer.chrome.com/extensions/content_scripts.html
    var flags = ['videoId', 'iid', 'vid', 'info', 'COVER_INFO', 'XL_CLOUD_FX_INSTANCE', '_page_', 'aid', 'system'];

    for(var i = 0; i < flags.length; i++) {
        var flag = flags[i], value = window[flag];
        if (flag == 'info' && window[flag]) {
            flag  = 'videoId';
            value = window[flag]['videoId'];
        }
        document.body.setAttribute("data-" + flag, value || "");
    }
}();


// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<i.feelinglucky#gmail.com>
 * @date   2013-03-27
 * @link   http://www.gracecode.com/
 */

~function(cscope) {
    var ATTR_VIDEO_ADDRESS = "data-video-url";
    var isSupportM3U8 = (document.createElement('video').canPlayType('application/x-mpegURL')) ? true : false;
    var PLAYER_SCRIPT_URL = "http://vjs.zencdn.net/c/video.js", PLAYER_CSS_URL = "http://vjs.zencdn.net/c/video-js.css";
    var replacedElement, orgialHTML;

    var flagElement = document.createElement("z");
        flagElement.setAttribute("id", "html5-player");
        flagElement.setAttribute("title", "Click to resume original player.");
        flagElement.innerHTML = "Embedded HTML5 Player";

    flagElement.addEventListener("click", function(e) {
        if (replacedElement) {
            replacedElement.innerHTML = orgialHTML;
        }

        flagElement.parentNode.removeChild(flagElement);
    });

    function getScript(url, success, error) {
         var script = document.createElement("script");
         script.setAttribute("src", url);
         script.addEventListener("load",  success);
         script.addEventListener("error", error);
         document.body.appendChild(script);
    };

    function loadCSS(url) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = url;
            link.media = 'all';
        head.appendChild(link);
    };

    function log(message) {
        console.log("[HTML5 Player] " + message);
    };

    function markVideoUrl(url) {
        log("HTML5 Video Founded, The address is " + url);
        //<z id="html5-player">正在使用 HTML5 播放器</z>

        flagElement.setAttribute(ATTR_VIDEO_ADDRESS, url);
        document.body.appendChild(flagElement);
        document.body.setAttribute(ATTR_VIDEO_ADDRESS, url);
    };

    function launchPlayer(element, url, success) {
        var width = element.clientWidth, height = element.clientHeight;
        var html  = 
        '<video id="my_video_1" class="video-js vjs-default-skin" controls="controls" '+ 
            ' preload="auto" width="'+ width +'" height="'+ height +'">' +
            '<source src="'+ url +'" type="video/mp4" />' +
        '</video>';

        if (!element || !url.length) {return;}

        replacedElement = element;
        orgialHTML = element.innerHTML;

        element.innerHTML = html;
        markVideoUrl(url);

        loadCSS(PLAYER_CSS_URL);
        getScript(PLAYER_SCRIPT_URL, success);
    };

    if (cscope.HTML5PlayerToolKit) { return; }
    cscope.HTML5PlayerToolKit = {
        getScript: getScript,
        isSupportM3U8: isSupportM3U8,
        launchPlayer: launchPlayer,
        log: log,
        markVideoUrl: markVideoUrl,
        getVideoUrl: function() {
             var body  = document.body, value = body.getAttribute(ATTR_VIDEO_ADDRESS);
             if (!value) {
                 return false;
             }
             return value;
        }
    }
}(window);

