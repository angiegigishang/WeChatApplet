var app = getApp();

Page({

  onLoad: function(event) {
    var inTheatersUrl = app.globalData.doubanBase + '/movies.today?key=1a08b87e13b7f9bec5d8d2868e484718e&cityid=10';
    var comingSoonUrl = app.globalData.doubanBase+'/movies.today?key=1a08b87e13b7f9bec5d8d2868e484718e&cityid=10';
    var top250Url = app.globalData.doubanBase +'/movies.today?key=1a08b87e13b7f9bec5d8d2868e484718e&cityid=10'; 
    this.getMovieListData(inTheatersUrl);
  },
  getMovieListData: function(url) {
    wx.request({
      url: url,
      method: "GET",
      header: {
        "Content-Type": ""
      },
      success: function (res) {
        console.log(res)
      },
      fail: function () {
        console.log('请求失败')
      }
    })
  }
})