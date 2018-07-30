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
      preIndex : 0,//记录路由的上一个index
      liData : [
        { name : '首页' , url : '/home' , icon : 'icon-shouye' , index : 0} ,
        { name : '分类' , url : '/classify' , icon : 'icon-fenlei' ,index : 1},
        { name : '购物车' , url : '/shoppingcar' , icon : 'icon-gouwuche' , index : 2},
        { name : '我的' , url : '/mine' , icon : 'icon-smile' ,index : 3}
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
      this.liData.forEach((val) => {
        if(val.url == to.path && !!from.path) {
          if(val.index > this.preIndex) {
            this.transitionType = 'slide-go';
          } else if(val.index < this.preIndex){
            this.transitionType = 'slide-back';
          }
          this.preIndex = val.index;
        }
      }) 
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
