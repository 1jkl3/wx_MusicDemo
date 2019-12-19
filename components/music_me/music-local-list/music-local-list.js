// components/music_me/music-local-list/music-local-list.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    addGlobalClass:true
  },
  properties: {
    test:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    musiclist: [
      {
        m_id: 0,
        m_title: "本地音乐",
        m_num: "123",
        m_icon: "icon-yinle-copy"
      },
      {
        m_id: 1,
        m_title: "最近播放",
        m_num: "123",
        m_icon: "icon-yinle-copy"
      },
      {
        m_id: 2,
        m_title: "我的电台",
        m_num: "123",
        m_icon: "icon-yinle-copy"
      },
      {
        m_id: 3,
        m_title: "我的收藏",
        m_num: "123",
        m_icon: "icon-yinle-copy"
      }
    ],
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
