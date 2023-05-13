import string
import zipfile
import random
import os


# функция позволяет сгенерировать count файлов с length длинной в dir_file
def gen(count, dir_file, length=10000):
    path = dir_file + '\\' + 'random'
    letters = string.printable
    for i in range(1, count + 1):
        file = open((path + str(i) + '.txt'), 'w')
        text = ''.join(random.choice(letters) for i in range(length))
        file.write(text)


gen(20, 'D:\\test', 10000)

# Модуль zipfile позволяет работать c zip архивами
# За создание архива отвечает класс ZipFile
zf = zipfile.ZipFile('D:\\archive_python', 'w')

# Пример записи в архив файлов
for folder, _, files in os.walk('D:\\test\\'):
    for file in files:
        if file.endswith('.txt'):
            # первый параметр - это путь файла
            # второй (необязательный) - это имя, которое следует использовать в архиве
            # compress_type позволяет указать тип компресии
            zf.write(os.path.join(folder, file),
                     os.path.relpath(os.path.join(folder, file), 'D:\\test\\'),
                     compress_type=zipfile.ZIP_DEFLATED)
zf.close()

zf = zipfile.ZipFile('D:\\archive_python.zip', 'r')
# extractall(path) распаковывает архив в path
zf.extractall('D:\\res\\python\\')

# Метод infolist() позволяет обойти архив и получить информацию о файле
for f in zf.infolist():
    print(f)

zf.close()
