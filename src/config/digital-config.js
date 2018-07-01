import {getDigital} from '@/api/dataset'

let intervalHandle = null,
    interval = 220

export const digitalConfig = {
    id: '',
    insertDatetime: '',
    time_stamp: '',
    digitalSet: {
        d01: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false,
            indexRowNo: 1,
            title: '运行里程'
        },
        d02: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false,
            indexRowNo: 1,
            title: '运行速度'
        },
        d03: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false,
            indexRowNo: 1,
            title: '运行时间'
        },
        d04: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false,
            indexRowNo: 1,
            title: '动作次数'
        },
        d05: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false,
            indexRowNo: 1,
            title: '贴合时间'
        },
        d06: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false,
            indexRowNo: 1,
            title: '间隔时间'
        },
        d07: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false,
            indexRowNo: 2,
            title: '工作压力'
        },
        d08: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false,
            indexRowNo: 2,
            title: '踏面温度'
        },
        d09: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false,
            indexRowNo: 2,
            title: '摩擦系数'
        },
        d10: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false,
            indexRowNo: 2,
            title: '当前转速'
        },
        d11: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false,
            indexRowNo: 2,
            title: '工作频率'
        },
        d12: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false,
            indexRowNo: 2,
            title: '工作电流'
        },
        d13: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d14: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d15: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d16: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d17: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d18: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d19: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d20: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d21: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d22: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d23: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d24: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d25: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d26: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d27: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d28: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d29: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        },
        d30: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: false,
            indexRowNo: 3,
            title: '占位备用'
        }
    }
}

export const loadDigital = digitalConfig => {
    getDigital({'ordering': '-id'}).then((value) => {
        let val = value.data.results[0]
        console.log(val)
        digitalConfig.id = val.id
        for (let i in digitalConfig.digitalSet) {
            if (digitalConfig.digitalSet[i].disabled) {
                digitalConfig.digitalSet[i].value = val[i]
            }
        }
        intervalHandle = setTimeout(loadDigital, interval, digitalConfig)
    }).catch((err) => {
        console.log(err)
    })
}


export const turnOffDigitalTimeout = () => {
    console.log(intervalHandle)
    clearTimeout(intervalHandle)
    // intervalHandle = null
}
