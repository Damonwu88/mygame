

# 微信小程序版本使用说明
**将h5小游戏里的一些方法替换为小游戏对应的原生方法即可**

通过微信的接口，从JsCore里直接创建canvas，是跳过Dom的，所以在浏览器中，需要通过document.getElementById这样的方法或者是Selector获取canvas的dom对象
```h5
this.canvas = document.getElementById("canvasId");
```

```小游戏
this.canvas = wx.createCanvas();
```

```js
wx.createInnerAudioContext();
wx.onTouchStart();
......
```

所有的wx.xxx方法，都应该替换成浏览器识别的标准js方法
并且应当创建相应的index.html文件作为入口，而game.js只是微信的小游戏入口，在浏览器无效

**注意，babel配置可有可无，属于扩展知识，选择最新的Chrome浏览器，不需要将ES6语法转换成ES5，可以比较好的识别和兼容**

