# 浏览器与Node的事件循环(Event Loop)有何区别?

::: tip 参考

[浏览器与Node的事件循环(Event Loop)有何区别? - 掘金 (juejin.cn)](https://juejin.cn/post/6844903761949753352)

[js 同步任务和异步任务_F N Janine的博客-CSDN博客](https://blog.csdn.net/NancyFyn/article/details/118381312)

[什么是宏任务、微任务？宏任务、微任务有哪些？又是怎么执行的？_宏任务和微任务_](https://blog.csdn.net/NancyFyn/article/details/118407548)

[详解宏任务、微任务与事件循环 Event Loop - 掘金 (juejin.cn)](https://juejin.cn/post/7020710294083092493)

:::

1. 浏览器有哪些常驻线程？
2. 宏任务还是微任务是什么？
3. Event Loop 过程是怎样的呢？
4. 哪些属于宏任务？哪些属于微任务？

## 1、进程与线程

### 1.1 JS线程

javascript从诞生之日起就是一门 `单线程` 的 `非阻塞` 的脚本语言，所以一切 Javascript “**多线程**” 都是**单线程**模拟出来的。

#### **非阻塞** 

**非阻塞**是当代码需要进行一项异步任务（无法立刻返回结果，需要花一定时间才能返回的任务，如I/O事件）的时候，**主线程**会挂起（pending）这个任务，然后在异步任务返回结果的时候再根据一定规则去执行相应的回调。

JS是如何实现**非阻塞**的呢？——事件循环

#### js任务分为两类

- **同步任务**：同步任务不需要进行等待可立即看到执行结果，比如`console`。
- **异步任务**：异步任务需要等待一定的时候才能看到结果，比如`setTimeout`、网络请求。

#### 事件循环

<img src="/images/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L05hbmN5Rnlu,size_16,color_FFFFFF,t_70.png" alt="在这里插入图片描述" style="zoom:50%;" />

- 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入`Event Table`并注册函数。
- 当指定的事情完成时，`Event Table`会将这个函数移入`Event Queue`。
- **主线程**内的任务执行完毕为空，会去`Event Queue`读取对应的函数，进入**主线程**执行。
- 上述过程会不断重复，也就是常说的`Event Loop`(事件循环)。
  

### 1.2 浏览器进程与线程

以Chrome浏览器中为例，当你打开一个 **Tab 页**时，其实就是创建了一个**进程**。当你发起一个**请求**时，其实就是创建了一个**线程**，当请求结束后，该线程可能就会被销毁。

浏览器内核是**多线程**，在内核控制下各线程相互配合以保持同步，一个浏览器通常由以下常驻线程组成：

- GUI 渲染线程
- JavaScript引擎线程
- 定时触发器线程
- 事件触发线程
- 异步http请求线程



## 2、浏览器中的 Event Loop

### 2.1 Micro-Task （宏任务）与 Macro-Task（微任务）

**异步任务**被分为两类：微任务 `(micro task)` 和宏任务 `(macro task)`。

在ES3以及以前的版本中，JavaScript本身没有发起**异步请求**的能力，也就没有**微任务**的存在。在ES5之后，JavaScript引入了`Promise`，这样，不需要浏览器，JavaScript引擎自身也能够发起**异步任务**了。

::: tips ES6 规范

ES6 规范中，`microtask `称为` jobs`，`macrotask `称为` task`
**宏任务**是由**宿主**发起的，而**微任务**由JavaScript**自身**发起。

:::

**宏任务队列可以有多个，微任务队列只有一个**

以下事件属于**宏任务**：

- `setInterval()`
- `setTimeout()`

以下事件属于**微任务**：

- `promise.then()`
- `Async/Await(实际就是promise)`
- `new MutaionObserver()`

![image-20230615190630954](/images/image-20230615190630954.png)

### 2.2 例题

```js
Promise.resolve().then(()=>{
  console.log('Promise1')  
  setTimeout(()=>{
    console.log('setTimeout2')
  },0)
})
setTimeout(()=>{
  console.log('setTimeout1')
  Promise.resolve().then(()=>{
    console.log('Promise2')    
  })
},0)
```

最后输出结果是Promise1，setTimeout1，Promise2，setTimeout2

- 一开始执行栈的**同步任务**执行完毕，会去查看是否有**微任务**队列，上题中存在(有且只有一个)，然后执行微任务队列中的所有任务输出`Promise1`，同时会生成一个宏任务 `setTimeout2`
- xxxxxxxxxx // 在循环中最好也别使用函数表达式。for (var k = 0; k < 10; k++) {  var t = function(a) {    // 创建了10次  函数对象。    console.log(a)  }  t(k)}// 推荐用法function t(a) {  console.log(a)}for (var k = 0; k < 10; k++) {  t(k)}t = nulljs
- 在执行宏任务`setTimeout1`时会生成微任务`Promise2` ，放入**微任务**队列中，接着先去清空微任务队列中的所有任务，输出 `Promise2`
- 清空完微任务队列中的所有任务后，就又会去**宏任务**队列取一个，这回执行的是 `setTimeout2`

## 3、Node 中的 Event Loop

