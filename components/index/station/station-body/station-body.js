// components/station/station-body/station-body.js
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
    stationBody:[
      {
        s_id:0,
        s_left_titlle:"每天听些好节目",
        s_right_title:"换一批",
        s_icon:"icon-jiazai",
        s_path:"/",
        s_items:[
          {
            p_id: 0,
            p_img:"/assets/img/5.jpg",
            p_title: "中【3D环绕】Ship And The Giobe",
            p_type:"3D环绕&音乐电台"
          },
          {
            p_id: 1,
            p_img: "/assets/img/5.jpg",
            p_title: "柚子火腿有何特殊之处",
            p_type: "壁炉合集"
          },
          {
            p_id: 2,
            p_img: "/assets/img/5.jpg",
            p_title: "平安奇妙物语(阴阳师) - 满汉全席",
            p_type: "xXXXX团队"
          },
        ]
      },
      {
        s_id: 1,
        s_left_titlle: "每天听些好节目",
        s_right_title: "换一批",
        s_icon: "icon-jiazai",
        s_path: "/",
        s_items: [
          {
            p_id: 3,
            p_img: "/assets/img/5.jpg",
            p_title: "中【3D环绕】Ship And The Giobe",
            p_type: "3D环绕&音乐电台"
          },
          {
            p_id: 4,
            p_img: "/assets/img/5.jpg",
            p_title: "柚子火腿有何特殊之处",
            p_type: "壁炉合集"
          },
          {
            p_id: 5,
            p_img: "/assets/img/5.jpg",
            p_title: "平安奇妙物语(阴阳师) - 满汉全席",
            p_type: "xXXXX团队"
          },
        ]
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
