# 插槽slot

插槽就是子组件中的提供给父组件使用的一个**占位符**，用`<slot></slot> `表示，父组件可以在这个占位符中填充任何模板代码，如 **HTML、组件**等，填充的内容会替换子组件的`<slot></slot>`标签。

## 1、匿名插槽

- **子组件`<Dialog>`**

```vue
<template>
    <div>
       <slot></slot>
    </div>
</template>
```

- **父组件**

```vue
<Dialog>
   <template v-slot>
       <div>2132</div>
   </template>
</Dialog>
```



## 2、具名插槽

具名插槽其实就是给插槽取个名字。一个子组件可以放多个插槽，而且可以放在不同的地方，而父组件填充内容时，可以根据这个名字把内容填充到对应插槽中。

- **子组件`<Dialog>`**

```vue
<template>
<div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
</div>
</template>
```

- **父组件**

```vue
<Dialog>
    <template v-slot:header>
       <div>1</div>
   </template>
   <template v-slot>		// 这里可简写成 #default
       <div>2</div>
   </template>
   <template #footer>		// v-slot:footer的简写
       <div>3</div>
   </template>
</Dialog>
```



## 3、作用域插槽

在子组件**动态绑定**参数 派发给父组件的slot去使用

- **子组件`<Dialog>`**

```vue
<template>
<div>
	<slot name="header"></slot>
    <div v-for:"item in List">
        <slot :data = "item"></slot>		//这样可以把值传到父组件
    </div>
    <slot name="footer"></slot>
</div>
</template>
```

- **父组件**

```vue
 <Dialog>
    <template #header>
        <div>1</div>
    </template>
    <template #default="{ data }">			//将data解构出来
        <div>{{ data }}</div>
    </template>
    <template #footer>
        <div>3</div>
    </template>
</Dialog>
```



## 4、动态插槽

插槽可以是一个**变量名**

- **子组件`<Dialog>`**

```vue
<template>
<div>
	<slot name="header"></slot>
    <slot name="footer"></slot>
</div>
</template>
```

- **父组件**

```vue
<Dialog>
    <template #[name]>			//插槽是一个变量
        <div>
            23
        </div>
    </template>
</Dialog>
<script>
    const name = ref('header')
</script>
```

