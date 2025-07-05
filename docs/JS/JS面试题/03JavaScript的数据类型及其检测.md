# JavaScript的数据类型及其检测

::: tip 参考

[JavaScript的数据类型及其检测 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903688809480199)

[JavaScript 对象的四种方式比较 - 掘金 (juejin.cn)](https://juejin.cn/post/7092983906101641223)

:::

1. JavaScript有几种类型的值？
2. 两者的特点?
3. 如何对对象进行比较？
4. 检验数据类型的几种方法？



## 1、JavaScript有几种类型的值？

- **基本数据类型**
  - Undefined、Null、Boolean、Number、String、Symbol (ES6新增，表示独一无二的值)
- **引用数据类型(统称为Object对象)**
  - 对象、数组和函数

## 2、两者的特点

### 基本数据类型

- **存放在栈区**

- **值的比较**

  `==` : 只进行值的比较,会进行数据类型的转换。` === `: 不仅进行值得比较，还要进行数据类型的比较

### 引用数据类型(统称为Object对象)

- **同时保存在栈内存和堆内存**

<img src="/images/165e1fdbfc6d1030tplv-t2oaga2asx-zoom-in-crop-mark3024000.webp" alt="img" style="zoom:80%;" />

引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。**当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。**

- **值的比较**

JavaScript 提供了 3 种方法来对值进行比较：

- 严格相等运算符 `===`
- 宽松相等运算符 `==`
- `Object.is()` 函数

当使用上述任何一种方法比较对象时，只有在比较的值引用了相同的对象实例时，比较的结果为 `true`。这就是**参照相等性**。

## 3、检验数据类型

### 3.1 typeof

**typeof返回一个表示数据类型的字符串**

返回结果包括：number、boolean、string、symbol、object、undefined、function等7种数据类型，但不能判断null、array等。

数组和对象返回的都是object，这时就需要使用instanceof来判断。

```js
typeof Symbol(); // symbol 有效
typeof ''; // string 有效
typeof 1; // number 有效
typeof true; //boolean 有效
typeof undefined; //undefined 有效
typeof new Function(); // function 有效
typeof null; //object 无效
typeof [] ; //object 无效
typeof new Date(); //object 无效
typeof new RegExp(); //object 无效
```

### 3.2 instanceof

`instanceof` 是用来**判断A是否为B的实例**，表达式为：`A instanceof B`，如果A是B的实例，则返回`true`,否则返回`false`。**instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。**

```js
[] instanceof Array; //true
{} instanceof Object;//true
new Date() instanceof Date;//true
new RegExp() instanceof RegExp//true
```

关于数组的类型判断，还可以用ES6新增**Array.isArray()**

```js
Array.isArray([]);   // true
```

**instanceof 弊端**：

- 对于基本数据类型来说，字面量方式创建出来的结果和实例方式创建的是有一定的区别的

```js
console.log(1 instanceof Number)//false
console.log(new Number(1) instanceof Number)//true
```

- 不能检测null 和 undefined

### 3.3 constructor

constructor作用和instanceof非常相似。**但constructor检测 Object与instanceof不一样，还可以处理基本数据类型的检测。**

```js
var aa=[1,2];
console.log(aa.constructor===Array);//true
console.log(aa.constructor===RegExp);//false
console.log((1).constructor===Number);//true
var reg=/^$/;
console.log(reg.constructor===RegExp);//true
console.log(reg.constructor===Object);//false 
```

### 3.4 Object.prototype.toString.call()

**Object.prototype.toString.call() 最准确最常用的方式**。首先获取`Object`原型上的`toString`方法，让方法执行，让`toString`方法中的`this`指向第一个参数的值。

`Object`上的`toString`它的作用是返回当前方法执行的主体（方法中的`this`）所属类的详细信息

```js
Object.prototype.toString.call('') ;   // [object String]
Object.prototype.toString.call(1) ;    // [object Number]
Object.prototype.toString.call(true) ; // [object Boolean]
Object.prototype.toString.call(undefined) ; // [object Undefined]
Object.prototype.toString.call(null) ; // [object Null]
Object.prototype.toString.call(new Function()) ; // [object Function]
Object.prototype.toString.call(new Date()) ; // [object Date]
Object.prototype.toString.call([]) ; // [object Array]
Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
Object.prototype.toString.call(new Error()) ; // [object Error]
Object.prototype.toString.call(document) ; // [object HTMLDocument]
Object.prototype.toString.call(window) ; //[object global] window是全局对象global的引用
```

