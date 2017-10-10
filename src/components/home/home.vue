<template>
    <div>
      <HtmlHead></HtmlHead>
      <div class="contents">
        <router-view>

        </router-view>
      </div>
      <HtmlFoot></HtmlFoot>
    </div>
</template>

<script>
import HtmlHead from '../head/head.vue'
import HtmlFoot from '../foot/foot.vue'

export default {
  name: 'app',
  components: {
    HtmlFoot,
    HtmlHead
  }
}
</script>

<style scoped lang="less" type="text/less">
  @navbarHeight:45px;
  /*contents*/
  .navbar-fixed-top~.contents{
    padding-top: @navbarHeight;
  }
  .contents{
    padding-bottom: 44px;
  }
</style>
