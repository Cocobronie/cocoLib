# 打家劫舍 III

::: tip

小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为` root `。

除了` root `之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“**这个地方的所有房屋的排列类似于一棵二叉树**”。 如果 **两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警**。

给定二叉树的` root `。返回 **在不触动警报的情况下** ，小偷能够盗取的最高金额 。

:::

<img src="/images/image-20230627122509277.png" alt="image-20230627122509277" style="zoom:57%;" />

## 思路（树型递归）

- 递归 + 动态规划
- 遍历顺序：后序遍历，**因为通过递归函数的返回值来做下一步计算**

```js
var rob = function(root) {
    let res = robtree(root)
    return Math.max(res[0],res[1])
};

var robtree = function(root) {
    if(root===null) return [0,0]
    let leftdp = robtree(root.left)
    let rightdp = robtree(root.right)
    let dp = []
    dp[0] = Math.max(leftdp[0],leftdp[1]) + Math.max(rightdp[0],rightdp[1])
    dp[1] = root.val + leftdp[0] + rightdp[0]
    return dp
};
```

