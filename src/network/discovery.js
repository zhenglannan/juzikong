import axios from 'axios'

export function getDiscovery(tag,currentPage,pageSize){
  return axios('/api/discovery/'+tag,{
    params:{
      page:currentPage,
      pageSize:pageSize
    }
  })
}