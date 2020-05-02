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
//查找专辑
export function findCollection(id) {
  return axios('/admin/findCollection', {
    params: {
      _id: id
    }
  })
}
//修改专辑
export function updateCollection(collectionId,formdata) {
  return axios.post('/admin/updateCollection/'+collectionId,formdata)
}
//删除专辑
export function deleteCollection(id) {
  return axios('/admin/deleteCollection', {
    params: {
      _id: id
    }
  })
}
//发布句子到专辑??
export function postToCollection(collectionId, formdata) {
  return axios.post('/admin/postToCollection/'+collectionId, formdata)
}
//发布句子
export function addPost(formdata) {
  return axios.post('/admin/addPost', formdata)
}
//查找句子
export function findSentence(id) {
  return axios('/sentence/findSentence', {
    params:{
      _id:id
    }
  })
}
//删除句子
export function deletePosts(id) {
  return axios('/admin/deletePosts', {
    params: {
      _id: id
    }
  })
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
//评论句子
export function comment(id,comment) {
  return axios('/admin/comment/'+id,{
    params:{
      comment:comment
    }
  })
}
//编辑个人信息
export function updateInfo(formdata) {
  return axios.post('/admin/updateInfo', formdata)
}

//更改密码
export function updatePwd(formdata) {
  return axios.post('/admin/updatePwd', formdata)
}