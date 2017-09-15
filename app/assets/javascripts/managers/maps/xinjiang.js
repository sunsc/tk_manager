(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('新疆', {"type": "FeatureCollection",
"features":
[
{"type": "Feature","properties":{"id":"6528","name":"巴音郭楞蒙古自治州","cp":[88.1653,39.6002],"childNum":9},"geometry":{"type":"Polygon","coordinates":[[[84.9463,43.4894],[84.9902,43.4894],[85.0562,43.5608],[85.155,43.5443],[85.177,43.5168],[85.3088,43.5278],[85.3418,43.4839],[85.5835,43.5333],[85.979,43.407],[86.0889,43.4399],[86.1658,43.3081],[86.3855,43.2257],[86.4844,43.1433],[86.6492,43.1049],[86.803,43.1104],[87.0557,43.0225],[87.1545,43.0554],[87.2534,43.0389],[87.5391,42.9126],[87.4841,42.8577],[87.5391,42.8467],[87.5171,42.7863],[87.8357,42.7643],[87.9016,42.7039],[87.9126,42.6599],[88.2092,42.5171],[88.1982,42.4457],[88.1323,42.3907],[87.9346,42.3083],[87.9016,42.2644],[87.9895,42.0996],[88.1543,41.9897],[88.2202,41.8744],[88.3521,41.759],[88.3521,41.5448],[88.3081,41.5173],[88.396,41.4734],[88.7366,41.4789],[88.8135,41.424],[88.9893,41.4349],[89.198,41.3635],[89.3628,41.4075],[89.4727,41.3635],[89.7034,41.3745],[89.7583,41.347],[89.8682,41.3855],[89.9561,41.3635],[90.011,41.3086],[90.1758,41.2482],[90.5823,41.2482],[90.802,41.1877],[90.9229,41.2262],[91.1206,41.2262],[91.5271,41.1932],[91.9116,41.2811],[91.9995,41.2866],[92.2522,41.1987],[92.6038,41.1218],[92.8674,41.1273],[93.1421,40.9955],[93.5376,40.9625],[93.7134,40.8746],[93.8562,40.8691],[93.8562,40.7538],[93.8562,40.7483],[93.8452,40.7098],[92.9993,40.6329],[92.9773,40.3857],[92.8345,40.177],[92.7576,39.8364],[92.6807,39.6442],[92.5378,39.4464],[92.3291,39.3146],[92.3291,39.1443],[92.384,39.0894],[92.395,39.007],[92.2632,39.0015],[91.8567,38.8751],[91.4392,38.8092],[91.2964,38.7488],[91.1096,38.7048],[90.8569,38.6664],[90.6921,38.6719],[90.6592,38.6005],[90.5273,38.562],[90.4614,38.4961],[90.1868,38.5071],[90.1868,38.4302],[90.2856,38.4192],[90.2307,38.3478],[90.3296,38.2324],[90.4065,38.2379],[90.4504,38.3148],[90.5823,38.3203],[90.5273,37.9742],[90.5383,37.738],[90.8569,37.6062],[90.8789,37.5732],[90.8679,37.5403],[90.9338,37.4854],[91.0657,37.4799],[91.1316,37.3206],[91.1865,37.2766],[91.1975,37.2052],[91.2744,37.1503],[91.2964,37.0129],[91.1865,37.0239],[91.1316,36.98],[91.0437,36.9635],[91.0327,36.9305],[90.8569,36.9196],[90.7251,36.7932],[90.7581,36.7218],[90.7141,36.6669],[90.7471,36.5845],[91.0217,36.535],[91.0437,36.4362],[91.0217,36.3263],[91.0767,36.2933],[91.0547,36.2439],[91.0986,36.2109],[91.1206,36.1011],[90.9778,36.1066],[90.9229,36.0297],[90.8459,36.0187],[90.6592,36.134],[90.2527,36.156],[90.1318,36.2109],[90.1318,36.2439],[90,36.2769],[90.011,36.1835],[89.9341,36.1285],[89.9451,36.0681],[89.7913,36.0736],[89.5056,36.1505],[89.231,36.2933],[89.1321,36.2549],[89.0442,36.3098],[88.9673,36.3153],[88.9233,36.3647],[88.8464,36.3593],[88.7695,36.3098],[88.6267,36.3867],[88.5828,36.4526],[88.4839,36.4526],[88.4509,36.4801],[88.2422,36.4691],[88.1433,36.4307],[87.9785,36.4307],[87.9565,36.4032],[87.572,36.3428],[87.5281,36.3593],[87.5171,36.4142],[87.4182,36.4252],[87.3083,36.3647],[87.1985,36.3483],[87.1436,36.2988],[87.0007,36.2988],[86.9019,36.2659],[86.8579,36.2988],[86.77,36.2988],[86.6162,36.2219],[86.5393,36.2274],[86.5063,36.2],[86.4514,36.2219],[86.3635,36.167],[86.2537,36.156],[86.0669,35.8539],[85.946,35.777],[85.6824,35.7495],[85.5835,35.6451],[85.5066,35.7056],[85.2649,35.7825],[85.144,35.744],[85.0122,35.744],[84.9243,35.6946],[84.8584,36.1011],[84.6936,36.1395],[84.6387,36.2274],[84.397,36.3043],[84.342,36.546],[84.2981,36.6119],[84.1663,36.6943],[84.0674,36.7053],[84.0015,36.7657],[83.9136,36.7657],[83.8367,36.8097],[83.8586,36.8701],[83.8257,36.991],[83.8586,37.0679],[83.8696,37.2382],[83.9905,37.4689],[83.9795,37.7765],[83.8916,38.0896],[83.7708,38.194],[83.4961,38.3258],[83.4192,38.4302],[83.4302,39.4849],[84.0015,40.0012],[84.0564,40.3253],[84.0784,40.7758],[84.0894,41.0944],[84.0454,41.1603],[84.0234,41.4404],[83.9026,41.5833],[83.8916,41.6327],[83.9795,41.9183],[83.8916,42.2095],[83.8916,42.2644],[83.9575,42.2754],[83.9685,42.3138],[83.9246,42.3962],[83.9465,42.5281],[83.7268,42.5446],[83.6719,42.5061],[83.4631,42.4677],[83.3643,42.5006],[83.3093,42.5665],[83.1995,42.583],[83.0896,42.5555],[82.9578,42.627],[82.8479,42.5665],[82.8259,42.5775],[82.8369,42.616],[82.804,42.6489],[82.7271,42.5995],[82.6392,42.5995],[82.5952,42.7203],[82.4744,42.8082],[82.4744,42.8522],[82.5183,42.8687],[82.5293,42.9016],[82.6501,42.8796],[82.6611,42.9346],[82.7161,42.951],[82.793,42.9346],[82.8369,42.9785],[83.1116,42.995],[83.5071,43.0609],[83.562,43.0939],[83.6389,43.0829],[83.7598,43.1488],[83.8916,43.1268],[83.9685,43.1598],[84.0125,43.1378],[84.2871,43.1763],[84.353,43.1653],[84.4189,43.1049],[84.4409,43.1653],[84.6497,43.1763],[84.5288,43.2971],[84.6826,43.385],[84.6277,43.4399],[84.6497,43.4894],[84.9023,43.4235],[84.9463,43.4894]]]}},
{"type": "Feature","properties":{"id":"6532","name":"和田地区","cp":[81.167,36.9855],"childNum":8},"geometry":{"type":"Polygon","coordinates":[[[79.3872,38.8312],[79.563,38.7817],[79.6069,38.8641],[79.7607,39.6332],[80.1782,39.4684],[83.4302,39.4849],[83.4192,38.4302],[83.4961,38.3258],[83.7708,38.194],[83.8916,38.0896],[83.9795,37.7765],[83.9905,37.4689],[83.8696,37.2382],[83.8586,37.0679],[83.8257,36.991],[83.8586,36.8701],[83.8367,36.8097],[83.9136,36.7657],[84.0015,36.7657],[84.0674,36.7053],[84.1663,36.6943],[84.2981,36.6119],[84.342,36.546],[84.397,36.3043],[84.6387,36.2274],[84.6936,36.1395],[84.8584,36.1011],[84.9243,35.6946],[84.8254,35.6342],[84.4519,35.5518],[84.4739,35.5188],[84.4519,35.4803],[84.1772,35.3595],[84.0015,35.4199],[83.9136,35.4089],[83.8696,35.365],[83.6829,35.365],[83.6279,35.3375],[83.54,35.343],[83.4851,35.3979],[83.1116,35.4034],[83.0566,35.4694],[83.0017,35.4803],[82.9688,35.6616],[82.8479,35.6781],[82.793,35.6891],[82.7271,35.6396],[82.6172,35.6946],[82.4194,35.7111],[82.3975,35.6616],[82.3315,35.6561],[82.3535,35.6177],[82.3206,35.5518],[82.0459,35.4419],[82.0459,35.3705],[82.0129,35.3265],[81.925,35.321],[81.925,35.2771],[81.8591,35.2606],[81.7822,35.2716],[81.6724,35.2332],[81.5295,35.2606],[81.4307,35.3595],[81.2219,35.321],[81.1011,35.4034],[81.0461,35.3979],[81.0461,35.3265],[81.0132,35.3101],[80.8594,35.343],[80.6946,35.3375],[80.6616,35.3979],[80.6067,35.4089],[80.5188,35.3925],[80.4309,35.4144],[80.321,35.387],[80.2771,35.2991],[80.354,35.2167],[80.343,35.1727],[80.2332,35.1892],[80.1453,35.0903],[80.0354,35.0244],[80.0574,34.964],[80.0134,34.9475],[80.0024,34.8596],[79.8926,34.8541],[79.8816,34.8157],[79.9146,34.7772],[79.9255,34.7113],[79.8706,34.6729],[79.8926,34.6289],[79.8267,34.4971],[79.6619,34.4531],[79.541,34.4751],[79.2554,34.4147],[79.1675,34.4421],[79.0686,34.4147],[79.0247,34.3323],[78.9587,34.3872],[78.8928,34.3597],[78.8489,34.4147],[78.75,34.4476],[78.761,34.4861],[78.717,34.519],[78.6292,34.5355],[78.5742,34.5026],[78.5522,34.5685],[78.4863,34.574],[78.4424,34.541],[78.4204,34.5959],[78.2776,34.6234],[78.2776,34.6948],[78.2007,34.7333],[78.2446,34.8761],[78.1787,34.9365],[78.2007,34.9695],[78.1128,35.0299],[78.1348,35.0848],[78.0688,35.1013],[78.0579,35.1727],[78.0029,35.2332],[78.0139,35.354],[78.1238,35.4803],[77.937,35.4913],[77.915,35.4639],[77.8162,35.5243],[77.7832,35.5518],[77.8491,35.6287],[77.8271,35.6671],[77.8491,35.6946],[77.8271,35.722],[77.8821,35.8264],[77.8601,35.8978],[77.9041,35.9143],[77.926,35.9528],[77.7502,36.0352],[77.7393,36.0956],[77.8381,36.178],[77.9041,36.189],[77.8162,36.2933],[77.7283,36.2823],[77.6294,36.3428],[77.5635,36.4581],[77.3987,36.5131],[77.6514,36.6724],[77.4976,36.8097],[77.5195,36.936],[77.5964,36.9415],[77.6404,37.002],[77.6624,37.1118],[77.6294,37.1722],[77.6294,37.2491],[77.5854,37.2931],[77.6624,37.4469],[77.6624,37.5787],[77.7393,37.6337],[77.7502,37.6776],[78.0029,37.9523],[78.4973,38.4192],[79.2554,38.7982],[79.3872,38.8312]]]}},
{"type": "Feature","properties":{"id":"6522","name":"哈密地区","cp":[93.7793,42.9236],"childNum":3},"geometry":{"type":"Polygon","coordinates":[[[91.1975,43.4949],[91.1865,43.5168],[91.3184,43.5828],[91.4392,43.5883],[91.5491,43.6377],[91.4063,43.6981],[91.5601,43.7311],[91.582,43.7585],[91.5161,43.8794],[91.3293,44.0167],[91.3623,44.2694],[91.3184,44.3848],[91.3623,44.4672],[91.3623,44.5551],[91.4172,44.632],[91.4063,44.7363],[91.571,44.8627],[91.582,44.9176],[91.5271,45.0385],[91.5381,45.0879],[91.7029,45.0659],[92.0544,45.0824],[92.2192,45.022],[92.4719,45.0055],[92.8784,45.0494],[92.9883,45.0055],[93.1531,45.011],[93.4827,44.967],[93.7134,44.8956],[93.7354,44.8627],[94.2078,44.6704],[94.3286,44.577],[94.3506,44.5221],[94.4714,44.5056],[94.6033,44.4507],[94.7131,44.3463],[94.9438,44.2914],[94.9988,44.2529],[95.4053,44.2969],[95.4272,44.2804],[95.3723,44.231],[95.3284,44.0332],[95.5261,44.0057],[95.8557,43.418],[95.8777,43.2751],[96.3611,42.9016],[96.3831,42.7478],[96.3611,42.7094],[96.1084,42.605],[96.0095,42.4622],[95.9985,42.4347],[96.0535,42.4237],[96.0425,42.3358],[96.2183,42.2699],[96.0754,42.149],[96.1304,42.0557],[96.1414,42.0007],[96.0535,41.9348],[95.8557,41.8524],[95.5701,41.7975],[95.3833,41.6711],[95.3503,41.5887],[95.2185,41.7865],[94.9988,41.7096],[94.834,41.5613],[94.6362,41.5338],[94.2957,41.3251],[94.0649,41.1273],[93.8892,40.9296],[93.9001,40.8362],[93.8562,40.7538],[93.8562,40.8691],[93.7134,40.8746],[93.5376,40.9625],[93.1421,40.9955],[92.8674,41.1273],[92.6038,41.1218],[92.2522,41.1987],[91.9995,41.2866],[91.9116,41.2811],[91.9116,41.3361],[91.9116,41.391],[91.7798,41.5283],[91.8237,41.5887],[91.8457,41.7316],[91.7908,41.8799],[91.7029,42.0502],[91.626,42.0721],[91.637,42.1326],[91.5161,42.193],[91.4832,42.2479],[91.4612,42.4896],[91.4172,42.6379],[91.4502,42.7478],[91.4172,42.9565],[91.3733,43.0939],[91.2964,43.2257],[91.2744,43.3301],[91.2415,43.3466],[91.2415,43.385],[91.1755,43.4619],[91.1975,43.4949]]]}},
{"type": "Feature","properties":{"id":"6529","name":"阿克苏地区","cp":[82.9797,41.0229],"childNum":10},"geometry":{"type":"Polygon","coordinates":[[[78.1458,40.3253],[78.1567,40.3912],[78.2007,40.4187],[78.5193,40.5505],[78.5962,40.6824],[78.5632,40.7373],[78.5852,40.7703],[78.8049,40.8417],[78.8599,40.8966],[78.8708,40.9955],[78.8159,41.0065],[78.7061,41.1932],[78.3875,41.402],[78.5632,41.4789],[78.6401,41.4734],[78.7061,41.5503],[78.8049,41.5613],[78.9587,41.6492],[79.2114,41.7261],[79.3213,41.8085],[79.4531,41.8469],[79.541,41.8359],[79.6399,41.8909],[79.7827,41.9019],[79.8596,42.0227],[80.1672,42.0392],[80.1892,42.0721],[80.1343,42.16],[80.1563,42.1436],[80.1672,42.2095],[80.2881,42.2314],[80.2661,42.3083],[80.2881,42.3193],[80.4419,42.3029],[80.5627,42.3633],[80.8044,42.3413],[81.0022,42.3743],[81.0461,42.2919],[81.167,42.2589],[81.156,42.3138],[81.2109,42.3468],[81.3318,42.3523],[81.3647,42.3303],[81.6614,42.3907],[81.7273,42.3633],[81.7822,42.4127],[81.8481,42.3798],[81.8701,42.4072],[82.1228,42.4347],[82.2217,42.4951],[82.3425,42.4896],[82.3975,42.5555],[82.5952,42.5446],[82.6392,42.5995],[82.7271,42.5995],[82.804,42.6489],[82.8369,42.616],[82.8259,42.5775],[82.8479,42.5665],[82.9578,42.627],[83.0896,42.5555],[83.1995,42.583],[83.3093,42.5665],[83.3643,42.5006],[83.4631,42.4677],[83.6719,42.5061],[83.7268,42.5446],[83.9465,42.5281],[83.9246,42.3962],[83.9685,42.3138],[83.9575,42.2754],[83.8916,42.2644],[83.8916,42.2095],[83.9795,41.9183],[83.8916,41.6327],[83.9026,41.5833],[84.0234,41.4404],[84.0454,41.1603],[84.0894,41.0944],[84.0784,40.7758],[84.0564,40.3253],[84.0015,40.0012],[83.4302,39.4849],[80.1782,39.4684],[79.7607,39.6332],[79.8047,39.8969],[79.8596,39.9243],[79.8486,40.1056],[79.8376,40.1331],[79.585,40.2045],[79.2554,40.2539],[79.0027,40.2264],[78.8928,40.2594],[78.6072,40.1276],[78.5193,40.0507],[78.3655,40.0122],[78.3105,40.0671],[78.0798,40.0671],[78.0249,40.1001],[78.0908,40.2649],[78.1458,40.3253]],[[81.947,40.5011],[81.8152,40.4572],[81.3208,40.4297],[81.1011,40.3802],[80.9253,40.4352],[80.7715,40.3638],[80.6506,40.3748],[80.6067,40.4352],[80.6836,40.5176],[80.7825,40.4572],[80.8154,40.4791],[80.6946,40.5231],[80.6726,40.5725],[80.6067,40.5615],[80.6067,40.6549],[80.6946,40.7208],[80.8484,40.7043],[81.1121,40.7318],[81.178,40.7483],[81.2549,40.8142],[81.3757,40.8087],[81.8591,40.946],[81.8811,40.9406],[81.8152,40.8142],[81.7383,40.7373],[81.8372,40.6659],[81.947,40.5011]]]}},
{"type": "Feature","properties":{"id":"6543","name":"阿勒泰地区","cp":[88.2971,47.0929],"childNum":7},"geometry":{"type":"Polygon","coordinates":[[[90.4834,47.3236],[90.7581,46.994],[90.8569,46.9885],[90.9229,46.9391],[90.9558,46.8732],[90.9448,46.8182],[91.0437,46.7249],[91.0217,46.593],[91.0767,46.5601],[90.9778,46.3733],[90.8899,46.3129],[91.0107,46.1261],[91.0217,46.0382],[90.7141,45.7306],[90.6702,45.4889],[90.5054,45.423],[90.2856,45.1703],[90.2307,45.0714],[90.2307,45.0055],[88.0005,45],[87.3303,45],[87.3303,45.3296],[87.3413,45.9998],[87.0337,46.4996],[87.1985,46.7084],[87.2095,46.8292],[87.0447,46.9611],[87.0447,47.1204],[86.5833,47.049],[86.4954,47.0874],[86.3745,47.0874],[86.0889,47.027],[85.968,47.0764],[85.5396,47.0544],[85.5615,47.1204],[85.6824,47.2192],[85.6934,47.2797],[85.6824,47.4335],[85.6055,47.5104],[85.5286,48.0377],[85.5615,48.1476],[85.6604,48.241],[85.6934,48.3344],[85.7922,48.4222],[86.2207,48.4332],[86.3086,48.4937],[86.4075,48.4827],[86.5833,48.5376],[86.6382,48.62],[86.77,48.7189],[86.759,48.7958],[86.825,48.8342],[86.7371,48.9221],[86.748,49.01],[86.8359,49.0485],[86.8909,49.1309],[87.1216,49.1528],[87.4402,49.0704],[87.4951,49.0869],[87.5171,49.1418],[87.7258,49.1803],[87.8247,49.1638],[87.8687,49.1199],[87.8357,49.043],[87.8906,48.988],[87.8687,48.9551],[87.7588,48.9331],[87.7368,48.8727],[87.7808,48.8727],[87.8357,48.7958],[88.0884,48.7189],[88.0225,48.653],[88.0334,48.6365],[87.9565,48.598],[87.9675,48.576],[88.3521,48.4662],[88.4399,48.3893],[88.5059,48.4058],[88.5388,48.3673],[88.5718,48.3673],[88.6047,48.3289],[88.5718,48.2849],[88.5938,48.23],[88.6377,48.186],[88.7146,48.175],[88.8245,48.1036],[88.9233,48.1036],[89.0771,47.9883],[89.231,47.9773],[89.3738,48.0432],[89.5715,48.0322],[89.6594,47.9059],[89.7253,47.9004],[89.7803,47.829],[89.9561,47.8345],[89.9561,47.8729],[90.0549,47.8839],[90.0879,47.8619],[90.0659,47.7905],[90.1318,47.7301],[90.3735,47.6587],[90.3516,47.6257],[90.4724,47.4939],[90.4724,47.4005],[90.5273,47.3785],[90.4834,47.3236]]]}},
{"type": "Feature","properties":{"id":"6531","name":"喀什地区","cp":[77.168,37.8534],"childNum":13},"geometry":{"type":"Polygon","coordinates":[[[74.8279,38.2764],[74.9268,38.2764],[74.9817,38.2434],[75.0916,38.2764],[75.1794,38.205],[75.2673,38.205],[75.3992,38.1061],[75.3992,37.9248],[75.52,37.9248],[75.6628,37.8754],[75.7727,37.8973],[75.7837,37.9358],[75.8716,37.9248],[75.8826,37.8864],[75.7947,37.749],[75.8057,37.6501],[75.9485,37.7325],[76.0254,37.7325],[76.1902,37.804],[76.3,37.7325],[76.322,37.8149],[76.3879,37.8259],[76.3879,37.8699],[76.4978,37.8644],[76.4758,37.9193],[76.5417,38.0566],[76.5417,38.1226],[76.6077,38.2159],[76.6077,38.4302],[76.4648,38.5016],[76.355,38.5016],[76.3989,38.5345],[76.3989,38.606],[76.3,38.6279],[76.1462,38.6115],[76.1462,38.6554],[75.9705,38.7598],[75.9045,38.8751],[75.7727,38.941],[75.7727,38.9575],[75.9265,39.0344],[75.9485,39.0015],[76.1133,39.0234],[76.1243,39.0674],[76.0474,39.1827],[76.0913,39.1718],[76.1572,39.2322],[75.8716,39.2651],[75.8386,39.1882],[75.7727,39.1882],[75.7068,39.1223],[75.7727,39.0948],[75.7617,39.007],[75.6628,38.952],[75.553,38.9795],[75.5859,39.0948],[75.6848,39.2706],[75.7507,39.3036],[75.6738,39.2981],[75.575,39.2212],[75.52,39.2377],[75.4541,39.1663],[75.3552,39.1333],[75.3003,39.4189],[75.3113,39.4574],[75.3662,39.4849],[75.3552,39.6332],[75.4541,39.6826],[75.6299,39.6661],[75.7178,39.5947],[75.9814,39.5892],[75.9814,39.6112],[76.2122,39.6222],[76.4539,39.5782],[76.5857,39.6002],[76.8604,39.8309],[77.4976,39.8749],[77.5305,39.9243],[77.8052,39.9902],[78.0908,39.9738],[78.3655,40.0122],[78.5193,40.0507],[78.6072,40.1276],[78.8928,40.2594],[79.0027,40.2264],[79.2554,40.2539],[79.585,40.2045],[79.8376,40.1331],[79.8486,40.1056],[79.8596,39.9243],[79.8047,39.8969],[79.7607,39.6332],[79.6069,38.8641],[79.563,38.7817],[79.3872,38.8312],[79.2554,38.7982],[78.4973,38.4192],[78.0029,37.9523],[77.7502,37.6776],[77.7393,37.6337],[77.6624,37.5787],[77.6624,37.4469],[77.5854,37.2931],[77.6294,37.2491],[77.6294,37.1722],[77.6624,37.1118],[77.6404,37.002],[77.5964,36.9415],[77.5195,36.936],[77.4976,36.8097],[77.6514,36.6724],[77.3987,36.5131],[77.5635,36.4581],[77.6294,36.3428],[77.7283,36.2823],[77.8162,36.2933],[77.9041,36.189],[77.8381,36.178],[77.7393,36.0956],[77.7502,36.0352],[77.926,35.9528],[77.9041,35.9143],[77.8601,35.8978],[77.8821,35.8264],[77.8271,35.722],[77.8491,35.6946],[77.8271,35.6671],[77.8491,35.6287],[77.7832,35.5518],[77.8162,35.5243],[77.7173,35.4639],[77.5635,35.4858],[77.4316,35.4639],[77.3108,35.5463],[77.1899,35.5243],[77.0581,35.6012],[76.9482,35.5957],[76.8604,35.6671],[76.7615,35.6616],[76.6956,35.744],[76.5967,35.7715],[76.5637,35.8099],[76.5967,35.8978],[76.5747,35.9253],[76.344,35.8319],[76.1572,35.8264],[76.1572,35.9198],[76.0913,36.0187],[76.0144,36.0132],[75.9375,36.0681],[75.9375,36.1285],[76.0034,36.167],[76.0144,36.2274],[76.0583,36.2274],[75.9924,36.3373],[76.0364,36.4032],[76.0254,36.4417],[75.9265,36.568],[75.9485,36.601],[75.8716,36.6669],[75.6738,36.7657],[75.553,36.7712],[75.531,36.7218],[75.4541,36.7273],[75.4211,36.7767],[75.4211,36.8756],[75.3882,36.9031],[75.3992,36.958],[75.2344,36.9635],[75.1355,37.0239],[74.9268,36.98],[74.9268,36.936],[74.9048,36.936],[74.8389,37.0459],[74.751,37.0239],[74.6851,37.0898],[74.5752,37.0294],[74.5093,37.0734],[74.4653,37.1393],[74.5093,37.2437],[74.5862,37.2382],[74.6301,37.2656],[74.6631,37.2382],[74.751,37.2876],[74.8169,37.2162],[74.8828,37.2217],[74.9377,37.2876],[75.1245,37.326],[75.1135,37.3645],[75.1465,37.403],[75.0916,37.5403],[75.0256,37.5018],[74.8718,37.6062],[74.8718,37.7216],[75.0146,37.7875],[74.9268,37.8204],[74.9268,38.0182],[74.8608,38.0457],[74.8938,38.1116],[74.8279,38.2764]],[[79.5959,39.9188],[79.6069,39.8804],[79.541,39.8364],[79.3982,39.8914],[79.2883,39.8804],[79.3982,39.8419],[79.3433,39.8199],[79.3213,39.765],[79.2334,39.7156],[79.1125,39.7101],[79.0027,39.6167],[78.8379,39.6332],[78.8049,39.6661],[78.7061,39.6497],[78.6511,39.7211],[78.772,39.8145],[78.7939,39.809],[78.783,39.7705],[78.8159,39.754],[78.7939,39.6936],[78.8159,39.6661],[78.8599,39.7046],[78.8928,39.6826],[78.8928,39.7485],[79.0356,39.798],[78.9368,39.8145],[79.0137,39.8694],[78.9587,39.9463],[79.1125,40.0726],[79.4751,40.1276],[79.585,40.0012],[79.5959,39.9188]]]}},
{"type": "Feature","properties":{"id":"6542","name":"塔城地区","cp":[86.6272,45.8514],"childNum":7},"geometry":{"type":"Polygon","coordinates":[[[85.5396,47.0544],[85.968,47.0764],[86.0889,47.027],[86.3745,47.0874],[86.4954,47.0874],[86.5833,47.049],[87.0447,47.1204],[87.0447,46.9611],[87.2095,46.8292],[87.1985,46.7084],[87.0337,46.4996],[87.3413,45.9998],[87.3303,45.3296],[86.4844,45.3351],[85.6824,45.3296],[85.6824,44.9176],[85.8032,44.9176],[85.8691,44.8682],[85.946,44.7583],[85.9131,44.6924],[86.0229,44.5935],[86.0669,44.599],[86.0779,44.5221],[86.1108,44.4617],[86.0669,44.4617],[86.001,44.4012],[85.9241,44.4232],[85.9021,44.3683],[85.946,44.3079],[85.968,44.1541],[86.0669,44.1541],[86.0889,44.1211],[85.968,43.9948],[85.968,43.9398],[85.8801,43.9178],[85.7922,43.8409],[85.7153,43.6377],[85.6604,43.6212],[85.5835,43.5333],[85.3418,43.4839],[85.3088,43.5278],[85.177,43.5168],[85.155,43.5443],[85.0562,43.5608],[84.9902,43.4894],[84.9463,43.4894],[84.9023,43.5059],[84.8914,43.5663],[84.8364,43.5773],[84.7815,43.6432],[84.6057,43.6597],[84.6167,43.7311],[84.5178,43.7531],[84.3201,43.7256],[84.2651,43.7805],[84.1003,43.819],[84.1113,43.8519],[84.0674,43.8904],[84.0015,43.8904],[83.9795,43.9178],[83.9246,43.9069],[83.8916,43.9508],[83.6169,43.9728],[83.573,44.0112],[83.5071,44.0057],[83.4741,44.0387],[83.4192,44.2035],[83.5291,44.4067],[83.5181,44.4617],[83.7817,44.4672],[83.7817,44.5221],[83.7488,44.5496],[83.7708,44.6649],[83.8037,44.7583],[83.6719,44.8901],[83.606,44.8956],[83.573,44.9341],[83.4631,44.978],[83.0017,45.0549],[82.5732,45.2252],[82.5513,45.3131],[82.4854,45.4065],[82.2876,45.5328],[82.2546,45.6537],[82.3535,45.7965],[82.3425,45.9448],[82.4524,45.9998],[82.4854,46.0492],[82.7051,46.5106],[82.782,46.7798],[82.8369,46.8073],[82.8369,46.8622],[82.9907,47.0654],[83.0566,47.2247],[83.1555,47.2357],[83.2654,47.1753],[83.3643,47.1808],[83.4192,47.1149],[83.4631,47.1313],[83.562,47.0599],[83.9136,46.972],[83.9905,46.994],[84.1113,46.9666],[84.1882,46.9995],[84.4409,47.0105],[84.5178,46.983],[84.7266,47.0105],[84.9353,46.8677],[85.0012,46.9281],[85.0781,46.9336],[85.21,47.0544],[85.5396,47.0544]],[[84.8474,44.6869],[84.7595,44.6814],[84.6387,44.7748],[84.6497,45.1538],[84.5508,45.2802],[84.7375,45.4724],[84.8035,45.6152],[84.7705,45.6427],[84.7815,45.6647],[84.8364,45.6317],[84.9023,45.6372],[84.9573,45.6976],[85.1111,45.7361],[85.199,45.802],[85.3088,45.9998],[85.2649,46.0492],[85.2869,46.0822],[85.3748,46.1371],[85.6384,46.214],[85.9241,46.1755],[86.0339,46.0657],[85.968,46.0327],[85.946,45.9723],[85.6384,45.791],[85.4736,45.4944],[85.2429,45.379],[85.2539,45.3296],[85.199,45.2307],[85.2539,45.1593],[85.2539,45.033],[85.188,45.0275],[85.144,44.967],[85.0452,44.9286],[85.0232,44.8187],[85.0452,44.7748],[85.0122,44.7583],[85.0562,44.7198],[85.0232,44.621],[85.199,44.6375],[85.2429,44.5935],[85.2539,44.4836],[85.21,44.4562],[85.166,44.3463],[85.1111,44.3463],[85.1001,44.3079],[84.9683,44.2914],[84.9243,44.1925],[84.8474,44.198],[84.7375,44.1266],[84.8035,44.2584],[84.7815,44.3903],[84.8584,44.4836],[84.8804,44.6375],[84.8474,44.6869]]]}},
{"type": "Feature","properties":{"id":"6523","name":"昌吉回族自治州","cp":[89.6814,44.4507],"childNum":7},"geometry":{"type":"MultiPolygon","coordinates":[[[[88.0005,45],[90.2307,45.0055],[90.2307,45.0714],[90.2856,45.1703],[90.5054,45.423],[90.6702,45.4889],[90.769,45.4395],[90.802,45.2966],[90.8899,45.2637],[90.8789,45.1923],[91.1316,45.2087],[91.2415,45.1428],[91.3733,45.1099],[91.4392,45.1593],[91.5381,45.0879],[91.5271,45.0385],[91.582,44.9176],[91.571,44.8627],[91.4063,44.7363],[91.4172,44.632],[91.3623,44.5551],[91.3623,44.4672],[91.3184,44.3848],[91.3623,44.2694],[91.3293,44.0167],[91.5161,43.8794],[91.582,43.7585],[91.5601,43.7311],[91.4063,43.6981],[91.5491,43.6377],[91.4392,43.5883],[91.3184,43.5828],[91.1865,43.5168],[91.1975,43.4949],[90.8789,43.5333],[90.3735,43.5059],[90.1758,43.5553],[90.011,43.5168],[90.011,43.4894],[89.9231,43.4509],[89.7913,43.4619],[89.6704,43.4125],[89.3958,43.4564],[89.2859,43.5443],[89.209,43.5278],[89.1541,43.5992],[88.9343,43.6322],[88.8464,43.7146],[88.7036,43.7091],[88.7146,43.7476],[88.5278,43.808],[88.5059,43.8574],[88.418,43.797],[88.3081,43.8025],[88.2861,43.83],[88.2422,43.7695],[88.1653,43.7585],[88.1323,43.8135],[88.0884,43.8135],[88.0225,43.8794],[87.9895,44.0002],[87.7808,44.1321],[87.8137,44.231],[87.7917,44.3628],[88.0005,45]]],[[[85.5835,43.5333],[85.6604,43.6212],[85.7153,43.6377],[85.7922,43.8409],[85.8801,43.9178],[85.968,43.9398],[85.968,43.9948],[86.0889,44.1211],[86.1328,44.3353],[86.1108,44.4617],[86.0779,44.5221],[86.0669,44.599],[86.0229,44.5935],[85.9131,44.6924],[85.946,44.7583],[85.8691,44.8682],[85.8032,44.9176],[85.6824,44.9176],[85.6824,45.3296],[86.4844,45.3351],[87.3303,45.3296],[87.3303,45],[87.55,44.6649],[87.572,44.566],[87.5061,44.599],[87.4951,44.5496],[87.3743,44.5605],[87.4402,44.4672],[87.4402,44.3408],[87.5171,44.2365],[87.5061,44.1101],[87.2754,43.9508],[87.2754,43.797],[87.0996,43.5992],[87.0007,43.5388],[86.9788,43.4784],[86.9128,43.4344],[86.9238,43.3246],[86.8359,43.1873],[86.8469,43.1488],[86.803,43.1104],[86.6492,43.1049],[86.4844,43.1433],[86.3855,43.2257],[86.1658,43.3081],[86.0889,43.4399],[85.979,43.407],[85.5835,43.5333]]]]}},
{"type": "Feature","properties":{"id":"6530","name":"克孜勒苏柯尔克孜自治州","cp":[74.6301,39.5233],"childNum":4},"geometry":{"type":"Polygon","coordinates":[[[78.3875,41.402],[78.7061,41.1932],[78.8159,41.0065],[78.8708,40.9955],[78.8599,40.8966],[78.8049,40.8417],[78.5852,40.7703],[78.5632,40.7373],[78.5962,40.6824],[78.5193,40.5505],[78.2007,40.4187],[78.1567,40.3912],[78.1458,40.3253],[78.0908,40.2649],[78.0249,40.1001],[78.0798,40.0671],[78.3105,40.0671],[78.3655,40.0122],[78.0908,39.9738],[77.8052,39.9902],[77.5305,39.9243],[77.4976,39.8749],[76.8604,39.8309],[76.5857,39.6002],[76.4539,39.5782],[76.2122,39.6222],[75.9814,39.6112],[75.9814,39.5892],[75.7178,39.5947],[75.6299,39.6661],[75.4541,39.6826],[75.3552,39.6332],[75.3662,39.4849],[75.3113,39.4574],[75.3003,39.4189],[75.3552,39.1333],[75.4541,39.1663],[75.52,39.2377],[75.575,39.2212],[75.6738,39.2981],[75.7507,39.3036],[75.6848,39.2706],[75.5859,39.0948],[75.553,38.9795],[75.6628,38.952],[75.7617,39.007],[75.7727,39.0948],[75.7068,39.1223],[75.7727,39.1882],[75.8386,39.1882],[75.8716,39.2651],[76.1572,39.2322],[76.0913,39.1718],[76.0474,39.1827],[76.1243,39.0674],[76.1133,39.0234],[75.9485,39.0015],[75.9265,39.0344],[75.7727,38.9575],[75.7727,38.941],[75.9045,38.8751],[75.9705,38.7598],[76.1462,38.6554],[76.1462,38.6115],[76.3,38.6279],[76.3989,38.606],[76.3989,38.5345],[76.355,38.5016],[76.4648,38.5016],[76.6077,38.4302],[76.6077,38.2159],[76.5417,38.1226],[76.5417,38.0566],[76.4758,37.9193],[76.4978,37.8644],[76.3879,37.8699],[76.3879,37.8259],[76.322,37.8149],[76.3,37.7325],[76.1902,37.804],[76.0254,37.7325],[75.9485,37.7325],[75.8057,37.6501],[75.7947,37.749],[75.8826,37.8864],[75.8716,37.9248],[75.7837,37.9358],[75.7727,37.8973],[75.6628,37.8754],[75.52,37.9248],[75.3992,37.9248],[75.3992,38.1061],[75.2673,38.205],[75.1794,38.205],[75.0916,38.2764],[74.9817,38.2434],[74.9268,38.2764],[74.8279,38.2764],[74.8279,38.3478],[74.8718,38.3972],[74.8499,38.4851],[74.5203,38.6334],[74.1357,38.6664],[74.1138,38.606],[74.0808,38.6005],[74.0918,38.5455],[73.9929,38.5181],[73.8171,38.606],[73.7073,38.8641],[73.7512,38.9355],[73.8391,38.9301],[73.8501,38.996],[73.8062,39.0399],[73.7512,39.0289],[73.6304,39.2377],[73.5095,39.2816],[73.5315,39.3201],[73.4875,39.3805],[73.5754,39.397],[73.6304,39.4684],[73.8721,39.4794],[73.8831,39.5453],[73.96,39.6002],[73.927,39.7211],[73.8391,39.7705],[73.8501,39.8309],[73.905,39.8639],[73.916,39.9188],[73.9709,40.0012],[73.938,40.0232],[74.0479,40.0946],[74.0808,40.0836],[74.2566,40.1331],[74.3445,40.0946],[74.5862,40.2759],[74.6851,40.2869],[74.696,40.3473],[74.8938,40.3418],[74.7949,40.4407],[74.8279,40.5176],[75.0916,40.4352],[75.1355,40.4572],[75.2344,40.4462],[75.575,40.6604],[75.6189,40.6439],[75.6519,40.5066],[75.7178,40.4791],[75.6628,40.3638],[75.7068,40.2814],[75.8276,40.3308],[75.9265,40.2924],[75.9705,40.3802],[76.0144,40.3528],[76.0583,40.3912],[76.1792,40.3802],[76.2891,40.4297],[76.333,40.3473],[76.5308,40.4626],[76.5637,40.556],[76.6516,40.6165],[76.6736,40.6934],[76.6516,40.7648],[76.7065,40.7922],[76.7615,40.9515],[76.8384,40.979],[76.8713,41.0229],[76.9373,41.0339],[76.9922,41.0724],[77.1899,41.012],[77.2229,41.0284],[77.2778,41.001],[77.3547,41.0394],[77.5854,40.99],[77.6404,41.012],[77.6733,41.0559],[77.8052,41.0669],[77.8052,41.1218],[77.8381,41.1548],[78.1348,41.2372],[78.1677,41.3855],[78.3875,41.402]]]}},
{"type": "Feature","properties":{"id":"6521","name":"吐鲁番地区","cp":[89.6375,42.4127],"childNum":3},"geometry":{"type":"Polygon","coordinates":[[[88.1323,43.3301],[88.2202,43.3246],[88.2532,43.2257],[88.4619,43.2092],[88.5168,43.2697],[88.5388,43.3466],[88.6267,43.3466],[88.9233,43.429],[88.9783,43.5443],[88.9343,43.6322],[89.1541,43.5992],[89.209,43.5278],[89.2859,43.5443],[89.3958,43.4564],[89.6704,43.4125],[89.7913,43.4619],[89.9231,43.4509],[90.011,43.4894],[90.011,43.5168],[90.1758,43.5553],[90.3735,43.5059],[90.8789,43.5333],[91.1975,43.4949],[91.1755,43.4619],[91.2415,43.385],[91.2415,43.3466],[91.2744,43.3301],[91.2964,43.2257],[91.3733,43.0939],[91.4172,42.9565],[91.4502,42.7478],[91.4172,42.6379],[91.4612,42.4896],[91.4832,42.2479],[91.5161,42.193],[91.637,42.1326],[91.626,42.0721],[91.7029,42.0502],[91.7908,41.8799],[91.8457,41.7316],[91.8237,41.5887],[91.7798,41.5283],[91.9116,41.391],[91.9116,41.3361],[91.9116,41.2811],[91.5271,41.1932],[91.1206,41.2262],[90.9229,41.2262],[90.802,41.1877],[90.5823,41.2482],[90.1758,41.2482],[90.011,41.3086],[89.9561,41.3635],[89.8682,41.3855],[89.7583,41.347],[89.7034,41.3745],[89.4727,41.3635],[89.3628,41.4075],[89.198,41.3635],[88.9893,41.4349],[88.8135,41.424],[88.7366,41.4789],[88.396,41.4734],[88.3081,41.5173],[88.3521,41.5448],[88.3521,41.759],[88.2202,41.8744],[88.1543,41.9897],[87.9895,42.0996],[87.9016,42.2644],[87.9346,42.3083],[88.1323,42.3907],[88.1982,42.4457],[88.2092,42.5171],[87.9126,42.6599],[87.9016,42.7039],[87.8357,42.7643],[87.5171,42.7863],[87.5391,42.8467],[87.4841,42.8577],[87.5391,42.9126],[87.7588,42.9016],[87.8906,42.8247],[87.9346,42.8412],[87.6379,43.0389],[87.3853,43.1268],[87.3853,43.2806],[87.594,43.2642],[88.1323,43.3301]]]}},
{"type": "Feature","properties":{"id":"6540","name":"伊犁哈萨克自治州","cp":[82.5513,43.5498],"childNum":10},"geometry":{"type":"MultiPolygon","coordinates":[[[[80.7825,43.2971],[80.6836,43.3301],[80.7495,43.4674],[80.5298,43.819],[80.5078,43.8959],[80.4529,43.9893],[80.4639,44.0442],[80.4089,44.1046],[80.4089,44.2914],[80.354,44.4727],[80.4089,44.6045],[80.332,44.6979],[80.2002,44.7473],[80.1892,44.8242],[80.2661,44.8407],[80.4858,44.7418],[80.6396,44.7308],[80.6836,44.6649],[80.6616,44.6375],[80.6726,44.6265],[80.8923,44.5386],[80.9802,44.5386],[81.2219,44.4617],[81.6284,44.4232],[81.6504,44.3848],[81.7163,44.3903],[81.7383,44.3463],[81.925,44.3024],[82.2217,44.2584],[82.3535,44.2639],[82.4524,44.176],[82.6611,44.1211],[82.7051,44.0717],[82.9028,44.0552],[83.1006,44.0991],[83.2324,44.0826],[83.3203,44.0057],[83.4302,44.0112],[83.4741,44.0387],[83.5071,44.0057],[83.573,44.0112],[83.6169,43.9728],[83.8916,43.9508],[83.9246,43.9069],[83.9795,43.9178],[84.0015,43.8904],[84.0674,43.8904],[84.1113,43.8519],[84.1003,43.819],[84.2651,43.7805],[84.3201,43.7256],[84.5178,43.7531],[84.6167,43.7311],[84.6057,43.6597],[84.7815,43.6432],[84.8364,43.5773],[84.8914,43.5663],[84.9023,43.5059],[84.9463,43.4894],[84.9023,43.4235],[84.6497,43.4894],[84.6277,43.4399],[84.6826,43.385],[84.5288,43.2971],[84.6497,43.1763],[84.4409,43.1653],[84.4189,43.1049],[84.353,43.1653],[84.2871,43.1763],[84.0125,43.1378],[83.9685,43.1598],[83.8916,43.1268],[83.7598,43.1488],[83.6389,43.0829],[83.562,43.0939],[83.5071,43.0609],[83.1116,42.995],[82.8369,42.9785],[82.793,42.9346],[82.7161,42.951],[82.6611,42.9346],[82.6501,42.8796],[82.5293,42.9016],[82.5183,42.8687],[82.4744,42.8522],[82.4744,42.8082],[82.5952,42.7203],[82.6392,42.5995],[82.5952,42.5446],[82.3975,42.5555],[82.3425,42.4896],[82.2217,42.4951],[82.1228,42.4347],[81.8701,42.4072],[81.8481,42.3798],[81.7822,42.4127],[81.7273,42.3633],[81.6614,42.3907],[81.3647,42.3303],[81.3318,42.3523],[81.2109,42.3468],[81.156,42.3138],[81.167,42.2589],[81.0461,42.2919],[81.0022,42.3743],[80.8044,42.3413],[80.5627,42.3633],[80.4419,42.3029],[80.2881,42.3193],[80.2332,42.3523],[80.2112,42.4292],[80.2112,42.4677],[80.2551,42.5006],[80.1782,42.5885],[80.1782,42.6654],[80.2332,42.6929],[80.2771,42.8357],[80.4089,42.8302],[80.5847,42.8961],[80.5737,42.9236],[80.4419,42.9675],[80.387,43.0225],[80.5847,43.1378],[80.7935,43.1598],[80.7825,43.2971]]],[[[84.7815,44.3903],[84.8584,44.4836],[84.8804,44.6375],[84.8474,44.6869],[84.7925,44.8077],[84.9353,44.8022],[85.0122,44.7583],[85.0562,44.7198],[85.0232,44.621],[85.199,44.6375],[85.2429,44.5935],[85.2539,44.4836],[85.21,44.4562],[85.166,44.3463],[85.1111,44.3463],[84.9683,44.3848],[84.7815,44.3903]]]]}},
{"type": "Feature","properties":{"id":"6527","name":"博尔塔拉蒙古自治州","cp":[81.8481,44.6979],"childNum":3},"geometry":{"type":"Polygon","coordinates":[[[82.5732,45.2252],[83.0017,45.0549],[83.4631,44.978],[83.573,44.9341],[83.606,44.8956],[83.6719,44.8901],[83.8037,44.7583],[83.7708,44.6649],[83.7488,44.5496],[83.7817,44.5221],[83.7817,44.4672],[83.5181,44.4617],[83.5291,44.4067],[83.4192,44.2035],[83.4741,44.0387],[83.4302,44.0112],[83.3203,44.0057],[83.2324,44.0826],[83.1006,44.0991],[82.9028,44.0552],[82.7051,44.0717],[82.6611,44.1211],[82.4524,44.176],[82.3535,44.2639],[82.2217,44.2584],[81.925,44.3024],[81.7383,44.3463],[81.7163,44.3903],[81.6504,44.3848],[81.6284,44.4232],[81.2219,44.4617],[80.9802,44.5386],[80.8923,44.5386],[80.6726,44.6265],[80.6616,44.6375],[80.6836,44.6649],[80.6396,44.7308],[80.4858,44.7418],[80.2661,44.8407],[80.1892,44.8242],[80.1563,44.8407],[80.0024,44.7913],[79.9475,44.8462],[79.9695,44.8792],[79.8816,44.9066],[80.1013,45.0494],[80.2222,45.0275],[80.321,45.0714],[80.3979,45.0439],[80.4968,45.1263],[80.5957,45.1044],[80.7056,45.1318],[80.7166,45.1648],[80.8923,45.1263],[80.9583,45.1648],[81.0681,45.1758],[81.1011,45.2142],[81.5186,45.2802],[81.6284,45.3516],[81.7822,45.3845],[82.0349,45.2417],[82.0898,45.2472],[82.1008,45.2087],[82.2876,45.2472],[82.4304,45.2087],[82.5732,45.2252]]]}},
{"type": "Feature","properties":{"id":"6501","name":"乌鲁木齐市","cp":[87.9236,43.5883],"childNum":4},"geometry":{"type":"Polygon","coordinates":[[[86.803,43.1104],[86.8469,43.1488],[86.8359,43.1873],[86.9238,43.3246],[86.9128,43.4344],[86.9788,43.4784],[87.0007,43.5388],[87.0996,43.5992],[87.2754,43.797],[87.2754,43.9508],[87.5061,44.1101],[87.5061,44.0167],[87.5281,44.0936],[87.572,44.1046],[87.583,44.2419],[87.6599,44.198],[87.7039,44.2474],[87.7148,44.3079],[87.6929,44.4122],[87.605,44.4836],[87.572,44.566],[87.55,44.6649],[87.3303,45],[88.0005,45],[87.7917,44.3628],[87.8137,44.231],[87.7808,44.1321],[87.9895,44.0002],[88.0225,43.8794],[88.0884,43.8135],[88.1323,43.8135],[88.1653,43.7585],[88.2422,43.7695],[88.2861,43.83],[88.3081,43.8025],[88.418,43.797],[88.5059,43.8574],[88.5278,43.808],[88.7146,43.7476],[88.7036,43.7091],[88.8464,43.7146],[88.9343,43.6322],[88.9783,43.5443],[88.9233,43.429],[88.6267,43.3466],[88.5388,43.3466],[88.5168,43.2697],[88.4619,43.2092],[88.2532,43.2257],[88.2202,43.3246],[88.1323,43.3301],[87.594,43.2642],[87.3853,43.2806],[87.3853,43.1268],[87.6379,43.0389],[87.9346,42.8412],[87.8906,42.8247],[87.7588,42.9016],[87.5391,42.9126],[87.2534,43.0389],[87.1545,43.0554],[87.0557,43.0225],[86.803,43.1104]]]}},
{"type": "Feature","properties":{"id":"6502","name":"克拉玛依市","cp":[85.2869,45.5054],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[[[[85.3748,46.1371],[85.6384,46.214],[85.9241,46.1755],[86.0229,46.0822],[86.0339,46.0657],[85.968,46.0327],[85.946,45.9723],[85.6384,45.791],[85.4736,45.4944],[85.2429,45.379],[85.2539,45.3296],[85.199,45.2307],[85.2539,45.1593],[85.2539,45.033],[85.188,45.0275],[85.144,44.967],[85.0452,44.9286],[85.0232,44.8187],[85.0452,44.7748],[85.0122,44.7583],[84.9353,44.8022],[84.7925,44.8077],[84.8474,44.6869],[84.7595,44.6814],[84.6387,44.7748],[84.6497,45.1538],[84.5508,45.2802],[84.7375,45.4724],[84.8035,45.6152],[84.7705,45.6427],[84.7815,45.6647],[84.8364,45.6317],[84.9023,45.6372],[84.9573,45.6976],[85.1111,45.7361],[85.199,45.802],[85.3088,45.9998],[85.2649,46.0492],[85.2869,46.0822],[85.3748,46.1371]]],[[[84.7815,44.3903],[84.9683,44.3848],[85.1111,44.3463],[85.1111,44.3353],[85.1001,44.3079],[84.9683,44.2914],[84.9243,44.1925],[84.8474,44.198],[84.7375,44.1266],[84.8035,44.2584],[84.7815,44.3903]]]]}},
{"type": "Feature","properties":{"id":"659002","name":"阿拉尔市","cp":[81.2769,40.6549],"childNum":1},"geometry":{"type":"Polygon","coordinates":[[[81.8591,40.946],[81.8811,40.9406],[81.8152,40.8142],[81.7383,40.7373],[81.8372,40.6659],[81.947,40.5011],[81.8152,40.4572],[81.3208,40.4297],[81.1011,40.3802],[80.9253,40.4352],[80.7715,40.3638],[80.6506,40.3748],[80.6067,40.4352],[80.6836,40.5176],[80.7825,40.4572],[80.8154,40.4791],[80.6946,40.5231],[80.6726,40.5725],[80.6067,40.5615],[80.6067,40.6549],[80.6946,40.7208],[80.8484,40.7043],[81.1121,40.7318],[81.178,40.7483],[81.2549,40.8142],[81.3757,40.8087],[81.8591,40.946]]]}},
{"type": "Feature","properties":{"id":"659003","name":"图木舒克市","cp":[79.1345,39.8749],"childNum":1},"geometry":{"type":"Polygon","coordinates":[[[79.585,40.0012],[79.5959,39.9188],[79.6069,39.8804],[79.541,39.8364],[79.3982,39.8914],[79.2883,39.8804],[79.3982,39.8419],[79.3433,39.8199],[79.3213,39.765],[79.2334,39.7156],[79.1125,39.7101],[79.0027,39.6167],[78.8379,39.6332],[78.8049,39.6661],[78.7061,39.6497],[78.6511,39.7211],[78.772,39.8145],[78.7939,39.809],[78.783,39.7705],[78.8159,39.754],[78.7939,39.6936],[78.8159,39.6661],[78.8599,39.7046],[78.8928,39.6826],[78.8928,39.7485],[79.0356,39.798],[78.9368,39.8145],[79.0137,39.8694],[78.9587,39.9463],[79.1125,40.0726],[79.4751,40.1276],[79.585,40.0012]]]}},
{"type": "Feature","properties":{"id":"659004","name":"五家渠市","cp":[87.5391,44.3024],"childNum":1},"geometry":{"type":"Polygon","coordinates":[[[87.572,44.566],[87.605,44.4836],[87.6929,44.4122],[87.7148,44.3079],[87.7039,44.2474],[87.6599,44.198],[87.583,44.2419],[87.572,44.1046],[87.5281,44.0936],[87.5061,44.0167],[87.5061,44.1101],[87.5171,44.2365],[87.4402,44.3408],[87.4402,44.4672],[87.3743,44.5605],[87.4951,44.5496],[87.5061,44.599],[87.572,44.566]]]}},
{"type": "Feature","properties":{"id":"659001","name":"石河子市","cp":[86.0229,44.2914],"childNum":1},"geometry":{"type":"Polygon","coordinates":[[[86.1108,44.4617],[86.1328,44.3353],[86.0889,44.1211],[86.0669,44.1541],[85.968,44.1541],[85.946,44.3079],[85.9021,44.3683],[85.9241,44.4232],[86.001,44.4012],[86.0669,44.4617],[86.1108,44.4617]]]}}
]
});
}));