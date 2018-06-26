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
            indexRowNo: 1
        },
        d02: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false,
            indexRowNo: 1
        },
        d03: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false,
            indexRowNo: 1
        },
        d04: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false,
            indexRowNo: 1
        },
        d05: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false,
            indexRowNo: 1
        },
        d06: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false,
            indexRowNo: 1
        },
        d07: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false,
            indexRowNo: 2
        },
        d08: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false,
            indexRowNo: 2
        },
        d09: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false,
            indexRowNo: 2
        },
        d10: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false,
            indexRowNo: 2
        },
        d11: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false,
            indexRowNo: 2
        },
        d12: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false,
            indexRowNo: 2
        },
        d13: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false,
            indexRowNo: 2
        },
        d14: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false,
            indexRowNo: 2
        },
        d15: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false,
            indexRowNo: 2
        },
        d16: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d17: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d18: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d19: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d20: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d21: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d22: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d23: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d24: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d25: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d26: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d27: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d28: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d29: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
        },
        d30: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: true,
            indexRowNo: 2
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


export const toggleDigitalTimeout = (op) => {
    if (intervalHandle && op === 'off') {
        console.log(intervalHandle)
        clearTimeout(intervalHandle)
        intervalHandle = null
        return false
    } else if (intervalHandle === null && op === 'on') {
        intervalHandle = setTimeout(loadDigital, interval, digitalConfig)
        return true
    } else if (intervalHandle) {
        console.log(intervalHandle)
        clearTimeout(intervalHandle)
        intervalHandle = null
        return false
    } else {
        intervalHandle = setTimeout(loadDigital, interval, digitalConfig)
        return true
    }
}
