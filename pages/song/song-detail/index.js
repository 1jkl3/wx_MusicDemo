// pages/common-page/common-page.js
const app = getApp();
const { formatMinute} = require("../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"",
    isplay: false,
    songList: [],
    song_tag: {},
    song_percent:{}
  },
  // 开关
  handleText(e) {
    var isplay = e.detail.isplay
    const bgAudio = app.globalData.bgAudioManage
    console.log("是否暂停" + bgAudio.paused)
    console.log("当前时间" + bgAudio.currentTime)
    console.log("长度" + bgAudio.duration)
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
    setTimeout(() => {
      var songList = [{
          song_id: 13546,
          song_author: "周杰伦",
          song_src: "http://music.163.com/song/media/outer/url?id=1399108142.mp3",
          song_title: "青花瓷",
          song_img:"/assets/img/1.jpg"
        },
        {
          song_id: 15461,
          song_author: "伍佰",
          song_src: "http://music.163.com/song/media/outer/url?id=156925.mp3",
          song_title: "爱你一万年",
          song_img: "/assets/img/2.jpg"
        },
        {
          song_id: 56461,
          song_author: "李荣浩",
          song_src: "http://music.163.com/song/media/outer/url?id=27731176.mp3",
          song_title: "模特",
          song_img: "/assets/img/3.jpg"
        }
      ]
      this.setData({
        songList
      })
      this.createBgAudio(songList[0])
    }, 1000)
  },
  // 背景播放
  createBgAudio: function(res) {
    const bgAudioManage = wx.getBackgroundAudioManager()
    this.setData({
      song_tag:res,
      img: res.song_img
    })
    bgAudioManage.title = res.song_title
    bgAudioManage.src = res.song_src
    bgAudioManage.onPlay(() => {
      console.log("开始")
      var percent_start = formatMinute(bgAudioManage.currentTime)
      var percent_end = formatMinute(bgAudioManage.duration)
      var percent_num = parseInt((bgAudioManage.currentTime / bgAudioManage.duration) * 100)
      console.log(percent_num)
      var song_percent = {
        percent_start,
        percent_num,
        percent_end
      }
      this.setData({
        isplay: true,
        song_percent
      })
      bgAudioManage.duration
    })
    bgAudioManage.onEnded(() => {
      console.log("结束")
      this.nextSong();
    })
    app.globalData.bgAudioManage = bgAudioManage;
  },

  // 上一首
  upSong: function() {
    const songList = this.data.songList
    const bgAudio = app.globalData.bgAudioManage
    var currentIndex = songList.findIndex(item => item.song_src === bgAudio.src) - 1
    // console.log(songList[currentIndex])
    if(currentIndex !== -1){
      this.createBgAudio(songList[currentIndex])
      console.log("上一首")
    }else{
      wx.showToast({
        title: '前面没有啦~',
        icon: 'none',
        duration:1000
      })
    }
  },
  // 下一首
  nextSong: function() {
    const songList = this.data.songList
    const bgAudio = app.globalData.bgAudioManage
    var currentIndex = songList.findIndex(item => item.song_src === bgAudio.src) + 1
    // console.log(songList[currentIndex])
    if (currentIndex < songList.length){
      this.createBgAudio(songList[currentIndex])
      console.log("下一首")
    }else{
      wx.showToast({
        title: '后面没有啦~',
        icon: 'none',
        duration: 1000
      })
    }
  },
  /**
   * 生命周期函数
   */
  onReady: function() {
    
  }

})