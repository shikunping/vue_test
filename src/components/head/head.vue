<template>
  <header class="navbar-fixed-top">
    <h1 class="title">{{title}}</h1>
  </header>
</template>

<script>
  export default {
    name: 'head',
    data () {
      return {
        title: '首页'
      }
    },
    created () {
      this.$root.Bus.$on('headTitle', value => {
        this.print(value)
// **** this.title = value;或者直接在这里赋值****/
      })
    },
    methods: {
      print (value) {
        this.title = value;
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  /*navbar-fixed-top 顶部菜单的高度*/
  @navbarHeight:45px;
  .navbar-fixed-top{
    background-color: #fff;
    height: @navbarHeight;
    border-bottom: 1px solid #ccc;
    .title{
      width: 80%;
      font-size: 18px;
      height: @navbarHeight;
      line-height: @navbarHeight;
      margin:0 auto;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
