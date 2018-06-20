import Highcharts from 'highcharts'
import {getSimulation} from '@/api/dataset'

let intervalHandle = null,
    interval = 1000 * 3

export const options = {
    chart: {
        type: 'spline',
        marginRight: 10
    },
    credits: {
        href: 'http://flydowning.com',
        text: 'flyingdown.com'
    },
    title: {
        text: '动态实时数据'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
        labels: {
            formatter: function () {
                return Highcharts.dateFormat('%H:%M:%S', this.value)
            }
        }
    },
    yAxis: {
        title: {
            text: null
        }
    },
    tooltip: {
        formatter: function () {
            // console.log(this)
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2)
        }
    },
    legend: {
        enabled: true
    },
    plotOptions: {
        series: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    credits: {
        enabled: false
    },
    series: []
}

export const asyncData = {
    name: 'Tokyo',
    marker: {
        symbol: 'square'
    },
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
        y: 26.5,
        marker: {
            symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
        }
    }, 23.3, 18.3, 13.9, 9.6]
}

export const colors = {
    speed: '#7cb5ec',
    temperature1: '#434348',
    temperature2: '#90ed7d',
    pressure: '#7cb5ec',
    strength1: '#7cb5ec',
    strength2: '#434348',
    strength3: '#90ed7d',
    strength4: '#91e8e1',
    noise: '#7cb5ec',
    cof: '#7cb5ec'
}

export const simulationConfig = {
    speed: {
        name: '速度',
        data: [],
        color: colors.speed,
        label: 's01'
    },
    temperature1: {
        name: '温度1',
        data: [],
        color: colors.temperature1,
        label: 's02'
    },
    temperature2: {
        name: '温度2',
        data: [],
        color: colors.temperature2,
        label: 's03'
    },
    pressure:  {
        name: '压力',
        data: [],
        color: colors.pressure,
        label: 's04'
    },
    strength1: {
        name: '力1',
        data: [],
        color: colors.strength1,
        label: 's05'
    },
    strength2: {
        name: '力2',
        data: [],
        color: colors.strength2,
        label: 's06'
    },
    strength3: {
        name: '力3',
        data: [],
        color: colors.strength3,
        label: 's07'
    },
    strength4: {
        name: '力4',
        data: [],
        color: colors.strength4,
        label: 's08'
    },
    noise: {
        name: '噪音',
        data: [],
        color: colors.noise,
        label: 's09'
    },
    cof: {
        name: '摩擦因数',
        data: [],
        color: colors.cof,
        label: 's10'
    }
}

export const splinesMapSimulation = {
    spline1: {
        title: '速度',
        content: ['speed']
    },
    spline2: {
        title: '温度',
        content: ['temperature1', 'temperature2']
    },
    spline3: {
        title: '压力',
        content: ['pressure']
    },
    spline4: {
        title: '力',
        content: ['strength1', 'strength2', 'strength3', 'strength4']
    },
    spline5: {
        title: '噪音',
        content: ['noise']
    },
    spline6: {
        title: '摩擦系数',
        content: ['cof']
    }
}

export const initSimulation = function (value, simulation) {
    // console.log(value)
    let val = value.data.results,
        index = val[0].id
    val.forEach(function (element) {
        for (let i in simulation) {
            simulation[i].data.unshift(
                [
                    element.time_stamp,
                    element[simulation[i].label]
                ]
            )
        }
    })
    return index
}

export const activeLastPointToolip = function (chart) {
    let points = chart.series[0].points
    chart.tooltip.refresh(points[points.length -1])
}

export const loadSimulation = function(splines, simulationConfig) {
    for (let i in splinesMapSimulation) {
        // console.log(i)
        let chart = splines[i].getChart()
        splinesMapSimulation[i].content.forEach(function(element) {
            splines[i].addSeries(simulationConfig[element])
        })
        splines[i].hideLoading()
        chart.update({
            title: {
                text: splinesMapSimulation[i].title
            }
        })
        chart.redraw()
        activeLastPointToolip(chart)
    }
}

export const addLastPoint = (splines, index) => {
    // if (intervalHandle) {
    //     console.log(intervalHandle)
    //     clearTimeout(intervalHandle)
    // }
    getSimulation({
        'id': index
    }).then((value) => {
        console.log(value)
        let val = value.data
        for (let i in splinesMapSimulation) {
            let chart = splines[i].getChart()
            splinesMapSimulation[i].content.forEach((element, index) => {
                let x = val.time_stamp,
                    y = val[simulationConfig[element].label],
                    flag = false
                // console.log(chart.series[index].points.length + ':' + i + ":" + index + ':' + element)
                if (chart.series[index].points.length >= 10) {
                    flag = true
                }

                chart.series[index].addPoint([x, y], false, flag)
            })
            chart.redraw()
            activeLastPointToolip(chart)
        }

        return setTimeout(addLastPoint, interval, splines, index+1)
    }).catch((err) => {
        console.log(err)
        return setTimeout(addLastPoint, interval, splines, index)
    })
}

export const loadData = (splines, simulation) => {
    if (intervalHandle) {
        console.log(intervalHandle)
        clearTimeout(intervalHandle)
    }
    for (let i in splinesMapSimulation) {
        splines[i].delegateMethod('showLoading', 'Loading...')
    }
    getSimulation({
        'ordering': '-id',
        'page_size': 10
    }).then((value) => {
        let index = initSimulation(value, simulation)
        console.log(index)
        loadSimulation(splines, simulation)
        intervalHandle = setTimeout(addLastPoint, interval, splines, index+1)
    }).catch((err) => {
        console.log(err)
    })
}
