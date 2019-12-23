// components/user-info/nom-info/nom-info.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    nomInfo:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    nomInfo: {
      n_id: 0,
      n_img: "/assets/img/1.jpg",
      n_name: "非尼人",
      n_tag: "chain",
      n_sign: "签到",
      n_state: [
        {
          s_id: 0,
          s_name: "动态",
          s_num: 3,
        },
        {
          s_id: 1,
          s_name: "关注",
          s_num: 12,
        },
        {
          s_id: 2,
          s_name: "粉丝",
          s_num: 99,
        }
      ]
    },
    isSign:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlesign(){
      var nomInfo = this.data.nomInfo
      if ("签到" == nomInfo.n_sign){
        nomInfo.n_sign = "已签到"
        this.setData({
          nomInfo,
          isSign:true
        })
      }
      if(this.data.isSign){
        wx.showToast({
          title: '签到成功',
          icon:"none"
        })
      }
    }
  }
})
