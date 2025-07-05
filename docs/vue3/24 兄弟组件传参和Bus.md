# 兄弟组件传参和Bus

## 1.借助父组件传参

例如父组件为App 子组件为A 和 B他两个是同级的

### 父组件

```vue
<template>
    <div>
        <A @on-click="getFalg"></A>
        <B :flag="Flag"></B>
    </div>
</template>
    
<script setup lang='ts'>
import A from './components/A.vue'
import B from './components/B.vue'
import { ref } from 'vue'
let Flag = ref<boolean>(false)
const getFalg = (flag: boolean) => {
   Flag.value = flag;
}
</script>
    
<style>
</style>
```



### A组件

传出一个参数：flag

```vue
<template>
    <div>
        <button @click='emitB'> 派发一个事件 </button>
    </div>
</template>
    
<script setup lang='ts'>
const emit  = defineEmits(['on-click'])
let Flag = false
const emitB = () => {
   emit('on-click',Flag)
}
</script>
    
<style>
</style>
```





### B组件

接受一个参数flag

```vue
<template>
    <div>
        {{flag}}
    </div>
</template>
    
<script setup lang='ts'>
    type Props = {
        flag : boolean
    }
    defineProps<Props>()
</script>
    
<style>
</style>
```





## 2.Event Bus

我们在**Vue2**可以使用`$emit `传递 `$on`监听 `emit`传递过来的事件，这个原理其实是运用了**JS设计模式**之**发布订阅模式**

```tsx
type BusClass<T> = {			//相当于定义了一个接口
    emit: (name: T) => void		//发布
    on: (name: T, callback: Function) => void	//订阅
}
type BusParams = string | number | symbol 
type List = {
    [key: BusParams]: Array<Function>
}
class Bus<T extends BusParams> implements BusClass<T> {
    list: List
    constructor() {
        this.list = {}
    }
    emit(name: T, ...args: Array<any>) {
        let eventName: Array<Function> = this.list[name]
        eventName.forEach(ev => {
            ev.apply(this, args)
        })
    }
    on(name: T, callback: Function) {
        let fn: Array<Function> = this.list[name] || [];
        fn.push(callback)
        this.list[name] = fn
    }
}
 
export default new Bus<number>()
```

### A组件发布

```tsx
import Bus from '../Bus'
let flag = false
const emitB = ()=>{
    flag = !flag
    Bus.emit('on-click',flag)	//发布
}
```

### B组件订阅

```tsx
import Bus from '../Bus'
let Flag = ref(false)
Bus.on('on-click',(flag:boolean)=>{
	Flag = flag
})
```

