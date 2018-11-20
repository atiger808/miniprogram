
var key = 'WEPBZ-K6EWU-4BKVQ-BLXCS-XR5RJ-LSBH2'

Page({
  data: {
    markers: [{
      iconPath: "",
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      name: 'T.I.T 创意园'
    }],

    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: ''
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: ''
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onReady: function(){
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function(){
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function(){
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 120.1614520,
        longitude: 30.19999
      },
      animationEnd(){
        console.log('animation end')
      }
    })
  },
  includePoints: function(){
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 30.1299,
        longitude: 120.1114520
      },{
        latitude: 30.12999,
        longitude: 120.00522
      }]
    })
  }
})