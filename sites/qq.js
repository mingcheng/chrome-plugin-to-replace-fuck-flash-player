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
        playerPlaceholder = document.getElementById('mod_player');

    var vid  = location.search.match(/vid=([0-9a-zA-Z]+)/);

    if(vid){
        vid = vid[1];
    } else {
        vid = location.href.match(/\/([0-9a-zA-Z]+).html/);
        if(vid){
            vid = vid[1];
            if(window.COVER_INFO.id == vid){
                vid = window.VIDEO_INFO.vid;
            }
        }
    }
    if(!vid) return;

    var callback = ToolKit.getUniqString();
    var request = 'http://vv.video.qq.com/geturl?otype=json&vid='+vid+'&charge=0&callback='+ callback;

    window[callback] = function(spec) {
        var url = spec.vd.vi[0].url;				
        setTimeout(function() {
            ToolKit.launchPlayer(playerPlaceholder, url);

            // ...
            var videoListLinks = document.getElementById("mod_videolist").getElementsByTagName("a");
            for (var i = videoListLinks.length-1; i >= 0; i--) {
                var ele = videoListLinks[i];
                ~function() {
                    var link = ele.getAttribute("href");
                    (ele).addEventListener("click", function(e) {
                        location.replace(link);
                    });
                }();
            }
        }, 1000);
    };

    getScript(request, function() {
        delete window[callback];
    });
 }();
