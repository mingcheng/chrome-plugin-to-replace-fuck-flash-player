// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<i.feelinglucky#gmail.com>
 * @date   2013-03-27
 * @link   http://www.gracecode.com/
 */

 ~function() {
     // playerPlaceholder
    var idd = window.idd, ToolKit = window.HTML5PlayerToolKit, 
        getScript = ToolKit.getScript, log = ToolKit.log, FLAG_SUCCESS = 0,
        playerPlaceholder = document.getElementById("playerPlaceholder");

    var pad = function(num, n) {
        return (new Array(n >(''+num).length ? (n - (''+num).length+1) : 0).join('0') + num);
    };

    var iidStr = pad(iid,9).match(/(\d{3})(\d{3})(\d{3})/),	
        idEncodeed = iidStr[1] + '/' + iidStr[2] + '/' + iidStr[3];

    if (ToolKit.isSupportM3U8) {
        var url = 'http://m3u8.tdimg.com/'+idEncodeed+'/'+'99.m3u8';
        ToolKit.launchPlayer(playerPlaceholder, url);
    } else {
        var callback = ToolKit.getUniqString();
		var requestUrl = 'http://vr.tudou.com/v2proxy/v2.js?it='+ iid +'&st=52%2C53%2C54&pw=&jsonp=' + callback;

        // ...
        window[callback] = function(spec) {
            var url = false;

            if (spec.code != FLAG_SUCCESS) {
                log("Sorry, could not find any mp4 video.");
                return;
            }

            for(var i = 0; i < spec.urls.length; i++){
                var tmp = spec.urls[i];
                    tmp = tmp['url'] || tmp;

                if (tmp && tmp.length) {
                    url = tmp;
                }
            }

            log('Fetched video url: ' + url);
            ToolKit.launchPlayer(playerPlaceholder, url);
        }
        
        getScript(requestUrl, function() {
            delete window[callback];
        });
    }
 }();
