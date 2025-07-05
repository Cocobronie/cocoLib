
# watchEffect高级侦听器


## 1、使用方法
如果用到message 就只会监听message 就是用到几个监听几个 而且是非惰性 会默认调用一次
```
let message = ref<string>('')
let message2 = ref<string>('')
 watchEffect(() => {
    //console.log('message', message.value);
    console.log('message2', message2.value);
})
```

## 2、清除副作用
就是在触发监听之前会调用一个函数可以处理你的逻辑例如防抖
```
let message = ref<string>('')
let message2 = ref<string>('')
 watchEffect((oninvalidate) => {
    //console.log('message', message.value);
    oninvalidate(()=>{
        
    })
    console.log('message2', message2.value);
})
```

## 3、停止跟踪
watchEffect 返回一个函数 调用之后将停止更新
```
const stop =  watchEffect((oninvalidate) => {
    //console.log('message', message.value);
    oninvalidate(()=>{
 
    })
    console.log('message2', message2.value);
},{
    flush:"post",
    onTrigger () {
 
    }
})
stop()
```

## 4、更多的配置项 `flush`、`onTrigger()`
```
watchEffect((oninvalidate) => {
    //console.log('message', message.value);
    oninvalidate(()=>{
 
    })
    console.log('message2', message2.value);
},{
    flush:"post",
    onTrigger () {    
    }
})
```
