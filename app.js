//app.js
App({
  globalData:{
    userInfo:null,
    wxcode:null,
    encryptedData:null,
    iv:null,
  },
  order_list: [{ "id": 0, "name": "景先生", "address": "南岗区西大直街91号", "phone": "110", "time": "2017/6/13/8:00", "taken": 0, "state": 1 }, { "id": 1, "name": "霍女士", "address": "南岗区西大直街93号", "phone": "119", "time": "2017/6/13/15:00", "taken": 0, "state": 3}, { "id": 2, "name": "奕大爷", "address": "南岗区西大直街94号", "phone": "120", "time": "2017/6/13/15:00", "taken": 0, "state": 1}],
  myorder_list:[],
  goods_list:[],
  onLaunch: function() { 
    // Do something initial when launch.
    
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