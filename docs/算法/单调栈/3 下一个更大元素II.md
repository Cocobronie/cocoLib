# 下一个更大元素II

::: tip

给定一个循环数组 `nums` （ `nums[nums.length - 1]` 的下一个元素是 `nums[0]` ），返回 `nums` 中每个元素的 **下一个更大元素** 。

数字 `x` 的 下一个更大的元素 **是按数组遍历顺序**，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。

:::



## 思路

之前好像做过类似的题[打家劫舍](https://www.programmercarl.com/0213.打家劫舍II.html#思路)，对于**循环数组**思路是这样的：

对于一个数组，成环的话主要有如下三种情况：

- 情况一：考虑不包含首尾元素
- 情况二：考虑包含首元素，不包含尾元素
- 情况三：考虑包含尾元素，不包含首元素

**而情况二 和 情况三 都包含了情况一了，所以只考虑情况二和情况三就可以了**。

这里我将数组做了一个拼接成了一个 “回文数组”

比如【5,4,3,2,1】 ➡ 【5,4,3,2,1,5,4,3,2】

```js
var nextGreaterElements = function(nums) {
    let len = nums.length
    let res = Array(nums.length).fill(-1)
    // 拼接一下 nums 数组
    nums = nums.concat(nums.slice(0,nums.length-1))
    let stack = []
    stack.push(0)
    for(let i=1;i<nums.length;i++){
        if(nums[i] > nums[stack[stack.length-1]]){
            while(nums[stack[stack.length-1]] < nums[i]){
                let top = stack.pop()
                res[top] = nums[i]
            }
        }
        stack.push(i)
    }
    return res.slice(0,len)
};
```

