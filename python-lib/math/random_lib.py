import random

date = [14, 56, 234, 400, 435, 635, 25235, 353563]

# choice() выбирает рандомные элемент:
item = random.choice(date)
print(item)

# shuffle() позволяет перемешать
random.shuffle(date)
print(item)

# функция random() возвращает случайное число в радиусе от 0.0 до 1.0
print(random.random())

# функция randint() возвращает случайный int в заданном диапазоне
print(random.randint(0, 1000))

# функция uniform() возвращает случайное число в заданном диапазоне
print(random.uniform(34, 100))

# функция randrange() похожа на randint(), но она позволяет задать шаг
print(random.randrange(0, 100, 3))