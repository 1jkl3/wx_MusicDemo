// components/friends/tab-tag/tab-tag.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    addGlobalClass:true
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title:["动态","附近"],
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handletitle(e){
      var currentindex = e.currentTarget.dataset.index
      this.setData({
        currentindex
      })
      this.triggerEvent("select-page",{currentindex})
    }
  }
})
