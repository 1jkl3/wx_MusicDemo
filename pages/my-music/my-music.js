// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musiclist:[
      {
        m_id:0,
        m_title:"本地音乐",
        m_num:"123",
        m_icon:"icon-yinle-copy"
      },
      {
        m_id: 1,
        m_title: "最近播放",
        m_num: "123",
        m_icon: "icon-yinle-copy"
      },
      {
        m_id: 2,
        m_title: "我的电台",
        m_num: "123",
        m_icon: "icon-yinle-copy"
      },
      {
        m_id: 3,
        m_title: "我的收藏",
        m_num: "123",
        m_icon: "icon-yinle-copy"
      }
    ],
    storeSeletor:[
      {
        s_id:0,
        s_title:"我创建的歌单",
        s_show:true,
        s_list:[
          {
            p_id: 0,
            p_img: "/assets/img/profile-photo/music-like.png",
            p_title:"我喜欢的音乐",
            p_num:3
          },
          {
            p_id: 1,
            p_img: "/assets/img/profile-photo/music-zhou.jpg",
            p_title: "周杰伦",
            p_num: 3
          }
        ]
      },
      {
        s_id: 1,
        s_title: "最近播放的歌单",
        s_show: false,
        s_list: [
          {
            p_id: 2,
            p_img: "/assets/img/profile-photo/music-shou.jpg",
            p_title: "入耳便是上的英文歌",
            p_num: 3
          },
          {
            p_id: 3,
            p_img: "/assets/img/profile-photo/music-chang.jpg",
            p_title: "2016年度分享歌单",
            p_num: 3
          },
          {
            p_id: 4,
            p_img: "/assets/img/profile-photo/music-photo.jpg",
            p_title: "【华语】静下心来听故事，永远的不朽",
            p_num: 3
          }
        ]
      }
    ]
  },
  m_handle_scroll(e){
    // console.log(e)
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