import axios from 'axios'

export function postRegister(formdata){
  return axios.post('/admin/register',formdata)
}
export function postLogin(formdata){
  return axios.post('/admin/login',formdata)
}

export function signout(){
  return axios.post('/admin/signout')
}

export function getAdminInfo(){
  return axios.get('/admin/getAdminInfo')
}

export function getOtherUserInfo(user_id){
  return axios.get('/admin/getOtherUserInfo',user_id)
}