// components/music_me/music-selector/music-selector.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    storeSeletor:{
      type:Array,
      value:[],
      observer:function(newval,oldval){
        var size = []
        newval.forEach(item => {
          size.push(item.s_list.length)
        })
        this.setData({
          size
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isRotate: false,
    currentindex: 0,
    size: []
  },

  methods: {
    handle_zomm(e) {
      let currentindex = e.currentTarget.dataset.index
      var storeSeletor = this.data.storeSeletor
      storeSeletor[currentindex].s_show = !storeSeletor[currentindex].s_show
      this.setData({
        storeSeletor
      })
    }
  }
})