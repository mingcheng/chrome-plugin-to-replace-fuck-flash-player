# 看个片儿不发烫

### 替换中国大陆主流视频网站的 Flash 播放器为 HTML5 播放器

![项目图标](https://raw.github.com/feelinglucky/chrome-plugin-to-replace-fuck-flash-player/master/icon_128.png)

使用 Mac 的同学都可能碰到过在线看视频引起机子风扇狂转、机身发烫等情况，这是因为 Flash 占用了过多系统资源的缘故。

目前主流视频网站（包括但不限于 优酷、土豆、奇艺、搜狐、QQ、56 等）都支持 iOS 设备的在线播放，同时使用非 iOS 设备访问则会使用默认的 Flash 播放器。

这个 Chrome 浏览器的扩展原理就是，提取这些视频网站针对 HTML5 播放的视频然后替换原有的 Flash 播放器，从而达到减少在 Mac 上的资源消耗和发热的目的。


## 目前支持的视频网站

* 2013年3月29日 爱奇艺、搜狐
* 2013年3月28日 56、QQ、新浪
* 2013年3月27日 优酷、土豆 


## 安装

本插件针对 Mac 平台下的 Chrome 浏览器开发，您可以直接访问 Chrome Store 安装本插件，插件地址：

https://chrome.google.com/webstore/detail/ddfddmjlhkoabjekmjidfakeckoncmno/

和其他安装 Chrome 插件一样，点击安装即可。


## 捐赠

任何一件事情的持续发展和改进都需要作者不断的努力和精力。如果您觉得这个插件对您有帮助，感谢您能够鼓励作者继续坚持下去！

[![Donate](https://www.paypal.com/en_US/i/btn/x-click-but04.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=94KDS88JDZF3Y)

### 捐赠列表

1. 暂无


## 使用

打开插件支持的视频站点以后，插件自动寻找适合 HTML5 播放器播放的视频，如果找到则会将原页面的 Flash 播放器替换为 HTML5 播放器。

这一切都是自动完成的。如果您不喜欢 HTML5 视频源的质量，你可以点击右下角的黑色播放器标识小块，切换回原来的 Flash 播放器。

附带视频演示： https://www.youtube.com/watch?v=kDDCIXvMvik


## FAQ

问：插件是否记录用户的隐私信息？

答：本插件不主动记录用户的隐私信息，同时本插件的所有代码都是开源的、非盈利性质的。

--

问：为什么插件「有些时候能用有些时候不能用」呢？

答：视频网站出于效率、容量等方面的考虑并不是所有的视频都提供了 HTML5 播放源，因此如果在已支持的视频网站如果碰到还是使用 Flash Player 播放的视频是正常的。当然，如果所有的视频都无法使用 HTML5 播放了，那么可能是视频网站更改了接口，欢迎您反馈使用情况。

--

问：本插件是否能屏蔽视频站点的广告呢？

答：本插件的目的只是提供 HTML5 播放器的替换，不提供屏蔽任何广告的功能。有些用户发现使用本插件以后无法观看原有视频网站的广告了，这是因为它的 HTML5 视频源没有附带广告内容的缘故，和本插件无关。


## 更新日志

* 2013年3月28日  支持 56、新浪视频
* 2013年3月27日  完成基本功能，支持优酷、土豆视频站点

## 感谢

* 朱一 兄弟的 「妈妈再也不用担心我的macbook发烫了计划2.0Beta」 （名字真长 Orz） http://zythum.sinaapp.com/youkuhtml5playerbookmark/
* 使用 http://videojs.com/  HTML5 播放器组件
* 应用图标来自 Google 图片搜索 http://flingdesign.com/ 

