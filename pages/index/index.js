// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: ["个性推荐", "歌单", "主播电台", "排行榜"],
    img: ["/assets/img/1.jpg", "/assets/img/2.jpg", "/assets/img/3.jpg", "/assets/img/4.jpg", "/assets/img/5.jpg"],
    current:0,
    istabFixed:false,
    swiper_height:0,
    scrollTop:0,
    //异步测试
    testdata:[]
  },
  //点击切换主题
  tabbarindex(e){
    var that = this
    that.setData({
      current: e.detail.index
    })
  },
  //滑动切换主题
  handletopic(e){
    var that = this
    var topicindex = e.detail.current
    that.setData({
      current: topicindex
    })
    //获取当前子组件dom
    that.get_wxml(`.topic-view-${that.data.current}`, (res) => {
      // console.log(res+"1")
      that.setData({
        swiper_height: res.height
      });
    })
  },
  //数据加载时动画
  dataload(){
    wx.lod
  },
  //监听页面滚动
  handlescroll(e){
    // console.log(e.detail.scrollTop)
    if (e.detail.scrollTop >= this.data.scrollTop){
      this.setData({
        istabFixed:true
      })
    }else {
      this.setData({
        istabFixed: false
      })
    }
  },
  //封装获取组件、标签的属性方法
  get_wxml(className,callbe) {
    wx.createSelectorQuery().select(className).boundingClientRect(callbe).exec();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //异步测试
    var arr = [1, 2, 3, 4, 56, 6, 7, 8, 9, 12, 10, 13, 14, 15, 16]
    setTimeout(()=>{
      this.setData({
        testdata: arr
      })
    },5000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //首次加载时获取swiper子组件高度
    var that = this
    that.get_wxml(`.topic-view-${that.data.current}`,(res)=>{
      // console.log(res)
      that.setData({
        swiper_height: res.height
      });
    })
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    that.get_wxml(`#tabout`, (res) => {
      // console.log(res.top)
      that.setData({
        scrollTop:res.top
      })
    })
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