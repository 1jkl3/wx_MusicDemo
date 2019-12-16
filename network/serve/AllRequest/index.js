const { GET_REQ, JSON_HEADER} = require("/network/serve/requestParam.js")
const path = "http://"
const DATA = function (obj){
  return new Promise((resolve,reject)=>{
    wx.request({
      method: GET_REQ,
      url: path + obj.url,
      data: {},
      header: JSON_HEADER,
      success:function(res){
        resolve(res)
      },
      fail:function (err){
        reject(err)
      }
    })
  })
}
class AllParamList {
  constructor(){
    this.data = {}
  }
  async getIndexFetch(){
    await DATA().then( res =>{
      // return new Promise.resolve(res)
      return this.data = res
    }).catch( err =>{
      // return new Promise.reject(err)
      return this.data = err
    })
  }
}
const requestPayload = new AllParamList()
module.exports = {
  requestPayload
}