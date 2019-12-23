// pages/find-music/search-page/search-page.js

Page({
  data: {
    inputData: "",
    doors:[]
  },
  handleinput(e) {
    let inputData = e.detail.value;
    this.setData({
      inputData
    })
  },
  gobackup() {
    wx.navigateBack({
      delta: 1
    })
  },
  get_doors(){
    var doors = [
      {
        d_id: "012",
        d_name: "动物世界"
      },
      {
        d_id:"1",
        d_name:"梁博"
      },
      {
        d_id: "2",
        d_name: "清明雨上"
      },
      {
        d_id: "3",
        d_name: "张国荣"
      },
      {
        d_id: "4",
        d_name: "烟鬼"
      },
      {
        d_id: "5",
        d_name: "周杰伦"
      },
      {
        d_id: "6",
        d_name: "陈奕迅"
      },
      {
        d_id: "7",
        d_name: "皮皮虾我们走"
      },
      {
        d_id: "8",
        d_name: "进击的巨人"
      },
      {
        d_id: "9",
        d_name: "极乐净土"
      }
    ]
    setTimeout(()=>{
      this.setData({
        doors
      })
    },1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var than = this;
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("input_data",function(res){
      than.setData({
        inputData:res.value
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  onUnload: function() {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2]
    prevPage.setData({
      search_data:this.data.inputData
    })
    console.log(prevPage.data.search_data)
  }
})