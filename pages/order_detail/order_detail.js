// pages/order_detail/order_detail.js

Page({
  data: {
    order:{}
  },


  onLoad: function () {
    var that = this
    wx.getStorage({
      key: 'orderdetail',
      success: function (res) {
        that.setData({
          order: res.data
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  order_takeing: function () {
    var that = this;
    wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/ordertaken.do",
      data: {
        driverid: 1,
        orderid: that.data.order.id
      },
      method: 'GET',
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