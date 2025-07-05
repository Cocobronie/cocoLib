# JavaScript 函数式编程

::: tip 参考

[一文带你了解什么是JavaScript 函数式编程？ - 掘金 (juejin.cn)](https://juejin.cn/post/6844903908553261063)

[声明式编程和命令式编程的比较_js声明式编程和命令式编程](https://blog.csdn.net/gdtown/article/details/124488833)

:::

1. 什么是函数式编程？
2. 什么是声明式?
3. 什么是命令式?
4. 声明式与命令式对比?
5. 有哪些常见的函数式编程模型？
6. 什么是高阶函数？
7. 什么是柯里化？
8. 什么是函数组合？

## 1、什么是函数式编程

函数式编程是一种编程范式，主要是利用函数把运算过程封装起来，通过组合各种函数来计算结果。

```js
var string = 'functional programming is great';
var result = string
  .split(' ')
  .map(v => v.slice(0, 1).toUpperCase() + v.slice(1))
  .join(' ');
```

由此我们可以得到，函数式编程有两个基本特点：

- 通过函数来对数据进行转换
- 通过串联多个函数来求结果

## 2、对比声明式与命令式

- **命令式编程**：命令“机器”如何去做事情 *(how)*，这样不管你想要的是什么 *(what)* ，它都会按照你的命令实现。
- **声明式编程**：告诉“机器”你想要的是什么 *(what)*，让机器想出如何去做 *(how)*。

```js
//命令式
var CEOs = [];
for(var i = 0; i < companies.length; i++){
    CEOs.push(companies[i].CEO)
}

//声明式
var CEOs = companies.map(c => c.CEO);
```

`map`函数所做的事情是将直接**遍历整个数组的过程归纳抽离出来**，让我们专注于描述我们想要的是什么 *(what)*。

## 2、常见的函数式编程模型

### 2.1 闭包（Closure）

如果一个函数引用了**自由变量**，那么该函数就是一个闭包。何谓自由变量？自由变量是指不属于该函数作用域的变量(所有全局变量都是自由变量，严格来说引用了全局变量的函数都是闭包，但这种闭包并没有什么用，通常情况下我们说的闭包是指函数内部的函数)。

闭包的形成条件：

- 存在内、外两层函数
- 内层函数对外层函数的局部变量进行了引用

闭包的用途: **可以定义一些作用域局限的持久化变量，这些变量可以用来做缓存或者计算的中间量等**。

### 2.2 高阶函数

函数式编程倾向于复用一组通用的函数功能来处理数据，它通过使用**高阶函数**来实现。**高阶函数指的是一个函数以函数为参数，或以函数为返回值，或者既以函数为参数又以函数为返回值**。

高阶函数经常用于：

- 抽象或隔离行为、作用，异步控制流程作为回调函数，`promises`，`monads`等
- 创建可以泛用于各种数据类型的功能
- 部分应用于函数参数（偏函数应用）或创建一个柯里化的函数，用于复用或函数复合。
- 接受一个函数列表并返回一些由这个列表中的函数组成的复合函数。

JavaScript 语言是原生支持高阶函数的, 例如`Array.prototype.map`，`Array.prototype.filter` 和` Array.prototype.reduce` 是JavaScript中内置的一些高阶函数，使用高阶函数会让我们的代码更清晰简洁。

### 2.3 函数柯里化

柯里化又称**部分求值**，柯里化函数会接收一些参数，然后不会立即求值，而是继续返回一个**新函数**，将传入的参数通过闭包的形式保存，等到被真正求值的时候，再一次性把所有传入的参数进行求值。

```js
// 普通函数
function add(x,y){
    return x + y;
}
add(1,2); // 3
// 函数柯里化
var add = function(x) {
  return function(y) {
    return x + y;
  };
};
var increment = add(1);
increment(2);// 3
```

```js
function curryIt(fn) {
  // 参数fn函数的参数个数
  var n = fn.length;
  var args = [];
  return function(arg) {
    args.push(arg);
    if (args.length < n) {
      return arguments.callee; // 返回这个函数的引用
    } else {
      return fn.apply(this, args);
    }
  };
}
function add(a, b, c) {
  return [a, b, c];
}
var c = curryIt(add);
var c1 = c(1);
var c2 = c1(2);
var c3 = c2(3);
console.log(c3); //[1, 2, 3]
```

由此我们可以看出，柯里化是一种“**预加载”**函数的方法，通过传递较少的参数，得到一个已经记住了这些参数的新函数，某种意义上讲，这是一种对参数的**“缓存”**，是一种非常高效的编写函数的方法！

### 2.4 函数组合 (Composition)

函数式编程的一个特点是通过**串联函数**来求值。然而，随着串联函数数量的增多，代码的可读性就会不断下降。函数组合就是用来解决这个问题的方法。 假设有一个 `compose` 函数，它可以接受多个函数作为参数，然后返回一个新的函数。当我们为这个新函数传递参数时，该参数就会「流」过其中的函数，最后返回结果。

```js
//两个函数的组合
var compose = function(f, g) {
    return function(x) {
        return f(g(x));
    };
};

//或者
var compose = (f, g) => (x => f(g(x)));
var add1 = x => x + 1;
var mul5 = x => x * 5;
compose(mul5, add1)(2);// =>15 
```

