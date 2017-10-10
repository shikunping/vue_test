<template>
    <div>
      <!--购物车 加减-->
      <div class="card-traggle">
        <span class="card-oper">
          <a href="javascript:void(0);" class="icon-sub" @click="sub()"></a>
          <b class="card-num">{{counter}}</b>
          <a href="javascript:void(0);" class="icon-add" @click="add()"></a>
          <!--小球-->
          <div class="ball-container">
            <div  v-for="ball in balls">
              <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                <div class="ball" v-show="ball.show">
                  <div class="inner inner-hook"></div>
                </div>
              </transition>
            </div>
          </div>
        </span>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'card',
      props: ['nums'],
      data () {
        return {
          dropBalls: [],
          balls: [
            {
              show: false
            },
            {
              show: false
            },
            {
              show: false
            }
          ],
          counter: this.nums
        }
      },
      methods: {
        sub () {
          if (this.counter > 0) {
            this.counter--;
            this.$root.Bus.$emit('cardNum', 'sub');
          }
        },
        add () {
          this.counter++;
          this.$root.Bus.$emit('cardNum', 'add');
          this.drop(event.target);
          this.count++;
        },
        drop (el) {
          for (var i = 0; i < this.balls.length; i++) {
            var ball = this.balls[i];
            if (!ball.show) {
              ball.show = true;
              ball.el = el;
              this.dropBalls.push(ball);
            }
          }
        },
        beforeDrop (el) {
          let count = this.balls.length;
          while (count--) {
            let ball = this.balls[count];
            if (ball.show) {
              let rect = ball.el.getBoundingClientRect();
              let x = rect.left - 32;
              let y = -(window.innerHeight - rect.top - 22);
              el.style.display = '';
              el.style.webkitTransform = 'translateY(' + y + 'px)';
              el.style.transform = 'translateY(' + y + 'px)';
              let inner = el.getElementsByClassName('inner-hook')[0];
              inner.style.webkitTransform = 'translateX(' + x + 'px)';
              inner.style.transform = 'translateX(' + x + 'px)';
            }
          }
        },
        dropping (el, done) {
//        let rf = el.offsetHeight;
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(0,0,0)';
          el.addEventListener('transitionend', done);
        },
        afterDrop (el) {
          let ball = this.dropBalls.shift();
          if (ball) {
            ball.show = false;
            el.style.display = 'none';
          }
        }

      }
    }
</script>

<style scoped lang="less" type="text/less">
  .ball{
    position: fixed;
    left: 32px;
    bottom: 22px;
    z-index: 200;
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); /*贝塞尔曲线*/
  }
  .inner{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #3cbb2f;
    transition: all 0.4s linear;
  }
  .cart{
    position: fixed;
    bottom: 22px;
    left: 32px;
    width: 30px;
    height: 30px;
    background-color: #3cbb2f;
    color: rgb(255,255,255);
  }
  .card-traggle {
    position: absolute;
    right: 15px;
    top: 5px;
    .card-oper {
      .icon-com {
        display: inline-block;
        width: 22px;
        height: 22px;
        vertical-align: bottom;
      }
      .icon-sub {
        .icon-com;
        background: url("./icon_sub.png") no-repeat;
        background-size: 22px 22px;
      }
      .icon-add {
        .icon-com;
        background: url("./icon_add.png") no-repeat;
        background-size: 22px 22px;
      }
      .card-num {
        font-size: 14px;
        color: #333;
        font-weight: normal;
        margin: 0 4px;
      }
    }

  }
</style>
