# JSON.stringify()

::: tip 参考

[你会使用JSON.stringify()？ - 掘金 (juejin.cn)](https://juejin.cn/post/7092076424856600612)

:::

1. JSON.stringify()的使用方法?
2. JSON.stringify()的使用场景?
3. 哪些数据会被JSON.stringify()忽略?

## 1、使用方法

### 1.1 基本用法

`JSON.stringify()`可以把一个JavaScript对象**序列化**为一个JSON字符串。

```js
let json1 = {
  title: "Json.stringify",
  author: [
    "浪里行舟"
  ],
  year: 2021
};
let jsonText = JSON.stringify(json1);
//"{"title":"Json.stringify","author":["浪里行舟"],"year":2021}"
```

序列化JavaScript对象时:

- 所有**函数**和**原型成员**都在结果中省略
- 值为`undefined`的任何属性也会被跳过



### 1.2 第二个参数--过滤器

- 如果第二个参数是一个**数组**，那么`JSON.stringify()`返回的结果只会包含该数组中列出的**属性**。

```js
let json1 = {
  title: "Json.stringify",
  author: [
    "浪里行舟"
  ],
  year: 2021,
  like: 'frontend',
  weixin: 'frontJS'
};
let jsonText = JSON.stringify(json1, ['weixin']);
//"{"weixin":"frontJS"}"
```

- 如果第二个参数是一个**函数**，用**函数返回的值**替代原来的值进行序列化。

提供的函数接收两个参数：**属性名（key）**和**属性值（value）**。可以根据这个`key`决定要对相应属性执行什么操作。这个`key`始终是**字符串**，只是在值不属于某个键/值对时会是空字符串。

```js
const students = [
  {
    name: 'james',
    score: 100,
  }, {
    name: 'jordon',
    score: 60,
  }, {
    name: 'kobe',
    score: 90,
  }
];
// replacer将成绩从百分制替换为成绩等级
function replacer (key, value) {
  if (key === 'score') {
    if (value === 100) {
      return 'S';
    } else if (value >= 90) {
      return 'A';
    } else if (value >= 70) {
      return 'B';
    } else if (value >= 50) {
      return 'C';
    } else {
      return 'E';
    }
  }
  return value;
}
console.log(JSON.stringify(students, replacer, 4))
```

### 1.3 第三个参数--字符串缩进

`JSON.stringify()`方法的第三个参数控制缩进和空格。在这个参数是数值时，表示每一级缩进的**空格数**。

主要适用于**方便阅读**

```js
let json1 = {
  title: "Json.stringify",
  author: [
    "浪里行舟"
  ],
  year: 2021
};
let jsonText = JSON.stringify(json1, null, 4);
```

### 1.4 toJSON()方法--自定义JSON序列化

**有时候，对象需要在`JSON.stringify()`之上自定义JSON序列化**。此时，可以在要序列化的对象中添加`toJSON()`方法，序列化时会基于这个方法返回适当的JSON表示。

```js
let json1 = {
  title: "Json.stringify",
  author: [
    "浪里行舟"
  ],
  year: 2021,
  like: 'frontend',
  weixin: 'frontJS',
  toJSON: function () {		//在要序列化的对象中添加 toJSON() 方法
    return this.author
  }
};
console.log(JSON.stringify(json1)); // ["浪里行舟"]
```

**箭头函数不能用来定义toJSON()方法**。主要原因是箭头函数的词法作用域是全局作用域，在这种情况下不合适。

## 2、使用场景

### 2.1 使用localStorage/sessionStorage时

`localStorage/sessionStorage`默认只能存储字符串，而实际开发中，我们往往需要存储对象类型，那么此时我们需要在存储时利用`json.stringify()`将对象转为字符串，在取本地缓存时，使用`json.parse()`转回对象即可。

```js
// 存数据
function setLocalStorage(key,val) {
    window.localStorage.setItem(key, JSON.stringify(val));
};
// 取数据
function getLocalStorage(key) {
    let val = JSON.parse(window.localStorage.getItem(key));
    return val;
};
// 测试
setLocalStorage('Test',['前端工匠','浪里行舟']);
console.log(getLocalStorage('Test'));
```

### 2.2 实现对象深拷贝

```js
let arr1 = [1, 3, {
    username: ' kobe'
}];
let arr2 = JSON.parse(JSON.stringify(arr1));
arr2[2].username = 'duncan'; 
console.log(arr1, arr2)
```

这种方法虽然可以实现数组或对象深拷贝,**但不能处理函数和正则**，因为这两者基于`JSON.stringify`和`JSON.parse`处理后，得到的正则就不再是正则（变为空对象），得到的函数就不再是函数（变为`null`）了。

## 3、使用注意事项

### 3.1 被转换值中有 NaN 和 Infinity

```js
let myObj = {
  name: "浪里行舟",
  age: Infinity,
  money: NaN,
};
console.log(JSON.stringify(myObj));
// {"name":"浪里行舟","age":null,"money":null}

JSON.stringify([NaN, Infinity])
// [null,null]
```

### 3.2 被转换值中有 undefined、任意的函数以及 symbol 值

```js
JSON.stringify([undefined, function () { }, Symbol("")]);
// '[null,null,null]'	被转换成 null
// '{}'					被忽略
```



### 3.3 循环引用

```js
let bar = {
  a: {
    c: foo	//对象的属性值通过某种间接的方式指回该对象本身
  }
};
let foo = {
  b: bar
};

JSON.stringify(foo)	//报错
```



### 3.4 含有不可枚举的属性值时

```js
let personObj = Object.create(null, {
  name: { value: "浪里行舟", enumerable: false },	//被忽略
  year: { value: "2021", enumerable: true },
})

console.log(JSON.stringify(personObj)) // {"year":"2021"}
```

