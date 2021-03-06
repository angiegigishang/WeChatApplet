function convertToStarsArray(stars) {
  var num = stars.toString().substring(0, 1);
  var array = [];
  for (var i = 1; i <= 5; i++) {
    if(i <= num) {
      array.push(1);
    }
    else {
      array.push(0)
    }
  }
  return array;
}

function http(url, callBack) {
  var that = this;
  wx.request({
    url: url,
    method: "GET",
    header: {
      "Content-Type": ""
    },
    success: function (res) {
      callBack(res.data.result);
    },
    fail: function () {
      console.log('请求失败')
    }
  })
}

module.exports = {
  convertToStarsArray: convertToStarsArray,
  http: http
}