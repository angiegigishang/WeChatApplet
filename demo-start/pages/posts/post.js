
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
    console.log(this.data.postList)
  }
})