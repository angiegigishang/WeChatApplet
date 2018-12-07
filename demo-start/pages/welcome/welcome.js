Page({
  onTap: function(event) {
     wx.redirectTo({
       url: "../posts/post"
     })   
  },
  onSubTap: function(event) {
    console.log('execute onSubTap')
  },
  onUnload: function() {
    //console.log('welcome page is onunload')
  },
  onHide: function() {
    //console.log('welcome page is hide')
  }
})