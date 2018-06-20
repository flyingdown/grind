import axios from 'axios'

const host = 'http://127.0.0.1'

export const getSimulation = params => {
    let url = `${host}/simulation/`
    if ('id' in params) {
        url += params.id + '/'
    }

    if ('ordering' in params) {
        url += `?ordering=` + params.ordering
    }

    if ('ordering' in params && 'page_size' in params) {
        url += `&page_size=` + params.page_size
    }

    return axios.get(url)
}

export const getDigital = params => {
    let url = `${host}/digital/`
    if ('id' in params) {
        url += params.id + '/'
    }

    if ('ordering' in params) {
        url += `?ordering=` + params.ordering
    }

    return axios.get(url)
}

export const getSwitch = params => {
    let url = `${host}/switch/`
    if ('id' in params) {
        url += params.id + '/'
    }

    if ('ordering' in params) {
        url += `?ordering=` + params.ordering
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
