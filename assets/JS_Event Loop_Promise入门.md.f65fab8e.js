import{_ as e,o as r,c as a,O as o}from"./chunks/framework.23072b34.js";const n="/cocoLib/images/9b2b980e2959c4f996cafddb03fa5d4d.png",i="/cocoLib/images/60b9ff398449db2dcfef9197e2187ae6.png",b=JSON.parse('{"title":"Promise深入 + 自定义Promise","description":"","frontmatter":{},"headers":[],"relativePath":"JS/Event Loop/Promise入门.md","filePath":"JS/Event Loop/Promise入门.md","lastUpdated":null}'),s={name:"JS/Event Loop/Promise入门.md"},t=o(`<h1 id="promise深入-自定义promise" tabindex="-1">Promise深入 + 自定义Promise <a class="header-anchor" href="#promise深入-自定义promise" aria-label="Permalink to &quot;Promise深入 + 自定义Promise&quot;">​</a></h1><h2 id="_1-准备" tabindex="-1">1. 准备 <a class="header-anchor" href="#_1-准备" aria-label="Permalink to &quot;1. 准备&quot;">​</a></h2><h3 id="_1-1-函数对象与实例对象" tabindex="-1">1.1. 函数对象与实例对象 <a class="header-anchor" href="#_1-1-函数对象与实例对象" aria-label="Permalink to &quot;1.1. 函数对象与实例对象&quot;">​</a></h3><pre><code>1. 函数对象: 将函数作为对象使用时, 简称为函数对象
2. 实例对象: new 函数产生的对象, 简称为对象
</code></pre><h3 id="_1-2-回调函数的分类" tabindex="-1">1.2. 回调函数的分类 <a class="header-anchor" href="#_1-2-回调函数的分类" aria-label="Permalink to &quot;1.2. 回调函数的分类&quot;">​</a></h3><pre><code>1. 同步回调: 
    理解: 立即执行, 完全执行完了才结束, 不会放入回调队列中
    例子: 数组遍历相关的回调函数 / Promise的excutor函数
2. 异步回调: 
    理解: 不会立即执行, 会放入回调队列中将来执行
    例子: 定时器回调 / ajax回调 / Promise的成功|失败的回调
</code></pre><h3 id="_1-3-js中的error" tabindex="-1">1.3. JS中的Error <a class="header-anchor" href="#_1-3-js中的error" aria-label="Permalink to &quot;1.3. JS中的Error&quot;">​</a></h3><pre><code>1. 错误的类型
    Error: 所有错误的父类型
    ReferenceError: 引用的变量不存在
    TypeError: 数据类型不正确的错误
    RangeError: 数据值不在其所允许的范围内
    SyntaxError: 语法错误
2. 错误处理
    捕获错误: try ... catch
    抛出错误: throw error
3. 错误对象
    message属性: 错误相关信息
    stack属性: 函数调用栈记录信息
</code></pre><h2 id="_2-promise的理解和使用" tabindex="-1">2. Promise的理解和使用 <a class="header-anchor" href="#_2-promise的理解和使用" aria-label="Permalink to &quot;2. Promise的理解和使用&quot;">​</a></h2><h3 id="_2-1-promise是什么" tabindex="-1">2.1. Promise是什么? <a class="header-anchor" href="#_2-1-promise是什么" aria-label="Permalink to &quot;2.1. Promise是什么?&quot;">​</a></h3><pre><code>1.抽象表达: 
    Promise是JS中进行异步编程的新的解决方案(旧的是谁?)
2.具体表达:
    从语法上来说: Promise是一个构造函数
    从功能上来说: promise对象用来封装一个异步操作并可以获取其结果
3. promise的状态改变(只有2种, 只能改变一次)
    pending变为resolved
    pending变为rejected
4. promise的基本流程
</code></pre><p><img src="`+n+`" alt="promise基本流程"></p><h3 id="_2-2-为什么要用promise" tabindex="-1">2.2. 为什么要用Promise? <a class="header-anchor" href="#_2-2-为什么要用promise" aria-label="Permalink to &quot;2.2. 为什么要用Promise?&quot;">​</a></h3><pre><code>1. 指定回调函数的方式更加灵活: 可以在请求发出甚至结束后指定回调函数
2. 支持链式调用, 可以解决回调地狱问题
</code></pre><h3 id="_2-3-如何使用promise" tabindex="-1">2.3. 如何使用Promise? <a class="header-anchor" href="#_2-3-如何使用promise" aria-label="Permalink to &quot;2.3. 如何使用Promise?&quot;">​</a></h3><pre><code>1. 主要API
    Promise构造函数: Promise (excutor) {}
    Promise.prototype.then方法: (onResolved, onRejected) =&gt; {}
    Promise.prototype.catch方法: (onRejected) =&gt; {}
    Promise.resolve方法: (value) =&gt; {}
    Promise.reject方法: (reason) =&gt; {}
    Promise.all方法: (promises) =&gt; {}
    Promise.race方法: (promises) =&gt; {}
2. 几个重要问题
    如何改变promise的状态?
    一个promise指定多个成功/失败回调函数, 都会调用吗?
    promise.then()返回的新promise的结果状态由什么决定?
    改变promise状态和指定回调函数谁先谁后?
    promise如何串连多个操作任务?
    promise异常传(穿)透?
    中断promise链
</code></pre><h2 id="_3-自定义promise" tabindex="-1">3. 自定义Promise <a class="header-anchor" href="#_3-自定义promise" aria-label="Permalink to &quot;3. 自定义Promise&quot;">​</a></h2><pre><code>1. 定义整体结构
2. Promise构造函数的实现
3. promise.then()/catch()的实现
4. Promise.resolve()/reject()的实现
5. Promise.all/race()的实现
6. Promise.resolveDelay()/rejectDelay()的实现
7. ES6 class版本
</code></pre><h2 id="_4-async与await" tabindex="-1">4. async与await <a class="header-anchor" href="#_4-async与await" aria-label="Permalink to &quot;4. async与await&quot;">​</a></h2><pre><code>1. async 函数
    函数的返回值为promise对象
    promise对象的结果由async函数执行的返回值决定
   
2. await 表达式
    await右侧的表达式一般为promise对象, 但也可以是其它的值
    如果表达式是promise对象, await返回的是promise成功的值
    如果表达式是其它值, 直接将此值作为await的返回值

3. 注意:
    await必须写在async函数中, 但async函数中可以没有await
    如果await的promise失败了, 就会抛出异常, 需要通过try...catch来捕获处理
</code></pre><h2 id="_5-js异步之宏队列与微队列" tabindex="-1">5. JS异步之宏队列与微队列 <a class="header-anchor" href="#_5-js异步之宏队列与微队列" aria-label="Permalink to &quot;5. JS异步之宏队列与微队列&quot;">​</a></h2><p><img src="`+i+`" alt="宏队列与微队列"></p><pre><code>1. 宏列队: 用来保存待执行的宏任务(回调), 比如: 定时器回调/DOM事件回调/ajax回调
2. 微列队: 用来保存待执行的微任务(回调), 比如: promise的回调/MutationObserver的回调
3. JS执行时会区别这2个队列
	JS引擎首先必须先执行所有的初始化同步任务代码
	每次准备取出第一个宏任务执行前, 都要将所有的微任务一个一个取出来执行
</code></pre>`,23),c=[t];function m(p,d,l,h,_,P){return r(),a("div",null,c)}const f=e(s,[["render",m]]);export{b as __pageData,f as default};
