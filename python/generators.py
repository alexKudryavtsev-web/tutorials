# Частным случаем итератора можно считать генератор
# Генератор - это обычная функция с yield
# yield возвращает значение и временно прекращает выполнение до следующего __next__
# Генерирование происходит на лету


def g():
    for v in range(10):
        yield v ** 2


gen = g()
for i in gen:
    print(i)

# Короткая версия генератора:
gen = (v ** 2 for v in range(10))


# примеры использования генераторов:
def enumerate_index(iterable, start=0):
    for v in iterable:
        yield (start, v)
        start += 1


for i in enumerate_index('abcde'):
    print(i)


# бесконечные счетчик:
def counter(start=0):
    while True:
        yield start
        start += 1


c = counter(start=10)

for _ in range(50):
    print(next(c))


# Интерфейс генератора:

def g():
    i = yield 60
    print(i)

    j = yield 'Hello'
    print('j {}'.format(j))


gen = g()
print(next(gen))
gen.send('Next')
