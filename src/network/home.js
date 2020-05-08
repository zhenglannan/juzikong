import axios from 'axios'
// 首页句子展示
export function getHomeSentence(type,currentPage,pageSize){
  return axios({
    url:'/homesentence/'+type,
    params:{
      page:currentPage,
      pageSize:pageSize
    }
  })
}
// 查找全部句子
export function getAllSentence(){
  return axios('/homesentence/all')
}