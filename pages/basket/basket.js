// pages/basket/basket.js
var app = getApp()
Page({
  data:{
    order_list:[],
    order_num:0,
    goods: [],
    weight_range: ["0~10斤", "10~50斤", "50~100斤"],
    operate:{"edit":0,"select":[]},
    select_all:0,
    amount:0
  },
  URL:'http://easy-mock.com/mock/59070ef87a878d73716e3aa7/wx-irecycle/',

  edittap:function(){
    var sub = this.data.operate
    sub.edit= sub.edit==0 ? 1:0
    this.setData({
          operate:sub
        })
  },



  order_select_all:function(e){
    var sub = this.data.operate
    var sum = 0
    for (var i=0;i<this.data.order_list.length;i++)
    {
      sum++
      sub.select[i]= this.data.select_all==0?1:0
    }
    this.setData({
      operate:sub,
      select_all:this.data.select_all==1?0:1,
      amount:this.data.select_all==1?0:sum
    })

  },
  order_select:function(e){
    var sub = this.data.operate
    var node = 0
    sub.select[e.currentTarget.dataset.index] = sub.select[e.currentTarget.dataset.index]==1 ? 0:1
    node = sub.select[e.currentTarget.dataset.index]==1 ? 1:-1
    this.setData({
      operate:sub,
      amount:this.data.amount+node
    })
   
  },

  onLoad:function(options){
    var that = this;
    wx.request({
      url: that.URL+'getgoods',
      data: {},
      method: 'GET',    
      success: function(res){
        // success
        that.setData({
          goods:res.data.data.goods
        })
      },
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    this.setData({
      order_list:app.goods_list,
      order_num:app.goods_list.length
    })
    var sub = this.data.operate
    for (var i=0;i<this.data.order_list.length;i++)
    {
      sub.select.push(0)
    }
    this.setData({
      operate:sub
    })
   // console.log(sub)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})