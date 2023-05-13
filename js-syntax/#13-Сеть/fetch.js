async function sendRequest(method, url, body = null) {
    let response = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        console.log('Ошибка ' + response.status);
    }
}

async function main() {
    let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');
    const reader = response.body.getReader();

    const contentLength = +response.headers.get('Content-Length');

    let receivedLength = 0; // количество байт, полученных на данный момент
    let chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)
    while (true) {
        const { done, value } = await reader.read();

        if (done) {
            break;
        }

        chunks.push(value);
        receivedLength += value.length;

        console.log(`Получено ${receivedLength} из ${contentLength}`)
    }

    // Шаг 4: соединим фрагменты в общий типизированный массив Uint8Array
    let chunksAll = new Uint8Array(receivedLength); // (4.1)
    let position = 0;
    for (let chunk of chunks) {
        chunksAll.set(chunk, position); // (4.2)
        position += chunk.length;
    }

    // Шаг 5: декодируем Uint8Array обратно в строку
    let result = new TextDecoder("utf-8").decode(chunksAll);

    // Готово!
    let commits = JSON.parse(result);
    alert(commits[0].author.login);
}

main();