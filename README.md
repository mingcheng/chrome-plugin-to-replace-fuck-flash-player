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

<del>本插件针对 Mac 平台下的 Chrome 浏览器开发，您可以直接访问 Chrome Store 安装本插件，插件地址：</del>

<del>https://chrome.google.com/webstore/detail/ddfddmjlhkoabjekmjidfakeckoncmno/</del>

<del>和其他安装 Chrome 插件一样，点击安装即可。</del>

因为用户隐私政策的原因（替换用户页面内容，隐藏了部分信息），Google 不让此插件上架，不过您放心此插件都是开放源代码的。

如果您需要使用此插件，你需要手工导入：

1、打开工具菜单下的「扩展程序」面板

2、点击「开发者模式」的复选框，打开开发者模式

![http://note.io/105PPe2](https://www.evernote.com/shard/s4/sh/f8a33fee-334c-4eb4-8a98-b8ab3e2764a0/7a872de8bd5c5544e03b488efc489936/res/557927da-bdeb-4971-ab2d-95e90e56ce52/skitch.png)

3、从 github 上 clone 本项目的所有代码到本地

4、「点击加载正在开发的扩展程序」按钮，选择上面步骤的下载下来的目录即可

如果您有更好的办法，欢迎您的反馈，谢谢。


## 捐赠

任何一件事情的持续发展和改进都需要作者不断的努力和精力。如果您觉得这个插件对您有帮助，感谢您能够鼓励作者继续坚持下去！

[![Donate](https://www.paypal.com/en_US/i/btn/x-click-but04.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=94KDS88JDZF3Y)

### 捐赠列表

1. 2013-05-02 于仁祥 $1
2. 2013-05-03 Jerry Tian $5


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

