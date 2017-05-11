module.exports={
    makePhoneCall:function(){
        wx.makePhoneCall({
          phoneNumber: '13159877131',
          success: function(res) {
            // success
          }
        })
    }
}