# ShapeForSvg
使用svg编写的，可配置宽高大小、背景颜色等大屏中用来作为模块背景的底框。

## 安装
```
npm install ShapeForSvg
```

### 使用
```
import ShapeForSvg from 'ShapeForSvg';
Vue.component("ShapeForSvg",ShapeForSvg);
<ShapeForSvg>
	<template #header>标题</template>
	<div class="wrapper">我是内容</div>
</ShapeForSvg>
```

### 属性配置项


> width:Number
组件显示宽度，默认200

> height:Number
组件显示高度，默认200

> startOpacity:Number
背景渐变透明度：开始位置，0-1范围内，默认0.59

> endOpacity:Number
背景渐变透明度：结束位置，0-1范围内，默认0.59

> titleWidth:Number
标题宽度，默认218

> titleHeight:Number
标题高度，默认40

> dif:Number
标题背景上下线插值的一半，默认18

> startColor:String
背景渐变：开始颜色

> endColor:String
背景渐变：结束颜色

> titleFill:String
标题背景颜色

> hornStrokeColor:String
四角折线颜色

> titleStrokeColor:String
标题上蓝色横线：颜色

### 组件效果
![Image](https://raw.githubusercontent.com/cauliflowerLi/shapeForSvg/master/src/assets/img.png)

