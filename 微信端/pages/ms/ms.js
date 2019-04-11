//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    multiIndex: [0, 0, 0],
    date: '',
    time: '12:01',
    region: [],
    customItem: '全部',
    imgUrls: [{
      link: '/pages/index/index',
      url: '../img/1.jpg'
    }, {
      link: '/pages/logs/logs',
      url: '../img/2.jpg'
    }, {
      link: '/pages/user/user',
      url: '../img/3.jpg'
    }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  leaveTime(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      leaveTime: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})