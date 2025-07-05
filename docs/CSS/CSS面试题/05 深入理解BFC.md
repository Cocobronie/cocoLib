# 深入理解BFC

::: tip 参考

[深入理解BFC - 掘金 (juejin.cn)](https://juejin.cn/post/6844903693028966414)https://juejin.cn/post/7046169975706353701)

:::

1. 什么是BFC?
2. 如何创建BFC？
3. 

## 1、什么是BFC

`Formatting context `是 **W3C CSS2.1 规范**中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 `Formatting context` 有 `Block fomatting context` (简称BFC)和 `Inline formatting context `(简称IFC)。**Block formatting context直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干**。**通俗地讲，BFC是一个容器，用于管理块级元素。**

## 2、如何创建BFC

- `float`为 `left|right`

- `overflow`为 `hidden|auto|scroll`
- `display`为` table-cell|table-caption|inline-block|inline-flex|flex`
- `position`为 `absolute|fixed`
- 根元素

## 3、BFC布局规则

- 内部的`Box`会在垂直方向，一个接一个地放置(即块级元素独占一行)。
- `BFC`的区域不会与`float box`重叠(**利用这点可以实现自适应两栏布局**)。
- 内部的`Box`垂直方向的距离由`margin`决定。属于同一个`BFC`的两个相邻`Box`的`margin`会发生重叠(**`margin`重叠三个条件:同属于一个BFC;相邻;块级元素**)。
- 计算BFC的高度时，浮动元素也参与计算。（清除浮动` haslayout`）
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

