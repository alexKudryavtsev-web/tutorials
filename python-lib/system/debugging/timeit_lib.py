import timeit
import gc
import sys

gc.enable()


def ac():
    for i in range(100):
        print(i)


# Функция timeit() позволяет измерить время исполнения:
#       stmt - строка с кодом, который надо выполнить
#       setup='pass' - строка с котором, который надо выполнить перед stmt
#       Обычно в setup пишут gc.enable()
#       globals={} - словарь с глобальными переменными
#       number=10000 - сколько раз надо выполнить stmt
res = timeit.timeit('ac()', 'gc.enable()', globals=globals(), number=2)
print(res)


# Класс Timer аналогичен timeit() за исключением, то что представляет доп. методы
timer = timeit.Timer('ac()', 'gc.enable()', globals=globals())
print(timer.timeit(number=3))

# repeat():
#       repeat - этот параметр указывает сколько раз вызвать timeit
#       number - передаст в timeit
# Вернет список с результатами выполнения
print(timer.repeat(2, 100))

# Позволяет писать результат в file
timer.print_exc(sys.stderr)