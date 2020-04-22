import axios from 'axios'

export function getHomeSentence(type){
  return axios({
    url:'/homesentence/'+type,
  })
}