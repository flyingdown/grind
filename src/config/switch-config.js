import Vue from 'vue'
import {getSwitch, patchSwitch} from '@/api/dataset'

let intervalHandle = null,
    interval = 220

export const switchConfig = {
    id: '',
    insertDatetime: '',
    time_stamp: '',
    switchSet: {
        k01: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 1,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k02: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 1,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k03: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 1,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k04: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 1,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k05: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 1,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k06: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 2,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k07: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 2,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k08: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 2,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k09: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 2,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k10: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 2,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k11: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 3,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k12: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 3,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k13: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 3,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k14: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 3,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k15: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 3,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k16: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 4,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k17: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 4,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k18: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 4,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k19: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 4,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k20: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 4,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k21: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 5,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k22: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 5,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k23: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 5,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k24: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 5,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k25: {
            value: '',
            readOnly: true,
            disabled: false,
            rowNo: 5,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k26: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 6,
            colSpan: 4,
            label: '自动运行',
            indexRowNo: 1
        },
        k27: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 6,
            colSpan: 4,
            label: '手动运行',
            indexRowNo: 1
        },
        k28: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 6,
            colSpan: 4,
            label: '手动研磨',
            indexRowNo: 1
        },
        k29: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 6,
            colSpan: 4,
            label: '连续研磨',
            indexRowNo: 1
        },
        k30: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 6,
            colSpan: 4,
            label: '雨水状态试验',
            indexRowNo: 2
        },
        k31: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 7,
            colSpan: 4,
            label: '风沙状态试验',
            indexRowNo: 2
        },
        k32: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 7,
            colSpan: 4,
            label: '高温状态试验',
            indexRowNo: 2
        },
        k33: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 7,
            colSpan: 4,
            label: '低温试验状态',
            indexRowNo: 2
        },
        k34: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 7,
            colSpan: 4,
            label: '混合试验状态',
            indexRowNo: 2
        },
        k35: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 7,
            colSpan: 4,
            label: '备用',
            indexRowNo: 0
        },
        k36: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 8,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k37: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 8,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k38: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 8,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k39: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 8,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k40: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 8,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k41: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 9,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k42: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 9,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k43: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 9,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k44: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 9,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k45: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 9,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k46: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 10,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k47: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 10,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k48: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 10,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k49: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 10,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        },
        k50: {
            value: '',
            readOnly: false,
            disabled: false,
            rowNo: 10,
            colSpan: 4,
            label: '',
            indexRowNo: 0
        }
    }
}

export const loadSwitch = switchConfig => {
    // console.log(switchConfig)
    getSwitch({'ordering': '-id'}).then((value) => {
        let val = value.data.results[0]
        console.log(val)

        switchConfig.id = val.id

        for (let i in switchConfig.switchSet) {
            switchConfig.switchSet[i].value = val[i] === 1
        }
        intervalHandle = setTimeout(loadSwitch, interval, switchConfig)
    }).catch((err) => {
        console.log(err)
    })
}

export const turnOffSwitchTimeout = () => {
    console.log(intervalHandle)
    clearTimeout(intervalHandle)
    // intervalHandle = null
}


export const handleSwitch = (key, val) => {
    console.log(key + ':' + val)
    if (switchConfig.switchSet[key].readOnly) {
        console.log('只读开关量')
        Vue.set(switchConfig.switchSet[key], 'value', !val)
        return
    }
    console.log(switchConfig)
    let sw = {}
    sw[key] = val
    patchSwitch({
        'id': switchConfig.id,
        'switch': sw
    }).then((value) => {
        console.log(value)
        // loadSwitch(switchConfig)
        // setTimeout(loadSwitch, 500, switchConfig)
    }).catch((err) => {
        console.log(err)
    })
}



