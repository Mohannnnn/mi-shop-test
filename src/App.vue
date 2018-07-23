/* * @Author: wuhan * @Date: 2018-07-23 11:23:30 * @Last Modified by: wuhan * @Last Modified time: 2018-07-23 13:50:52 */
<template>
  <div id="app">
    <transition :name="transitionType">
      <router-view></router-view>
    </transition>
    <footer class="footer">
      <ul>
        <li class="footer-item" :class="{'active' : isActive()}">
          <div class="icon">
            <span class="iconfont icon-shouye"></span>
          </div>
          <div class="name">首页</div>
        </li>
        <li class="footer-item">
          <div class="icon">
            <span class="iconfont icon-fenlei"></span>
          </div>
          <div class="name">分类</div>
        </li>
        <li class="footer-item">
          <div class="icon">
            <span class="iconfont icon-gouwuche"></span>
          </div>
          <div class="name">购物车</div>
        </li>
        <li class="footer-item">
          <div class="icon">
            <span class="iconfont icon-smile"></span>
          </div>
          <div class="name">我的</div>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Rem from '@/assets/js/rem'
new Rem();

export default {
  name: "App",
  data() {
    return {
      transitionType : 'slide-go'
    };
  },
  methods : {
    isActive() {

    }
  },
  watch : {

  },
  computed : {
    
  }
};
</script>

<style lang="scss">
  @import './assets/scss/public.scss';
  @import './assets/font/iconfont.css';
  @import './assets/scss/transition.scss';
</style>
