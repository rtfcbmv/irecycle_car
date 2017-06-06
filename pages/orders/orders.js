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
  that.data.style == 0 ? requestFP(that) : requestXJ(that)
}

function requestFP(that) {
  wx.request({
    url: "https://irecycle.gxxnr.cn/api/car/getavailorderlist.do",
    data: {
      driverid: app.globalData.userid
    },
    method: 'GET',
    // header: {}, // 设置请求的 header
    success: function (res) {
      console.log('已获取废品订单')
      that.data.haveorder.FP = res.data.length
      that.setData({
        order_list: res.data,
        num: res.data.length,
        haveorder: that.data.haveorder
      })
      console.log(res.data)
    },
  })
}
function requestXJ(that) {
  wx.request({
    url: "https://irecycle.gxxnr.cn/api/car/getcarorders.do",
    data: {
      driverid: app.globalData.userid
    },
    method: 'GET',
    // header: {}, // 设置请求的 header
    success: function (res) {
      console.log('已获取小件订单')
      that.data.haveorder.XJ = res.data.length
      that.setData({
        order_list: res.data,
        num: res.data.length,
        haveorder: that.data.haveorder
      })
      console.log(res.data)
    },
  })
}

var app = getApp()
Page({
  data: {
    order_list: [],
    num:0,
    count_down:60,
    style:0,
    haveorder:{FP:0,XJ:0}
  },

  refresh:function(){
    refresh(this)
  },
  order_takeing: function (e) {
    var that = this;
    wx.request({
      url: that.data.style == 0 ? "https://irecycle.gxxnr.cn/api/car/ordertaken.do" : "https://irecycle.gxxnr.cn/api/car/takecarorder.do",
      data: {
        driverid: app.globalData.userid,
        orderid: that.data.order_list[e.target.dataset.index].id
      },
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log('抢单啦！！！')
        console.log(res)
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
            duration:1500
          })
        that.data.style == 0 ? requestFP(that) : requestXJ(that)
      },
    })
  },

  gotoDetail: function (e) {
    wx.setStorage({
      key: 'orderdetail',
      data: {
        order:this.data.order_list[e.currentTarget.dataset.index],
        style:this.data.style
        },
      success: function () {
        wx.navigateTo({
          url: '../order_detail/order_detail',
        })
      }
    })
  },

  changestyle: function (e) {
    this.setData({
      style: e.currentTarget.dataset.index
    })
    var that = this
    if (e.currentTarget.dataset.index==0)
      requestFP(that)
    else
      requestXJ(that)
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
            if (res.data.errCode == 1)
             {
              app.globalData.openid = res.data.data.openid
              wx.reLaunch({
                url: '../register/register',
              })
            }
            else {
              app.globalData.credit = res.data.data.credit
              app.globalData.userid = res.data.data.driverid
              wx.request({
                url: "https://irecycle.gxxnr.cn/api/car/getcarorders.do",
                data: {
                  driverid: app.globalData.userid
                },
                method: 'GET',
                // header: {}, // 设置请求的 header
                success: function (res) {
                  console.log('已获取小件订单')
                  that.data.haveorder.XJ = res.data.length
                  that.setData({
                    haveorder: that.data.haveorder
                  })
                },
              })
              requestFP(that)
          }
          }
        })
        

      }
    })
  },
  onReady: function () {
  },

  onShow: function () {
    if (app.globalData.userid!=-1)
    {
      var that =this
      wx.request({
        url: "https://irecycle.gxxnr.cn/api/car/getcarorders.do",
        data: {
          driverid: app.globalData.userid
        },
        method: 'GET',
        // header: {}, // 设置请求的 header
        success: function (res) {
          console.log('已获取小件订单')
          that.data.haveorder.XJ = res.data.length
          that.setData({
            haveorder: that.data.haveorder
          })
        },
      })
      requestFP(that)
      that.setData({
        style:0
      })
    }
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