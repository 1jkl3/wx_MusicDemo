// components/index/t-grid/t-grid.js
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
    gird:[
      {
        img:'icon-shouyinji',
        text:"私人FM"
      },
      {
        img: 'icon-yuanzhuo',
        text: "每日歌曲推荐"
      },
      {
        img: 'icon-bangdan',
        text: "云音乐新歌榜"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //切换到详情页面
    toaboutpath(e){
      var currentindex = e.currentTarget.dataset.index
      if (currentindex === 0){

      } else if (currentindex === 1){
        wx.navigateTo({
          url: '/pages/song-detail/song-detail?index=1',
          events:{
            getindex:function(res){
              // console.log(res)
            }
          },
          success:function(res){
            res.eventChannel.emit("getindex", { index: currentindex})
            res.eventChannel.on("some", function (res) {
              console.log(res)
            })
          }
        })
      }else{

      }
    }
  }
})
