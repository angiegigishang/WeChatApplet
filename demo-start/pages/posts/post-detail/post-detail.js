var postsData = require('../../../data/posts-data.js')

Page({
  data: {
      
  },
  onLoad: function(option) {
    var postId = option.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    //如果在onload方法中，不是异步的去执行一个数据绑定，
    //则不需要使用this.setData方法，只需要对this.data赋值即可实现数据绑定
    this.setData ({
      postData: postData
    })

    // var postsCollected = {
    //   1: "true",
    //   2: "false",
    //   3: 'true'
    // }

    var postsCollected = wx.getStorageSync('posts_collected')
    if(postsCollected) {
      var postCollected = postsCollected[postId]
      this.setData({
        collected: postCollected
      })
    }
    else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);
    } 
  },

  onCollectionTap: function(event) {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    //收藏转换
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    //更新文章是否的缓存值
    wx.setStorageSync('posts_collected', postsCollected);
    //更新数据绑定,从而实现切换照片
    this.setData({
      collected: postCollected
    })
  }


})