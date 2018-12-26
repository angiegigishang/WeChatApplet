// pages/movies/more-movie/more-movie.js
var app = getApp()
var util = require('../../../utils/utils.js')


Page({
  data: {
    navigateTitle: "",
  },
  onLoad: function (options) {
    var category = options.category;
    this.data.navigateTitle = category;
    var dataUrl = "";
    switch(category) {
      case "正在热映":
        dataUrl = app.globalData.doubanBase + '/movies.today?key=1a08b87e13b7f9bec5d8d2868e484718e&cityid=10';
        break;
      case "即将上映":
        dataUrl = app.globalData.doubanBase + '/movies.today?key=1a08b87e13b7f9bec5d8d2868e484718e&cityid=10';
        break;
      case "豆瓣Top250":
        dataUrl = app.globalData.doubanBase + '/movies.today?key=1a08b87e13b7f9bec5d8d2868e484718e&cityid=10';
        break;
    }
    util.http(dataUrl, this.processDoubanData)
  },

  processDoubanData: function (moviesDouban) {
    var movies = [];
    for(var i in moviesDouban){
      var subject = moviesDouban[i];
      var title = subject.movieName;
      if (title.length >= 6) {
        title = title.substring(0, 6) + '...';
      }
      var tempo = {
        stars: util.convertToStarsArray([3, 0]),
        title: title,
        average: '4',
        coverageUrl: subject.pic_url,
        movieId: subject.movieId
      }
      movies.push(tempo)
    }
    this.setData({
      movies: movies
    });
  },

  onReady: function(event) {
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle
    })
  }
})