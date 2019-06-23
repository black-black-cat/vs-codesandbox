// @flow weak
'use strict'
import _ from './utils/index.js'
// const log = console.log
let old = _.toNumber
_.toNumber = str => {
    if (str.indexOf('-') === 0) {
        str = str.slice(1)
        return -old(str)
    }
    return old(str)
}
export {
    _
}

export class Foo {
    constructor() {
        this.position = {
            a: 1
        }
        this.members = {
            worker: 'peter'
        }
    }

    move () {
        this.position = Object.assign({
            b: 2
        }, this.position)
    }

    includes (obj) {
        if (typeof obj === 'string') {
            obj.includes('a')
            obj.repeat(99)
        } else {
            [].concat(obj).includes(obj)
        }
    }
}

let temp = 'yyyy-mm-dd hh:MM:ss'
let rFmt = /y{2,4}|m{1,2}|d{1,2}|h{1,2}|M{1,2}|s{1,2}/g
export function formatDatetime (date = new Date(), template) {
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    let h = date.getHours()
    let M = date.getMinutes()
    let s = date.getSeconds()
    // let arr = [y, m, d, h, M, s]
    let parts = { y, m, d, h, M, s }
    let fmt = (template || temp).replace(rFmt, function (matched) {
        if (matched == 'yy') { // eslint-disable-line
            parts.y = ('' + parts.y).slice(2)
        }
        return matched.length > 1
            ? prependZero(parts[matched[0]])
            : parts[matched[0]]
    })
    return fmt
}

function prependZero (num) {
    return num < 10 ? '0' + num : num
}

export function getLastDayOfMonth (fmt = '2008-1') {
    fmt = fmt.split(/[-/]/).map((str, i) => {
        if (i === 1) {
            str = str - 1
        }
        return +str
    })
    let day = new Date(fmt[0], fmt[1])
    day.setFullYear(fmt[0], fmt[1] + 1, 0)
    return day.getDate()
}

// eslint-disable-next-line
function getFirstDayInWeekByMonth (year, month) {
    let mIndex = month - 1
    let day = new Date(year, mIndex)
    day.setFullYear(year, mIndex, 1)
    return day.getDay()
}

// log(getMonthFirstDayinWeek(2018, 4))

export function flatten (arr) {
    let fArr = []
    _flatten(arr, fArr)
    return fArr
}

function _flatten (arr, fArr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            _flatten(arr[i], fArr)
        } else {
            fArr.push(arr[i])
        }
    }
}

export function firstNotRepeat (str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        obj[char]
            ? (obj[char] += 1)
            : (obj[char] = 1)
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (obj[char] === 1) {
            return {
                index: i,
                value: char
            }
        }
    }
    return null
}

export function flattenByReduce (arr = []) {
    return arr.reduce((acc, item) => {
        let a = Array.isArray(item)
            ? flattenByReduce(item)
            : item
        a = [].concat(a)
        return [
            ...acc,
            ...a
        ]
    }, [])
}

export default {
    foo () {
        let a = 1
    }
}

export const bar = {
    foo () {
        let a = 1
    }
}