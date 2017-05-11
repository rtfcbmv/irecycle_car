// pages/order_detail/order_detail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_list: [],
    orderid:0
  },


  onLoad: function (options) {
    this.setData({
      orderid: options.index
    })
  },

  order_takeing: function () {
    app.order_list[this.data.orderid].taken = 1
    this.setData({
      order_list: app.order_list
    })
    app.myorder_list.push(this.data.orderid)
    //console.log(app.myorder_list)
    wx.navigateBack({
      delta: 1
    })
  },
  onReady: function () {
  
  },

  onShow: function () {
    this.setData({
      order_list: app.order_list
    })
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