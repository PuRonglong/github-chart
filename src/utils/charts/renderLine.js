import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';

let option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    grid: {
        left: 10,
        right: 10,
        top: 0,
        bottom: 0
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: []
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: 'contributions',
        smooth: true,
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#c23531'
                }, {
                    offset: 1,
                    color: '#B03A5B'
                }])
            }
        },
        data: []
    }]
};
 
export default (originData, Ntarget) => {
    let myChart = echarts.init(Ntarget);

    originData.forEach(item => {
        option.xAxis.data.push(item.date);
        option.series[0].data.push(item.count);
    });

    myChart.setOption(option);
}
