// pages/evaluate/evaluate.js
var app = getApp()
Page({
  data: {
    time: "14:00",
    service_grade: 0,
    software_grade: 0,
    praise: -1
  },
  timechange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  service_grade: function (e) {
    var num = e.currentTarget.dataset.index

    if (this.data.service_grade != num && (this.data.service_grade + 0.5) != num)
      num = e.currentTarget.dataset.index - 0.5
    else if (this.data.service_grade == num)
      num = num - 1
    this.setData({
      service_grade: num
    })
    //console.log('打分：' + this.data.service_grade)
  },
  software_grade: function (e) {
    var num = e.currentTarget.dataset.index
    if (this.data.software_grade == 1 && num == 1)
      num = 0
    this.setData({
      software_grade: num
    })
  },
  praise: function (e) {
    var num = e.currentTarget.dataset.index
    if (this.data.praise == num)
      num = -1
    this.setData({
      praise: num
    })
  },
  formSubmit: function (e) {
    //console.log(this.data.orderid)
    var that = this
    /*console.log('userid', app.globalData.userid)
    console.log('orderid', that.data.orderid)
    console.log('star', that.data.service_grade)
    console.log('text', e.detail.value.evaluate)*/

    wx.request({
      url: 'https://irecycle.gxxnr.cn/api/car/carevaluate.do',
      data: {
        orderid: that.data.orderid,
        star: that.data.service_grade,
        text: e.detail.value.evaluate
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      method: 'POST',
      success: function (res) {
        //console.log(res)
        wx.navigateBack({
          delta: 1
        })
      }
    })

  },
  onLoad: function () {
    var that = this
    wx.getStorage({
      key: 'orderdetail',
      success: function (res) {
        //console.log(res)
        that.setData({
          time: res.data.order.time.split(" ")[1],
          orderid: res.data.order.id
        })
      }
    })
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

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