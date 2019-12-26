// pages/common-page/common-page.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/assets/img/1.jpg",
    isplay: false
  },
  // 开关
  handleText(e) {
    var isplay = e.detail.isplay
    const bgAudio = app.globalData.bgAudioManage
    this.setData({
      isplay
    })
    if (isplay) {
      bgAudio.play()
    } else {
      bgAudio.pause()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.play();
  },
  // 播放功能
  play: function(audioId) {
    app.globalData.audioId = audioId
    this.setData({
      isplay: true
    })
    this.createBgAudio()
  },
  // 背景播放
  createBgAudio: function(res) {
    const bgAudioManage = wx.getBackgroundAudioManager()
    bgAudioManage.title = "青花瓷"
    bgAudioManage.src = "http://music.163.com/song/media/outer/url?id=1399108142.mp3"
    app.globalData.bgAudioManage = bgAudioManage;
  },

  // 上一首
  upSong: function() {
    const bgAudio = app.globalData.bgAudioManage
    bgAudio.title = "爱你一万年"
    bgAudio.src = "http://music.163.com/song/media/outer/url?id=156925.mp3"
    app.globalData.bgAudioManage = bgAudio;
    console.log("上一首")
  },
  // 下一首
  nextSong: function() {
    console.log("下一首")
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    const bgAudioManage = app.globalData.bgAudioManage
    console.log(bgAudioManage)
    bgAudioManage.onPlay(() => {

    })
  },

})