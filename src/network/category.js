import axios from 'axios'

export function getWorkCollection(type,currentPage,pageSize){
  return axios('/category/works/'+type,{
    params:{
      page:currentPage,
      pageSize:pageSize
    }
  })
}