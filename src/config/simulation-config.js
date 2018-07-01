import Highcharts from 'highcharts'
import {getSimulation} from '@/api/dataset'

let intervalHandle = null

export let interval = 2000

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
    exporting: {
        buttons: {
            contextButton: {
                menuItems: null,
                onclick: function () {
                    this.exportChart();
                }
            }
        }
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
    id: '',
    insertDatetime: '',
    time_stamp: '',
    simulationSet: {
        s01: {
            value: '',
            title: 's01'
        },
        s02: {
            value: '',
            title: 's02'
        },
        s03: {
            value: '',
            title: 's03'
        },
        s04: {
            value: '',
            title: 's04'
        },
        s05: {
            value: '',
            title: 's05'
        },
        s06: {
            value: '',
            title: 's06'
        },
        s07: {
            value: '',
            title: 's07'
        },
        s08: {
            value: '',
            title: 's08'
        },
        s09: {
            value: '',
            title: 's09'
        },
        s10: {
            value: '',
            title: 's10'
        },
        s11: {
            value: '',
            title: 's11'
        },
        s12: {
            value: '',
            title: 's12'
        },
        s13: {
            value: '',
            title: 's13'
        },
        s14: {
            value: '',
            title: 's14'
        },
        s15: {
            value: '',
            title: 's15'
        },
        s16: {
            value: '',
            title: 's16'
        },
        s17: {
            value: '',
            title: 's17'
        },
        s18: {
            value: '',
            title: 's18'
        },
        s19: {
            value: '',
            title: 's19'
        },
        s20: {
            value: '',
            title: 's20'
        }
    }
}

export const seriesConfig = {
    speed: {
        name: '速度',
        data: [],
        color: colors.speed,
        label: 's01',
        id: 'speed'
    },
    temperature1: {
        name: '温度1',
        data: [],
        color: colors.temperature1,
        label: 's02',
        id: 'temperature1'
    },
    temperature2: {
        name: '温度2',
        data: [],
        color: colors.temperature2,
        label: 's03',
        id: 'temperature2'
    },
    pressure:  {
        name: '压力',
        data: [],
        color: colors.pressure,
        label: 's04',
        id: 'pressure'
    },
    strength1: {
        name: '力1',
        data: [],
        color: colors.strength1,
        label: 's05',
        id: 'strength1'
    },
    strength2: {
        name: '力2',
        data: [],
        color: colors.strength2,
        label: 's06',
        id: 'strength2'
    },
    strength3: {
        name: '力3',
        data: [],
        color: colors.strength3,
        label: 's07',
        id: 'strength3'
    },
    strength4: {
        name: '力4',
        data: [],
        color: colors.strength4,
        label: 's08',
        id: 'strength4'
    },
    noise: {
        name: '噪音',
        data: [],
        color: colors.noise,
        label: 's09',
        id: 'noise'
    },
    cof: {
        name: '摩擦因数',
        data: [],
        color: colors.cof,
        label: 's10',
        id: 'cof'
    }
}

export const splinesMapSeries = {
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

export const initSeries = function (value, seriesConfig) {
    console.log(value)
    let val = value.data.results,
        index = val[0].id
    for (let i in seriesConfig) {
        seriesConfig[i].data = []
    }
    val.forEach(function (element) {
        for (let i in seriesConfig) {
            seriesConfig[i].data.unshift(
                [
                    element.time_stamp,
                    element[seriesConfig[i].label]
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

export const loadSeries = function(splines, seriesConfig) {
    // console.log(splines)
    for (let i in splines) {
        // console.log(i)
        let chart = splines[i].getChart()
        splines[i].removeSeries()
        splinesMapSeries[i].content.forEach(function(element) {
            splines[i].addSeries(seriesConfig[element])
        })
        splines[i].hideLoading()
        chart.update({
            title: {
                text: splinesMapSeries[i].title
            }
        })
        console.log(i)
        chart['info'] = i  // 设置每个曲线的名称信息
        chart.redraw()
        // console.log(chart)
        activeLastPointToolip(chart)
    }
}

export const addLastPoint = (splines, index) => {
    getSimulation({
        'id': index
    }).then((value) => {
        console.log(value)
        let val = value.data

        for (let i in splines) {
            let chart = splines[i].getChart()
            splinesMapSeries[i].content.forEach((element, index) => {
                let x = val.time_stamp,
                    y = val[seriesConfig[element].label],
                    flag = false
                // console.log(chart.series[index].points.length + ':' + i + ":" + index + ':' + element)
                if (chart.series[index].points.length >= 100) {
                    flag = true
                }

                chart.series[index].addPoint([x, y], false, flag)
            })
            chart.redraw()
            activeLastPointToolip(chart)
        }

        intervalHandle = setTimeout(addLastPoint, interval, splines, index+1)
    }).catch((err) => {
        console.log(err)
        intervalHandle = setTimeout(addLastPoint, interval, splines, index)
    })
}

export const toggleChartTimeout = (op, splines, index) => {
    if(intervalHandle && op === 'off') {
        while(intervalHandle) {
            console.log(intervalHandle)
            clearTimeout(intervalHandle)
            intervalHandle = null
        }
    } else if (intervalHandle === null && op === 'on') {
        intervalHandle = setTimeout(addLastPoint, interval, splines, index)
    } else if (intervalHandle) {
        while(intervalHandle) {
            console.log(intervalHandle)
            clearTimeout(intervalHandle)
            intervalHandle = null
        }
    } else {
        intervalHandle = setTimeout(addLastPoint, interval, splines, index)
    }
}

export const turnOffChartTimeout = () => {
    console.log(intervalHandle)
    clearTimeout(intervalHandle)
    // intervalHandle = null
}

export const loadData = (splines, seriesConfig, pointNum) => {
    turnOffChartTimeout()
    for (let i in splines) {
        splines[i].delegateMethod('showLoading', 'Loading...')
    }
    getSimulation({
        'ordering': '-id',
        'page_size': pointNum
    }).then((value) => {
        let index = initSeries(value, seriesConfig)
        console.log(index)
        loadSeries(splines, seriesConfig)
        intervalHandle = setTimeout(addLastPoint, interval, splines, index+1)
    }).catch((err) => {
        console.log(err)
    })
}

export const loadDetailChart = (splines, seriesConfig, min_date, max_date, id_interval) => {
    for (let i in splines) {
        splines[i].delegateMethod('showLoading', 'Loading...')
    }
    getSimulation({
        'min_date': min_date,
        'max_date': max_date,
        'id_interval': id_interval,
        'page_size': 1000,
        'ordering': '-id'
    }).then((value) => {
        if (!value.data.count) {
            alert('请求数据为空')
            return
        }
        initSeries(value, seriesConfig)
        loadSeries(splines, seriesConfig)
    }).catch((err) => {
        console.log(err)
    })
}
