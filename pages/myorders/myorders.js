// pages/myorders/myorders.js
var app = getApp()
Page({

  data: {
    myorder_list:[],
    order_state:0,
    select_order:-1,
    numOne:0,
    numTwo:0
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

  gotoDetail: function (e) {
    wx.setStorage({
      key: 'orderdetail',
      data: this.data.myorder_list[this.data.select_order],
      success: function () {
        wx.navigateTo({
          url: '../order_detail/order_detail',
        })
      }
    })
  },

  orderCancel:function(){
    var that = this
    wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/ordercancelaccept.do",
      data: {
        orderid: this.data.myorder_list[this.data.select_order].id
      },
      method: 'GET',
      success: function (res) {
        console.log(res)
        wx.request({
          url: "https://irecycle.gxxnr.cn/api/car/getmyorderlist.do",
          data: {
            driverid: app.globalData.userid
          },
          method: 'GET',
          success: function (res) {
            that.setData({
              myorder_list: res.data,
              num: res.data.length
            })
          },
        })
      },
    })
  },

  onLoad: function () {
    
  },
  onReady: function () {
  
  },
  onShow: function () {
    var that = this;
    wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/getmyorderlist.do",
      data: {
        driverid: app.globalData.userid
      },
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res)
        var num=0
        for (var i = 0; i < res.data.length;i++)
        {
          if (res.data.state==6)
            num++
        }
        that.setData({
          myorder_list: res.data,
          numOne: res.data.length-num,
          numTwo:num
        })
      },
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
    var that = this;
    wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/getmyorderlist.do",
      data: {
        driverid: app.globalData.userid
      },
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res)
        var num = 0
        for (var i = 0; i < res.data.length; i++) {
          if (res.data.state == 6)
            num++
        }
        that.setData({
          myorder_list: res.data,
          numOne: res.data.length - num,
          numTwo: num
        })
        wx.stopPullDownRefresh()
      },
    })
  }
})