import csv


# Модуль csv позволяет читать и записывать данные из csv файлов

# Функция записывает данные в csv файл
def csv_writer(data, path):
    # Здесь явно задана newline, чтоб не было пробелов между row
    with open(path, "w", newline='') as csv_file:
        # Создаем writer, который будет записывать элементы через ','
        writer = csv.writer(csv_file, delimiter=',')
        for line in data:
            # writer автоматически добавит первое в качестве title, а остальное, как row
            writer.writerow(line)


# Для удобного чтения есть csv.DictReader
# Он представляет csv, как список из OrderedDict
# В нем значения выложены, как заголовок_значения: значение
def csv_dict_reader(file_obj):
    reader = csv.DictReader(file_obj, delimiter=',')
    for line in reader:
        # Обращаемся по ключу first_name:
        print(line["first_name"], end=' ')
        print(line["last_name"], end=' ')
        print(line['city'])


if __name__ == "__main__":
    data = ["first_name,last_name,city".split(","),
            "Tyrese,Hirthe,Strackeport".split(","),
            "Jules,Dicki,Lake Nickolasville".split(","),
            "Dedric,Medhurst,Stiedemannberg".split(",")
            ]
    csv_writer(data, 'D:\\table.csv')

    with open("D:\\table.csv") as f_obj:
        csv_dict_reader(f_obj)
