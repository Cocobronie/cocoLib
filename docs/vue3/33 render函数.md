# rander函数

## 什么是rander函数
- 在vue中我们使用`<template>`包裹HTML语法组建页面的。
- 使用`render`函数我们可以用**js语言**来构建DOM。
- 因为vue是虚拟DOM，所以在拿到`template`模板时也要转译成`VNode`的函。
- 而用`render`函数构建DOM，vue就免去了转译的过程。

**当使用`render`函数描述虚拟DOM时，vue提供一个函数，这个函数是就构建虚拟DOM所需要的工具。官网上给它起了个名字叫`createElement`。还有约定的简写叫`h`。**

::: tip
绝大多数情况下使用模板（template）来创建你的 HTML是这个样子的。
:::

```vue
<!--HelloWorld.vue-->
<template>
  <div id="app">
    Hello World!!!
  </div>
</template>

```

::: tip
render渲染函数是这个样子的。（修改HelloWorld.vue为render函数创建模板的形式）

https://template-explorer.vuejs.org/   这个网站能够将`<template>`转化为`render`函数形式

:::

```js
import { createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createCommentVNode("HelloWorld.vue"),
    _createElementVNode("template", null, [
       _createElementVNode("div", { id: "app" }, " Hello World!!! ")
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

// Check the console for the AST

```

