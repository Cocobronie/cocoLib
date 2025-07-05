<template>
    <!-- 按钮 -->
    <div class="button-container mt-3">
        <div class="btn-group">
            <button class="btn" @click.prevent="onBtnClick(0)"
                :class="activeIndex === 0 ? 'btn-primary' : 'btn-secondary'">全部</button>
            <button class="btn" @click.prevent="onBtnClick(1)"
                :class="activeIndex === 1 ? 'btn-primary' : 'btn-secondary'">已完成</button>
            <button class="btn" @click.prevent="onBtnClick(2)"
                :class="activeIndex === 2 ? 'btn-primary' : 'btn-secondary'">未完成</button>
        </div>
    </div>
    <!-- TodoList -->
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in showlist"
            :key="item.id">
            <!-- 复选框 -->
            <!-- 注意：App 父组件通过 props 传递过来的 list 是“引用类型”的数据， -->
            <!-- 这里 v-model 双向绑定的结果是：用户的操作修改的是 App 组件中数据的状态 -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" :id="item.id" v-model="item.done" />
                <label class="custom-control-label" :for="item.id" :class="item.done ? 'delete' : ''">
                    {{ item.task }}
                </label>
            </div>
            <!-- badge 效果 -->
            <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
            <span class="badge badge-warning badge-pill" v-else>未完成</span>
        </li>
    </ul>
    <!-- form 表单 -->
    <form class="form-inline">
        <div class="input-group mb-2 mr-sm-2">
            <!-- 输入框的前缀 -->
            <div class="input-group-prepend">
                <div class="input-group-text">任务</div>
            </div>
            <!-- 文本输入框 -->
            <input type="text" class="form-control" placeholder="请填写任务信息" style="width: 356px;" v-model.trim="taskname" />
        </div>
        <!-- 添加按钮 -->
        <button class="btn btn-primary mb-2" @click.prevent="onFormSubmit">添加新任务</button>
    </form>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
//TodoList数据
const todolist = reactive([
    { id: "1", task: 'todoList组件', done: false },
    { id: "2", task: 'todoList组件', done: false },
    { id: "3", task: 'todoList组件', done: false }
])
let showlist = reactive([
    { id: "1", task: 'todoList组件', done: false },
    { id: "2", task: 'todoList组件', done: false },
    { id: "3", task: 'todoList组件', done: false }
])
// 下一个可用的 Id 值
let nextId = 4
// 激活的按钮的索引
const activeIndex = ref(0)
// 新任务的名称
let taskname = ref('')

/**
 * 表单提交的事件处理函数
 */
function onFormSubmit() {
    // 1. 判断任务名称是否为空
    if (taskname.value == "") return alert('任务名称不能为空！')
    // 2. 触发自定义的 add 事件，并向外界传递数据
    // 2.1 向任务列表中新增任务信息
    todolist.push({
        id: nextId.toString(),
        task: taskname.value,
        done: false, // 完成状态默认为 false
    })
    // 2. 让 nextId 自增+1
    nextId++
    // 3. 清空文本框
    taskname.value = ''
}
/**
 * 按钮的点击事件处理函数
 */
function onBtnClick(index: number) {
    console.log(index);
    activeIndex.value = index
    // 1. 如果当前点击的按钮的索引值，等于 props 传递过来的索引值，则没必要触发 update:active 自定义事件
    if (index === activeIndex.value) return
    // 2. 根据激活按钮的索引值，动态计算要展示的列表数据
    switch (index) {
        case 0: // 全部
            showlist = todolist
            return
        case 1: // 已完成
            showlist = todolist.filter(x => x.done)
            return
        case 2: // 未完成
            showlist = todolist.filter(x => !x.done)
            return
    }
}


</script>
<style scoped lang='less'>
.list-group {
    margin-bottom: 100px;
}

.button-container {
    // 文本居中效果
    text-align: center;
}

.form-inline {
    margin-left: 400px;
}

// 删除效果
.delete {
    text-decoration: line-through;
}
</style>