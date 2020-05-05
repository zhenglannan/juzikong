import Vue from 'vue'
import Vuex from 'vuex'

import {
  getAdminInfo,
  getUserInfo
} from "network/session";

Vue.use(Vuex) 

export default new Vuex.Store({
  // localStorage.setItem(key, String), set的值必须是字符串，如果你的数据是对象都需要先行转换（JSON.stringify(xxx)）,取出时localStorage.getItem(key)，如果不是字符串，取出后可以通过JSON.parse(xxx)转回对象。
  state: {
    login: JSON.parse(window.localStorage.getItem('login')), //是否登陆状态
    adminInfo: JSON.parse(window.localStorage.getItem('adminInfo')), //管理员信息
    // otherUserId: ''//点击的其他用户id
    userInfo:null, //点击的用户信息(包括管理员),
    isAdmin: JSON.parse(window.localStorage.getItem('isAdmin')), //设置变量判断是否是管理员（控制有些操作不显示）
    dialogFormVisible:false,
    profileSearch:null,
    // searchSentences
  },
  mutations: {
    //登陆设置管理员信息
    setAdminInfo(state, payload) {
      console.log('setAdminInfo'+'  '+payload);
      window.localStorage.setItem('login',JSON.stringify(true));
      state.login=true;
      window.localStorage.setItem('adminInfo', JSON.stringify(payload));
      state.adminInfo=payload;
    },
    //退出删除管理员信息
    deleteAdminInfo(state,payload) {
      window.localStorage.setItem('login',JSON.stringify(false));
      state.login=false;
      window.localStorage.removeItem('adminInfo');
      state.adminInfo=null;
    },
    // 设置其他用户信息
    setUserInfo(state, payload) {
      // window.localStorage.setItem('otherUserInfo', payload)
      state.userInfo=payload
    },
    // 设置是否是管理员
    setIsAdmin(state, payload) {
      // console.log(typeof(payload))
      window.localStorage.setItem('isAdmin', JSON.stringify(payload))
      state.isAdmin=payload
    },
    // 设置对话框是否可见??
    setDialogFormVisible(state,payload){
      state.dialogFormVisible=payload
    },
    setProfileSearch(state,payload){
      state.profileSearch=payload
    }
  },
  actions: {
    // 得到管理者信息
    getAdmin({commit}) {
      getAdminInfo().then(res => {
        console.log('getAdminInfo'+'  '+res.data.data);
        commit('setAdminInfo', res.data.data)
      })
    },
    // 得到用户信息
    getUserInfo({commit}, id) {
      getUserInfo(id).then(res => {
        console.log('getUserInfo'+'    '+ res.data.data);
        commit('setUserInfo', res.data.data)
      })
    }
  },
  modules: {}
})