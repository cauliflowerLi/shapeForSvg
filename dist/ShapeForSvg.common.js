/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ShapeForSvg.vue?vue&type=template&id=9cbc076e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "shape-for-svg-wrapper",
    style: {
      width: _vm.width + 'px'
    }
  }, [_c('svg', {
    attrs: {
      "width": _vm.width,
      "height": _vm.height,
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('linearGradient', {
    attrs: {
      "id": "gradient",
      "x1": "0%",
      "y1": "0%",
      "x2": "0%",
      "y2": "100%"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0%",
      "stop-color": _vm.startColor,
      "stop-opacity": _vm.startOpacity
    }
  }), _c('stop', {
    attrs: {
      "offset": "100%",
      "stop-color": _vm.endColor,
      "stop-opacity": _vm.endOpacity
    }
  })], 1), _c('linearGradient', {
    attrs: {
      "id": "verticalLine",
      "x1": "0%",
      "y1": "0%",
      "x2": "0%",
      "y2": "100%"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0%",
      "stop-color": "rgba(0, 255, 255, 0.96)",
      "stop-opacity": "0.39"
    }
  }), _c('stop', {
    attrs: {
      "offset": "40%",
      "stop-color": "rgba(0, 255, 255, 0.96)",
      "stop-opacity": "0.19"
    }
  }), _c('stop', {
    attrs: {
      "offset": "100%",
      "stop-color": "rgba(0, 255, 255, 0.96)",
      "stop-opacity": "0"
    }
  })], 1), _c('path', {
    attrs: {
      "d": _vm.unitPoint,
      "fill": "url(#gradient)"
    }
  }), _c('path', {
    attrs: {
      "d": _vm.verticalLineLeft,
      "fill": "url(#verticalLine)"
    }
  }), _c('path', {
    attrs: {
      "d": _vm.verticalLineRight,
      "fill": "url(#verticalLine)"
    }
  }), _c('polyline', {
    attrs: {
      "points": _vm.horizontalLine,
      "stroke": "rgba(0, 255, 255, 0.20)",
      "stroke-width": "2"
    }
  }), _c('path', {
    attrs: {
      "d": _vm.titlePoint,
      "fill": _vm.titleFill
    }
  }), _c('polyline', {
    attrs: {
      "points": _vm.titlePoly,
      "stroke": _vm.titleStrokeColor,
      "stroke-width": "2"
    }
  }), _c('polyline', {
    attrs: {
      "points": _vm.corPolyLT,
      "stroke": _vm.hornStrokeColor,
      "stroke-width": "2"
    }
  }), _c('polyline', {
    attrs: {
      "points": _vm.corPolyRT,
      "stroke": _vm.hornStrokeColor,
      "stroke-width": "2"
    }
  }), _c('polyline', {
    attrs: {
      "points": _vm.corPolyRB,
      "stroke": _vm.hornStrokeColor,
      "stroke-width": "2"
    }
  }), _c('polyline', {
    attrs: {
      "points": _vm.corPolyLB,
      "stroke": _vm.hornStrokeColor,
      "stroke-width": "2"
    }
  })], 1), _c('div', {
    staticClass: "title",
    style: {
      height: _vm.titleHeight + 'px',
      lineHeight: _vm.titleHeight + 'px'
    }
  }, [_vm._t("header")], 2), _c('div', {
    staticClass: "content"
  }, [_vm._t("default")], 2)]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ShapeForSvg.vue?vue&type=script&lang=js
/* harmony default export */ var ShapeForSvgvue_type_script_lang_js = ({
  name: 'ShapeForSve',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * 宽度
     */
    width: {
      type: Number,
      default: 200
    },
    /**
     * 高度
     */
    height: {
      type: Number,
      default: 200
    },
    /**
     * 背景渐变透明度：开始位置
     */
    startOpacity: {
      type: Number,
      default: 0.59
    },
    /**
     * 背景渐变透明度：结束位置
     */
    endOpacity: {
      type: Number,
      default: 0.59
    },
    /**
     * 标题宽度
     */
    titleWidth: {
      type: Number,
      default: 218
    },
    /**
     * 标题高度
     */
    titleHeight: {
      type: Number,
      default: 40
    },
    /**
     * 标题背景上下线插值的一半
     */
    dif: {
      type: Number,
      default: 18
    },
    /**
     * 背景渐变：开始颜色
     */
    startColor: {
      type: String,
      default: 'rgba(0,79,183,0.5)'
    },
    /**
     * 背景渐变：结束颜色
     */
    endColor: {
      type: String,
      default: 'rgba(0,79,183,0.2)'
    },
    /**
     * 标题背景颜色
     */
    titleFill: {
      type: String,
      default: '#15478290'
    },
    /**
     * 四角折线颜色
     */
    hornStrokeColor: {
      type: String,
      default: '#27A2FF '
    },
    /**
     * 标题上蓝色横线：颜色
     */
    titleStrokeColor: {
      type: String,
      default: '#14cdff70'
    }
  },
  data() {
    return {
      zeroPoint: [0, 7],
      // 左上角x横轴值最小的点的初始位置
      k: 2 * Math.PI / 12,
      // 矩形的角的斜切线的角度0~90之间
      kl: 10,
      // 矩形的角的斜切边的长度
      rate: 0.98,
      // 缩放比率
      Z: true // 是否闭合
    };
  },
  computed: {
    /**
     * 每个角的缺省块的x轴差值
     * @returns {number}
     */
    difX: function () {
      // return this.kl*Math.cos(this.k)
      return 7;
    },
    /**
     * 每个角的缺省块的y轴差值
     * @returns {number}
     */
    difY: function () {
      // return this.kl*Math.sin(this.k)
      return 6;
    },
    /**
     * 左上边：右边一个点
     * @returns {number[]}
     */
    hornLTRight: function () {
      const X = this.zeroPoint[0];
      const Y = this.zeroPoint[1];
      return [X + this.difX, Y - this.difY];
    },
    /**
     * 右上边：左边一个点
     * @returns {[number,number]}
     */
    hornRTLeft: function () {
      const X = this.width - this.difX;
      const Y = 0;
      return [X, Y];
    },
    /**
     * 右上边：右边一个点
     * @returns {[number,number]}
     */
    hornRTRight: function () {
      const X = this.width;
      const Y = this.difY;
      return [X, Y];
    },
    /**
     * 右下边：右边一个点
     * @returns {[number,number]}
     */
    hornRBRight: function () {
      const X = this.width;
      const Y = this.height - this.difY;
      return [X, Y];
    },
    /**
     * 右下边：左边一个点
     * @returns {[number,number]}
     */
    hornRBLeft: function () {
      const X = this.width - this.difX;
      const Y = this.height;
      return [X, Y];
    },
    /**
     * 左下边：右边一个点
     * @returns {[number,number]}
     */
    hornLBRight: function () {
      const X = this.difX;
      const Y = this.height;
      return [X, Y];
    },
    /**
     * 左下边：左边一个点
     * @returns {[number,number]}
     */
    hornLBLeft: function () {
      const X = 0;
      const Y = this.height - this.difY;
      return [X, Y];
    },
    /**
     * 全框背景形状点
     * @returns {string}
     */
    unitPoint: function () {
      return 'M ' + this.zeroPoint.join(' ') + ' L ' + this.hornLTRight.join(' ') + ' L ' + this.hornRTLeft.join(' ') + ' L ' + this.hornRTRight.join(' ') + ' L ' + this.hornRBRight.join(' ') + ' L ' + this.hornRBLeft.join(' ') + ' L ' + this.hornLBRight.join(' ') + ' L ' + this.hornLBLeft.join(' ') + (this.Z ? ' Z' : '');
    },
    /**
     * 四角：左上角
     * @returns {*[]}
     */
    corPolyLT: function () {
      const arr = [].concat(this.zeroPoint).concat(this.hornLTRight).concat([this.hornLTRight[0] + 10, this.hornLTRight[1]]);
      return arr;
    },
    /**
     * 四角：右上角
     * @returns {number[]}
     */
    corPolyRT: function () {
      const arr = [this.hornRTLeft[0] - 10, this.hornRTLeft[1]].concat(this.hornRTLeft).concat(this.hornRTRight);
      return arr;
    },
    /**
     * 四角：右下角
     * @returns {*[]}
     */
    corPolyRB: function () {
      const arr = [].concat(this.hornRBRight).concat(this.hornRBLeft).concat([this.hornRBLeft[0] - 10], this.hornRBLeft[1]);
      return arr;
    },
    /**
     * 四角：左下角
     * @returns {number[]}
     */
    corPolyLB: function () {
      const arr = [this.hornLBRight[0] + 10, this.hornLBRight[1]].concat(this.hornLBRight).concat(this.hornLBLeft);
      return arr;
    },
    /**
     * 标题背景形状点
     * @returns {string}
     */
    titlePoint: function () {
      const centerX = (this.zeroPoint[0] + this.hornRTRight[0]) / 2;
      const p1 = [centerX - this.titleWidth / 2, this.hornLTRight[1]];
      const p2 = [centerX + this.titleWidth / 2, this.hornLTRight[1]];
      const p3 = [centerX + this.titleWidth / 2 - this.dif, this.hornLTRight[1] + this.titleHeight];
      const p4 = [centerX - this.titleWidth / 2 + this.dif, this.hornLTRight[1] + this.titleHeight];
      return 'M ' + p1.join(' ') + ' L ' + p2.join(' ') + ' L ' + p3.join(' ') + ' L ' + p4.join(' ');
    },
    /**
     * 标题横线
     * @returns {*[]}
     */
    titlePoly: function () {
      const centerX = (this.zeroPoint[0] + this.hornRTRight[0]) / 2;
      const p1 = [centerX - 22, this.hornLTRight[1]];
      const p2 = [centerX + 22, this.hornLTRight[1]];
      const arr = [].concat(p1).concat(p2);
      return arr;
    },
    /**
     * 左边竖直线形状
     * @returns {string}
     */
    verticalLineLeft: function () {
      const tl = this.zeroPoint;
      const tr = [this.zeroPoint[0] + 1, this.zeroPoint[1]];
      const bl = this.hornLBLeft;
      const br = [this.hornLBLeft[0] + 1, this.hornLBLeft[1]];
      return 'M ' + tl.join(' ') + ' L ' + tr.join(' ') + ' L ' + bl.join(' ') + ' L ' + br.join(' ') + ' Z';
    },
    /**
     * 右边竖直线形状
     * @returns {string}
     */
    verticalLineRight: function () {
      const tl = [this.hornRTRight[0] - 1, this.hornRTRight[1]];
      const tr = this.hornRTRight;
      const bl = this.hornRBRight;
      const br = [this.hornRBRight[0] - 1, this.hornRBRight[1]];
      return 'M ' + tl.join(' ') + ' L ' + tr.join(' ') + ' L ' + bl.join(' ') + ' L ' + br.join(' ') + ' Z';
    },
    horizontalLine: function () {
      const p1 = this.hornLTRight;
      const p2 = this.hornRTLeft;
      const arr = [].concat(p1).concat(p2);
      return arr;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/ShapeForSvg.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ShapeForSvgvue_type_script_lang_js = (ShapeForSvgvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ShapeForSvg.vue?vue&type=style&index=0&id=9cbc076e&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ShapeForSvg.vue?vue&type=style&index=0&id=9cbc076e&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/ShapeForSvg.vue



;


/* normalize component */

var component = normalizeComponent(
  components_ShapeForSvgvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "9cbc076e",
  null
  
)

/* harmony default export */ var ShapeForSvg = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (ShapeForSvg);


module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=ShapeForSvg.common.js.map