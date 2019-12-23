// pages/index/index.js
const {
  getIndexFetch
} = require("../../network/serve/AllRequest/index.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: ["个性推荐", "歌单", "主播电台", "排行榜"],
    current: 0,
    istabFixed: false,
    swiper_height: 0,
    scrollTop: 0,
    musicList: [],
    stationBody: [],
    palyList: [],
    topData: {},
    hotSongList: {},
    timer: null,
    isTop: false,
    //异步测试
    testdata: [],
  },
  //点击切换主题
  tabbarindex(e) {
    var that = this
    that.setData({
      current: e.detail.index
    })
  },
  //滑动切换主题
  handletopic(e) {
    var that = this
    var current = e.detail.current
    that.setData({
      current,
      scrollTop:44,
      istabFixed:false
    })
    if (that.data.current === 0) {
      if (that.data.musicList.length === 0) {
        that.get_recommend_list();
      }
    } else if (that.data.current === 1) {
      if (that.data.palyList.length === 0) {
        that.get_play_list();
      }
    } else if (that.data.current === 2) {
      if (that.data.stationBody.length === 0) {
        that.get_station_body();
      }
    } else if (that.data.current === 3) {
      if (Object.keys(that.data.topData).length === 0) {
        that.get_top_data();
      }
    }
    this.handle_swiper();
  },
  //获取当前子组件dom高度
  handle_swiper() {
    var that = this;
    wx.createSelectorQuery().select(`.topic-view-${that.data.current}`)
      .boundingClientRect(function(res) {
        if (res) {
          const swiper_height = res.height
          that.setData({
            swiper_height
          })
        }
      }).exec();
  },
  //监听页面滚动
  handlescroll(e) {
    if (e.detail.scrollTop >= this.data.scrollTop) {
      this.setData({
        istabFixed: true
      })
    } else {
      this.setData({
        istabFixed: false
      })
    }
  },
  //获取个性推荐数据
  get_recommend_list() {
    var musicList = [
      ["/assets/img/1.jpg", "/assets/img/2.jpg", "/assets/img/3.jpg", "/assets/img/4.jpg", "/assets/img/5.jpg"],
      [{
          l_id: "0",
          l_title: "推荐歌单",
          l_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
          l_rigth_title: "更多",
          l_items: [{
              m_id: "001",
              title: "你都不吃了dasf是我们的简阳",
              imgUrl: "/assets/img/1.jpg",
              m_icon: "icon-erji",
              getupNum: 0
            },
            {
              m_id: "002",
              title: "dasfffasf",
              imgUrl: "/assets/img/2.jpg",
              m_icon: "icon-erji",
              getupNum: 1
            },
            {
              m_id: "003",
              title: "nichoaf",
              imgUrl: "/assets/img/3.jpg",
              m_icon: "icon-erji",
              getupNum: 2
            }
          ]
        },
        {
          l_id: "1",
          l_title: "人物公馆",
          l_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
          l_rigth_title: "更多",
          l_items: [{
              m_id: "001",
              title: "你都不吃了发声方法副本你发撒否哦你",
              imgUrl: "/assets/img/1.jpg",
              m_icon: "icon-erji",
              getupNum: 0
            },
            {
              m_id: "002",
              title: "dasfffasfsddfasdsadsadsadasfasdsf",
              imgUrl: "/assets/img/2.jpg",
              m_icon: "icon-erji",
              getupNum: 1
            },
            {
              m_id: "003",
              title: "nichoaf",
              imgUrl: "/assets/img/3.jpg",
              m_icon: "icon-erji",
              getupNum: 2
            }
          ]
        }
      ]
    ]
    setTimeout(() => {
      this.setData({
        musicList
      })
      this.handle_swiper();
    }, 1000)
  },
  //获取歌单数据
  get_play_list() {
    var palyList = [{
        p_id: 1,
        p_left_title: "全部歌单",
        p_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        p_right: [
          "欧美",
          "民谣",
          "电子"
        ],
        p_items: [{
            t_id: 0,
            t_img: "/assets/img/1.jpg",
            t_title: "safagfa打算方法方法沙发沙发阿萨德撒沙发沙发",
            t_num: 0
          },
          {
            t_id: 1,
            t_img: "/assets/img/2.jpg",
            t_title: "sff年底asofo案发后发送方大发放ifhasofhasofo爱算法哦吼爱搜if奥is费后is",
            t_num: 1
          },
          {
            t_id: 2,
            t_img: "/assets/img/3.jpg",
            t_title: "发送方飞得更高阿大声道我的却无法却无法我问过为",
            t_num: 2
          }
        ]
      },
      {
        p_id: 2,
        p_left_title: "全部歌单",
        p_icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-",
        p_right: [
          "欧美",
          "民谣",
          "电子"
        ],
        p_items: [{
            t_id: 3,
            t_img: "/assets/img/1.jpg",
            t_title: "safagfa打算方法方法沙发沙发阿萨德撒沙发沙发",
            t_num: 3
          },
          {
            t_id: 4,
            t_img: "/assets/img/2.jpg",
            t_title: "sff年底asofo案发后发送方大发放ifhasofhasofo爱算法哦吼爱搜if奥is费后is",
            t_num: 4
          },
          {
            t_id: 5,
            t_img: "/assets/img/3.jpg",
            t_title: "发送方飞得更高阿大声道我的却无法却无法我问过为",
            t_num: 5
          }
        ]
      }
    ]
    setTimeout(() => {
      this.setData({
        palyList
      })
      this.handle_swiper();
    }, 1000)
  },
  //获取主播电台数据
  get_station_body() {
    var stationBody = [
      ["/assets/img/1.jpg", "/assets/img/2.jpg"],
      [{
          s_id: 0,
          s_left_titlle: "每天听些好节目",
          s_right_title: "换一批",
          s_icon: "icon-jiazai",
          s_path: "/",
          s_items: [{
              p_id: 0,
              p_img: "/assets/img/5.jpg",
              p_title: "中【3D环绕】Ship And The Giobe",
              p_type: "3D环绕&音乐电台"
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
          s_items: [{
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
    ]
    setTimeout(() => {
      this.setData({
        stationBody
      })
      this.handle_swiper();
    }, 1000)
  },
  //获取排行榜数据
  get_top_data() {
    var topData = {
      t_id: 0,
      t_left_title: "云音乐官方榜",
      t_right_title: "",
      t_items: [{
          b_id: 1,
          t_img: "/assets/img/4.jpg",
          t_hint: "每天更新",
          t_music_list_name: [
            "天各一方",
            "海水都亮",
            "霸王别姬"
          ]
        },
        {
          b_id: 2,
          t_img: "/assets/img/4.jpg",
          t_hint: "每天更新",
          t_music_list_name: [
            "天各一方",
            "海水都亮",
            "霸王别姬"
          ]
        },
        {
          b_id: 3,
          t_img: "/assets/img/4.jpg",
          t_hint: "每天更新",
          t_music_list_name: [
            "天各一方",
            "海水都亮",
            "霸王别姬"
          ]
        },
        {
          b_id: 4,
          t_img: "/assets/img/4.jpg",
          t_hint: "每天更新",
          t_music_list_name: [
            "天各一方",
            "海水都亮",
            "霸王别姬"
          ]
        }
      ]
    }
    setTimeout(() => {
      this.setData({
        topData,
        isTop: true
      })
      this.handle_swiper();
    }, 1000)
  },
  //获取tab-tag导航栏
  get_tabTag() {
    var that = this
    wx.createSelectorQuery().select("#tabout")
      .boundingClientRect(
        function(res) {
          if (res) {
            const scrollTop = res.top
            that.setData({
              scrollTop
            })
          }
        }
      ).exec();
  },
  //测试接口
  async test() {
    await getIndexFetch().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  onReady: function() {
    wx.nextTick(()=>{
      this.get_tabTag();
      var e = { detail: { current: 0}}
      this.handletopic(e);
    })
  }
})