import {getDigital} from '@/api/dataset'

let intervalHandle = null

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
            controls: false
        },
        d02: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false
        },
        d03: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false
        },
        d04: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false
        },
        d05: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 1,
            colSpan: 4,
            controls: false
        },
        d06: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false
        },
        d07: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false
        },
        d08: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false
        },
        d09: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false
        },
        d10: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 2,
            colSpan: 4,
            controls: false
        },
        d11: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false
        },
        d12: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false
        },
        d13: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false
        },
        d14: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false
        },
        d15: {
            value: '',
            readOnly: true,
            disabled: true,
            rowNo: 3,
            colSpan: 4,
            controls: false
        },
        d16: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: true
        },
        d17: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: true
        },
        d18: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: true
        },
        d19: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: true
        },
        d20: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 4,
            colSpan: 4,
            controls: true
        },
        d21: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: true
        },
        d22: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: true
        },
        d23: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: true
        },
        d24: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: true
        },
        d25: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 5,
            colSpan: 4,
            controls: true
        },
        d26: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: true
        },
        d27: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: true
        },
        d28: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: true
        },
        d29: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: true
        },
        d30: {
            value: '',
            readOnly: false,
            disabled: true,
            rowNo: 6,
            colSpan: 4,
            controls: true
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
        intervalHandle = setTimeout(loadDigital, 1000, digitalConfig)
    }).catch((err) => {
        console.log(err)
    })
}


export const toggleTimeout = () => {
    if(intervalHandle) {
        console.log(intervalHandle)
        clearTimeout(intervalHandle)
        intervalHandle = null
        return false
    }
    intervalHandle = setTimeout(loadDigital, 1000, digitalConfig)
    return true
}
