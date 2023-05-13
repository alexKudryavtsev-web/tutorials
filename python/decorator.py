from datetime import datetime
import functools
import sys


# минус такого декоратора то, что с ним нельзя применить @
def timeit_pos(func=None, *, handler=sys.stdout):
    if func is None:
        return lambda func: timeit_pos(func, handler=handler)

    @functools.wraps(func)
    def inner(*args, **kwargs):
        start = datetime.now()
        res = func(*args, **kwargs)
        print(datetime.now() - start, file=handler)
        return res

    return inner


def timeit(hanler):
    def outer(fun):
        @functools.wraps(fun)
        def inner(*args, **kwargs):
            start = datetime.now()
            result = fun(*args, **kwargs)
            print(datetime.now() - start, file=hanler)
            return result

        return inner

    return outer


@timeit(sys.stderr)
def count(n=10000):
    return [i for i in range(n) if i % 2 == 0]


def printer(string):
    """Функция печатает string"""
    print(string)


res = timeit_pos(printer, handler=sys.stderr)('Hello, World')
print(res)


# СОЗДАНИЕ ОБОБЩЕННОЙ ФУНКЦИИ
@functools.singledispatch
def tostring(obj):
    return type(obj).__name__


@tostring.register(int)
def _(obj):
    return b'I' + hex(obj).encode('ascii')


print(tostring(12))
print(tostring(None))
print(tostring([1, 4, 43]))
