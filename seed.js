// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<i.feelinglucky#gmail.com>
 * @date   2013-03-27
 * @link   http://www.gracecode.com/
 */

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

