//app.js
App({
  globalData:{
    userInfo:null,
    wxcode:null,
    encryptedData:null,
    iv:null,
    openid:""
  },

  onLaunch: function() { 
    var that = this
    wx.login({
      success: function (res) {
        console.log("已获取到登陆态")
        console.log(res.code)
        wx.getUserInfo({
          success: function (res) {
            console.log("已获取到微信账户个人信息")
            that.info = res.userInfo
          }
        })
        /* wx.request({
           url: 'https://irecycle.gxxnr.cn/api/car/',
           data: {
             code: res.code
           },
           method: 'GET',
           header: {
             'content-type': 'application/json'
           },
           success: function (res) {
             console.log("获取openid：" + res.data.openid)
             //设置openid
             //this.globalData.openid = res.data.openid
             wx.request({
               url: '',
               data: {
                 openid: res.data.openid
               },
               method: 'GET',
               success: function (res) { 
                 console.log(res.data);
                 //设置是否初始用户 
                 if (res.data)
                 {
                   wx.navigateTo({
                     url: '../register/register',
                   })
                 }
               }
             })
           }
         })*/
      }
    })
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