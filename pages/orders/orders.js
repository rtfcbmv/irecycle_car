// pages/orders/orders.js
function countdown(that){
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
  URL: 'https://irecycle.gxxnr.cn/api/car/',
  refresh:function(){
    this.setData({
      count_down: 60,
    })
    var that = this;
    wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/getavailorderlist.do",
      data: {
        driverid:1
      },
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {

        that.setData({
          order_list: res.data,
          num: res.data.length
        })
        console.log(that.data.order_list)
      },
    })
  },
  order_takeing: function (e) {
    var that = this;
    wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/ordertaken.do",
      data: {
        driverid:1,
        orderid: that.data.order_list[e.target.dataset.index].id
      },
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        wx.request({
          url: "https://irecycle.gxxnr.cn/api/car/getavailorderlist.do",
          data: {
            driverid:1
          },
          method: 'GET',
          // header: {}, // 设置请求的 header
          success: function (res) {
            that.setData({
              order_list: res.data,
              num: res.data.length
            })
            console.log(that.data.order_list)
          },
        })
      },
    })
  },

  gotoDetail: function (e) {
    wx.setStorage({
      key: 'orderdetail',
      data: this.data.order_list[e.currentTarget.dataset.index],
      success: function () {
        wx.navigateTo({
          url: '../order_detail/order_detail',
        })
      }
    })
  },


  onLoad: function (options) {
    countdown(this)
  },
  onReady: function () {
  },

  onShow: function () {
    var that = this;
    wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/getavailorderlist.do",
      data: {
        driverid :1
      },
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        that.setData({
          order_list: res.data,
          num: res.data.length
        })
      },
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