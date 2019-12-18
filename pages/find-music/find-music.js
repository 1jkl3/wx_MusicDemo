// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: ["个性推荐", "歌单", "主播电台", "排行榜"],
    img: ["/assets/img/1.jpg", "/assets/img/2.jpg", "/assets/img/3.jpg", "/assets/img/4.jpg", "/assets/img/5.jpg"],
    current: 0,
    istabFixed: false,
    swiper_height: 0,
    scrollTop: 0,
    //异步测试
    testdata: [],
    musicList: [{
        L_id: "0",
        L_title: "推荐歌单",
        L_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        L_rigth_title: "更多",
        L_items: [{
            Mid: "001",
            title: "你都不吃了dasf是我们的简阳",
            imgUrl: "/assets/img/1.jpg",
            M_icon: "icon-erji",
            getupNum: 0
          },
          {
            Mid: "002",
            title: "dasfffasf",
            imgUrl: "/assets/img/2.jpg",
            M_icon: "icon-erji",
            getupNum: 1
          },
          {
            Mid: "003",
            title: "nichoaf",
            imgUrl: "/assets/img/3.jpg",
            M_icon: "icon-erji",
            getupNum: 2
          }
        ]
      },
      {
        L_id: "1",
        L_title: "人物公馆",
        L_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        L_rigth_title: "更多",
        L_items: [{
            Mid: "001",
            title: "你都不吃了发声方法副本你发撒否哦你",
            imgUrl: "/assets/img/1.jpg",
            M_icon: "icon-erji",
            getupNum: 0
          },
          {
            Mid: "002",
            title: "dasfffasfsddfasdsadsadsadasfasdsf",
            imgUrl: "/assets/img/2.jpg",
            M_icon: "icon-erji",
            getupNum: 1
          },
          {
            Mid: "003",
            title: "nichoaf",
            imgUrl: "/assets/img/3.jpg",
            M_icon: "icon-erji",
            getupNum: 2
          }
        ]
      }
    ],
    palyList: [{
        p_id: 1,
        p_left_title: "全部歌单",
        p_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        p_right: [
          "欧美",
          "民谣",
          "电子"
        ],
        p_items: [{
            t_id: 0,
            t_img: "/assets/img/1.jpg",
            t_title: "safagfa打算方法方法沙发沙发阿萨德撒沙发沙发",
            t_num: 0
          },
          {
            t_id: 1,
            t_img: "/assets/img/2.jpg",
            t_title: "sff年底asofo案发后发送方大发放ifhasofhasofo爱算法哦吼爱搜if奥is费后is",
            t_num: 1
          },
          {
            t_id: 2,
            t_img: "/assets/img/3.jpg",
            t_title: "发送方飞得更高阿大声道我的却无法却无法我问过为",
            t_num: 2
          }
        ]
      },
      {
        p_id: 2,
        p_left_title: "全部歌单",
        p_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        p_right: [
          "欧美",
          "民谣",
          "电子"
        ],
        p_items: [{
            t_id: 3,
            t_img: "/assets/img/1.jpg",
            t_title: "safagfa打算方法方法沙发沙发阿萨德撒沙发沙发",
            t_num: 3
          },
          {
            t_id: 4,
            t_img: "/assets/img/2.jpg",
            t_title: "sff年底asofo案发后发送方大发放ifhasofhasofo爱算法哦吼爱搜if奥is费后is",
            t_num: 4
          },
          {
            t_id: 5,
            t_img: "/assets/img/3.jpg",
            t_title: "发送方飞得更高阿大声道我的却无法却无法我问过为",
            t_num: 5
          }
        ]
      }
    ],
    stationImg: ["/assets/img/1.jpg", "/assets/img/2.jpg"]
  },
  //点击切换主题
  tabbarindex(e) {
    var that = this
    that.setData({
      current: e.detail.index
    })
    wx.navigateTo({
      url: 'pages/palylist/palylist',
      success: function() {
        console.log("歌单")
      }
    })
  },
  //滑动切换主题
  handletopic(e) {
    var that = this
    var topicindex = e.detail.current
    that.setData({
      current: topicindex
    })
    //获取当前子组件dom
    wx.createSelectorQuery().select(`.topic-view-${that.data.current}`)
      .boundingClientRect(function(res) {
        if (res) {
          const swiper_height = res.height
          that.setData({
            swiper_height
          })
        }
      }).exec()
  },
  //数据加载时动画
  dataload() {
    // wx.lod
  },
  //监听页面滚动
  handlescroll(e) {
    // console.log(e.detail.scrollTop)
    if (e.detail.scrollTop >= this.data.scrollTop) {
      this.setData({
        istabFixed: true
      })
    } else {
      this.setData({
        istabFixed: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //异步测试
    // var arr = [1, 2, 3, 4, 56, 6, 7, 8, 9, 12, 10, 13, 14, 15, 16]
    // setTimeout(() => {
    //   this.setData({
    //     testdata: arr
    //   })
    // }, 5000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //首次加载时获取swiper子组件高度
    var that = this
    wx.createSelectorQuery().select("#tabout")
      .boundingClientRect(
        function(res) {
          if (res) {
            const scrollTop = res.top
            that.setData({
              scrollTop
            })
          }
        }
      ).exec();
    wx.createSelectorQuery().select(`.topic-view-${that.data.current}`)
      .boundingClientRect(function(res) {
        if (res) {
          const swiper_height = res.height
          that.setData({
            swiper_height
          })
        }
      }).exec()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})