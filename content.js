// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<lucky#gracecode.com>
 * @date   2013-03-27
 * @link   http://www.gracecode.com/
 */

~function() {
     var Toolkit = HTML5PlayerToolKit, getScript = Toolkit.getScript, log = Toolkit.log;

     var getExtensionUrl = function(url) {
        return chrome.extension.getURL(url);
     };

     var getVideoFlag = function (flag) {
         var body  = document.body, value = body.getAttribute("data-" + flag);
         if (!value) {
             return false;
         }
         return value;
     };

     var init = function(e) {
         var type = false, host = location.host;

         if(/youku\.com/.test(host) && getVideoFlag('videoId'))                         type = "youku";
         if(/tudou\.com/.test(host) && getVideoFlag('iid'))                             type = "tudou";
         if(/sohu\.com/.test(host)  && getVideoFlag('vid'))                             type = "sohu";
         if(/iqiyi\.com/.test(host) && getVideoFlag('info'))                            type = "iqiyi";
         if(/letv\.com/.test(host)  && document.getElementById('fla_box'))              type = "letv";
         if(/video\.sina\.com\.cn/.test(host) && getVideoFlag('SCOPE'))                 type = "sina";
         if(/v\.qq\.com/.test(host) && getVideoFlag('COVER_INFO'))                      type = 'qq';
         if(getVideoFlag('XL_CLOUD_FX_INSTANCE'))                                       type = 'xunlei';
         if(/56\.com/.test(host) && getVideoFlag('_page_'))                             type = '56';
         //if(/bilibili\.tv/.test(host) && getVideoFlag('aid'))                           type = 'bilibili';
         //if(/acfun\.tv/.test(host) && getVideoFlag('system'))                           type = 'acfun';

         if(!type) {
             log("Not found any video, ignore.");
             return false;
         }
         log("Found " + type.toUpperCase() + " video tag, continue.");

         getScript(getExtensionUrl("sites/" + type + ".js"));
     };

     window.addEventListener("load", function() {
        getScript(getExtensionUrl("seed.js"), init);
     });
} ();

