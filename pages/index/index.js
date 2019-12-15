var util = require("../../utils/util.js");
var app = getApp();

Page({
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    checkinTime: '',
    checkoutTime: '',
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg',
    ],
    iconUrls: [
      '../../images/iconfinder_Villa1_2315974.svg',
      '../../images/iconfinder_Picture1_3289576.svg',
    ]
  },
  chooseTime: function (e) {
    wx.navigateTo({
      url: '../../components/calendar/calendar',
    })
  },
  imageError: function (e) {
    console.log('image发生error事件，携带值为', e.detail.errMsg)
  },
  onLoad:function(options){
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
    this.setData({
      nbTitle1: '房间预订',
      nbTitle2: '门店信息',
      footerTitle1: '首页',
      footerTitle2: '我的',
      nbLoading: true,
    });
  },
})