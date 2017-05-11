


function showmap(){
    this.mapCtx = wx.createMapContext('myMap')
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
    this.mapCtx.moveToLocation()
    console.log(this.mapCtx)
}

function selectweight(selected_type,e, goods){
    var copy=goods
    if (e.target.dataset.weight_index==copy[selected_type][e.target.dataset.index].select)
      copy[selected_type][e.target.dataset.index].select=-1
    else
      copy[selected_type][e.target.dataset.index].select=e.target.dataset.weight_index
    return copy
}

module.exports.showmap = showmap
exports.selectweight = selectweight
