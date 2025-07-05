# Promise

## Promise.resolve等价于下面的写法

有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。

```javascript
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```