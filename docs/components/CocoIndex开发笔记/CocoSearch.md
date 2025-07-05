# CocoSearch.vue

## 页面结构

```vue
<template>
    <el-form :inline="true" :model="searchInfo" class="demo-form-inline">
        <el-form-item label="网站">
            <el-select v-model="searchInfo.engine" placeholder="全网搜索" width="600px">
                <el-option label="知乎" value="shanghai" />
                <el-option label="掘金" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-input v-model="searchInfo.context" placeholder="搜索内容……" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
    </el-form>
</template>
```



## 页面样式

```css
.el-form {
    font-size: large;
    padding-left: 100px;
    padding-right: 100px;
}

:deep(.el-form-item) {
    font-size: large;
}

.el-select {
    width: 200px;
    font-size: large;
}

.el-input {
    width: 600px;
    font-size: large;
}
```

- 开发时使用`el-button`按钮点击之后不会恢复到原来的样式，需要出发其他地方的点击事件才会恢复。这是由于点击后按钮不失去焦点导致的。搜索到的解决方案如下：`evt.target.blur()`。但是未解决

  
