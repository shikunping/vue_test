# vue_test
about vue practice

利用vue-cli+webpack搭建vue项目


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
 
 搭建过程中出现的一些错误提示：
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
 

