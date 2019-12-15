//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  //每次系统启动的日志
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady: function () {
    console:log("logs page exacute: onReady");
  },
  onShow: function () {
     
  },
  onReachBottom: function () {

  },
})
