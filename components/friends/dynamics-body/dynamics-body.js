// components/friends/dynamics-body/dynamics-body.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    dynamicsList: [{
        d_id: 0,
        d_profile: "",
        isActive: false,
        d_name: "爱吃西红柿",
        d_time: "12-2",
        d_title: "标题党",
        d_attention:"+关注",
        d_btnAcitve:false,
        d_bodys: {
          b_title: "是你佛奥佛按时发红奥是佛我哈覅发放放假啊司法局按设计费",
          b_media: "",
          b_depict: "欧帕斯发盘发破"
        },
        d_handles: [{
            h_id: 0,
            h_icon: "icon-dianzan",
            h_num: 32
          },
          {
            h_id: 1,
            h_icon: "icon-pinglun1",
            h_num: 32
          },
          {
            h_id: 2,
            h_icon: "icon-Artboard",
            h_num: 32
          }
        ]
      },
      {
        d_id: 1,
        d_profile: "",
        isActive: false,
        d_name: "不爱吃西红柿",
        d_time: "12-2",
        d_title: "标题党",
        d_attention: "+关注",
        d_btnAcitve: false,
        d_bodys: {
          b_title: "是你佛奥佛按时发红奥是佛我哈覅发放放假啊司法局按设计费",
          b_media: "",
          b_depict: "欧帕斯发盘发破"
        },
        d_handles: [{
            h_id: 0,
            h_icon: "icon-dianzan",
            h_num: 32
          },
          {
            h_id: 1,
            h_icon: "icon-pinglun1",
            h_num: 32
          },
          {
            h_id: 2,
            h_icon: "icon-Artboard",
            h_num: 32
          }
        ]
      }
    ],
    currentindex: 0,
    parentIndex: 0,
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