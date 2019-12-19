// components/friends/with-doing/with-doing.js
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
    withList:[
      {
        w_id:0,
        w_icon:"icon-dongtai",
        w_title:"发动态"
      },
      {
        w_id:1,
        w_icon: "icon-shipin",
        w_title: "发短视频"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    touchEvent(e){

    }
  }
})
