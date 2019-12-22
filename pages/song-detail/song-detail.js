// pages/common-page/common-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var than = this;
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("getindex",function(res){
      console.log(res)
      than.setData({
        index:res.index
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    const eventChannel = this.getOpenerEventChannel();
    wx.navigateBack({
      delta:1,
      success:function(){
        eventChannel.emit("some",{data:1})
        console.log("返回")
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})