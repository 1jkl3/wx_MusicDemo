// components/index/music-list/music-list.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    list:{
      type:Object,
      value:[],
      observer:function(a,b){
        // console.log(a)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getupDetail(e){
      var url = e.currentTarget.dataset.path;
      var param = e.currentTarget.dataset.Mid;
      wx.navigateTo({
        url: url+'?'+param,
      })
      console.log(e.currentTarget.dataset)
    }
  }
})
