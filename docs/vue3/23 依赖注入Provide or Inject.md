# 依赖注入Provide / Inject

## 使用场景

<img src="../public/images/vue3/5f4ea9e16eda6e37ab336075a788ae15.png" alt="img" style="zoom:67%;" />

通常，当我们需要从父组件向子组件传递数据时，我们使用 `props`。想象一下这样的结构：有一些深度嵌套的组件，而深层的子组件只需要父组件的部分内容。在这种情况下，如果仍然将 `prop` 沿着组件链逐级传递下去，可能会很麻烦。

## 使用方法

### 祖先组件

```tsx
import {provide} from 'vue'
const colorValue = ref<string>('red')
provide('color',colorValue)

```

### 父亲组件

```tsx
import {inject,Ref} from 'vue'
const color = inject<Ref<string>>('color')

background:v-bind(color)	//vue3特有的，在css里使用setup里的变量
```

### 儿子组件

```tsx
import {inject,Ref} from 'vue'
const color = inject<Ref<string>>('color')
const change = ()=>{			//改变 color的值，父组件的值也会改变
    color!.value = 'yellow'		//!.这里是非空断言，color不然就要先定义一个默认值
}

background:v-bind(color)	//vue3特有的，在css里使用setup里的变量
```

如果不想改变父组件的值，可以加一个只读函数

**祖先组件**

```tsx
import {provide,readonly} from 'vue'
const colorValue = ref<string>('red')
provide('color',readonly(colorValue))
```

