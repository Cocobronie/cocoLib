# CSS文本样式

<img src="/images/image-20230623201336140.png" alt="image-20230623201336140" style="zoom:57%;" />

##  文本颜色

```css
div { 
 color: red;
}
```

<img src="/images/image-20230623201515142.png" alt="image-20230623201515142" style="zoom:67%;" />

## 对齐文本

```css
div { 
 text-align: center;
}
```

<img src="/images/image-20230623201541243.png" alt="image-20230623201541243" style="zoom:67%;" />

## 装饰文本

```css
div { 
 text-decoration：underline；
}
```

<img src="/images/image-20230623201612277.png" alt="image-20230623201612277" style="zoom:67%;" />

## 文本缩进

```css
div { 
 text-indent: 10px;
}
```

`text-indent `属性用来指定文本的**第一行**的缩进，通常是将段落的首行缩进。

```css
p { 
 text-indent: 2em;
}
```

`em` 是一个相对单位，就是当前元素`(font-size)` 1 个文字的大小, 如果当前元素没有设置大小，则会按照父元 素的 `1 `个文字大小。

## 行间距

```css
p { 
 line-height: 26px;
}
```

<img src="/images/image-20230623201817656.png" alt="image-20230623201817656" style="zoom:33%;" />
