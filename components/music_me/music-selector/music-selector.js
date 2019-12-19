// components/music_me/music-selector/music-selector.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    isZoom: false,
    currentindex: 0,
    size: [],
    storeSeletor: [
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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handle_zomm(e) {
      let currentindex = e.currentTarget.dataset.index
      var storeSeletor = this.data.storeSeletor
      storeSeletor[currentindex].s_show = !storeSeletor[currentindex].s_show
      this.setData({
        storeSeletor
      })
    },
    updataSize(){
      var storeSeletor = this.data.storeSeletor
      var size = []
      storeSeletor.forEach(item => {
        size.push(item.s_list.length)
      })
      this.setData({
        size
      })
    }
  },
  lifetimes:{
    attached:function(){
      this.updataSize();
      // console.log("创建时")
      console.log(this.data.size)
    }
  }
})