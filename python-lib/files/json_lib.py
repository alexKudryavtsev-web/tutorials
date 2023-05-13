import json

# Модуль json позволяет работать с json объектами
# Он является pickle для json, так что общие методы у них выполняют общие функции

# Json объект в Python - это словарь
data = {
    "firstName": "Jake",
    "lastName": "Doe",
    "hobbies": ["running", "sky diving", "singing"],
    "age": 35,
    "children": [
        {
            "firstName": "Alice",
            "age": 6
        },
        {
            "firstName": "Bob",
            "age": 8
        }
    ]
}

# Записать в файл можно при помощи метода json.dump
with open('example.json', 'w') as write_file:
    # Первый параметр указывает что надо записать, далее идет куда надо записывать
    # Параметр indent указывает длину оступа
    # separators позволяет указать кортеж,
    # где первый элемент - это разделитель между строками,
    # а второй между ключем и значение
    json.dump(data, write_file, indent=2, separators=(',', ' : '))

# Преобразуем json файл в словарь
with open('example.json', 'r') as read_file:
    data = json.load(read_file)

print(data)