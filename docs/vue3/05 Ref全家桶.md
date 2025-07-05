
# Ref全家桶

## 1. **ref**

无法改变页面上notRef的值，message的值会改变

```vue
<template>
  <div>
    <button @click="changeMsg">change</button>
    <div>{{ notRef }}</div>
    <div>{{ message }}</div>
  </div>
</template> 
 
<script setup lang="ts">
let notRef:number = 123
let message: Ref<string | number> = ref("我是message")
const changeMsg = () => {
   notRef = 321
   message = "change msg"
}
</script>
 
<style>
</style>
```

## 2. **isRef**

```vue
<script setup lang="ts">
import { ref, Ref,isRef } from 'vue'
let message: Ref<string | number> = ref("我是message")
let notRef:number = 123
const changeMsg = () => {
  message.value = "change msg"
  console.log(isRef(message)); //true
  console.log(isRef(notRef)); //false
}
</script>
```

## 3. **shallowRef**

`shallowRef` 和 `Ref `不能一起使用！！

因为`Ref`底层会调用`triggerRef`强制更新DOM

```vue
<template>
  <div>
    <button @click="changeMsg">change</button>
    <div>{{ message }}</div>
  </div>
</template> 
 
<script setup lang="ts">
import { Ref, shallowRef } from 'vue'
type Obj = {
  name: string
}
let message: Ref<Obj> = shallowRef({
  name: "小满"
})
 
const changeMsg = () => {
  message.value.name = '大满'			//页面不会改变，只改变值
  message.value = { name: "大满" }	//页面会改变
}
</script>
 
<style>
</style>
```

## 4. **triggerRef** 

强制更新页面DOM

```vue
<template>
  <div>
    <button @click="changeMsg">change</button>
    <div>{{ message }}</div>
  </div>
</template> 
 
<script setup lang="ts">
import { Ref, shallowRef,triggerRef } from 'vue'
type Obj = {
  name: string
}
let message: Ref<Obj> = shallowRef({
  name: "小满"
})
 
const changeMsg = () => {
  message.value.name = '大满'
  triggerRef(message)
}
</script> 
 
<style>
</style>
```

## 5. **customRef**

自定义ref 

`customRef` 是个**工厂函数**要求我们返回一个对象 并且实现 get 和 set 适合去做防抖之类的

工厂模式是一种设计模式，说白了就是一种简单的函数，这个函数可以创建对象，为它添加属性和方法，然后返回这个对象。就像一个工厂一样，可以批量制作某种类型的对象。这种设计模式是就是为了降低代码冗余。

```vue
<template>
 
  <div ref="div">小满Ref</div>
  <hr>
  <div>
    {{ name }}
  </div>
  <hr>
  <button @click="change">修改 customRef</button>
 
</template>
 
<script setup lang='ts'>
import { ref, reactive, onMounted, shallowRef, customRef } from 'vue'
 
function myRef<T = any>(value: T) {
  let timer:any;
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timer)				//防抖
        timer =  setTimeout(() => {
          console.log('触发了set')
          value = newVal
          trigger()
        },500)
      }
    }
  })
} 
 
const name = myRef<string>('小满') 
 
const change = () => {
  name.value = '大满'
}
 
</script>
<style scoped>
</style>
```

