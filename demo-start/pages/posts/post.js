
var postsData = require('../../data/posts-data.js')


Page({
  data: {
    postList: postsData.postList
  },
  onLoad: function (options) {
    // this.setData(
    //  { posts_key: postsData.postList}
    // )
    //this.data.postList = postsData.postList
   
  },
  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  },
  onSwiperItemTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  }
})