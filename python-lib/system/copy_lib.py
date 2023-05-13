from copy import *

# Модуль copy позволяет копировать объекты примитивы или пользовательские
# copy(object) -
#       поверхностное, т.е. атрибуты про инициализируются ссылками
# deepcopy(object, [memodict]) -
#       глубокое, т.е. атрибуты рекурсивно копируются
#       memodict - это словарь всех скопированных объектов
# Для не составных объектов нет разницы, каким методом пользоваться

test_1 = [1, 2, 3, [1, 2, 3]]
test_copy = copy(test_1)
print(test_1, test_copy)

test_copy[3].append(4)
print(test_1 == test_copy)

test_1 = [1, 2, 3, [1, 2, 3]]
test_deepcopy = deepcopy(test_1)
test_deepcopy[3].append(4)
print(test_1 == test_deepcopy)


# У обоих функций есть множество объектов,
# так что можно реализовать __copy__() и __deepcopy__()

class MyStructure:

    def __init__(self, *args, **kwargs):
        pass

    def __copy__(self):
        pass

    def __deepcopy__(self, memodict={}):
        pass
