// components/user-info/function-list/function-list.js
Component({
  options: {
    addGlobalClass: true
  },
  properties: {

  },
  data: {
    functionList:[
      {
        f_id:0,
        f_left_icon:"icon-icon-test",
        f_msg:"我的消息",
        f_right_icon:"icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        f_switch:null,
        f_right_text: null,
        f_navigateToPath:""
      },
      {
        f_id: 1,
        f_left_icon: "icon-huiyuan1",
        f_msg: "会员中心",
        f_right_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        f_switch: null,
        f_right_text: null,
        f_navigateToPath: ""
      },
      {
        f_id: 2,
        f_left_icon: "icon-gouwuche",
        f_msg: "商城",
        f_right_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        f_switch: null,
        f_right_text: null,
        f_navigateToPath: ""
      },
      {
        f_id: 3,
        f_left_icon: "icon-kefu",
        f_msg: "在线听歌免流量",
        f_right_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        f_switch: null,
        f_right_text: null,
        f_navigateToPath: ""
      },
      {
        f_id: 4,
        f_left_icon: "icon-shezhi",
        f_msg: "设置",
        f_right_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        f_switch: null,
        f_right_text: null,
        f_navigateToPath: ""
      },
      {
        f_id: 5,
        f_left_icon: "icon-richscan_icon",
        f_msg: "扫一扫",
        f_right_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        f_switch: null,
        f_right_text: null,
        f_navigateToPath: ""
      },
      {
        f_id: 6,
        f_left_icon: "icon-huanfu",
        f_msg: "主题换肤",
        f_right_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        f_switch: null,
        f_right_text: ["官方红","天蓝白","水晶紫"],
        f_navigateToPath: ""
      },
      {
        f_id: 7,
        f_left_icon: "icon-dengpao",
        f_msg: "夜间模式",
        f_right_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        f_switch: false,
        f_right_text: null,
        f_navigateToPath: ""
      }
    ]
  },
  methods: {
    handleSwitch(e){
      var functionList = this.data.functionList
      var f_switch = e.detail.value;
      var index = e.currentTarget.dataset.index
      functionList[index].f_switch = f_switch
      this.setData({
        functionList
      })
    },
    handleProperty(e){
      //跳转功能页
    }
  }
})
