import functools
import warnings


def singleton(cls):
    instance = None

    @functools.wraps(cls)
    def inner(*args, **kwargs):
        nonlocal instance
        if instance is None:
            instance = cls(*args, **kwargs)
        return instance

    return inner


def deprecated(cls):
    orig_init = cls.__init__

    @functools.wraps(cls.__init__)
    def inner(self, *args, **kwargs):
        warnings.warn(cls.__name__ + ' is deprecated.', category=DeprecationWarning)
        orig_init(self, *args, **kwargs)

    cls.__init__ = inner
    return cls


@deprecated
class Data:
    def __init__(self, value={}):
        self._date = value

    # PROPERTY
    @property
    def date(self):
        return self._date

    @date.setter
    def date(self, new_date):
        self._date = new_date

    @date.deleter
    def date(self):
        del self._date


# INHERITANCE
class Animal:
    def __init__(self, name, age, weight):
        self._name = name
        self._age = age
        self._weight = weight

    def say(self):
        pass

    def __str__(self):
        return str(self._name) + ': с весом ' + str(self._weight) + ' и ' + str(self._age) + ' лет'


class Cat(Animal):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self._name = name
        self._age = age
        self._weight = weight

    def say(self):
        print('Арр')

    def snap(self):
        print(self._name, '- кусь')
