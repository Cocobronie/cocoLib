# CSS选择器

- 基础选择器

  - 标签选择器
  - 类选择器
  - id 选择器
  - 通配符选择器

  <img src="/images/image-20230623195314877.png" alt="image-20230623195314877" style="zoom:50%;" />

- 复合选择器

  - 后代选择器
  - 子选择器
  - 并集选择器
  - 伪类选择器

<img src="/images/image-20230623195416724.png" alt="image-20230623195416724" style="zoom:30%;" />

## 后代选择器

```css
 /* 后代选择器 */
    ul li{
        color: yellowgreen;
    }
    ul li a{
        color: red;
    }
```

## 子选择器

必须是**亲儿子**，其孙子、重孙之类都不归他管. 你也可以叫他 亲儿子选择器

```css
 /* 子选择器 */
    .nav>a{
        color: red;
    }
```

## 并集选择器

```css
 /* 并集选择器 */
    div,
    p,
    .pig li{
        color: antiquewhite;
    }
```

- 通常不同的选择器之间用逗号链接，并且**换行**

## 伪类选择器

### 链接伪类选择器

```css
 a:link{         /* 所有未被访问过的链接 */
        color: black;
}
a:visited{      /* 所有被访问过的链接 */
    color: aqua;
}
a:hover{        /* 鼠标经过 */
    color: aquamarine;
}   
a:active{       /* 鼠标正在按下还未弹起 */
    color: bisque;
}
```

链接伪类选择器注意事项 

1. 为了确保生效，请按照 LVHA 的循顺序声明 :`link－:visited－:hover－:active`。
2. 记忆法：love hate 或者 lv 包包 hao 。 
3. 因为 a 链接在浏览器中具有默认样式，所以我们实际工作中都需要给链接单独指定样式。

## focus伪类选择器

`:focus` 伪类选择器用于选取获得焦点的表单元素。 焦点就是光标，一般情况`input`  **类表单元素**才能获取，因此这个选择器也主要针对于**表单元素**来说

```css
input:focus{
        background: red;
}
```

