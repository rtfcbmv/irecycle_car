// pages/service/service.js
var get_function = require('../../components/test/test1.js')
var secondHand = require('../../components/secondHand/index.js')
var banjia = require('../../components/banjia/index.js')

Page({
  data: {
    service: 0,
    goods_type: [],
    goods: [],
    goods_list: [],
    select:[],
    selected_type: 0,
    selected_goods: -1,
    image: "",
    Y_Dvalue:0,
    left:612,
    top:870,
    prompt:0

  },
  URL:'http://easy-mock.com/mock/59070ef87a878d73716e3aa7/wx-irecycle/',
  banjia_makePhoneCall:banjia.makePhoneCall,
  secondHand_textareaBlured:secondHand.textareaBlured,
  secondHand_textareaFocused:secondHand.textareaFocused,
  secondHand_addPhoto:secondHand.addPhoto,
  switchtab: function (e) {
    var that = this;
    this.setData({
      selected_type: e.target.dataset.index,
      selected_goods: -1,
    })
    //animationData_left_polish animation.height(60+'rpx').step()
    
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    })
    animation.height(10+'rpx').top(35+ e.target.dataset.index*80+'rpx').step({ duration: 200 })
    console.log(animation)
    that.setData({
      animationData_left_polish: animation.export()
    })
    setTimeout(function(){
      animation.height(60+'rpx').step()
      that.setData({
        animationData_left_polish: animation.export()
      })
    },200)
  },

  selectgoods: function (e) {
    var sub = e.currentTarget.dataset.index
    if (sub == this.data.selected_goods)
      sub = -1
    this.setData({
      selected_goods: sub
    })
  },

  Hovermove: function (e) {
    console.log(e)
    this.setData({
      left:2*e.touches[0].clientX-25,
      top:2*e.touches[0].clientY+20
    })
  },
  
  inputweight:function(e){
    var copy = this.data.goods
    copy[this.data.selected_type][this.data.selected_goods].weight = e.detail.value
    if (e.detail.value!="")
      copy[this.data.selected_type][this.data.selected_goods].select = 1
    else
      copy[this.data.selected_type][this.data.selected_goods].select = -1
    this.setData({
      goods: copy
    })
  },
  submitweight:function(e){
    var node=0
    for (var i = 0; i < this.data.goods_list.length; i++) 
    {
      if (this.data.goods_list[i].type_id == this.data.selected_type && this.data.goods_list[i].goods_id == this.data.selected_goods) 
      {
        node=1
        if (e.detail.value == "")
          this.data.goods_list.splice(i, 1)
        else
          this.data.goods_list[i].weight = e.detail.value
        break
      }
    }
    if (node == 0 && e.detail.value != "")
    {
      var sub = { "type_id": -1, "goods_id": -1, "weight": "" }
      sub.type_id = this.data.selected_type
      sub.goods_id = this.data.selected_goods
      sub.weight = e.detail.value
      this.data.goods_list.push(sub)
    }   
  },


  /*selectweight: function (e) {

     var D_Value=87*e.target.dataset.index+130.5-e.changedTouches[0].clientY
     console.log(D_Value)
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'linear',
    })
    this.setData({
      image: this.data.goods[this.data.selected_type][this.data.selected_goods].imgUrl
    })
    this.animation = animation
    if (this.data.goods[this.data.selected_type][this.data.selected_goods].select == -1) {
      //添加到回收车
      var sub = {"type_id":-1,"goods_id":-1,"weight_id":-1}
      sub.type_id = this.data.selected_type
      sub.goods_id = this.data.selected_goods
      sub.weight_id = e.target.dataset.weight_index
      this.data.goods_list.push(sub)
      //动画效果
      animation.translate(120 - this.data.left/2, 100 + e.target.dataset.index * 87 - this.data.top/2-D_Value).step({duration:20})
        animation.opacity(1).scale(3,3).step({duration:20})
        animation.scale(1,1).translate(0,0).step({duration:440})
        animation.opacity(0).step()
    }
    else if (this.data.goods[this.data.selected_type][this.data.selected_goods].select == e.target.dataset.weight_index) {
      //回收车删除
      for(var i=0;i<this.data.goods_list.length;i++)
      {
       if (this.data.goods_list[i].type_id==this.data.selected_type && this.data.goods_list[i].goods_id==this.data.selected_goods)
        {
          this.data.goods_list.splice(i,1)
          break
        }
      }
      //动画效果
      animation.opacity(1).scale(0.5,0.5).step({duration:1})
      animation.scale(2, 2).translateY(-40).step({ duration: 300 })
      animation.translateY(-45).translateX(900 - this.data.left/2).rotate(90).step({ duration: 300 })
      animation.opacity(0).step()
      animation.scale(1, 1).translateY(0).rotate(0).translateX(0).step({ duration: 1 })
    }
    else {
      //回收车项更改
      for(var i=0;i<this.data.goods_list.length;i++)
      {
        if (this.data.goods_list[i].type_id==this.data.selected_type && this.data.goods_list[i].goods_id==this.data.selected_goods)
        {
          this.data.goods_list[i].weight_id = e.target.dataset.weight_index
          break
        }
      }
      //动画效果
      animation.opacity(1).scale(2,2).translateY(-40).step({duration:200})
      animation.scale(1,1).translateY(0).step({duration:280})
      animation.opacity(0).step()
    }
    this.setData({
      animationData_goods: animation.export(),
    })

    var copy = get_function.selectweight(this.data.selected_type,e, this.data.goods)
    this.setData({
      goods: copy
    })
  },*/

  change_service: function (e) {
    this.setData({
      service: e.target.dataset.index,
      selected_type: 0,
      selected_goods: -1
    }) //animationData_progress  translateX(107*e.target.dataset.index)
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease-out',
    })
    this.animation = animation
    animation.width(50 + 'rpx').left(e.target.dataset.index * 250 + 'rpx').step({ duration: 500 })
    animation.width(250 + 'rpx').step({ duration: 200 })
    this.setData({
      animationData_progress: animation.export()
    })
  },

//交易记录界面
  formSubmit: function (e) {
    console.log(this.data.goods_list)
    console.log(e.detail.value.amount)
    wx.navigateBack({
      delta: 1
    })
  },
  submit_ask: function (e) {
    var sub=0
    if (e.detail.value != "")
      sub = 1
    this.setData({
        prompt: sub
      })
  },


  onLoad:function(){
    var that = this;

    wx.request({
      url: that.URL+'getgoods',
      data: {},
      method: 'GET', 
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data);
        that.setData({
          goods_type:res.data.data.goodsType,
          goods:res.data.data.goods
        })
      },
      
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})