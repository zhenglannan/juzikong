import Vue from 'vue'
import Vuex from 'vuex'

import {
  getAdminInfo,
  getOtherUserInfo
} from "network/session";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: window.localStorage.getItem('login'), //是否登陆状态
    adminInfo: window.localStorage.getItem('adminInfo'), //管理员信息
    // otherUserId: ''//点击的其他用户id
    otherUserInfo: window.localStorage.getItem('otherUserInfo'), //点击的其他用户信息,
    isAdmin: window.localStorage.getItem('isAdmin') //设置变量判断是否是管理员
  },
  mutations: {
    //登陆设置管理员信息
    setAdminInfo(state, payload) {
      // if(payload){
        state.login=true
      window.localStorage.setItem('login', true)
      state.adminInfo=payload
      window.localStorage.setItem('adminInfo', payload)
      // }else{
      //   state.login=false;
      //   state.adminInfo=null;
      // }
    },
    //退出删除管理员信息
    deleteAdminInfo(state) {
      state.login=false
      window.localStorage.setItem('login', false)
      state.adminInfo=null
      window.localStorage.setItem('adminInfo', null)
    },
    setOtherUserInfo(state, payload) {
      state.otherUserInfo=payload
      window.localStorage.setItem('otherUserInfo', payload)
    },

    setIsAdmin(state, payload) {
      state.isAdmin=payload
      window.localStorage.setItem('isAdmin', payload)
    }
  },
  actions: {
    // 得到管理者信息
    getAdminInfo({
      commit
    }) {
      getAdminInfo().then(res => {
        console.log(res.data.data);
        commit('setAdminInfo', res.data.data)
      })
    },
    // 得到其他用户信息
    getOtherUserInfo({
      commit
    }, id) {
      getOtherUserInfo(id).then(res => {
        console.log(res.data.data);
        commit('setOtherUserInfo', res.data.data)
      })
    }
  },
  modules: {}
})