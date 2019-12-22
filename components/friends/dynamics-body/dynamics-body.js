// components/friends/dynamics-body/dynamics-body.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    dynamicsList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex: 0,
    parentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleselector(e) {
      var parentIndex = e.currentTarget.dataset.parentIndex
      var currentindex = e.currentTarget.dataset.index
      var dynamicsList = this.data.dynamicsList
      if (currentindex == 0) {
        dynamicsList[parentIndex].isActive = !dynamicsList[parentIndex].isActive
        this.setData({
          dynamicsList
        })
        if (dynamicsList[parentIndex].isActive) {
          dynamicsList[parentIndex].d_handles[0].h_num += 1
          this.setData({
            dynamicsList
          })
        } else {
          dynamicsList[parentIndex].d_handles[0].h_num -= 1
          this.setData({
            dynamicsList
          })
        }
      } else if (currentindex == 1) {
        //进入评论区
      } else {
        //发送转发并记录成功后加1
      }
    },
    handlebtn(e){
      var dynamicsList = this.data.dynamicsList
      var btnindex = e.currentTarget.dataset.index
      dynamicsList[btnindex].d_btnAcitve = !dynamicsList[btnindex].d_btnAcitve
      if (dynamicsList[btnindex].d_btnAcitve){
        dynamicsList[btnindex].d_attention = "已关注"
        this.setData({
          dynamicsList
        })
        wx.showToast({
          title: '关注',
          icon: 'none',
          duration: 500
        })
      }else{
        dynamicsList[btnindex].d_attention = "+关注"
        this.setData({
          dynamicsList
        })
        wx.showToast({
          title: '取消',
          icon: 'none',
          duration: 500
        })
      }
    }
  }
})