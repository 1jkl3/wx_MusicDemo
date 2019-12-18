// components/music_me/music-selector/music-selector.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    selectorAll: {
      type: Array,
      value: [],
      observer: function(newval) {
        var arr = []
        newval.forEach(item => {
          arr.push(item.s_list.length)
        })
        this.setData({
          size: arr
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isZoom: false,
    currentindex: 0,
    size: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handle_zomm(e) {
      let currentindex = e.currentTarget.dataset.index
      var selectorAll = this.data.selectorAll
      selectorAll[currentindex].s_show = !selectorAll[currentindex].s_show
      this.setData({
        selectorAll
      })
    }
  }
})