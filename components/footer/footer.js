Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconUrls: [
      '../../image/iconfinder_Villa1_2315974.svg',
      '../../image/iconfinder_Picture1_3289576.svg',
    ]
  },

  toupper: function () {
    console.log('触发toupper');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      footerTitle1: '首页',
      footerTitle2: '我的',
      nbLoading: true
    })
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})