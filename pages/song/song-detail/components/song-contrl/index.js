// pages/song/song-detail/components/song-contrl/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isplay:true,
    interactive:["A","B","C","D","E"],
    flow:["F","G","H","T","M"],
    iconOut:"O",
    iconInt:"H",
    isIcon:true,
    src:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handle_contrl(e){
      var currentindex = e.currentTarget.dataset.index
      var flow = this.data.flow;
      if(currentindex === 2){
        var isIcon = this.data.isIcon;
        this.setData({
          isIcon: !isIcon
        })
        if (isIcon){
          var newArr = flow.map((item, index) => {
            if (index === 2) {
              item = this.data.iconOut
            }
            return item
          })
          this.setData({
            flow: newArr
          })
        }else{
          var newArr = flow.map((item, index) => {
            if (index === 2) {
              item = this.data.iconInt
            }
            return item
          })
          this.setData({
            flow: newArr
          })
        }
      }
    }
  },
  lifetimes:{
    ready:function(){
      // var InnerAudioContext = wx.createInnerAudioContext()
      // InnerAudioContext.src ="http://music.163.com/song/media/outer/url?id=1399108142.mp3"
      // InnerAudioContext.play(()=>{
      //   console.log("开始播放")
      // })
    }
  }
})
