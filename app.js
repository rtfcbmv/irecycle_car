//app.js
function countdown(that) {
  if (that.globalData.count_down <= 0)
  {
    that.globalData.count_down=10,
    wx.getLocation({
      success: function(res) {
        that.globalData.location = res
        console.log(that.globalData.location)
        /*wx.request({
          url: "https://irecycle.gxxnr.cn/api/car/getavailorderlist.do",
          data: {
            driverid: app.globalData.userid,
            latitude:res.latitude,
            longitude:res.longitude
          },
          method: 'GET',
          // header: {}, // 设置请求的 header
          success: function (res) {
            console.log('返回：')
            
          },
        })*/
      },
    })
  }
  setTimeout(function () {
    that.globalData.count_down = that.globalData.count_down-1
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
    count_down:5,
    location:{}
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