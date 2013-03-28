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
        $SCOPE = window.$SCOPE,
        playerPlaceholder = document.getElementById("myflashBox");

    try {
        var vid = $SCOPE.video.videoData.ipad_vid,
            url = 'http://edge.v.iask.com.sinastorage.com/'+ vid +'.mp4'
        ToolKit.launchPlayer(playerPlaceholder, url);
    } catch (e) {
        log("Sorry, could not find any mp4 video.");
    }
 }();
