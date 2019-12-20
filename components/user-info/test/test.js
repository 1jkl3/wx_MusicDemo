// components/user-info/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    list:{
      type:Array,
      value:[]
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
    testData(){
      wx.navigateTo({
        url: '/pages/user-info/test-page/test-page',
        success:function(data){
          console.log(data)
        }
      })
    }
  }
})
