//index.js
//获取应用实例
const app = getApp()
// 引入外部文件 require()
var cm = require('../../utils/comm.js')
Page({
  data: {
    motto: '我的小程序',
    myname: "小老虎",
  },
  // 页面初次加载
  onLoad: function(){
    console.log(this.data.moto)
    console.log("从全局app.js中获取全局变量信息" + app.name);
    app.sayHi();
    console.log(app.data);
    console.log(app.data.height);
    var a = '作用域'
    console.log(a)
    cm.go()
  },
  // 页面初次渲染完成
  onReady: function(){
    console.log("程序准备好以后执行")
  },
  // 页面卸载周期函数
  onUnload: function(){
    console.log("页面卸载后执行")
  },
  // 页面绑定事件
  bindNavTo: function(){
    wx.navigateTo({
      url: "../canvas/canvas",
    })
    cm.go()
  },
  bindNavQuery: function(){
    wx.navigateTo({
      url: "../mulmedia/mulmedia"
    })
  },
  bindVideo: function(){
    wx.navigateTo({
      url: "../video/video"
    })
  },
  bindTest: function(){
    wx.navigateTo({
      url: '../content/content'
    })
  },
  bindGame: function(){
    wx.navigateTo({
      url: '../game/game',
    })
  },
  bindPaint: function(){
    wx.navigateTo({
      url: '../tuya/tuya',
    })
  },
  // 下拉刷新事件， 操作此函数的时候，必须要配置
  // 在app.json里面配置 "enablePullDownRefresh":true
  onPullDownRefresh: function(){
    console.log("页面下拉刷新执行事件")
  },
  onPageScroll: function(){
    console.log("页面滚动事件执行")
  },
  onShareAppMessage: function(){
    return{
      title: "我的小程序",
      path: "pages/index/index"
    }
  },
})
