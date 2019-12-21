// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  // methods
  getfunction_list:function(){
    let data = [
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
        f_right_text: ["官方红", "天蓝白", "水晶紫"],
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
    setTimeout(()=>{
      this.setData({
        list: data
      })
    },1000)
  },
  getTest_list:function(){
    var arr = [
      {
        icon: "icon-bangdan",
        text: "测试1"
      },
      {
        icon: "icon-youfangxiang",
        text: "测试2"
      },
      {
        icon: "icon-fufeizixun",
        text: "测试3"
      }
    ]
    setTimeout(() => {
      this.setData({
        test: arr
      })
    }, 1000)
  },
  onReady: function () {
    this.getTest_list();
    this.getfunction_list();
  },

  onPullDownRefresh: function () {

  },
})