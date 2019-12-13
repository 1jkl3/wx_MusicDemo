// components/tab-nav/tab-nav.js
Component({
  /**
   * 组件数据监听改变
   */
  externalClasses: ['tab-nav-class'],
  observers:{
    'current':function(newval){
      this.setData({
        currentindex: newval
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    current:{
      type:Number,
      value:0
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    option:["个性推荐","歌单","主播电台","排行榜"],
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleactive(e){
      //设置点击切换
      var index = e.currentTarget.dataset.index;
      this.setData({
        currentindex: index
      })
      // console.log(index)
      //传递下标给组件引用页面
      this.triggerEvent("tabindex", {index},{})
    }
  }
})
