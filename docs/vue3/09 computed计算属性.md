
# computed计算属性

计算属性就是当**依赖的属性的值发生变化**的时候，才会触发他的更改，如果依赖的值，不发生变化的时候，使用的是**缓存**中的属性值。

## 1. **computed用法**

- 函数形式

```js
import { computed, reactive, ref } from 'vue'
let price = ref(0)//$0
 
let m = computed<string>(()=>{
   return `$` + price.value
})
 
price.value = 500
```

- 对象形式

```vue
<template>
   <div>{{ mul }}</div>
   <div @click="mul = 100">click</div>
</template>
 
<script setup lang="ts">
import { computed, ref } from 'vue'
let price = ref<number | string>(1)//$0
let mul = computed({
   get: () => {
      return price.value
   },
   set: (value) => {
      price.value = 'set' + value
   }
})
</script>
 
<style>
</style>
```

