# CSS元素的隐藏

## display 属性

`display `属性用于设置一个元素应如何显示。

- `display: none ；`隐藏对象 
- `display：block ；`除了转换为块级元素之外，同时还有显示元素的意思 
- `display `隐藏元素后，不再占有原来的位置。



## visibility 可见性

`visibility` 属性用于指定一个元素应可见还是隐藏。

- `visibility：visible ; `元素可视
- `visibility：hidden; `元素隐藏 
- `visibility` 隐藏元素后，继续占有原来的位置。 
- 如果隐藏元素想要原来位置， 就用 `visibility：hidden `
- 如果隐藏元素不想要原来位置， 就用` display：none` (用处更多 重点）

## overflow 溢出

`overflow` 属性指定了如果内容溢出一个元素的框（超过其指定高度及宽度） 时，会发生什么。

<img src="/images/image-20230624185740619.png" alt="image-20230624185740619" style="zoom:50%;" />
