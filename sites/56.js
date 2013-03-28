// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<i.feelinglucky#gmail.com>
 * @date   2013-03-27
 * @link   http://www.gracecode.com/
 */

 ~function() {
     // playerPlaceholder
    var ToolKit = window.HTML5PlayerToolKit, 
        getScript = ToolKit.getScript, log = ToolKit.log,
        _page_ = window._page_,
        playerPlaceholder = document.getElementById('mm_ios_play') || document.getElementById('VideoPlayObject');

        if(_page_.channel == 'view'){
            var vid  = location.href.match(/v\_([0-9a-zA-Z]+)\.html/);
            if(vid) {
                ToolKit.launchPlayer(playerPlaceholder, 'http://vxml.56.com/m3u8/'+ vid[1] +'/');
            } else {
                log("Sorry not found any video address.");
            }
        } else {
            if (!window.oFlv || !window._oFlv_c) {
                return;
            }

            var callback   = 'jsonp_dfInfo';
            var requestUrl = 'http://vxml.56.com/ipad/'+(window.oFlv.o.id || window._oFlv_c.id)+'/?src=site&callback='+callback;
            var backupFunc = function(spec) {
                if (spec.status == 1 || spec.msg == "ok") {
                    var url = false;
                    for(var i = spec.df.length - 1; i >= 0; i--) {
                        var tmp = spec.df[i]['url'];
                        if (tmp.length != 0) {
                            url = tmp;
                        }
                    }

                    ToolKit.launchPlayer(playerPlaceholder, url);
                } else {
                    log("Sorry not found any video address.");
                }

                window[callback] = backupFunc;
            }

            window[callback] = backupFunc;
            getScript(requestUrl, function() {
                delete window[callback];
            });
        }	
 }();
