Page({
  canvasIdErrorCallback: function(){
    console.log(e.detail.errMsg)
  },
  pos:{
    x:0,
    y:0
  },
  onLoad: function(e){
    clearInterval(this.interval)
    this.btnclick()
  },

  btnclick: function(){
    setInterval(this.drawDemo, 10)
  },
  drawDemo: function(){
    this.pos.x++
    this.pos.y++
    var context = wx.createCanvasContext('firstCanvas')
    context.setStrokeStyle("#ffff00")
    context.setLineWidth(5)
    // 画矩形
    // context.rect(0, 0, 200, 200)
    // 画填充的矩形
    // context.fillRect(this.pos.x, this.pos.y, 40, 40,"#ff0000")
    context.stroke()
    context.setStrokeStyle("#ffff00")
    context.moveTo(20+this.pos.x, this.pos.y)
    context.arc(10+this.pos.x, this.pos.y, 20, 0, 2 * Math.PI, true)
    context.setFillStyle('#ffff00')
    context.fill()
    // context.stroke()
    context.setStrokeStyle('rgba(1,1,1,0)')
    

    // 画嘴巴
    context.moveTo(140 + this.pos.x, 100 + this.pos.y)
    context.arc(100 + this.pos.x, 100 + this.pos.y, 40, 0, Math.PI, false)

    // 画眼睛
    context.moveTo(85 + this.pos.x, 80 + this.pos.y)
    context.arc(80 + this.pos.x, 80 + this.pos.y, 5, 0, 2*Math.PI, true)
    context.moveTo(125 + this.pos.x, 88 + this.pos.y)
    context.arc(120 + this.pos.x, 80 + this.pos.y, 5, 0, 2*Math.PI, true)

    context.stroke()
    context.draw()
    if(this.pos.x>=300&&this.pos.y>=300){
      this.pos.x=-100;
      this.pos.y=-100;
    }
  },

  onReady: function () {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    }
    this.drawBall()
    this.interval = setInterval(this.drawBall, 17)
  },
  drawBall: function () {
    var p = this.position
    p.x += p.vx
    p.y += p.vy
    if (p.x >= 300) {
      p.vx = -2
    }
    if (p.x <= 7) {
      p.vx = 2
    }
    if (p.y >= 300) {
      p.vy = -2
    }
    if (p.y <= 7) {
      p.vy = 2
    }

    var context = wx.createContext()

    function ball(x, y) {
      context.beginPath(0)
      context.arc(x, y, 5, 0, Math.PI * 2)
      context.setFillStyle('#1aad19')
      context.setStrokeStyle('rgba(1,1,1,0)')
      context.fill()
      context.stroke()
    }

    ball(p.x, 150)
    ball(150, p.y)
    ball(300 - p.x, 150)
    ball(150, 300 - p.y)
    ball(p.x, p.y)
    ball(300 - p.x, 300 - p.y)
    ball(p.x, 300 - p.y)
    ball(300 - p.x, p.y)

    wx.drawCanvas({
      canvasId: 'canvas',
      actions: context.getActions()
    })
  },
  onShareAppMessage: function () {
    return {
      title: 'Canvas动画',
      path: '/pages/canvas/vanvas'
    }
  },
})