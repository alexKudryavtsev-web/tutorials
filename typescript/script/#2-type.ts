// Позволяет создать пользовательский тип на основе другого типа
type ID = number | string

let myID: ID = '13243'
let friendID: ID = 13232

function handlerID(id: ID) {
    console.log(id);
}
handlerID(1243353)
handlerID('356434')