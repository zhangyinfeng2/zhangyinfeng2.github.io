// pages/youlun/youlun.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        mode: "scaleToFill",
        arr: ['https://m4.tuniucdn.com/fb2/t1/G5/M00/C5/DD/Cii-slx97gWIeTZ4AAEVgoOURW8AAUO1gLb3GEAARWa81.jpeg', 'https://m4.tuniucdn.com/fb2/t1/G4/M00/DA/D5/Cii_J1yRyU6IenBxAADmyvy5TMoAAEoTAF45QsAAObi92.jpeg', 'https://m.tuniucdn.com/fb2/t1/G5/M00/D4/AB/Cii-slyHWU-IKqd0AAD7CgQhIXYAAUX6gHl1bIAAPsi71.jpeg', 'https://m.tuniucdn.com/fb2/t1/G5/M00/36/DD/Cii-sluvFVmIFgcaAAGaUQfk2aIAAObygKXKYgAAZpp905.png'],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000,
        nav1: [{
            "img1": "https://m1.tuniucdn.com/fb2/t1/G5/M00/79/B8/Cii-slqXadeIKwtVAAAL0HDPyyMAADw_APanccAAAvo103.png",
            "text1": "日本",
            "img3": "https://m4.tuniucdn.com/fb2/t1/G5/M00/79/BB/Cii-tFqXazaIexAiAAAMWsyYJdMAADxAAPdQI8AAAxy890.png",
            "text3": "皇家",
        }, {
            "img1": "https://m2.tuniucdn.com/fb2/t1/G5/M00/79/B8/Cii-s1qXaemIJ_LtAAANTj8iT34AADw_AP-sqEAAA1m158.png",
            "text1": "东南亚",
            "img3": "https://m4.tuniucdn.com/fb2/t1/G5/M00/79/BA/Cii-slqXaweINo58AAANsMgN9lEAADw_wP-6jwAAA3I185.png",
            "text3": "歌诗达",
        }, {
            "img1": "https://m2.tuniucdn.com/fb2/t1/G5/M00/79/B9/Cii-slqXagCIPIt4AAALulmn6zQAADw_QLCOqsAAAvS121.png",
            "text1": "地中海",
            "img3": "https://m4.tuniucdn.com/fb2/t1/G5/M00/79/BB/Cii-tFqXa0iIelIiAAANvKz6sKMAADxAAP_m34AAA3U525.png",
            "text3": "公主",
        }, {
            "img1": "https://m.tuniucdn.com/fb2/t1/G5/M00/79/BA/Cii-slqXamuIb2tmAAANMZ4E7psAADw_gE9gzQAAA1J512.png",
            "text1": "加勒比海",
            "img3": "https://m2.tuniucdn.com/fb2/t1/G5/M00/79/BC/Cii-tFqXa2-IT043AAALb23eaLAAADxAQP907oAAAuH069.png",
            "text3": "诺唯真",
        }, {
            "img1": "https://m1.tuniucdn.com/fb2/t1/G5/M00/79/BB/Cii-tFqXaxyIcF5AAAAM8KCpSXYAADxAAHoKWMAAA0I848.png",
            "text1": "多瑙河",
            "img3": "https://m.tuniucdn.com/fb2/t1/G5/M00/65/18/Cii-slvJboyISY7fAAAbrxVfHn8AAPWIwP_3SoAABvH030.png",
            "text3": "世纪游轮",
        }, ],
        nav2: [{
            "img2": "https://m.tuniucdn.com/fb2/t1/G5/M00/79/B9/Cii-s1qXaiKIVePBAAAL6M4AnNIAADw_QNtnwIAAAwA692.png",
            "text2": "三亚&西沙",
            "img4": "https://m4.tuniucdn.com/fb2/t1/G5/M00/79/BC/Cii-slqXa5qIUtJbAAAO3K3u_xMAADxAQP_8LkAAA9H798.png",
            "text4": "星梦",
        }, {
            "img2": "https://m.tuniucdn.com/fb2/t1/G5/M00/79/BA/Cii-tFqXarWIOnAeAAAMocaW5tQAADw_wFp9WMAAAy5349.png",
            "text2": "加拉斯加",
            "img4": "https://m4.tuniucdn.com/fb2/t1/G5/M00/79/BC/Cii-s1qXa8aIKccBAAAOMY79LosAADxAwIsOtcAAA5J219.png",
            "text4": "MSC",
        }, {
            "img2": "https://m2.tuniucdn.com/fb2/t1/G5/M00/4E/8A/Cii-s1purMGIXCa_AAAOvjWRuv0AAC6OAMKCmEAAA7W820_w640_h0_c0_t0.png",
            "text2": "美洲",
            "img4": "https://m3.tuniucdn.com/fb2/t1/G5/M00/7B/B6/Cii-tFqY_xGIBT9cAAAN7UCdXskAADz7AHJg0IAAA4F644.png",
            "text4": "维京",
        }, {
            "img2": "https://m3.tuniucdn.com/fb2/t1/G5/M00/E0/98/Cii-slt6d0qITiBbAAAiip14KAsAAMWGQL0PBIAACKi436.png",
            "text2": "南极",
            "img4": "https://m.tuniucdn.com/fb2/t1/G5/M00/7B/B6/Cii-tFqY_ymIPHL_AAAMpehth9AAADz7AMtkZMAAAy9659.png",
            "text4": "庞洛",
        }, {
            "img2": "https://m.tuniucdn.com/fb2/t1/G5/M00/79/BC/Cii-s1qXa-WIK8v-AAAMVFNGD3UAADxAwO-zEYAAAxs798.png",
            "text2": "全部航次",
            "img4": "https://m.tuniucdn.com/fb2/t1/G5/M00/79/BC/Cii-s1qXa-WIK8v-AAAMVFNGD3UAADxAwO-zEYAAAxs798.png",
            "text4": "全部品牌",
        }, ],
        product: [{
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/F4/F2/Cii-slwgmXqIa0w2ALxAsdgcGMQAASFkAMLH3MAvEDJ589_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "3999",
                "productNumber": "7.5万",
                "satisfaction": "93%",
                "titlelist": "途牛自营-歌诗达威尼斯号上海-长崎-上海4晚5日",
                "describe": " 6月6日上海登船全场8折，限量抢购"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/33/D4/Cii-tFw8Py6IJmWIAAUJO1pXZSsAATC4QMztgUABQlT883_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "2699",
                "productNumber": "728",
                "satisfaction": "100%",
                "titlelist": "[端午]歌诗达威尼斯号上海-长崎-上海4晚5日",
                "describe": " 6月6日上海登船限时特惠4人及以上预定，赠送上海区域至吴淞口邮轮码头商务专车接送"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/FD/BA/Cii-tFyfF3eIFNn1AAKk3SbDzHkAAUwbgP0wrsAAqT1545_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "3899",
                "productNumber": "6672",
                "satisfaction": "91%",
                "titlelist": "公主邮轮盛世公主号上海-鹿儿岛-上海4晚5天",
                "describe": "7月25日上海登船欢乐暑期多条岸上观光自由选择"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/80/D9/Cii-tFqeUhmIEpQOAAhZjpN_09QAAD7zgOj8C0ACFmm542_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "7099",
                "productNumber": "912",
                "satisfaction": "91%",
                "titlelist": "[五一]海洋航行者号吉隆坡+民丹岛4晚6天",
                "describe": "4月29日上海往返新航直飞"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G3/M00/18/6E/Cii_JVlQ20eITcBqAALYV7HcNhAAABqaABTwwsAAthv432_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "4199",
                "productNumber": "7.4万",
                "satisfaction": "93%",
                "titlelist": "皇家加勒比海洋量子号上海-长崎-上海4晚5日",
                "describe": "05月20日上海登船"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/29/22/Cii-tFw3G1GIV3ZfAAIzLEohcYAAAS5ewMDbzcAAjNE450_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "3999",
                "productNumber": "728",
                "satisfaction": "100%",
                "titlelist": "途牛自营-歌诗达威尼斯号上海-福冈-熊本-上海5晚6日",
                "describe": "05月18日上海登船"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/82/56/Cii-tFqfolWIBCXnAAI7_IG7u0cAAD-IgB_u_8AAjwU677_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "3399",
                "productNumber": "728",
                "satisfaction": "100%",
                "titlelist": "途牛自营 歌诗达威尼斯号上海-福冈-熊本-上海5晚6日",
                "describe": "5月23日 上海登船 限时预售"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G3/M00/44/1F/Cii_LllsT56ITvozAAPJ1X50eaUAAD-hgIH7kMAA8nt18_w640_h480_c1_t0.jpeg",
                "productDepart": "上海出发",
                "productPrice": "3899",
                "productNumber": "6672",
                "satisfaction": "91%",
                "titlelist": "盛世公主号邮轮上海-长崎-上海4晚5日游",
                "describe": "7月17日 上海往返"
            }

        ],
        product1: [{
                "productImg": "https://m.tuniucdn.com/fb2/t1/G3/M00/44/1F/Cii_LllsT56ITvozAAPJ1X50eaUAAD-hgIH7kMAA8nt18_w640_h480_c1_t0.jpeg",
                "productDepart": "上海出发",
                "productPrice": "3899",
                "productNumber": "6672",
                "satisfaction": "91%",
                "titlelist": "盛世公主号邮轮上海-长崎-上海4晚5日游",
                "describe": " 7月17日 上海往返"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/33/D4/Cii-slw8PyyIWSseAAVwoR3UNBQAATC4QMoOjgABXC5106_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "3299",
                "productNumber": "736",
                "satisfaction": "100%",
                "titlelist": "途牛自营-歌诗达威尼斯号上海-福冈-上海4晚5日",
                "describe": " 5月28号 上海往返"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/F4/AF/Cii-sluF_HCIbSfPAAN_4i6argoAAM1uADtinUAA3_6339_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "6199",
                "productNumber": "321",
                "satisfaction": "100%",
                "titlelist": " 途牛自营-皇家加勒比海洋光谱号上海-鹿儿岛-长崎-上海5晚6日",
                "describe": "7月2日 上海登船 4人及以上预定，赠送上海区域至上海吴淞口码头商务专车接驳（往返）"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/3F/9E/Cii-tFpe5DeIAYKkAMDjH0XIHCsAACeuADby6wAwOM3946_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "2549",
                "productNumber": "1919",
                "satisfaction": "90%",
                "titlelist": "地中海辉煌号上海-福冈-鹿儿岛-上海5晚6日游",
                "describe": "6月5日 上海登船"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G4/M00/BB/36/Cii_J1xkyfmId0wTAAOGsJrU-18AAD4awD0s4QAA4bI205_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "2599",
                "productNumber": "182",
                "satisfaction": "100%",
                "titlelist": "途牛自营-星梦邮轮探索梦号上海-京都-上海4晚5日",
                "describe": "04月23号上海登船"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/82/56/Cii-tFqfolWIBCXnAAI7_IG7u0cAAD-IgB_u_8AAjwU677_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "3699",
                "productNumber": "726",
                "satisfaction": "100%",
                "titlelist": "途牛自营-歌诗达威尼斯号上海-鹿儿岛-上海4晚5日",
                "describe": "7月23日 上海登船 早鸟优惠"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G4/M00/A9/AF/Cii-VVntR9OINtmgALUIzX6XnjoAACdSgK-6EUAtQjl462_w640_h480_c1_t0.jpg",
                "productDepart": "全国出发",
                "productPrice": "2288",
                "productNumber": "182",
                "satisfaction": "100%",
                "titlelist": "星梦邮轮探索梦号上海-神户-上海4晚5日",
                "describe": "5月03日 上海出发 赠送上岸观光"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/29/22/Cii-tFw3G1GIV3ZfAAIzLEohcYAAAS5ewMDbzcAAjNE450_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "4399",
                "productNumber": "736",
                "satisfaction": "100%",
                "titlelist": "途牛自营-歌诗达威尼斯号上海-福冈-熊本-上海5晚6日",
                "describe": "5月18日 上海登船"
            }

        ],
        product2: [{
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/39/F6/Cii-tFuwileIUIEqADeQK6Y3HsgAAOfiQHeuKoAN5BD455_w640_h480_c1_t0.png",
                "productDepart": "北京出发",
                "productPrice": "101600",
                "productNumber": "14",
                "satisfaction": "100%",
                "titlelist": "北极+北欧五国-庞洛邮轮北极熊号-摄影巡游18日",
                "describe": "7月7日 北上港出发斯瓦巴尔群岛寻找北极熊 畅游挪威，芬兰，瑞典，丹麦，冰岛 泡蓝湖温泉"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G2/M00/13/4B/Cii-T1ijGBSIL5qSABOiyj6_krEAAHL3gI9poQAE6Li216_w640_h480_c1_t0.jpg",
                "productDepart": "全国出发",
                "productPrice": "188888",
                "productNumber": "98",
                "satisfaction": "100%",
                "titlelist": " 维京河轮莱茵河10晚11日",
                "describe": " 阿姆斯特丹到巴塞尔 中文礼宾服务探索欧洲"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G1/M00/93/1B/Cii9EFi20aiIcARcABjTy4iP3fMAAIK2wPAwGQAGNPj711_w640_h480_c1_t0.JPG",
                "productDepart": "上海出发",
                "productPrice": "188888",
                "productNumber": "36",
                "satisfaction": "100%",
                "titlelist": "维京河轮多瑙河缤纷之旅10晚11日",
                "describe": " 维也纳到布达佩斯，全中文礼宾服务"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G3/M00/6C/58/Cii_NlmBru2IRrFoABFUXQdmFVQAAGCugF8tV8AEVR1442_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "16999",
                "productNumber": "2",
                "satisfaction": "100%",
                "titlelist": "多瑙河之星号德国 捷克 匈牙利 斯洛伐克 奥地利 11日",
                "describe": " 5月13日上海往返 布拉格之恋,河轮免费无线,找寻茜茜公主"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G3/M00/75/69/Cii_JVmG6NGISbaEAFFe8cKvKigAAGdOAI5pG0AUV8J365_w640_h480_c1_t0.jpg",
                "productDepart": "全国出发",
                "productPrice": "12999",
                "productNumber": "18",
                "satisfaction": "100%",
                "titlelist": "单船票 黄金公主号澳大利亚新西兰13晚14天之旅",
                "describe": "多航期  墨尔本登船往返"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G2/M00/47/49/Cii-TFe79tWIeYjHAAGgWjOm03wAABnyAPGl0MAAaBy629_w640_h480_c1_t0.jpg",
                "productDepart": "全国出发",
                "productPrice": "11358",
                "productNumber": "23",
                "satisfaction": "73%",
                "titlelist": "海洋赞礼号澳大利亚新西兰浪漫之旅12晚13天之旅",
                "describe": "单船票 多航期 悉尼登船往返"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G2/M00/57/3A/Cii-T1fKlg6IR9GwAALgxFqDIPkAACA4AOyWScAAuDc953_w640_h480_c1_t0.jpg",
                "productDepart": "香港出发",
                "productPrice": "1889",
                "productNumber": "1666",
                "satisfaction": "87%",
                "titlelist": "同舱第三人免船票 星梦邮轮世界梦号香港 - 公海 - 香港3天2晚之旅",
                "describe": "每周五出发 可选广州上下船  单船票"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G3/M00/6C/58/Cii_NlmBru2IRrFoABFUXQdmFVQAAGCugF8tV8AEVR1442_w640_h480_c1_t0.jpg",
                "productDepart": "上海出发",
                "productPrice": "16999",
                "productNumber": "2",
                "satisfaction": "100%",
                "titlelist": "多瑙河之星号德国 捷克 匈牙利 斯洛伐克 奥地利 11日",
                "describe": "6月2日上海往返 布拉格之恋,河轮免费无线,找寻茜茜公"
            }
        ],
        product3: [{
                "productImg": "https://m.tuniucdn.com/fb2/t1/G4/M00/82/B4/Cii_J1nVznyIQXIbAABwTefTa9EAAB4VQPFHc0AAHBl10_w640_h480_c1_t0.jpeg",
                "productDepart": "多城市出发",
                "productPrice": "2599",
                "productNumber": "160",
                "satisfaction": "100%",
                "titlelist": "宜昌-重庆4晚5日  豪华游 ",
                "describe": "美国维多利亚5星豪华游轮、0购物 纯玩 含餐 独立阳台江景房"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G1/M00/91/30/Cii9EVcfJH2IEiKnAAH4RLT5DzIAAEcDQCW568AAfhc197_w640_h480_c1_t0.jpg",
                "productDepart": "重庆出发",
                "productPrice": "1629",
                "productNumber": "885",
                "satisfaction": "94%",
                "titlelist": "[春节]华夏神女系列游轮长江三峡4日游",
                "describe": "多航期 重庆出发"
            },
            {
                "productImg": "https://m.tuniucdn.com/filebroker/cdn/prd/9a/ee/9aee2d12e5e4473b935ee6766ba07599_w640_h480_c1_t0.jpg",
                "productDepart": "重庆出发",
                "productPrice": "1929",
                "productNumber": "3230",
                "satisfaction": "96%",
                "titlelist": "世纪系列游轮长江三峡4日游",
                "describe": "多航次 单船票 重庆出港"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G1/M00/C4/58/Cii9EVageBCIDv_8AAxnhmTNTCYAABkbQPTcV4ADGee069_w640_h480_c1_t0.jpg",
                "productDepart": "宜昌出发",
                "productPrice": "1629",
                "productNumber": "986",
                "satisfaction": "100%",
                "titlelist": "[春节]华夏神女系列游轮长江三峡5日游",
                "describe": "多航期 宜昌出发"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/85/9F/Cii-tFqib5mIYJZlAABPUuOnbbIAAEDqAMRUTcAAE9q44_w640_h480_c1_t0.jpeg",
                "productDepart": "重庆出发",
                "productPrice": "2099",
                "productNumber": "18",
                "satisfaction": "100%",
                "titlelist": "重庆-宜昌3晚4日 长江三峡下水航线",
                "describe": "华夏神女系列五星豪华游轮，独立阳台江景房，中西自助餐，纯玩0购物"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G2/M00/42/5B/Cii-Tle2yL2IbWEHABzBQH7sugkAABbhQNPw4EAHMFY252_w640_h480_c1_t0.jpg",
                "productDepart": "重庆出发",
                "productPrice": "2899",
                "productNumber": "23",
                "satisfaction": "73%",
                "titlelist": "重庆-长江三峡-宜昌-神农架6天5晚 华夏神女系列五星豪华游轮",
                "describe": "180°江景房，游三峡赏美景、探秘神农架，纯玩0购物，亲子 爸妈放心游，含接机服务"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G4/M00/E2/14/Cii-VVybH1KIGzZMAAI4IUsvSPwAAEysgP8DqUAAjg565_w640_h480_c1_t0.jpeg",
                "productDepart": "重庆出发",
                "productPrice": "1900",
                "productNumber": "1666",
                "satisfaction": "87%",
                "titlelist": "重庆长江三峡-宜昌4日游",
                "describe": "长江一号长江二号五星级涉外豪华游轮 一价包吃住行玩 住景观阳台房 纯玩0购物 当季热卖"
            },
            {
                "productImg": "https://m.tuniucdn.com/fb2/t1/G5/M00/D0/E9/Cii-s1tz0kyIe-R2AAQ6U3VjelgAAMDAwKBSJgABDpr03_w640_h480_c1_t0.jpeg",
                "productDepart": "重庆出发",
                "productPrice": "2249",
                "productNumber": "2",
                "satisfaction": "100%",
                "titlelist": "[清明]总统系列游轮·重庆-宜昌长江三峡3晚4日游",
                "describe": "『2019升级入住3楼江景阳台间赠价值418元礼包』【纯玩】五星总统万吨轮+神农溪+石宝寨+三峡大坝"
            }
        ],
        currentData: 0,
        hotlist: [{
                "hotimg": "https://m2.tuniucdn.com/fb2/t1/G5/M00/21/9B/Cii-s1uiDNyIMiofAATwT4gc-agAAN8rwDhEQAABPBn55.jpeg",
                "hottitle": "辉煌号",
                "hottext": "欧式邮轮的典范之作"
            },
            {
                "hotimg": "https://m3.tuniucdn.com/fb2/t1/G5/M00/21/9B/Cii-s1uiDNyIBbd7AATx83n2H2EAAN8rwDPPOgABPIL04.jpeg",
                "hottitle": "世界梦号",
                "hottext": "传承亚洲及国际邮轮精萃"
            },
            {
                "hotimg": "https://m.tuniucdn.com/fb2/t1/G5/M00/4E/DD/Cii-slpu1kuICUfPAAYdndElGEMAAC6vwNbASAABh2156_w640_h0_c0_t0.jpeg",
                "hottitle": "海洋量子号",
                "hottext": "来自未来的游轮"
            }
        ],
        hotlist1: [{
                "hotimg": "https://m2.tuniucdn.com/fb2/t1/G5/M00/4E/DD/Cii-s1pu1muIaUwbAANUT-JtQPgAAC6wAJ96ykAA1Rn38_w640_h0_c0_t0.jpeg",
                "hottitle": "喜悦号",
                "hottext": "海上头等舱"
            },
            {
                "hotimg": "https://m2.tuniucdn.com/fb2/t1/G5/M00/79/F1/Cii-tFqXjUaIEWdGAAELJiHc28UAADxXwHzuikAAQs-77.jpeg",
                "hottitle": "赛琳娜号",
                "hottext": "与古罗马众神的聚会"
            },
            {
                "hotimg": "https://m1.tuniucdn.com/fb2/t1/G5/M00/7B/C2/Cii-tFqZBbWId-u4AAFLMuD0-vsAADz_QHflzcAAUtK74.jpeg",
                "hottitle": "云顶梦号",
                "hottext": "豪华度假新境界"
            }
        ],
        understand: ["出行须知，邮轮小百科。", "中国母港邮轮测评，专治选择困难症。", "邮轮旅游必备行李清单！", "中国母港邮轮服务费最新标准。"],
        index: 0,
        bottomimg: [{
                "img": "https://m.tuniucdn.com/fb2/t1/G1/M00/36/E7/Cii9EFd2EnyIQ8sOAAAIsm9SsSQAAGzWwP_9zYAAAjK020.png",
                "text": "我的旅游"
            },
            {
                "img": "https://m.tuniucdn.com/fb2/t1/G1/M00/BA/F2/Cii9EFd2EnyIbZL3AAAGJflP3TcAABgSwP_-cMAAAY9010.png",
                "text": "我的订单"
            },
            {
                "img": "https://m.tuniucdn.com/fb2/t1/G1/M00/39/48/Cii9EVd2EnyIXP9QAAAF0ZtbVaMAAG0vwP_-hcAAAXp392.png",
                "text": "下载APP"
            },
            {
                "img": "https://m.tuniucdn.com/fb2/t1/G1/M00/2F/8F/Cii9EFd2EnyIKcUFAAAFwKJBsD0AAGwBgP_-igAAAXY643.png",
                "text": "电脑版"
            },
            {
                "img": "https://m.tuniucdn.com/fb2/t1/G1/M00/F6/8F/Cii9EFd2EnyIRGXJAAAG7hicC8gAAGXrgP_-PUAAAcL346.png",
                "text": "回到首页"
            },
        ]
    },
    //获取当前滑块的index
    bindchange: function(e) {
        const that = this;
        that.setData({
            currentData: e.detail.current
        })
    },
    //点击切换，滑块index赋值
    checkCurrent: function(e) {
        const that = this;

        if (that.data.currentData === e.target.dataset.current) {
            return false;
        } else {

            that.setData({
                currentData: e.target.dataset.current
            })
        }
    },

})