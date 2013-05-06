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
        playerPlaceholder = document.getElementById("sohuplayer");

   var appkey = 'f351515304020cad28c92f70f002261c', 
        callback = ToolKit.getUniqString();

    var requestUrl = 'http://api.tv.sohu.com/video/playinfo/'+ vid 
        + '.json?callback='+ callback +'&encoding=gbk&api_key='+ appkey +'&from=mweb&_='+ (new Date()).getTime();

    alert(requestUrl);

    window[callback] = function(spec) {
        if (spec.data.downloadurl) {
            ToolKit.launchPlayer(playerPlaceholder, spec.data.downloadurl);
        } else {
            log("Sorry, not found any html5 video address.");
        }
    };



    getScript(requestUrl, function() {
        delete window[callback];
    });
}();
