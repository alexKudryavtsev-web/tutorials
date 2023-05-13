const EventEmmiter = require('events')

let emmiter = new EventEmmiter()

emmiter.on('any', data => {
    console.log('any', data)
})

emmiter.emit('any', {
    x: 12,
    y: 435
})
setTimeout(() => {
    emmiter.emit('any', {x: 43, y: 355})
}, 1200)


function getInfoListener(emmiter) {
    let arr = []
    for(let event of emmiter.eventNames()) {
        arr.push({
            event: event,
            count: emmiter.listenerCount(event),
            events: emmiter.listeners(event)
        })
    }
    return arr
}

console.log(29, getInfoListener(emmiter))
