var app = getApp();

Page({
  onLoad: function(event) {
    var inTheatersUrl = app.globalData.doubanBase + '/movies.today?key=a08b87e13b7f9bec5d8d2868e484718e&cityid=10';
    var comingSoonUrl = app.globalData.doubanBase+'/movies.today?key=1a08b87e13b7f9bec5d8d2868e484718e&cityid=10';
    var top250Url = app.globalData.doubanBase +'/movies.today?key=1a08b87e13b7f9bec5d8d2868e484718e&cityid=10'; 
    this.getMovieListData(inTheatersUrl);
  },
  getMovieListData: function(url) {
    var that = this;
    wx.request({
      url: url,
      method: "GET",
      header: {
        "Content-Type": ""
      },      
      success: function (res) {
        console.log(res.data.result)
        that.processDoubanData(res.data.result)
      },
      fail: function () {
        console.log('请求失败')
      }
    })
  },
  processDoubanData: function(moviesDouban) {
    var movies = [];
    for(var i=0; i<3; i++ ){
      var subject = moviesDouban[i];
      var title = subject.movieName;
      if(title.length >= 6) {
        title = title.substring(0, 6) + '...';
      }
      var tempo = {
        title: title,
        average: '4',
        coverageUrl: subject.pic_url,
        movieId: subject.movieId
      }
      movies.push(tempo)
    }
    this.setData({
      movies: movies
    })
    console.log('1',movies)
  }
})