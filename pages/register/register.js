// pages/register/register.js
var app = getApp()
Page({

  data: {
    confirm:0
  },

  passwd:function(res){
    var node=0
    if (res.detail.value)
      node=1
    this.setData({
      confirm:node
    })
  },
  formSubmit:function(res){
    wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/register.do",
      data: {
        phone: res.detail.value.phone,
        driverid: res.detail.value.driverid,
        password: res.detail.value.passwd,
        username: res.detail.value.name,
        openid: app.globalData.openid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
        app.globalData.userid = res.data.driverid
        wx.reLaunch({
          url: '../orders/orders',
        })
      },
    })
  },
  onLoad: function (options) {
  
  },

  onReady: function () {
  
  },

  onShow: function () {
  
  },


  onHide: function () {
  
  },


  onPullDownRefresh: function () {
  
  },



  onShareAppMessage: function () {
  
  }
})