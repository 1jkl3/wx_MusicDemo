// components/friends/nearby/nearby-body/nearby-body.js
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
    bodyList:[
      {
        b_id:0,
        b_img:"/assets/img/1.jpg",
        b_username:"性哟缩放",
        b_title: "男",
        b_icon:"icon-gouwuche1",
        b_distance:0.02,
        b_music_name:"[你不知道的事] -王力宏",
        b_time:"12月13日"
      },
      {
        b_id: 1,
        b_img: "/assets/img/1.jpg",
        b_username: "士大夫",
        b_title: "男",
        b_icon: "icon-gouwuche1",
        b_distance: 0.02,
        b_music_name: "[你不知道的事] -王力宏",
        b_time: "12月13日"
      },
      {
        b_id: 2,
        b_img: "/assets/img/1.jpg",
        b_username: "dasf",
        b_title: "女",
        b_icon: "icon-gouwuche1",
        b_distance: 0.02,
        b_music_name: "[你不知道的事] -王力宏",
        b_time: "12月13日"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
