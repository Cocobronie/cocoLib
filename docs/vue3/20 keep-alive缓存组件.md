# 内置组件keep-alive

有时候我们不希望组件被重新渲染影响使用体验；或者处于性能考虑，避免多次重复渲染降低性能。而是希望组件可以缓存下来,维持当前的状态。这时候就需要用到keep-alive组件。

## 使用场景

```vue
<!-- 基本 -->
<keep-alive>
  <component :is="view"></component>
</keep-alive>
 
<!-- 多个条件判断的子组件 -->
<keep-alive>
  <A v-if="flag"></A>
  <B v-else></B>
</keep-alive>
 
<!-- 和 `<transition>` 一起使用 -->
<transition>
  <keep-alive>
    <component :is="view"></component>
  </keep-alive>
</transition>
```



##  `include` 、 `exclude`、`max`属性

```vue
<keep-alive>						//默认全部缓存
  <A v-if="flag"></A>
  <B v-else></B>
</keep-alive>

<keep-alive :include="['A']">		//只缓存A组件
  <A v-if="flag"></A>
  <B v-else></B>
</keep-alive>

<keep-alive :exclude="['A']">		//不缓存A组件
  <A v-if="flag"></A>
  <B v-else></B>
</keep-alive>

<keep-alive :max=10>				//缓存10个比较常用的组件
  <A v-if="flag"></A>
  <B v-else></B>
</keep-alive>
```



## keep-alive生命周期

```tsx
onMounted(() => {
    //初始化
})

onActivated(() => {
    //keep-alive初始化
})

onDeactivated(() => {
    //keep-alive卸载
})

onUnmounted(() => {
    //卸载
})
```

**`onActivated`、`onDeactivated`，只有使用`keep-alive`组件时才有**

- **初次进入时：** `onMounted`  =>  `onActivated`
- **退出后**触发 `deactivated`
- **再次进入**只会触发 `onActivated`
- 事件挂载的方法等，只执行一次的放在 `onMounted`中；组件每次进去执行的方法放在 `onActivated`中
