// pages/song/song-detail/components/song-contrl/index.js
var InnerAudioContext = wx.createInnerAudioContext()
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    isplay: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    interactive: ["icon-xihuan", "icon-xiazai", "icon-huiyuan1", "icon-pinglun1", "icon-gengduo"],
    flow: ["icon-fenxiang", "icon-shangyishou", "icon-zanting1", "icon-xiayishou", "icon-juxing"],
    iconOut: "icon-zanting1",
    iconInt: "icon-bofang"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handle_contrl(e) {
      var currentindex = e.currentTarget.dataset.index
      if(currentindex === 0){

      }else if(currentindex === 1){
        this.goUpSong()
      }else if (currentindex === 2) {
        this.handleSwitch();
      }else if(currentindex === 3){
        this.goDownSong()
      }else if(currentindex === 4){
          
      }
    },
    //控制开关
    handleSwitch(){
      if (this.data.isplay) {
        console.log("暂停")
        let newArr = this.data.flow.map((item, index) => {
          if (index === 2) {
            item = this.data.iconInt
          }
          return item
        })
        this.setData({
          flow: newArr,
          isplay: !this.data.isplay
        })
      } else {
        console.log("播放")
        let newArr = this.data.flow.map((item, index) => {
          if (index === 2) {
            item = this.data.iconOut
          }
          return item
        })
        this.setData({
          flow: newArr,
          isplay: !this.data.isplay
        })
      }
      var isplay = this.data.isplay
      this.triggerEvent("isStop", {
        isplay
      });
    },
    //上一首歌
    goUpSong(){
      this.triggerEvent("upSong",{})
    },
    //下一首歌
    goDownSong(){
      this.triggerEvent("nextSong",{})
    }
  }
})