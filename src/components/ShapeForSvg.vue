<script>
export default {
  name: 'ShapeForSve',
  props: {
    /**
     * 宽度
     */
    width: {
      type: Number,
      default: 200,
    },
    /**
     * 高度
     */
    height: {
      type: Number,
      default: 200,
    },
    /**
     * 背景渐变透明度：开始位置
     */
    startOpacity: {
      type: Number,
      default: 0.59,
    },
    /**
     * 背景渐变透明度：结束位置
     */
    endOpacity: {
      type: Number,
      default: 0.59,
    },
    /**
     * 标题宽度
     */
    titleWidth: {
      type: Number,
      default: 218,
    },
    /**
     * 标题高度
     */
    titleHeight: {
      type: Number,
      default: 40,
    },
    /**
     * 标题背景上下线插值的一半
     */
    dif: {
      type: Number,
      default: 18,
    },
    /**
     * 背景渐变：开始颜色
     */
    startColor: {
      type: String,
      default: 'rgba(0,79,183,0.5)',
    },
    /**
     * 背景渐变：结束颜色
     */
    endColor: {
      type: String,
      default: 'rgba(0,79,183,0.2)',
    },
    /**
     * 标题背景颜色
     */
    titleFill: {
      type: String,
      default: '#15478290',
    },
    /**
     * 四角折线颜色
     */
    hornStrokeColor: {
      type: String,
      default: '#27A2FF ',
    },
    /**
     * 标题上蓝色横线：颜色
     */
    titleStrokeColor: {
      type: String,
      default: '#14cdff70',
    },
  },
  data() {
    return {
      zeroPoint: [0, 7], // 左上角x横轴值最小的点的初始位置
      k: (2 * Math.PI) / 12, // 矩形的角的斜切线的角度0~90之间
      kl: 10, // 矩形的角的斜切边的长度
      rate: 0.98, // 缩放比率
      Z: true, // 是否闭合
    }
  },
  computed: {
    /**
     * 每个角的缺省块的x轴差值
     * @returns {number}
     */
    difX: function () {
      // return this.kl*Math.cos(this.k)
      return 7
    },
    /**
     * 每个角的缺省块的y轴差值
     * @returns {number}
     */
    difY: function () {
      // return this.kl*Math.sin(this.k)
      return 6
    },
    /**
     * 左上边：右边一个点
     * @returns {number[]}
     */
    hornLTRight: function () {
      const X = this.zeroPoint[0]
      const Y = this.zeroPoint[1]
      return [X + this.difX, Y - this.difY]
    },
    /**
     * 右上边：左边一个点
     * @returns {[number,number]}
     */
    hornRTLeft: function () {
      const X = this.width - this.difX
      const Y = 0
      return [X, Y]
    },
    /**
     * 右上边：右边一个点
     * @returns {[number,number]}
     */
    hornRTRight: function () {
      const X = this.width
      const Y = this.difY
      return [X, Y]
    },
    /**
     * 右下边：右边一个点
     * @returns {[number,number]}
     */
    hornRBRight: function () {
      const X = this.width
      const Y = this.height - this.difY
      return [X, Y]
    },
    /**
     * 右下边：左边一个点
     * @returns {[number,number]}
     */
    hornRBLeft: function () {
      const X = this.width - this.difX
      const Y = this.height
      return [X, Y]
    },
    /**
     * 左下边：右边一个点
     * @returns {[number,number]}
     */
    hornLBRight: function () {
      const X = this.difX
      const Y = this.height
      return [X, Y]
    },
    /**
     * 左下边：左边一个点
     * @returns {[number,number]}
     */
    hornLBLeft: function () {
      const X = 0
      const Y = this.height - this.difY
      return [X, Y]
    },
    /**
     * 全框背景形状点
     * @returns {string}
     */
    unitPoint: function () {
      return (
          'M ' +
          this.zeroPoint.join(' ') +
          ' L ' +
          this.hornLTRight.join(' ') +
          ' L ' +
          this.hornRTLeft.join(' ') +
          ' L ' +
          this.hornRTRight.join(' ') +
          ' L ' +
          this.hornRBRight.join(' ') +
          ' L ' +
          this.hornRBLeft.join(' ') +
          ' L ' +
          this.hornLBRight.join(' ') +
          ' L ' +
          this.hornLBLeft.join(' ') +
          (this.Z ? ' Z' : '')
      )
    },
    /**
     * 四角：左上角
     * @returns {*[]}
     */
    corPolyLT: function () {
      const arr = []
          .concat(this.zeroPoint)
          .concat(this.hornLTRight)
          .concat([this.hornLTRight[0] + 10, this.hornLTRight[1]])
      return arr
    },
    /**
     * 四角：右上角
     * @returns {number[]}
     */
    corPolyRT: function () {
      const arr = [this.hornRTLeft[0] - 10, this.hornRTLeft[1]].concat(this.hornRTLeft).concat(this.hornRTRight)
      return arr
    },
    /**
     * 四角：右下角
     * @returns {*[]}
     */
    corPolyRB: function () {
      const arr = []
          .concat(this.hornRBRight)
          .concat(this.hornRBLeft)
          .concat([this.hornRBLeft[0] - 10], this.hornRBLeft[1])
      return arr
    },
    /**
     * 四角：左下角
     * @returns {number[]}
     */
    corPolyLB: function () {
      const arr = [this.hornLBRight[0] + 10, this.hornLBRight[1]].concat(this.hornLBRight).concat(this.hornLBLeft)
      return arr
    },
    /**
     * 标题背景形状点
     * @returns {string}
     */
    titlePoint: function () {
      const centerX = (this.zeroPoint[0] + this.hornRTRight[0]) / 2
      const p1 = [centerX - this.titleWidth / 2, this.hornLTRight[1]]
      const p2 = [centerX + this.titleWidth / 2, this.hornLTRight[1]]
      const p3 = [centerX + this.titleWidth / 2 - this.dif, this.hornLTRight[1] + this.titleHeight]
      const p4 = [centerX - this.titleWidth / 2 + this.dif, this.hornLTRight[1] + this.titleHeight]
      return 'M ' + p1.join(' ') + ' L ' + p2.join(' ') + ' L ' + p3.join(' ') + ' L ' + p4.join(' ')
    },
    /**
     * 标题横线
     * @returns {*[]}
     */
    titlePoly: function () {
      const centerX = (this.zeroPoint[0] + this.hornRTRight[0]) / 2
      const p1 = [centerX - 22, this.hornLTRight[1]]
      const p2 = [centerX + 22, this.hornLTRight[1]]
      const arr = [].concat(p1).concat(p2)
      return arr
    },
    /**
     * 左边竖直线形状
     * @returns {string}
     */
    verticalLineLeft: function () {
      const tl = this.zeroPoint
      const tr = [this.zeroPoint[0] + 1, this.zeroPoint[1]]
      const bl = this.hornLBLeft
      const br = [this.hornLBLeft[0] + 1, this.hornLBLeft[1]]
      return 'M ' + tl.join(' ') + ' L ' + tr.join(' ') + ' L ' + bl.join(' ') + ' L ' + br.join(' ') + ' Z'
    },
    /**
     * 右边竖直线形状
     * @returns {string}
     */
    verticalLineRight: function () {
      const tl = [this.hornRTRight[0] - 1, this.hornRTRight[1]]
      const tr = this.hornRTRight
      const bl = this.hornRBRight
      const br = [this.hornRBRight[0] - 1, this.hornRBRight[1]]
      return 'M ' + tl.join(' ') + ' L ' + tr.join(' ') + ' L ' + bl.join(' ') + ' L ' + br.join(' ') + ' Z'
    },
    horizontalLine: function () {
      const p1 = this.hornLTRight
      const p2 = this.hornRTLeft
      const arr = [].concat(p1).concat(p2)
      return arr
    },
  },
}
</script>

<template>
  <div class="shape-for-svg-wrapper" :style="{width:width+'px'}">
    <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" :stop-color="startColor" :stop-opacity="startOpacity" />
        <stop offset="100%" :stop-color="endColor" :stop-opacity="endOpacity" />
      </linearGradient>
      <linearGradient id="verticalLine" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(0, 255, 255, 0.96)" stop-opacity="0.39" />
        <stop offset="40%" stop-color="rgba(0, 255, 255, 0.96)" stop-opacity="0.19" />
        <stop offset="100%" stop-color="rgba(0, 255, 255, 0.96)" stop-opacity="0" />
      </linearGradient>
      <!--全框背景-->
      <path :d="unitPoint" fill="url(#gradient)" />
      <!--左边竖直线-->
      <path :d="verticalLineLeft" fill="url(#verticalLine)" />
      <!--右边竖直线-->
      <path :d="verticalLineRight" fill="url(#verticalLine)" />
      <!--水平横线-->
      <polyline :points="horizontalLine" stroke="rgba(0, 255, 255, 0.20)" stroke-width="2" />
      <!--标题背景-->
      <path :d="titlePoint" :fill="titleFill" />
      <!--标题上蓝色横线-->
      <polyline :points="titlePoly" :stroke="titleStrokeColor" stroke-width="2" />
      <!--全框四个角-->
      <polyline :points="corPolyLT" :stroke="hornStrokeColor" stroke-width="2" />
      <polyline :points="corPolyRT" :stroke="hornStrokeColor" stroke-width="2" />
      <polyline :points="corPolyRB" :stroke="hornStrokeColor" stroke-width="2" />
      <polyline :points="corPolyLB" :stroke="hornStrokeColor" stroke-width="2" />
    </svg>
    <div class="title" :style="{height:titleHeight+'px',lineHeight:titleHeight+'px'}">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.shape-for-svg-wrapper{
  position: relative;
}
.shape-for-svg-wrapper .title{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  text-align: center;
  color:#fff;
  font-size:24px;
}
.shape-for-svg-wrapper .content{
  height:100%;
  position: absolute;
  top:0;
  width: 100%;
  color:#fff;
}
</style>