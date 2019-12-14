Page({

  onShareAppMessage() {
    return {
      title: 'scroll-view',
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg',
    ],
    iconUrls: [
      '../../images/iconfinder_Villa1_2315974.svg',
      '../../images/iconfinder_Picture1_3289576.svg',
    ],
    latitude: 24.924084,
    longitude: 110.536576,
    markers: [{
      id: 1,
      latitude: 24.924084,
      longitude: 110.536576,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 24.924084,
      longitude: 110.536576,
      iconPath: '/image/location.png'
    }, {
        latitude: 24.924084,
        longitude: 110.536576,
      iconPath: '/image/location.png'
    }]
  },
  imageError: function (e) {
    console.log('image发生error事件，携带值为', e.detail.errMsg)
  },
  toupper: function () {
    console.log('触发toupper');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nbTitle1: '房间预订',
      nbTitle2: '门店信息',
      footerTitle1: '首页',
      footerTitle2: '我的',
      nbLoading: true
    })
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 24.924084,
        longitude: 110.536576,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 24.924084,
        longitude: 110.536576,
      }, {
          latitude: 24.924084,
          longitude: 110.536576,
      }]
    })
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