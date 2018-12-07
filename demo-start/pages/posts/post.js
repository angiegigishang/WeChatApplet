Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "Nov 18 2018",
    title: "正是正是虾肥蟹壮时"
  },
  imgPath: "/images/...",
  process: function () {
    var date = "Nov 18 2019";
    var date_ele = document.getElementById('id')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload');
    var posts_content = [{
      date: "Sep 18 2016",
      title: "正好是虾肥蟹壮时",
      post_img: "/images/post/crab.png",
      author_img: "/images/avatar/1.png",
      content: "中华绒螯蟹是一种经济蟹类，又称河蟹、毛蟹、清水蟹、大闸蟹。为中国久负盛名的美食。其螯足用于取食和抗敌，掌部内外缘密生绒毛，绒螯蟹因此而得名。杂食性动物，鱼、虾、螺、蚌、蠕虫、蚯蚓、昆虫及其幼虫等均可作为大闸蟹的动物性饵料。",
      view_num: "112",
      collect_num: "96"
    },{
      date: "Sep 18 2016",
      title: "正好是虾肥蟹壮时",
      post_img: "/images/post/crab.png",
      author_img: "/images/avatar/1.png",
      content: "中华绒螯蟹是一种经济蟹类，又称河蟹、毛蟹、清水蟹、大闸蟹。为中国久负盛名的美食。其螯足用于取食和抗敌，掌部内外缘密生绒毛，绒螯蟹因此而得名。杂食性动物，鱼、虾、螺、蚌、蠕虫、蚯蚓、昆虫及其幼虫等均可作为大闸蟹的动物性饵料。",
      view_num: "112",
      collect_num: "96"
    }]
    this.setData(
     { posts_key: posts_content}
    )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   // console.log('onready');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   // console.log('onshow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
   // console.log('onhide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //console.log('onload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //console.log('onrefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log('onreachbottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
   // console.log('onshareappmessage');
  }
})