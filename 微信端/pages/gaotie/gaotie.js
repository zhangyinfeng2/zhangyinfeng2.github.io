// pages/gaotie/gaotie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      item1: [
          {
              "url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554113565133&di=a336f5cd9db1fadf4c3e03940cfebb92&imgtype=0&src=http%3A%2F%2Fres.co188.com%2Fdata%2Fdrawing%2Fimg640%2F6341022081450.jpg",
              "title1": "高铁住宿指南",
              "title2": "酒店7.5折起"
          },
          {
              "url": "http://file108.mafengwo.net/s7/M00/8C/0C/wKgB6lPIHiqABXh5AAWwIXxoPGA61.jpeg?imageMogr2/strip%7CimageMogr2/thumbnail/%211070x804r/gravity/Center/crop/%211070x804/quality/90",
              "title1": "睡遍网红酒店",
              "title2": "每周五上新"
          }, {
              "url": "http://www.gov.cn/jrzg/images/images/1c6f6506c2380f6f62c403.jpg",
              "title1": "热门景点榜",
              "title2": "高铁游必玩"
          }
      ],
      array: ['杭州', '苏州', '南京', '千岛湖'],
      index: 0,
      array1: ['1小时可达', '2小时可达', '3小时可达', '4小时可达', '5小时可达', '6小时可达', '7小时可达', '8小时可达', '9小时可达', '10小时可达'],
      index1: 2,
      array2: ['人气排序','由远到近','由近到远'],
      index2: 0
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
    bindPickerChange: function (e) {
        this.setData({
            index: e.detail.value
        })
    },
    bindPickerChange1: function (e) {
        this.setData({
            index1: e.detail.value
        })
    },
    bindPickerChange2: function (e) {
        this.setData({
            index2: e.detail.value
        })
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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