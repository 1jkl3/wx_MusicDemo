// pages/find-music/search-page/components/search-box/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inputData:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleinput(e){
      const value = e.detail.value
      this.triggerEvent("handle_input", { value})
    },
    gobackup(){
      this.triggerEvent("goback", {})
    }
  }
})
