//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    currentTab: 0,
    Arr: [{
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
      },
      {
        "dict_time": "1天",
        "dict_jiudian": "暂无住宿信息",
        "dict_chufa": "3月27日...6月9日多团期",
        "dict_jiage": "361",
        "dict_biaoti": "G20版印象西湖<回忆是杭州>VIP席演出门票，电子票，支持当天预定",
        "dict_luguo": "['杭州', '浙江', '华东', '印象西湖', '西湖区']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts8/1706/84/0d1ebee065a4ea02.jpg_304x201_83b86904.jpg"
      },
      {
        "dict_time": "3天",
        "dict_jiudian": "富阳朗庭宾馆(经济型)",
        "dict_chufa": "3月28日...6月9日多团期",
        "dict_jiage": "798",
        "dict_biaoti": "品质出行100%纯玩0购物<杭州西湖游船-水乡乌镇-千岛湖3日游>",
        "dict_luguo": "['嘉兴', '杭州', '浙江', '华东', '乌镇', '乌镇东栅', '杭州黄龙洞', '飞来峰', '钱塘江', '千岛湖', '西湖', '雷峰塔', '灵隐寺', '千岛湖景区', '杭州千岛湖', '杭州千岛湖风景名胜区', '杭州飞来峰', '灵隐飞来峰', '灵隐飞来峰景区', '杭州雷峰塔', '雷峰塔景区', '桐乡乌镇', '嘉兴桐乡乌镇古镇旅游区', '杭州灵隐寺', '西子湖', '钱塘湖', '人间天堂', '杭州西湖', '西湖景区', '杭州西湖风景名胜区', '萧山区', '西湖区', '淳安县', '桐乡市']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts1/1805/ac/74b4c3ff5bdc6602.jpg_304x201_d6996148.jpg"
      }
    ],
    Brr: [{

        "dict_time": "2天",
        "dict_jiudian": "宋城千古情主题酒店(杭州西湖店)(舒适型)",
        "dict_chufa": "天天",
        "dict_jiage": "349",
        "dict_biaoti": "双人/亲子2日特惠价！杭州宋城+千古情演出贵宾席宿千古情酒店+自助早餐",
        "dict_luguo": "['杭州', '浙江', '华东', '宋城千古情', '宋城', '宋城景区', '杭州宋城', '西湖区']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts2/1606/6b/9bdb5db032c3549a.jpg_304x201_1fb62406.jpg"
      },
      {
        "dict_time": "1天",
        "dict_jiudian": "暂无住宿信息",
        "dict_chufa": "3月27日...6月9日多团期",
        "dict_jiage": "361",
        "dict_biaoti": "G20版印象西湖<回忆是杭州>VIP席演出门票，电子票，支持当天预定",
        "dict_luguo": "['杭州', '浙江', '华东', '印象西湖', '西湖区']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts8/1706/84/0d1ebee065a4ea02.jpg_304x201_83b86904.jpg"
      },
      {
        "dict_time": "3天",
        "dict_jiudian": "富阳朗庭宾馆(经济型)",
        "dict_chufa": "3月28日...6月9日多团期",
        "dict_jiage": "798",
        "dict_biaoti": "品质出行100%纯玩0购物<杭州西湖游船-水乡乌镇-千岛湖3日游>",
        "dict_luguo": "['嘉兴', '杭州', '浙江', '华东', '乌镇', '乌镇东栅', '杭州黄龙洞', '飞来峰', '钱塘江', '千岛湖', '西湖', '雷峰塔', '灵隐寺', '千岛湖景区', '杭州千岛湖', '杭州千岛湖风景名胜区', '杭州飞来峰', '灵隐飞来峰', '灵隐飞来峰景区', '杭州雷峰塔', '雷峰塔景区', '桐乡乌镇', '嘉兴桐乡乌镇古镇旅游区', '杭州灵隐寺', '西子湖', '钱塘湖', '人间天堂', '杭州西湖', '西湖景区', '杭州西湖风景名胜区', '萧山区', '西湖区', '淳安县', '桐乡市']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts1/1805/ac/74b4c3ff5bdc6602.jpg_304x201_d6996148.jpg"
      },
      {
        "dict_time": "2天",
        "dict_jiudian": "格雷斯精选酒店(杭州西溪店)(高档型)",
        "dict_chufa": "天天",
        "dict_jiage": "229",
        "dict_biaoti": "宿格雷斯精选酒店（杭州西溪店），游西溪湿地/杭州西湖/杭州宋城景区+双早",
        "dict_luguo": "['杭州', '浙江', '华东', '西溪湿地东区', '西湖外事游船', '宋城', '西湖', '非诚勿扰拍摄地', '西溪国家湿地公园', '杭州西溪湿地旅游区', '西溪湿地', '外事游湖环湖', '杭州西湖游船', '西湖外事游船环湖', '宋城景区', '杭州宋城', '西子湖', '钱塘湖', '人间天堂', '杭州西湖', '西湖景区', '杭州西湖风景名胜区', '西湖区']",
        "dict_tu": "https://imgs.qunarzz.com/vs_ceph_vs_tts/42c4d75b-1575-4e40-ad79-e92b1d45bea8.jpg_304x201_03d43188.jpg"
      },
      {
        "dict_time": "2天",
        "dict_jiudian": "桐庐雷迪森度假酒店(豪华型)",
        "dict_chufa": "3月27日...6月5日多团期",
        "dict_jiage": "279",
        "dict_biaoti": "杭州周边桐庐度假 住桐庐雷迪森度假酒店 游大奇山高尔夫体验儿童淘天地",
        "dict_luguo": "['杭州', '浙江', '华东', '大奇山国家森林公园', '杭州大奇山国家森林公园', '桐庐', '桐庐县']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts0/1704/c2/0d3eacef09b78902.jpg_304x201_03f2831d.jpg"

      }
    ],
    Crr: [{
        "dict_time": "1天",
        "dict_jiudian": "暂无住宿信息",
        "dict_chufa": "天天",
        "dict_jiage": "3880",
        "dict_biaoti": "中国高空跳伞|国内 浙江千岛湖 3-4千米高空跳伞体验|免会费|中文教练",
        "dict_luguo": "['杭州', '浙江', '华东', '千岛湖', '千岛湖景区', '杭州千岛湖', '杭州千岛湖风景名胜区', '淳安县']",
        "dict_tu": "https://imgs.qunarzz.com/vs_ceph_vs_tts/6617bae7-9688-4abe-8b55-5e9b2bf5f33a.jpg_304x201_b10d3170.jpg"
      },
      {
        "dict_time": "2天",
        "dict_jiudian": "视界连锁精品酒店(苏州天元辰广场店)(经济型)",
        "dict_chufa": "3月28日...6月9日多团期",
        "dict_jiage": "416",
        "dict_biaoti": "纯玩-无购物<杭州西湖-灵隐寺-苏州园林-寒山寺2日游>",
        "dict_luguo": "['杭州', '苏州', '浙江', '江苏', '华东', '寒山寺', '黄龙洞圆缘民俗园', '七里山塘', '狮子林', '虎丘', '西湖', '灵隐寺', '黄龙洞', '杭州黄龙洞圆缘民俗园', '山塘街', '苏州寒山寺', '虎丘山', '苏州虎丘', '吴中第一名胜', '杭州灵隐寺', '苏州狮子林', '西子湖', '钱塘湖', '人间天堂', '杭州西湖', '西湖景区', '杭州西湖风景名胜区', '西湖区', '平江区', '金阊区']",
        "dict_tu": "https://imgs.qunarzz.com/vs_ceph_vs_tts/df93767c-c0f1-4cda-a94d-c4b67cb18b03.jpg_304x201_15f04df8.jpg"
      },
      {
        "dict_time": "2天",
        "dict_jiudian": "杭州普金大酒店(经济型)",
        "dict_chufa": "3月28日...6月9日多团期",
        "dict_jiage": "518",
        "dict_biaoti": "纯玩-看古镇夜景<杭州西湖-宋城-乌镇西栅-东栅2日游>",
        "dict_luguo": "['杭州', '嘉兴', '浙江', '华东', '黄龙洞圆缘民俗园', '乌镇东栅', '乌镇西栅', '宋城', '西湖', '黄龙洞', '杭州黄龙洞圆缘民俗园', '西栅', '宋城景区', '杭州宋城', '西子湖', '钱塘湖', '人间天堂', '杭州西湖', '西湖景区', '杭州西湖风景名胜区', '西湖区', '桐乡市']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts5/1707/ed/143d51ea40e12002.jpg_304x201_4e3193a8.jpg"
      },
      {
        "dict_time": "3天",
        "dict_jiudian": "富阳朗庭宾馆(经济型)等",
        "dict_chufa": "3月28日...6月9日多团期",
        "dict_jiage": "698",
        "dict_biaoti": "杭州出发含千古情演出<杭州西湖-宋城-水乡乌镇-苏州拙政园3日游>",
        "dict_luguo": "['杭州', '苏州', '嘉兴', '浙江', '江苏', '华东', '乌镇', '寒山寺', '黄龙洞圆缘民俗园', '乌镇东栅', '杭州黄龙洞', '七里山塘', '宋城', '拙政园', '西湖', '枫桥', '黄龙洞', '杭州黄龙洞圆缘民俗园', '山塘街', '苏州寒山寺', '苏州拙政园', '中国园林之母', '天下园林之典范', '桐乡乌镇', '嘉兴桐乡乌镇古镇旅游区', '苏州枫桥', '宋城景区', '杭州宋城', '西子湖', '钱塘湖', '人间天堂', '杭州西湖', '西湖景区', '杭州西湖风景名胜区', '西湖区', '桐乡市', '平江区', '金阊区']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts0/1805/77/a19f32eacb75fc02.jpg_304x201_68e09122.jpg"
      },
      {
        "dict_time": "2天",
        "dict_jiudian": "暂无住宿信息",
        "dict_chufa": "天天",
        "dict_jiage": "699",
        "dict_biaoti": "<杭州西湖+西湖游船+宋城+宋城千古情+乌镇西栅2日游>纯玩，宿乌镇赏夜景",
        "dict_luguo": "['宁波', '杭州', '嘉兴', '浙江', '华东', '乌镇', '乌镇西栅', '宋城', '通济桥', '梅家坞茶文化村', '西湖', '雷峰塔', '宁波通济桥', '临安', '杭州梅家坞茶文化村', '梅家坞', '西栅', '杭州雷峰塔', '雷峰塔景区', '桐乡乌镇', '嘉兴桐乡乌镇古镇旅游区', '宋城景区', '杭州宋城', '西子湖', '钱塘湖', '人间天堂', '杭州西湖', '西湖景区', '杭州西湖风景名胜区', '临安市', '西湖区', '桐乡市', '余姚市']",
        "dict_tu": "https://imgs.qunarzz.com/p/tts6/1704/13/9052ff03bc2efe02.jpg_304x201_aa047ea3.jpg"

      }
    ]
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
  menuTap: function (e) {
    var current = e.currentTarget.dataset.current;//获取到绑定的数据
    //改变menuTapCurrent的值为当前选中的menu所绑定的数据
    this.setData({
      menuTapCurrent: current
    });


  },

 
})