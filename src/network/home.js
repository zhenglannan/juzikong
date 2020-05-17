import axios from 'axios'
// 首页句子展示
export function getHomeSentence(type,currentPage,pageSize){
  return axios({
    url:'/api/homeSentence/'+type,
    params:{
      page:currentPage,
      pageSize:pageSize
    }
  })
}
// 查找全部句子
// export function getAllSentence(){
//   return axios('/sentence/all')
// }

// 查找搜索的句子
export function getSearch(keyword,currentPage,pageSize){
  return axios('/api/sentence/search',{
    params:{
      keyword:keyword,
      page:currentPage,
      pageSize:pageSize
    }
  })
}
// 展示最新动态
export function getLatest(){
  return axios('/api/sentence/latest')
}
// export  function test(){
//   return axios('/homesentence/test')
// }