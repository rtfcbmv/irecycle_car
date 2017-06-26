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
    console.log(app.globalData)
  },
  onHide:function(){
    // 页面隐藏
  },
  onShareAppMessage: function () {
    return {
      title: '我来收之回收车端', // 分享标题
      path: '/pages/orders/orders',
      success: function () {
        wx.showToast({
          title: '转发成功',
          mask: true,
        })
      },
      fail: function () {
      }
    }
  },
  onUnload:function(){
    // 页面关闭
  }
})