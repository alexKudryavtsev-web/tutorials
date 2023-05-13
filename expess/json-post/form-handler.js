document
    .getElementsById('submit')
    .addEventLister('click', e => {
        let form = document.forms.reg
        let data = {
            name: form.elements.name.value,
            age: form.elements.age.value
        }

        fetch('/user', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            })
            .then(val => console.log(val))
    })