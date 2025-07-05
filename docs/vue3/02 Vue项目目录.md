
# Vue项目目录结构

- public 下面的**不会被编译** 可以存放静态资源
- assets 下面可以存放**可编译的静态资源**
- components 下面用来存放我们的组件
- App.vue 是全局组件
- main ts 全局的ts文件
- index.html 非常重要的入口文件 **（webpack，rollup 他们的入口文件都是enrty input 是一个js文件 而Vite 的入口文件是一个html文件，他刚开始不会编译这些js文件 只有当你用到的时候 如script src="xxxxx.js" 会发起一个请求被vite拦截这时候才会解析js文件）**
- vite config ts 这是vite的配置文件具体配置项 后面会详解