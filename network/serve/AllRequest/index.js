const { GET_REQ, JSON_HEADER} = require("../requestParam.js")
const path = "https://api.imjad.cn"
const DATA = function (url,data){
  return new Promise((resolve,reject)=>{
    wx.request({
      method: GET_REQ,
      url: path + url,
      data: data,
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
  
}
//获取发现音乐页面数据
//个性
function getIndexFetch(){
  var data = {
    type: "playlist",
    id: "309390784"
  }
  return DATA("/cloudmusic/", data)
}
const requestPayload = new AllParamList()
module.exports = {
  getIndexFetch
}