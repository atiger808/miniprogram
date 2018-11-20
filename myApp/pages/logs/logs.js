//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (options) {
    console.log("我是query参数：" + options.name)
    var g = getCurrentPages()
    console.log(g[0])
  }
})
