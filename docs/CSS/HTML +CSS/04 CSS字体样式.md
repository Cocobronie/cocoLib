# CSS字体样式

<img src="/images/image-20230623195614498.png" alt="image-20230623195614498" style="zoom:50%;" />





## 字体大小

```CSS
p { 
 font-size: 20px; 
}
```

- px（像素）大小是我们网页的最常用的单位 
- 谷歌浏览器默认的文字大小为16px 
- 不同浏览器可能默认显示的字s号大小不一致，我们尽量给一个明确值大小，不要默认大小 
- 可以给 body 指定整个页面文字的大小

## 字体系列

```CSS
p { font-family:"微软雅黑";}
```

- 各种字体之间必须使用英文状态下的逗号隔开
-  一般情况下,如果有空格隔开的多个单词组成的字体,加引号. 
- 尽量使用系统默认自带字体，保证在任何用户的浏览器中都能正确显示 
- 最常见的几个字体：`body {font-family: 'Microsoft YaHei',tahoma,arial,'Hiragino Sans GB'; }`

## 字体粗细

```css
p { 
 font-weight: bold;
}
```

<img src="/images/image-20230623200014825.png" alt="image-20230623200014825" style="zoom:50%;" />

## 文字样式

```css
p { 
 font-style: normal;
}
```

<img src="/images/image-20230623200039261.png" alt="image-20230623200039261" style="zoom:50%;" />

## 字体复合属性

```css
body { 
 font: font-style font-weight font-size/line-height font-family;
}
```

- 使用` font` 属性时，必须按上面语法格式中的顺序书写，**不能更换顺序**，并且各个属性间以空格隔开 
- 不需要设置的属性可以省略（取默认值），但必须保留 `font-size `和 `font-family` 属性，否则 `font `属性将不起作用