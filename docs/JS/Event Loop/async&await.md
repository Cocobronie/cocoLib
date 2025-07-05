# 01 async & await

```js
async function async1() {
	console.log('async1 start')
//await是等待，需要把第⼀轮微任务执⾏完，再执⾏下⾯的内容
//await后⾯的内容执⾏完，⼜执⾏宏任务
	await async2()
	console.log('async1 end')
}
async function async2() {
	return Promise.resolve().then(_ => {
		console.log('async2 promise')
	})
}
console.log('start')		//同步任务
setTimeout(function () {	//异步任务：宏任务
	console.log('setTimeout')
}, 0)
async1()					//异步任务：宏任务
new Promise(function (resolve) { //异步任务：宏任务
	console.log('promise1')
	resolve()
}).then(function () {
	console.log('promise2')		//微任务
})
```

## 答案

```js
//start
//async1 start
//promise1
//async2 promise
//promise2
//async1 end
//setTimeout

```

