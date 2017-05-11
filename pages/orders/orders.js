// pages/orders/orders.js
function countdown(that) {
  if (that.data.count_down <= 0)
    that.setData({
      count_down: 60,
    })
  setTimeout(function () {
    that.setData({
      count_down: that.data.count_down - 1
    })
    countdown(that)
  }, 1000)
}

var app = getApp()
Page({
  data: {
    order_list: [],
    num:0,
    count_down:60
  },

  refresh:function(){
    this.setData({
      count_down: 60,
    })
  },
  order_takeing: function (e) {
    app.order_list[e.currentTarget.dataset.index].taken=1
    this.setData({
      order_list: app.order_list
    })
    app.myorder_list.push(e.currentTarget.dataset.index)
    //console.log(app.myorder_list)

  },
  onLoad: function (options) {
    countdown(this)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      num: this.data.order_list.length,
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