import axios from 'axios'

export function getDiscovery(){
  return axios({
    url:'/discovery/hot',
  })
}