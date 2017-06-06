//app.js
function countdown(that) {
  if (that.globalData.count_down <= 0) {
    var sub = Math.random() * 20 + 10
    sub = Math.ceil(sub),
    that.globalData.count_down = sub,
      wx.getLocation({
      type:'gcj02',
        success: function (res) {
          that.globalData.location = res
          console.log(that.globalData.location)
          wx.request({
            url: "https://irecycle.gxxnr.cn/api/car/setlocation.do",
            data: {
              driverid: that.globalData.userid,
              latitude:res.latitude,
              longitude:res.longitude
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'POST',
            // header: {}, // 设置请求的 header
            success: function (res) {
              console.log('提交坐标')
            },
          })
        },
      })
  }
  setTimeout(function () {
    that.globalData.count_down = that.globalData.count_down - 1
    countdown(that)
  }, 1000)
}

App({
  globalData:{
    userInfo:null,
    wxcode:null,
    encryptedData:null,
    iv:null,
    openid:"",
    userid:-1,
    info:{},
    count_down:5
  },

  onLaunch: function() { 
    countdown(this)

  },
  onShow: function() {
      // Do something when show.
      
      
  },
  onHide: function() {
      // Do something when hide.
      
      
  },
  onError: function(msg) {
    console.log(msg)
  }
})