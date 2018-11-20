//index.js
//获取应用实例
const app = getApp()
// let latitude
// let longitude
// let speed
// let accuracy
Page({
  data: {
    locationInfo: [],
    msg: ''
  },
  // 高德地图通过经纬度获取城市api接口 参数location, key
  // https://restapi.amap.com/v3/geocode/regeo?location=116.481488,39.990464&key=c9942476e78d0ce32f583af17729f3de
  // 高德天气预报接口 
  // 参数 key， city， extensions （base: 返回实况天气， all: 返回预报天气） output
  // https://restapi.amap.com/v3/weather/weatherInfo?city=330111&key=c9942476e78d0ce32f583af17729f3de&ouput=json
  // https://api.map.baidu.com

  onLoad: function () {
    this.loadInfo()
    console.log(this.route)
  },
  loadInfo() {
    let thisPage = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        let latitude = res.latitude
        let longitude = res.longitude
        let speed = res.speed
        let accuracy = res.accuracy
        thisPage.setData({
          longitude: longitude,
          latitude: latitude
        })
        console.log(longitude)
        thisPage.loadCity(longitude + '', latitude + '')
      },
    })
  },
  loadCity: function (longitude, latitude) {
    var thisPage = this
    let acode
    wx.request({
      url: 'https://restapi.amap.com/v3/geocode/regeo?location=' + longitude + ',' + latitude + '&key=c9942476e78d0ce32f583af17729f3de',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        let acode = res.data.regeocode.addressComponent.adcode
        thisPage.setData({
          address: res.data.regeocode.formatted_address,
          city: res.data.regeocode.addressComponent.city,
          citycode: res.data.regeocode.addressComponent.citycode,
          district: res.data.regeocode.addressComponent.district,
          province: res.data.regeocode.addressComponent.province,
          township: res.data.regeocode.addressComponent.township,
          street: res.data.regeocode.addressComponent.streetNumber.street,
          acode: res.data.regeocode.addressComponent.adcode
        })
        thisPage.loadWeather(acode)
      }
    })
  },
  loadWeather: function (acode) {
    var thisPage = this
    // let acode = e.currentTarget.dataset.param
    console.log(acode)
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo?city=' + acode + '&extensions=all&key=c9942476e78d0ce32f583af17729f3de&ouput=json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        let weatherResult = res.data.forecasts["0"].casts
        console.log('结果：' + weatherResult)
        thisPage.setData({
          weatherResult: weatherResult
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '天气预报',
      path: this.route
    }
  },

})
