function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }

        xhr.send(JSON.stringify(body));
    });
}

const body = {
    name: 'alex',
    old: 18
}
const URL = 'https://jsonplaceholder.typicode.com/users';

sendRequest('POST', URL, body)
    .then(value => {
        console.log(value);
    })
    .catch(err => {
        console.error(err);
    });