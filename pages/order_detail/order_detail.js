// pages/order_detail/order_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_list: [{ "name": "景先生", "address": "南岗区西大直街91号", "phone": "110", "time": "2017/6/13/8:00", "remark": "无" }, { "name": "霍小姐", "address": "南岗区西大直街93号", "phone": "119", "time": "2017/6/13/15:00", "remark": "无" }, { "name": "奕大爷", "address": "南岗区西大直街94号", "phone": "120", "time": "2017/6/13/15:00", "remark": "少放辣" }],
    orderid:0
  },


  onLoad: function (options) {
    this.setData({
      orderid: options.index
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