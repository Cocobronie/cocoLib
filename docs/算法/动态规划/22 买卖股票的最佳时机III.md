# 买卖股票的最佳时机III

::: tip

给定一个数组，它的第` i `个元素是一支给定的股票在第 `i` 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 **两笔** 交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）

:::

## 思路

- 第一次持有股票
- 第一次不持有股票
- 第二次持有股票
- 第二次不持有股票

```js
var maxProfit = function(prices) {
    let dp =  Array(prices.length).fill().map(() => Array(4).fill(0))
    dp[0][0] -= prices[0]   
    dp[0][1] = 0           
    dp[0][2] -= prices[0]            //注意初始化！！！ 只要买入，现金就做相应的减少  
    dp[0][3] = 0           
    for(let i=1;i<prices.length;i++){
        dp[i][0] = Math.max(dp[i-1][0],-prices[i])               // 第一次持有股票
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i])     // 第一次不持有股票
        dp[i][2] = Math.max(dp[i-1][2],dp[i-1][1]-prices[i])     // 第二次持有股票
        dp[i][3] = Math.max(dp[i-1][3],dp[i-1][2]+prices[i])     // 第二次不持有股票
    }
    return dp[prices.length-1][3]
};
```

