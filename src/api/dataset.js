import axios from 'axios'

const host = 'http://127.0.0.1:8154'
// const host = 'http://222.89.35.107:8154'

export const getSimulation = params => {
    let url = `${host}/simulation/`
    if ('id' in params) {
        url += params.id + '/'
    } else if ('export' in params) {
        url = `${host}/` + params.export + '/'
    }

    let query = ''
    for (let i in params) {
        if (i === 'id' || i === 'export') {
            continue
        }
        query += '&' + i + '=' + params[i]
    }

    if (query) {
        url += '?' + query
    }
    console.log(url)
    if ('export' in params) {
        global.open(url, "_parent")
        return
    }
    return axios.get(url)
}

export const getDigital = params => {
    let url = `${host}/digital/`
    if ('id' in params) {
        url += params.id + '/'
    }

    // if ('ordering' in params) {
    //     url += `?ordering=` + params.ordering
    // }
    let query = ''
    for (let i in params) {
        if (i === 'id') {
            continue
        }
        query += '&' + i + '=' + params[i]
    }

    if (query) {
        url += '?' + query
    }

    return axios.get(url)
}

export const getSwitch = params => {
    let url = `${host}/switch/`
    if ('id' in params) {
        url += params.id + '/'
    }

    // if ('ordering' in params) {
    //     url += `?ordering=` + params.ordering
    // }
    let query = ''
    for (let i in params) {
        if (i === 'id') {
            continue
        }
        query += '&' + i + '=' + params[i]
    }

    if (query) {
        url += '?' + query
    }

    return axios.get(url)
}

export const patchDigital = params => {
    let url = `${host}/digital/`
    if (!params.hasOwnProperty('id')) {
        console.log('未获取到要更新的id')
        return
    }

    if (!params.hasOwnProperty('digital')) {
        console.log('未获取到要更新的对象值')
        return
    }

    url += params.id + '/'
    console.log(params.digital)
    return axios.patch(url, params.digital)
}

export const patchSwitch = params => {
    let url = `${host}/switch/`
    if (!params.hasOwnProperty('id')) {
        console.log('未获取到要更新的id')
        return
    }

    if (!params.hasOwnProperty('switch')) {
        console.log('未获取到要更新的对象值')
        return
    }

    url += params.id + '/'

    return axios.patch(url, params.switch)
}
