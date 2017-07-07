// pages/order_detail/order_detail.js
var app = getApp()
Page({
  data: {
    order:{},
    style:0
  },

gotomap:function(e){
  //console.log(e);
  var latitude = e.currentTarget.dataset.order.latitude;
  var longitude  = e.currentTarget.dataset.order.longitude;
  wx.openLocation({
    latitude:Number(latitude),
    longitude:Number(longitude),
    scale:14,
    name:'目的地',
    address:e.currentTarget.dataset.order.addressdetail
  })
},
  onLoad: function () {
    var that = this
    wx.getStorage({
      key: 'orderdetail',
      success: function (res) {
        that.setData({
          order: res.data.order,
          style: res.data.style
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  order_takeing: function () {
    var that = this;
    wx.request({
      url: that.data.style == 0 ? "https://irecycle.gxxnr.cn/api/car/ordertaken.do" : "https://irecycle.gxxnr.cn/api/car/takecarorder.do",
      data: {
        driverid: app.globalData.userid,
        orderid: that.data.order.id
      },
      method: 'GET',
      success: function (res) {
        //console.log('抢单啦！！！')
        //console.log(res)
        if (res.data.isSuccess)
          wx.showToast({
            title: '你抢到单啦',
            image: '../../static/image/smile.png',
            duration: 1500
          })
        if (!res.data.isSuccess)
          wx.showToast({
            title: '手慢了没抢到',
            image: '../../static/image/sad.png',
            duration: 1500
          })
        that.data.style == 0 ? requestFP(that) : requestXJ(that)
      }
    })
    wx.navigateBack({
      delta: 1
    })
  },
  onReady: function () {
  
  },

  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})