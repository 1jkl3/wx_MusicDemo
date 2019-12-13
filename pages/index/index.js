// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: ["个性推荐", "歌单", "主播电台", "排行榜"],
    img: ["/assets/img/1.jpg", "/assets/img/2.jpg", "/assets/img/3.jpg", "/assets/img/4.jpg", "/assets/img/5.jpg"],
    current:0,
    clientHeight:0,
    istabFixed:true
  },
  //切换主题
  tabbarindex(e){
    this.setData({
      current: e.detail.index
    })
  },
  handletopic(e){
    this.setData({
      current: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获取窗口大小
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });
    var reslut = wx.createSelectorQuery()
    reslut.select("#tab").boundingClientRect()
    reslut.selectViewport().scrollOffset()
    reslut.exec(function(res){
      console.log(res[0].top)
    })
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