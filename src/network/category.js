import axios from 'axios'
// 作品分类数据
export function getWorkCollection(type,currentPage,pageSize){
  return axios('/api/category/works/'+type,{
    params:{
      page:currentPage,
      pageSize:pageSize
    }
  })
}
// 作者国家分类数据
export function getAuthorCountry(authorType,currentPage,pageSize){
  return axios('/api/category/authors/country/'+authorType,{
    params:{
      page:currentPage,
      pageSize:pageSize
    }
  })
}
// 作者朝代分类数据
export function getAuthorDynasty(authorType,currentPage,pageSize){
  return axios('/api/category/authors/dynasty/'+authorType,{
    params:{
      page:currentPage,
      pageSize:pageSize
    }
  })
}
// 作者职业分类数据
export function getAuthorJob(authorType,currentPage,pageSize){
  return axios('/api/category/authors/job/'+authorType,{
    params:{
      page:currentPage,
      pageSize:pageSize
    }
  })
}