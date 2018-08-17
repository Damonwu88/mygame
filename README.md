# 微信小程序使用说明
**此版本是在小程序中使用的版本，即在浏览器中是没办法正常识别的，需要浏览器版本的同学请自行到群文件去下载**

或者，可以直接修改源码以使其在浏览器上运行

```js
this.canvas = wx.createCanvas();
```

这行代码是通过微信的接口，从JsCore里直接创建canvas，是跳过Dom的，所以在浏览器中，需要通过document.getElementById这样的方法或者是Selector获取canvas的dom对象

```js
wx.createInnerAudioContext();
wx.onTouchStart();
......
```

所有的wx.xxx方法，都应该替换成浏览器识别的标准js方法
并且应当创建相应的index.html文件作为入口，而game.js只是微信的小游戏入口，在浏览器无效

**注意，babel配置可有可无，属于扩展知识，选择最新的Chrome浏览器，不需要将ES6语法转换成ES5，可以比较好的识别和兼容**

