import axios from 'axios'
// 首页句子展示
export function getHomeSentence(type){
  return axios({
    url:'/homesentence/'+type,
  })
}
// 查找全部句子
export function getAllSentence(){
  return axios('/homesentence/all')
}