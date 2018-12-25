var util = require('../../utils/utils.js');
var app = getApp();

Page({
  data: {
    inTheaters:{},
    comingSoon: {},
    top250: {}
  },
  onLoad: function(event) {
    var inTheatersUrl = app.globalData.doubanBase + '/movies.today?key=1a08b87e13b7f9bec5d8d2868e484718e&cityid=10';
    //var comingSoonUrl = app.globalData.doubanBase+'/movies.today?key=a08b87e13b7f9bec5d8d2868e484718e&cityid=10';
    //var top250Url = app.globalData.doubanBase +'/movies.today?key=a08b87e13b7f9bec5d8d2868e484718e&cityid=10'; 

    this.getMovieListData(inTheatersUrl, 'inTheaters', '正在热映');
    //this.getMovieListData(inTheatersUrl, 'comingSoon', '即将上映');
    //this.getMovieListData(inTheatersUrl, 'top250', '豆瓣top250');
  },
  getMovieListData: function (url, settedKey, categoryTitle) {
    var that = this;
    wx.request({
      url: url,
      method: "GET",
      header: {
        "Content-Type": ""
      },      
      success: function (res) {
        console.log(res.data.result)
        that.processDoubanData(res.data.result, settedKey, categoryTitle)
      },
      fail: function () {
        console.log('请求失败')
      }
    })
  },
  processDoubanData: function(moviesDouban, settedKey, categoryTitle) {
    var movies = [];
    for(var i=0; i<3; i++ ){
      var subject = moviesDouban[i];
      var title = subject.movieName;
      if(title.length >= 6) {
        title = title.substring(0, 6) + '...';
      }
      var tempo = {
        stars: util.convertToStarsArray([3,0]),
        title: title,
        average: '4',
        coverageUrl: subject.pic_url,
        movieId: subject.movieId
      }
      movies.push(tempo)
    }
    var readyData = {};
    readyData[settedKey] = {
      categoryTitle: categoryTitle,
      movies: movies
    }
    this.setData(readyData);
  }
})