
# 利用vue-cli+webpack搭建vue项目


第一步：全局安装vue-cli
 ```
 npm install vue-cli -g
 ```
 第二步：初始化一个项目
 ```
 vue init webpack-simple vue_demo
 ```
 第三步：把文件切换到初始化的项目中
 ```
 cd vue_demo
 ```
 第四步：安装依赖
 ```
 npm  install
 ```
 第五步：运行
 ```
 npm run dev
 ```
 
 # 搭建过程中出现的一些错误提示：
 错误一：
 ```
 To use this template, you must update following to modules:

  npm: 2.3.0 should be >= 3.0.0

 ```
 解决：npm版本过低，需要版本大于等于3.0，这里我们直接更新到最新
```
npm install -g npm
```
错误二：
```
events.js:160
      throw er; // Unhandled 'error' event
```
解决：端口默认是8080，被占用了，在文件夹config/index.js把端口改成你自己设置的端口

# 引入less
一、下载。(进入项目中，执行以下命令)
```
npm install less less-loader --save-dev
```
执行完之后在package.js文件里会看到devDependencies对象里多了下面的代码
```
"less": "^2.7.2",
 "less-loader": "^4.0.5",
```
二、打开build/webpack.base.conf.js，在module对象的属性rules后面添加下面的代码
```
{
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
}
```
# 非父组件之间的传值
https://cn.vuejs.org/v2/guide/components.html#非父子组件通信 官网这里解释的简单，看的一脸懵逼，查了下网友分享的用法，借鉴了下思路
在main.js文件创建Bus对象，
```
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    Bus: new Vue()
  }
})
```
我的环境是头部H和底部F分别是两个组件，切换F的tab实现H文本的切换，这时候需要点击F的时候把相应位置的文本值传给H
H需要做的是在created钩子函数里监听事件,value是F触发headTitle时传的值
```
this.$root.Bus.$on('headTitle', value => {
  this.title = value;
})
```
F负责在特定场合触发headTitle,text是根据点击不同的tab而传不同的值
```
methods: {
    switchTab (index, text) {
      this.$root.Bus.$emit('headTitle', text);
    }
}
```


 

