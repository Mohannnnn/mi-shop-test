/**
 * Created by wuhan on 2018/7/14.
 */

import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

//路由状态
const AppLoading = {
  state : {
    nowStatus : 'Loading'
  },
  actions : {
    modify_status({commit}){
      commit('MODIFY_STATUS')
    }
  },
  mutations : {
    MODIFY_STATUS(state , data){
      state.nowStatus = data;
    }
  },
  getters : {
    getNowStatus(state) {
      return state.nowStatus;
    }
  }
}

export default new Vuex.Store({
  modules : {
    AppLoading
  }
})
