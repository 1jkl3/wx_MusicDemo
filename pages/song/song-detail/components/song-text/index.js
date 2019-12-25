// pages/song/song-detail/components/song-text/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    isActive:false,
    isClick:true,
    song_text:[
      "纯音乐，仅供欣赏",
      "dasfsfsf"
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleclick(){
      this.setData({
        isClick: !this.data.isClick
      })
    }
  }
})
