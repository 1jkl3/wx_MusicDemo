// pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    istabFixed: false,
    cutState: 0,
    dynamicsList:[],
    nearbyDetail:[]
  },
  companyScroll(e) {
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
  switchPages(e) {
    var currentindex = e.detail.currentindex
    this.setData({
      cutState: currentindex
    })
    if(this.data.cutState === 0){
      if (this.data.dynamicsList.length === 0){
        this.get_dynamics_list();
      }
    }else{
      if (this.data.nearbyDetail.length === 0){
        this.get_nearby_detail();
      }
    }
  },
  get_dynamics_list:function(){
    var that = this
    var dynamicsList = [
      {
        d_id: 0,
        d_profile: "",
        isActive: false,
        d_name: "爱吃西红柿",
        d_time: "12-2",
        d_title: "标题党",
        d_attention: "+关注",
        d_btnAcitve: false,
        d_bodys: {
          b_title: "是你佛奥佛按时发红奥是佛我哈覅发放放假啊司法局按设计费",
          b_media: "/assets/img/1.jpg",
          b_depict: "欧帕斯发盘发破"
        },
        d_handles: [{
          h_id: 0,
          h_icon: "icon-dianzan",
          h_num: 32
        },
        {
          h_id: 1,
          h_icon: "icon-pinglun1",
          h_num: 32
        },
        {
          h_id: 2,
          h_icon: "icon-Artboard",
          h_num: 32
        }
        ]
      },
      {
        d_id: 1,
        d_profile: "",
        isActive: false,
        d_name: "不爱吃西红柿",
        d_time: "12-2",
        d_title: "标题党",
        d_attention: "+关注",
        d_btnAcitve: false,
        d_bodys: {
          b_title: "是你佛奥佛按时发红奥是佛我哈覅发放放假啊司法局按设计费",
          b_media: "/assets/img/1.jpg",
          b_depict: "欧帕斯发盘发破"
        },
        d_handles: [{
          h_id: 0,
          h_icon: "icon-dianzan",
          h_num: 32
        },
        {
          h_id: 1,
          h_icon: "icon-pinglun1",
          h_num: 32
        },
        {
          h_id: 2,
          h_icon: "icon-Artboard",
          h_num: 32
        }
        ]
      }
    ]
    setTimeout(()=>{
      this.setData({
        dynamicsList
      })
      wx.createSelectorQuery().select("#with-id")
        .boundingClientRect(
          function (res) {
            if (res) {
              const scrollTop = res.top
              that.setData({
                scrollTop
              })
            }
          }
        ).exec();
    },1000)
  },
  get_nearby_detail:function(){
    var nearbyDetail = [
      [
        {
          h_img: "/assets/img/1.jpg",
          h_text: "网易云藏宝阁家乡选创作大赛"
        },
        {
          h_img: "/assets/img/2.jpg",
          h_text: "才艺主播翻唱大赛！人气主播实力大揭秘"
        }
      ],
      [
        {
          b_id: 0,
          b_img: "/assets/img/1.jpg",
          b_username: "性哟缩放",
          b_title: "男",
          b_icon: "icon-gouwuche1",
          b_distance: 0.02,
          b_music_name: "[你不知道的事] -王力宏",
          b_time: "12月13日"
        },
        {
          b_id: 1,
          b_img: "/assets/img/1.jpg",
          b_username: "士大夫",
          b_title: "男",
          b_icon: "icon-gouwuche1",
          b_distance: 0.02,
          b_music_name: "[你不知道的事] -王力宏",
          b_time: "12月13日"
        },
        {
          b_id: 2,
          b_img: "/assets/img/1.jpg",
          b_username: "dasf",
          b_title: "女",
          b_icon: "icon-gouwuche1",
          b_distance: 0.02,
          b_music_name: "[你不知道的事] -王力宏",
          b_time: "12月13日"
        }
      ]
    ]
    setTimeout(()=>{
      this.setData({
        nearbyDetail
      })
    },1000)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this
    var e = {detail:{currentindex:0}}
    that.switchPages(e);
  }
})