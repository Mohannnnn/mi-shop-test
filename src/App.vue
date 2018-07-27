<template>
  <div id="app">
    <transition :name="transitionType">
      <router-view></router-view>
    </transition>

    <footer class="footer">
      <ul>
        <router-link  v-for="(item ,  index) in liData" :tag="tag" :to="item.url" :key="index" class="footer-item" :class="{'active' : isActive(item.url)}">
          <div class="icon">
            <span :class="`iconfont ${item.icon}`"></span>
          </div>
          <div class="name">{{ item.name }} </div>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
import Rem from '@/assets/js/rem';
import { mapGetters } from 'Vuex';
new Rem();

export default {
  name: "App",
  data() {
    return {
      tag : 'li',
      nowUrl : '/home',
      liData : [
        { name : '首页' , url : '/home' , icon : 'icon-shouye'} ,
        { name : '分类' , url : '/classify' , icon : 'icon-fenlei'},
        { name : '购物车' , url : '/shoppingcar' , icon : 'icon-gouwuche'},
        { name : '我的' , url : '/mine' , icon : 'icon-smile'}
      ],
      transitionType : 'slide-go'
    };
  },
  methods : {
    isActive(url) {
      return this.nowUrl.indexOf(url) != -1;
    }
  },
  watch : {
    '$route'(to , from) {
      console.log(to)
      console.log(from)
      this.nowUrl = to.fullPath;
    }
  },
  computed : {
    ...mapGetters(['getNowStatus'])
  }
};
</script>

<style lang="scss">
  @import './assets/scss/public.scss';
  @import './assets/font/iconfont.css';
  @import './assets/scss/transition.scss';
</style>
