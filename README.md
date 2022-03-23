# vue-admin-project

## Project setup
```
yarn install(必须用yarn安装)
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 功能模块
* 路由怎么写 
* 全局布局
* 配置标题

#### data 函数
为什么data返回函数： 为了让数据独一无二，不被修改


emit


slot到底怎么使用的
* 子组件使用slot代替父组件里复杂的组件

2.6之后使用v-slot代替（v-slot:名称）


单向数据流---双向绑定

自定义组件的v-model


用index做为key会发生什么？（只适合静态的数据）

#### 指令
- v-bind主要用于绑定元素属性值   v-bind:title="data里某个值"
- v-model 数据
- v-if   不推荐和v-for一起使用（因为v-for级别高，同一级的话就先渲染v-for，每一级都加v-if）


#### 计算属性和侦听器
* 计算属性computed
- 计算的是值， 
- 计算后的属性不在data里定义，因为对应的computed作为计算属性定义并返回对应的结果给这个变量不可被重复定义和赋值
- 页面渲染时值不变化就不会执行
* watch
- 监听的是data里定义的变量值
- 只监听一个值
- 页面重新渲染时值不变化也会执行
- 执行异步的操作



#### vuex 通过什么方式实现响应式数据
#### $store 是如何挂载到实例this上的


