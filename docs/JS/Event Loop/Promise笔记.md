## 异步编程

**`Promise`出现之前异步编程旧的解决方案——单纯的使用回调函数**

- fs文件操作

```js
require('fs').readFile('./index.html',(err,data)=>{})
```

- 数据库操作
- AJAX

```js
$,get('.server',(data)={})
```

- 定时器

```js
setTimeout(()=>{},2000)
```



## 回调地狱

回调函数嵌套调用, 外部回调函数异步执行的结果是嵌套的回调执行的条件

**回调地狱的缺点?** 

不便于阅读 不便于异常处理 

**解决方案?** 

promise 链式调用 

**终极解决方案?** 

async/await



## Promise状态

实例对象的一个属性 `PromiseState`

- `pending` 未决定的
- `resolved/fullfilled` 成功
- `reject` 失败



## Promise对象的值

实例对象的一个属性 `PromiseResult`

保存着异步任务**失败/成功**的结果

- `resolve(value)`
- `reject(reason)`

