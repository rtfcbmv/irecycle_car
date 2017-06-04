// pages/orders/orders.js
function countdown(that){
  if (that.data.count_down <= 0)
    refresh(that)
  setTimeout(function () {
    that.setData({
      count_down: that.data.count_down - 1
    })
    countdown(that)
  }, 1000)
}

function refresh(that) {
  that.setData({
    count_down: 60,
  })
  wx.request({
    url: "https://irecycle.gxxnr.cn/api/car/getavailorderlist.do",
    data: {
      driverid: 1
    },
    method: 'GET',
    // header: {}, // 设置请求的 header
    success: function (res) {
      console.log('已刷新')
      that.setData({
        order_list: res.data,
        num: res.data.length
      })
      //console.log(that.data.order_list)
    },
  })
}

var app = getApp()
Page({
  data: {
    order_list: [],
    num:0,
    count_down:60
  },

  refresh:function(){
    refresh(this)
  },
  order_takeing: function (e) {
    var that = this;
    wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/ordertaken.do",
      data: {
        driverid: app.globalData.userid,
        orderid: that.data.order_list[e.target.dataset.index].id
      },
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        wx.request({
          url: "https://irecycle.gxxnr.cn/api/car/getavailorderlist.do",
          data: {
            driverid: app.globalData.userid
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
    var that = this
    wx.login({
      success: function (res) {
        console.log("已获取到登陆态")
        console.log(res.code)
        wx.getUserInfo({
          success: function (res) {
            console.log("已获取到微信账户个人信息")
            app.globalData.info = res.userInfo
          }
        })
        wx.request({
          url: 'https://irecycle.gxxnr.cn/api/car/carlogin.do',
          data: {
            code: res.code
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {

            console.log(res)
            if (res.data.errCode == 1) {
              app.globalData.openid = res.data.data.openid
              wx.reLaunch({
                url: '../register/register',
              })
          }
          else {
              app.globalData.userid = res.data.data.driverid
              wx.request({
                url: "https://irecycle.gxxnr.cn/api/car/getavailorderlist.do",
                data: {
                  driverid: app.globalData.userid
                },
                method: 'GET',
                // header: {}, // 设置请求的 header
                success: function (res) {
                  console.log('返回：')
                  console.log(res)
                  that.setData({
                    order_list: res.data,
                    num: res.data.length
                  })
                },
              })
          }
          }
        })
        

      }
    })
  },
  onReady: function () {
  },

  onShow: function () {
    var that =this
    wx.request({
      url: "https://irecycle.gxxnr.cn/api/car/getavailorderlist.do",
      data: {
        driverid: 1
      },
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log('已刷新')
        that.setData({
          order_list: res.data,
          num: res.data.length
        })
        console.log(res.data)
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