

Page({
  data: {
    text: "测试文本",
    btntext: '按钮文本测试',
    color: '',
    condition: false,
  },
  onLoad: function(options){

  },
  onReady: function(){

  },
  onShow: function(){

  },
  onHide: function(){

  },
  onUnload: function(){

  },
  btnclick: function(){
    var condition = this.data.condition
    this.setData({
      text:'按钮已经被点击',
      btntext: "我被点击",
      color: 'red',
      condition: !condition
    })
  }

})
