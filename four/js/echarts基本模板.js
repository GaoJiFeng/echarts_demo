var myChart=echarts.init(document.getElementById('main'))
     var option={
         toolbox:{
            show:true,
            feature:{
                mark:{
                    show:true
                },
                dataView:{
                    show:true
                },
                magicType:{
                    show:true,
                    type:['line','bar']
                }
            }
         },
         dataZoom:{
             show:true
         },
         legend:{
             padding:10,
             itemGap:10,//图例间隔
             data:['邓艳波','杨国娥']//legend的data值要和series的对象的每个name 值相对应，不然不出来lenend
         },
         tooltip:{//悬浮的时候提示框
             trigger:'item'//触发方式
         },
         xAxis:{
             type:'category',//什么类型的，比如数值？
             data:['周一','周二','周三','周四','周五','周六','周日']
         },
         yAxis:{
           type:'value',
            //  boundaryGap:[0.1,0.1],//类目起始和结束两端空白策略，见下图，默认为true留空，false则顶头
            //  splitNumber:4,//数值的分割段数，不指定的时候根据最大值最小值进行划分
 
         },
         series:[
             {
                 name:'邓艳波',//系列名如启用legend，该值将被legend.data索引相关
                 type:'bar',//折线图
                 data:[112,23,45,56,233,343,454,89,343,123,45,76]
             },
             {
                 name:'杨国娥',//系列名
                 type:'bar',//折线图
                 data:[54,543,23,322,33,63,111,222,23]
             }
         ]
 
     }
     myChart.setOption(option)