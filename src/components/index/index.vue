<template>
  <div>
    <!--banner图-->
    <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
        <div class="item" :class="{active:index==0}" v-for="(item,index) of allData">
          <img :src="item.images.large" width="100%">
        </div>
      </div>

      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="index" :class="{active:index == 0}" v-for="(item, index) of allData"></li>
      </ol>
    </div>
    <!-- bannner图 -->

    <div class="index-lists container">
      <div class="row">
        <!--列表-->
        <ul class="list-group">
          <li class="list-group-item" v-for="item of allData">
            <router-link to="indexDetail" class="list-a">
              <img :src="item.images.small" class="list-img img-responsive">
              <div class="lists">
                <p class="title">{{item.title}}</p>
                <p class="time">{{item.year}}</p>
                <p class="contents"><b v-for="(list, index) of item.genres">{{list}}&nbsp;</b></p>
              </div>
            </router-link>
            <!--购物车 加减-->
            <card :nums="item.casts.length"></card>
            <!--<div class="card-traggle">-->
                <!--<span class="card-oper">-->
                  <!--<a href="javascript:void(0);" class="icon-sub" @click="sub(item)"></a>-->
                  <!--<b class="card-num">{{item.casts.length}}</b>-->
                  <!--<a href="javascript:void(0);" class="icon-add" @click="add(item)"></a>-->
                  <!--&lt;!&ndash;小球&ndash;&gt;-->
                  <!--<div class="ball-container">-->
                    <!--<div  v-for="ball in balls">-->
                      <!--<transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">-->
                        <!--<div class="ball" v-show="ball.show">-->
                          <!--<div class="inner inner-hook"></div>-->
                        <!--</div>-->
                      <!--</transition>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</span>-->
            <!--</div>-->
          </li>

        </ul>
      </div>
    </div>

  </div>
  <!--banner-->
  </div>
</template>

<script>
  import card from '../card/card.vue'

  export default {
    name: '',
    data () {
      return {
        count: 0,
        allData: []
      }
    },
    components: {
      card
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        console.log(response);
        this.allData = response.data.subjects;
        // this.articles = response.data["subjects"] 也可以
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      });
    },
    methods: {

    }
  }
</script>

<style scoped lang="less" type="text/less">

  .carousel {
    margin-bottom: 10px;
    .carousel-indicators {
      li {
        background-color: #fff;
      }
      .active {
        background-color: #3cbb2f;
      }
    }
  }

  .list-group {
    .list-group-item {
      border-left: none;
      border-top: none;
      border-right: none;
      border-bottom: 1px solid #ddd;
      margin-bottom: 0;
    }
    .list-a {
      display: flex;
      &:focus {
        text-decoration: none;
      }
      p {
        margin: 0;
      }
      .list-img {
        width: 60px;
        height: 60px;
      }
      .lists {
        flex: 1;
        margin-left: 10px;
        width: 100%;
        overflow: hidden;
      }
      .title {
        font-size: 16px;
        color: #333;
        font-weight: bold;
      }
      .time {
        font-size: 10px;
        color: #999;
      }
      .contents {
        font-size: 14px;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
</style>
