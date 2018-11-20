//index.js
//获取应用实例
let timer;
let numAi = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnState: false,
    winImage: '',
    winNum: 0,
    gameResult: '',
    imageAiScr: '',
    imageUserScr: '/pages/image/wenhao.jpg',
    srcs: [
      '/pages/image/shitou.jpg',
      '/pages/image/jiandao.jpg',
      '/pages/image/bu.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timerGo();
  },
  timerGo() {
    timer = setInterval(this.move, 100);
  },
  move() {
    if (numAi >= 3) {
      numAi = 0;
    }
    this.setData({ imageAiScr: this.data.srcs[numAi] })
    numAi++
  },


  changeForChoose(e) {
    if (this.data.btnState) {
      return;
    }
    this.setData({ imageUserScr: this.data.srcs[e.currentTarget.id] })
    clearInterval(timer);
    let user = this.data.imageUserScr;
    let ai = this.data.imageAiScr;
    let num = this.data.winNum;
    let str = '你输了';
    let imageResult = ''

    if (user == '/pages/image/shitou.jpg' && ai == '/pages/image/jiandao.jpg') {
      num++;
      str = '你赢了！';
      wx.setStorageSync('winNum', num)
    }
    if (user == '/pages/image/bu.jpg' && ai == '/pages/image/shitou.jpg') {
      num++;
      str = '你赢了！';
      wx.setStorageSync('winNum', num)
    }
    if (user == '/pages/image/jiandao.jpg' && ai == '/pages/image/bu.jpg') {
      num++;
      str = '你赢了！';
      wx.setStorageSync('winNum', num)
    }
    if (user == ai) {
      str = '平局！'
    }
    if (str =="你赢了！"){
      imageResult = '/pages/image/zan.jpg'
    }
    if(str=="你输了"){
      imageResult = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542559864542&di=ebc35b7e586daafb18b31b8c365da681&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd0c8a786c9177f3e326795267bcf3bc79f3d564d.jpg'
    }
    if(str=='平局！'){
      imageResult ='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542560849295&di=6f39c1d5351d8a20d4ffc590593c02b7&imgtype=0&src=http%3A%2F%2Fwww.kuaihou.com%2Fd%2Ffile%2F201707%2Fd11ee384098769c5ef5d0182faa6c822.jpg'
    }
    this.setData({
      winNum: num,
      gameResult: str,
      btnState: true,
      winImage: imageResult
    })
  },


  againBtn: function () {
    if (this.data.btnState == false) {
      return;
    }
    this.timerGo()
    this.setData({
      btnState: false,
      gameResult: '',
      winImage:"",
      imageUserScr: '/pages/image/wenhao.jpg'
    })
  },

  onShareAppMessage: function () {
    return {
      title: '猜拳游戏',
      path: '/pages/game/game'
    }
  },
})