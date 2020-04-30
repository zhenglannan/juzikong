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
export function getUserInfo(user_id) {
  return axios('/admin/getOtherUserInfo', {
    params: {
      user_id: user_id
    }
  })
}
//发布新专辑
export function addCollection(formdata) {
  return axios.post('/admin/addCollection', formdata)
}
//发布句子
export function addPost(formdata) {
  return axios.post('/admin/addPost', formdata)
}
//点赞句子
export function setLike(id) {
  return axios('/admin/setLike', {
    params: {
      _id: id
    }
  })
}
//取消点赞
export function removeLike(id) {
  return axios('/admin/removeLike', {
    params: {
      _id: id
    }
  })
}
//编辑个人信息
export function updateInfo(formdata) {
  return axios.post('/admin/updateInfo', formdata)
}

//编辑个人信息
export function updatePwd(formdata) {
  return axios.post('/admin/updatePwd', formdata)
}