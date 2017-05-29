// pages/register/register.js
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
    /*wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/",
      data: {
        tel: res.detail.value.phone,
        passwd: res.detail.value.passwd
      },
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        wx.navigateTo({
          url: '../orders/orders',
        })
      },
    })*/
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