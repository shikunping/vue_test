<template>
  <footer class="foot-bottom navbar-fixed-bottom clearfix">
    <router-link :to="item.to" class="col-xs-4 text-center" :class="{active:index==select}" v-for="(item,index) of footList" v-on:click.native="switchTab(index,item.text)">
      <i class="glyphicon" :class="item.icon"></i>
      <b>{{item.text}}</b>
      <template v-if="index == 1">
        <b class="card-num">{{num}}</b>
      </template>

    </router-link>
  </footer>
</template>

<script>
    export default {
      name: 'foot',
      data () {
        return {
          select: 0,
          num: 4,
          footList: [
            {
              icon: 'glyphicon-tree-conifer',
              text: '首页',
              to: '/'
            },
            {
              icon: 'glyphicon-th-large',
              text: '购物车',
              to: '/dynamic'
            },
            {
              icon: 'glyphicon-user',
              text: '我的',
              to: '/user'
            }
          ]
        }
      },
      created () {
        this.$root.Bus.$on('cardNum', value => {
          if (value === 'sub') {
            this.num--;
          } else {
            this.num++;
          }
        })
      },
      methods: {
        switchTab (index, text) {
          this.select = index;
          this.$root.Bus.$emit('headTitle', text);
        }
      }
    }
</script>

<style scoped lang="less" type="text/less">

  /*底部*/
  .foot-bottom{
    border-top: 1px solid #ccc;
    height:44px;
    padding-top: 4px;
    background-color: #fff;
    a{
      color: #b3b3b3;
      text-decoration: none;
      &.active{
        color: #3cbb2f;
      }
      .glyphicon{
        display: block;
        font-size:16px;
        margin-bottom: 2px;
      }
      .card-num{
        position: absolute;
        top:0;
        width: 15px;
        height:15px;
        line-height: 15px;
        border-radius: 100%;
        background-color: red;
        color: #fff;
        font-size:12px;
        font-weight:normal;
        text-align: center;
      }
    }
  }
</style>
