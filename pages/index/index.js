// pages/index/index.js
var test = require('../../components/test/test1.js')

Page({
  data:{
    Mapmarkers: [{
      id: 1,
      longitude: 126.639458,
      latitude: 45.751602,
      title: "我家",
      iconPath: "../../static/image/home.png",
      alpha: 0.9,
      width: 20,
      height: 20
    }]
  },
  onLoad:function(options){
    console.log("坐标：" + options.longitude + ' ' + options.latitude)
    var sub = this.data.Mapmarkers
    sub[0].longitude = options.longitude
    sub[0].latitude = options.latitude
    this.setData({
      location: options,
      Mapmarkers:sub
    })
  },
  showmap:function(){
      //test.showmap()
  },
  onReady:function(){
    // 页面渲染完成
    //test.showmap()
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})