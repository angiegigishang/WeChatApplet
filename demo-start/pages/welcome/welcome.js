Page({
  onTap: function(event) {
    console.log('aaa')
    wx.navigateTo({
      url: "../posts/post"
    }) 
    console.log('bbb')  
  }
})