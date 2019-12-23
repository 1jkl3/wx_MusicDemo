// components/index/recommed/tab-tag/tab-tag.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    addGlobalClass:true
  },
  properties: {
    inputData: {
      type: String,
      value: ""
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
    goTosearch(){
      var than = this;
      wx.navigateTo({
        url: '/pages/find-music/search-page/search-page',
        events:{
          input_data:function(){

          }
        },
        success:function(res){
          let inputData = than.data.inputData;
          res.eventChannel.emit("input_data", { value: inputData});
        }
      })
    }
  }
})
