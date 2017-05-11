// pages/myorders/myorders.js

var app = getApp()
Page({

  data: {
    order_list: [],
    myorder_list:[],
    order_state:0,
    select_order:-1,
    num:0
  },

  changepape:function(e){
    this.setData({
      order_state: e.target.dataset.index
    })
  },
  selectorder: function (e) {
    this.setData({
      select_order: e.currentTarget.dataset.index == this.data.select_order ? -1 : e.currentTarget.dataset.index
    })
  },


  onLoad: function () {
    this.setData({
      order_list: app.order_list
    })
    var sub = []
    for (var i = 0; i < app.myorder_list.length;i++)
    {
      sub.push(this.data.order_list[app.myorder_list[i]])
    }
    this.setData({
      myorder_list:sub
    })
  },
  onReady: function () {
  
  },
  onShow: function () {
    this.setData({
      order_list: app.order_list,
      num: app.myorder_list.length
    })
  },
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