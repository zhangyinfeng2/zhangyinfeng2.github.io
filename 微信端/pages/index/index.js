Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
        "dict_time": "2天",
        "dict_jiudian": "富阳朗庭宾馆(经济型)",
        "dict_chufa": "3月28日...6月9日多团期",
        "dict_jiage": "598",
        "dict_biaoti": "品质纯玩0购物含千古情演出<杭州西湖-西湖游船-宋城-水乡乌镇2日游>",
        "dict_luguo": "['杭州', '嘉兴', '浙江', '华东', '乌镇', '黄龙洞圆缘民俗园', '乌镇东栅', '武林广场', '宋城', '西湖', '黄龙洞', '杭州黄龙洞圆缘民俗园', '桐乡乌镇', '嘉兴桐乡乌镇古镇旅游区', '杭州武林广场', '宋城景区', '杭州宋城', '西子湖', '钱塘湖', '人间天堂', '杭州西湖', '西湖景区', '杭州西湖风景名胜区', '西湖区', '桐乡市']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts7/1805/47/4fa204f6f7409702.jpg_304x201_23dee752.jpg"
      },
      {
        "dict_time": "2天",
        "dict_jiudian": "杭州第一世界大酒店(豪华型)",
        "dict_chufa": "天天",
        "dict_jiage": "449",
        "dict_biaoti": "杭州烂苹果乐园+杭州乐园门票+杭州宋城第一世界大酒店高级双床房/高级大床房",
        "dict_luguo": "['杭州', '浙江', '华东', '杭州烂苹果乐园', '杭州云曼温泉', '杭州乐园', '宋城', '云曼温泉', '烂苹果乐园', '宋城景区', '杭州宋城', '萧山区', '西湖区']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts2/1803/b7/12b17aedcea0a302.jpg_304x201_8fc71881.jpg"
      },
      {
        "dict_time": "2天",
        "dict_jiudian": "杭州花港海航度假酒店(高档型)",
        "dict_chufa": "3月27日...5月5日多团期",
        "dict_jiage": "245",
        "dict_biaoti": "游湖赏花 宿西湖边杭州花港海航度假酒店1晚",
        "dict_luguo": "['杭州', '浙江', '华东', '西湖', '西子湖', '钱塘湖', '人间天堂', '杭州西湖', '西湖景区', '杭州西湖风景名胜区', '西湖区']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts2/1703/21/fd4215a8caa53102.jpg_304x201_7879bb3e.jpg"
      },
      {
        "dict_time": "2天",
        "dict_jiudian": "杭州普金大酒店(经济型)",
        "dict_chufa": "3月28日...6月9日多团期",
        "dict_jiage": "309",
        "dict_biaoti": "<杭州西湖游船-灵隐飞来峰-水乡乌镇>2日游",
        "dict_luguo": "['杭州', '嘉兴', '浙江', '华东', '乌镇', '黄龙洞圆缘民俗园', '乌镇东栅', '飞来峰', '西湖', '黄龙洞', '杭州黄龙洞圆缘民俗园', '杭州飞来峰', '灵隐飞来峰', '灵隐飞来峰景区', '桐乡乌镇', '嘉兴桐乡乌镇古镇旅游区', '西子湖', '钱塘湖', '人间天堂', '杭州西湖', '西湖景区', '杭州西湖风景名胜区', '西湖区', '桐乡市']",
        "dict_tu": "https://imgs.qunarzz.com/vs_ceph_vs_tts/b6b9a473-a928-4136-8a0c-f0dc469cb52e.jpg_304x201_0f0f1655.jpg"
      },
      {
        "dict_time": "2天",
        "dict_jiudian": "宋城千古情主题酒店(杭州西湖店)(舒适型)",
        "dict_chufa": "天天",
        "dict_jiage": "349",
        "dict_biaoti": "双人/亲子2日特惠价！杭州宋城+千古情演出贵宾席宿千古情酒店+自助早餐",
        "dict_luguo": "['杭州', '浙江', '华东', '宋城千古情', '宋城', '宋城景区', '杭州宋城', '西湖区']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts2/1606/6b/9bdb5db032c3549a.jpg_304x201_1fb62406.jpg"
      }
    ],
    array1: [{
      "name": "酒店",
      "icon": "https://imgs.qunarzz.com/p/tts2/1606/6b/9bdb5db032c3549a.jpg_304x201_1fb62406.jpg",
      "color": "#fa5e51",
    }, {
      "name": "机票",
      "icon": "https://imgs.qunarzz.com/p/tts2/1606/6b/9bdb5db032c3549a.jpg_304x201_1fb62406.jpg",
      "color": "#4c98ee",
    }, {
      "name": "火车票/抢票",
      "icon": "https://imgs.qunarzz.com/p/tts2/1606/6b/9bdb5db032c3549a.jpg_304x201_1fb62406.jpg",
      "color": "#4eabee",
    }, {
      "name": "民宿",
      "icon": "https://imgs.qunarzz.com/p/tts2/1606/6b/9bdb5db032c3549a.jpg_304x201_1fb62406.jpg",
      "color": "#4c98ee",
    }, {
      "name": "汽车票/船票",
      "icon": "https://imgs.qunarzz.com/p/tts2/1606/6b/9bdb5db032c3549a.jpg_304x201_1fb62406.jpg",
        "color": "#28ccb4",
    }, {
      "name": "专车/租车",
      "icon": "https://imgs.qunarzz.com/p/tts2/1606/6b/9bdb5db032c3549a.jpg_304x201_1fb62406.jpg",
      "color": "#25c5da",
    }, {
      "name": "交通+酒店",
      "icon": "https://imgs.qunarzz.com/p/tts2/1606/6b/9bdb5db032c3549a.jpg_304x201_1fb62406.jpg",
      "color": "#feb630",
    }, {
      "name": "跟团游",
      "icon": "https://imgs.qunarzz.com/p/tts2/1606/6b/9bdb5db032c3549a.jpg_304x201_1fb62406.jpg",
      "color": "#6ed869",
    }, {
      "name": "高铁游",
      "icon": "https://imgs.qunarzz.com/p/tts2/1606/6b/9bdb5db032c3549a.jpg_304x201_1fb62406.jpg",
      "color": "#44d28a",
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

})