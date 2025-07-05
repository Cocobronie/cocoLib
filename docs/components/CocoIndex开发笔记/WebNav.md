# WebNav.vue

##  页面结构

```vue
<template>
    <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column prop="learning" label="学习资源" />
        <el-table-column prop="funning" label="充电站" />
        <el-table-column prop="note" label="笔记" />
    </el-table>
</template>
```

- 在 `el-table-column `单元格中使用超链接

```vue
<template #default="scope">
    <a :href="scope.row.learning" target="_blank" class="buttonText">{{ scope.row.learning }}</a>
</template>
```

- `show-overflow-tooltip`：该属性可以让内容在一行显示，如果显示不下时，显示...，并且鼠标划过时显示全部文字
- 

## 页面样式



## 功能

### 1、双击单元格实现，弹出FormDialog实现快速编辑

```vue
//实现弹出
 <!-- Dialog -->
<el-dialog v-model="dialogFormVisible" title="Shipping address">
    <el-form :model="form">
        <el-form-item label="name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="url" :label-width="formLabelWidth">
            <el-input v-model="form.url" autocomplete="off" />
        </el-form-item>
    </el-form>
    <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">
                Confirm
            </el-button>
        </span>
    </template>
</el-dialog>

<script setup lang='ts'>
//双击单元格实现可编辑
const cellDbClick = (row, column, cell, event) => {
    dialogFormVisible.value = true;
    console.log(row, column, cell, event);
    event.target.innerHTML = "";

    let template = document.createElement("template");
    template.innerHTML = `            <template #default="scope">
                <a :href="scope.row.learning.src" target="_blank" class="buttonText">{{
                    scope.row.learning.title != '' ? scope.row.learning.title : scope.row.learning.src }}</a>
            </template>`
    // cellInput.value = row[column.property];
    // cellInput.setAttribute("type", "text");
    // cellInput.style.width = "60%";
    // cellInput.style.marginLeft = "10px";
    // cellInput.style.paddingLeft = "5px";
    cell.appendChild(template);
    //   聚焦
    // cellInput.first-child.focus();
    //失焦事件
    // cellInput.onblur = function () {
    //     cell.removeChild(cellInput);
    //     event.target.innerHTML = cellInput.value;
    //     row[column.property] = cellInput.value;
    // };
};
```



- 

