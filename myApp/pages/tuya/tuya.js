//index.js

let ctx
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgcolor: 'white',
    pen: {
      linewidth: 3,
      color: '#cc0033'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ctx = wx.createCanvasContext('myCanvas')
    ctx.setStrokeStyle(this.data.pen.color)  //设置线条颜色
    ctx.setLineWidth(this.data.pen.linewidth) //设置线条的宽度
    ctx.setLineCap('round')   
    ctx.setLineJoin('round') 
  },
  touchStart(e) {
    ctx.moveTo(e.touches[0].x, e.touches[0].y)
  },
  touchMove(e) {
    let x = e.touches[0].x
    let y = e.touches[0].y
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.draw(true)
    ctx.moveTo(x, y)
  },
  penSelect(e) {
    console.log(e.target.dataset.param)
    ctx.setLineWidth(e.target.dataset.param)
  },
  colorSelect(e) {
    console.log(e.target.dataset.param)
    ctx.setStrokeStyle(e.target.dataset.param)
  },
  clearBoard(e) {
    this.onLoad()
    this.setData({
      bgcolor: 'white'
    })
  },
  sliderChange(e) {
    console.log(e.detail.value)
    ctx.setLineWidth(e.detail.value)
  },

  onShareAppMessage: function () {
    return {
      title: '涂鸦',
      path: '/pages/tuya/tuya'
    }
  },

})