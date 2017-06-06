// pages/user/user.js
var app = getApp()
Page({
  data:{
    info:{},
    credit:0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    this.setData({
      info:app.globalData.info,
      num: app.globalData.userid
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})