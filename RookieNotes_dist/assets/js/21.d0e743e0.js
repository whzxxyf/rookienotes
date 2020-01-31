(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{259:function(t,s,e){"use strict";e.r(s);var a=e(2),n=function(t){t.options.__data__block__={flowchart_382ee14a:"stage1=>operation: palette.styl\nstage2=>operation: 默认 app 样式\nstage3=>operation: index.styl\n\nstage1->stage2->stage3"}},r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),e("h2",{attrs:{id:"为什么不能把-palette-styl-和-index-styl-合并到一个-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么不能把-palette-styl-和-index-styl-合并到一个-api"}},[t._v("#")]),t._v(" 为什么不能把 "),e("code",[t._v("palette.styl")]),t._v(" 和 "),e("code",[t._v("index.styl")]),t._v(" 合并到一个 API?")]),t._v(" "),e("p",[e("code",[t._v("palete.styl")]),t._v(" 负责全局颜色设置。在编译期间，主题颜色常量应该首先由预处理器解析，然后应用于全局上下文。")]),t._v(" "),e("p",[t._v("但对于 "),e("code",[t._v("index.styl")]),t._v("，它的工作是重写应用的默认样式。根据 CSS 的优先级原则，后一种样式具有更高的优先级，因此应该在 CSS 文件的末尾生成。")]),t._v(" "),e("p",[t._v("描述 stylus 编译器编译顺序的简单图表如下：")]),t._v(" "),e("FlowChart",{attrs:{id:"flowchart_382ee14a",code:t.$dataBlock.flowchart_382ee14a,preset:"vue"}}),e("br"),t._v(" "),e("h2",{attrs:{id:"clientdynamicmodules-和-enhanceappfiles-的区别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clientdynamicmodules-和-enhanceappfiles-的区别是什么"}},[t._v("#")]),t._v(" "),e("code",[t._v("clientDynamicModules")]),t._v(" 和 "),e("code",[t._v("enhanceAppFiles")]),t._v(" 的区别是什么?")]),t._v(" "),e("p",[t._v("让我们先来回顾一下，"),e("code",[t._v("clientDynamicModules")]),t._v(" 和 "),e("code",[t._v("enhanceAppFiles")]),t._v(" 都可以在编译期间通过动态 JavaScript 代码生成模块。")]),t._v(" "),e("p",[t._v("不同之处在于，当应用在客户端初始化时，"),e("code",[t._v("enhanceAppFiles")]),t._v(" 生成的文件会自动加载和使用；而 "),e("code",[t._v("clientDynamicModules")]),t._v(" 生成的文件则需要用户自己引入 "),e("code",[t._v("@dynamic/xxx")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被入口文件自动引入")]),t._v("\n  enhanceAppFiles"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'constans-a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    content"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要引入 '@dynamic/constans-b' 后使用")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("clientDynamicModules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'constans-b'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      content"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"什么时候需要使用-enhanceappfiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么时候需要使用-enhanceappfiles"}},[t._v("#")]),t._v(" 什么时候需要使用 "),e("code",[t._v("enhanceAppFiles")]),t._v("?")]),t._v(" "),e("ol",[e("li",[t._v("当你需要在客户端自动执行一些代码时；")]),t._v(" "),e("li",[t._v("当你不需要复用这个模块时。")])]),t._v(" "),e("p",[e("strong",[t._v("比如：")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components/index.js#L24",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-register-components"),e("OutboundLink")],1),t._v("：在客户端自动注册组件")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/plugin-google-analytics/enhanceAppFile.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-google-analytics"),e("OutboundLink")],1),t._v("：自动配置 Google Analytics")])]),t._v(" "),e("h2",{attrs:{id:"什么时候需要使用-clientdynamicmodules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么时候需要使用-clientdynamicmodules"}},[t._v("#")]),t._v(" 什么时候需要使用 "),e("code",[t._v("clientDynamicModules")]),t._v("?")]),t._v(" "),e("ol",[e("li",[t._v("当你需要生成一个在特定时间被调用的动态模块时；")]),t._v(" "),e("li",[t._v("当你需要复用这个模块。")])]),t._v(" "),e("p",[e("strong",[t._v("比如：")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuepressjs/vuepress-plugin-blog/blob/master/src/node/index.ts#L208",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-blog"),e("OutboundLink")],1),t._v("：使用编译期元数据生成一些博客相关的动态模块并通过 "),e("code",[t._v("enhanceAppFiles")]),t._v(" 将他们在客户端初始化")])])],1)}),[],!1,null,null,null);"function"==typeof n&&n(r);s.default=r.exports}}]);