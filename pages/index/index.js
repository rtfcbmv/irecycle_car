// pages/index/index.js
var test = require('../../components/test/test1.js')

Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  showmap:function(){
      test.showmap()
  },
  onReady:function(){
    // 页面渲染完成
    test.showmap()
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})