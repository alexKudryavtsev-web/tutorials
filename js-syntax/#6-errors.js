/*
    Error - базовый класс ошибок: 
        message: сообщение об ошибке
        name: имя ошибки
        fileName: имя файла с ошибкой
        lineNumber: строчка
    SyntaxError - генерируется когда компилятор, считает, что есть ошибка синтаксиса
    EvalError   - генерирует eval()
    TypeError   - возникается из-за не того типа данных
    URIError    - возникает, при не правильной передачи URI
    ReferenceError - возникает, при обращении к отсуствующей переменной
    RangeError     - возникает, при выходе за границы
    InternalError  - генерирует движок JavaScript. Не является стандартной ошибкой
*/

class MyError extends Error {
    constructor(message, fileName=undefined, lineNumber=undefined) {
        super(message);
        this.name = 'MyError';
        this.fileName = fileName;
        this.lineNumber = lineNumber;
    }
}


try {
    throw new MyError('специально вызвана', 'error.js', 9);
} catch (err) {
    console.log('Имя:         ' + err.name);
    console.log('Сообщение:   ' + err.message);  
    console.log('Стек вызова: ' + err.stack);
    console.log('Файл:        ' + err.fileName)
    console.log('Строчка:     ' + err.lineNumber)
} finally {
    // закрываем данные.
    // Сработает всегда, даже если будет return в try-catch.
}

// Для обработки исключений вне try-catch используется window.onerror
window.onerror = function(message, url, lineNumber) {
    alert("Поймана ошибка, выпавшая в глобальную область!\n" +
      "Сообщение: " + message + "\n(" + url + ":" + lineNumber + ")");
}