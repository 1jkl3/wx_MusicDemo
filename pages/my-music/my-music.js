// pages/detail/detail.js
Page({
  options: {
    addGlobalClass: true
  },
  data: {
    music_list:[],
    storeSeletor:[]
  },
  m_handle_scroll(e){
    // console.log(e)
  },
  get_music_list:function(){
    var music_list = [
      {
        m_id: 0,
        m_title: "本地音乐",
        m_num: "123",
        m_icon: "icon-yinle-copy"
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
    ]
    setTimeout(()=>{
      this.setData({
        music_list
      })
    },1000)
  },
  get_store_seletor:function(){
    var storeSeletor = [
      {
        s_id: 0,
        s_title: "我创建的歌单",
        s_show: true,
        s_list: [
          {
            p_id: 0,
            p_img: "/assets/img/profile-photo/music-like.png",
            p_title: "我喜欢的音乐",
            p_num: 3
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
    setTimeout(() => {
      this.setData({
        storeSeletor
      })
    }, 1000)
  },
  onReady: function () {
    wx.nextTick(()=>{
      this.get_music_list();
      this.get_store_seletor();
    })
  },
})