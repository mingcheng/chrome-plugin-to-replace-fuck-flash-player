// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<i.feelinglucky#gmail.com>
 * @date   2013-03-27
 * @link   http://www.gracecode.com/
 */

~function() {
    var videoId = window.videoId, ToolKit = window.HTML5PlayerToolKit, 
        getScript = ToolKit.getScript, log = ToolKit.log;

    function getFileIDMixString(seed) {
        mixed = [];
        source = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890".split('');
        var index, len = source.length;
        for (var i=0; i< len;i++){
            seed = (seed * 211 + 30031) % 65536;
            index = Math.floor(seed/65536 * source.length);
            mixed.push(source[index]);
            source.splice(index,1);
        }
        return mixed.join('');
    }

    function getFileID(fileid, seed) {
        var mixed = getFileIDMixString(seed);
        var ids= fileid.split("*");
        var realId = [];
        var idx;
        for (var i=0; i< ids.length; i++){
            idx = parseInt(ids[i],10);
            realId.push(mixed.charAt(idx));
        }
        return realId.join('');
    }
    
    function getFileType(obj){
        var keys = Object.keys(obj);
        var type = ['mp4','3gphd'].filter(function(item){
            return !!(keys.indexOf(item)+1);
        });
        return type[0];
    }

    function toHex(number) {
        var str = number.toString(16);
        return (str.length < 2) ? "0" + str : str;
    }

    if (ToolKit.isSupportM3U8) {
        var url = "/player/getM3U8/vid/" + videoId + "/type/mp4/ts/" + (((new Date()).getTime()/1000).toString()|0) + "/v.m3u8";
        ToolKit.launchPlayer(document.getElementById("player"), url);
    } else {
        var callbackStep1 = ToolKit.getUniqString();
        var callbackStep2 = ToolKit.getUniqString();

        window[callbackStep1] = function(spec) {
            try {
                var data = spec.data[0], d = new Date(), urls = [];
                var fileType = getFileType(data['streamfileids']);
                var fileid   = getFileID(data['streamfileids'][fileType], data['seed']);
                var sid      = d.getTime() + "" + (1E3 + d.getMilliseconds()) + "" + (parseInt(Math.random() * 9E3));

                // @see http://wuyuans.com/2012/08/parser-youku-video-using-java/
                for (var i = 0, len = (data['segs'][fileType]).length; i < len; i++) {
                    var k = data['segs'][fileType][i]['k'], 
                    
                        url = 'http://f.youku.com/player/getFlvPath/sid/'+ 
                            sid + '_' + toHex(i) +'/st/'+ fileType +'/fileid/'+ 
                            fileid.substr(0,8) + toHex(i) + fileid.substr(10, fileid.length-1) +'?K='+ 
                            k +'&callback=' + callbackStep2;

                    urls[i] = url;
                }



                if (urls.length > 1) {
                    for (var i = 0, len = urls.length; i < len; i++) {
                        ~function() {
                            var url = urls[i];
                            ToolKit.markSegs(i+1, function() {
                                getScript(url, function() {
                                    ToolKit.log("Change video location to " + url);
                                });
                            });
                        }();
                    }

                    ToolKit.selectSegs(0);
                } else {
                    getScript(urls[0], function() {
                        log("Finished YOUKU step2 request, almost here!");
                        //delete window[callbackStep2];
                    });
                }
            } catch(e) {
                //console.error(e);
            }
       }

       window[callbackStep2] = function(spec) {
            //console.info(spec);
            var url = spec[0]['server'];
            if (url.length) {
                ToolKit.launchPlayer(document.getElementById("player"), url);
            }
       }

       var requestStep1  = 'http://v.youku.com/player/getPlaylist/VideoIDS/'+ videoId +'/Pf/4?__callback=' + callbackStep1;
       getScript(requestStep1, function() {
           log("Finished YOUKU step1 request, continue...");
           delete window[callbackStep1];
       });
    }
}();
