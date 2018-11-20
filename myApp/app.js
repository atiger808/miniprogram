
//app.js
App({
  //创建区全局变量
  data: {
    height:175,
  },
  // 可以在这个函数体内生命全局变量和全局方法，以及全局数据
  // 程序启动初始化的时候执行， 只执行一次， 不能在这个函数里边调
  // getCurrentPages()方法
  onLaunch: function (options) {
    console.log("程序初始化， 只执行一次")
    console.log(options)
    
    // // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  onShow: function(options){
    console.log("前台显示， 从后台进入前台显示")
    console.log("使用当前函数内调用属性使用this" + this.name)
  },
  onHide: function(options){
    console.log("从前台进入后台显示")
  },
  globalData: {
    userInfo: null
  },
  name:"程序大咖",
  sayHi: function(){
    console.log("我会说英文！ 哈哈~~!")
  },
})
