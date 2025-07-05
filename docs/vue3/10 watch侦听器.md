
# watch侦听器

`watch` 需要侦听特定的数据源，并在单独的回调函数中执行副作用，接受三个参数

```js
//1、watch第一个参数监听源
//2、watch第二个参数回调函数cb（newVal,oldVal）
//3、watch第三个参数一个options配置项是一个对象
{
	immediate:true //是否立即调用一次
	deep:true //是否开启深度监听
}

//案例一：深度监听
let message = ref({
    nav:{
        bar:{
            name:""
        }
    }
}) 

watch(message, (newVal, oldVal) => {
    console.log('新的值----', newVal);
    console.log('旧的值----', oldVal);
},{
    immediate:true,
    deep:true
})

//案例二：监听多个ref 
let message = ref('')
let message2 = ref('')
 
watch([message,message2], (newVal, oldVal) => {
    console.log('新的值----', newVal);
    console.log('旧的值----', oldVal);
})

//案例三：使用reactive监听深层对象开启和不开启deep 效果一样
let message = reactive({
    nav:{
        bar:{
            name:""
        }
    }
}) 
 
watch(message, (newVal, oldVal) => {
    console.log('新的值----', newVal);
    console.log('旧的值----', oldVal);
})

//案例四：监听reactive 单一值，最好使用箭头函数
let message = reactive({
    name:"",
    name2:""
})
 
 
watch(()=>message.name, (newVal, oldVal) => {
    console.log('新的值----', newVal);
    console.log('旧的值----', oldVal);
})

```
