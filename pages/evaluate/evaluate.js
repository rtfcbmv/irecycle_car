// pages/evaluate/evaluate.js
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
    if (this.data.service_grade == 1 && num == 1)
      num = 0
    this.setData({
      service_grade: num
    })
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
    console.log(e.detail.value.evaluate)
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad: function (options) {

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