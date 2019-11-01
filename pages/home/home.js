//home.js
const home = goHome()

Page({
  data: {
    home: []
  },
  onLoad: function () {
    this.setData({
      home: (wx.getStorageSync('home') || []).map(myHome => {
        return util.formatTime(new Date(myHome))
      })
    })
  }
})

