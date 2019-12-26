// pages/song/song-detail/components/song-text/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img:String,
    isActive: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    // isActive:true,
    isClick:true,
    song_text:[
      "纯音乐，仅供欣赏",
      "dasfsfsf"
    ]
  },

  methods: {
    handleclick(){
      this.setData({
        isClick: !this.data.isClick
      })
    }
  },
  lifetimes:{
    ready:function(){
      this.setData({
        isActive:true
      })
    }
  }
})
