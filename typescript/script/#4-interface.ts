interface Rect {
    readonly id: number,
    color ?: string,
    size: {
        width: number,
        height: number
    }
}

let r1: Rect = {
    id: 12,
    color: '#fff',
    size: {
        width: 123,
        height: 140
    }
}

r1.color = '#ccc'
//r1.id = 12