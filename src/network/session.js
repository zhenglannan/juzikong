import axios from 'axios'
// 注册
export function postRegister(formdata) {
  return axios.post('/admin/register', formdata)
}
// 登陆
export function postLogin(formdata) {
  return axios.post('/admin/login', formdata)
}

// 登出
export function signout() {
  return axios('/admin/signout')
}
// 得到管理员信息
export function getAdminInfo() {
  return axios('/admin/getAdminInfo')
} 
//得到其他用户信息
export function getOtherUserInfo(user_id) {
  return axios('/admin/getOtherUserInfo', {
    params: {
      user_id: user_id
    }
  })
}
//得到其他用户信息
export function addCollection(formdata) {
  return axios.post('/admin/addCollection',formdata)
}


