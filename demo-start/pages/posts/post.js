
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
    // wx.navigateTo({
    //   url: "post-detail/post-detail?id=" + postid
    // })
  },
  onSwiperTap: function(event) {
    //target与currentTarget区别，target指当前点击组件，currentTarget指事件捕获的组件
    //target这里指的是image而current指的是swiper
    var postId = event.target.dataset.postid;
    //console.log(postId);
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  }
})