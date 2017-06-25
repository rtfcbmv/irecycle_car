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
   // password: res.detail.value.passwd,
     // username: res.detail.value.name,
    wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/register.do",
      data: {
        phone: res.detail.value.phone,
        driverid: res.detail.value.driverid,
        openid: app.globalData.openid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      method: 'POST',
      success: function (res) {
        console.log('注册界面',res)
        app.globalData.userid = res.data.driverid
        if(res.data.status=='failed'){
          wx.showToast({
            title: '认证失败，请输入正确的信息',
            icon:'loading'
          })
        }
        else{

          wx.reLaunch({
            url: '../orders/orders',
          })
        }
        
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