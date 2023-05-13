import enum


# Класс enum.Enum позволяет создавать перечисления
# Объявленные константы являются экземплярами класса в котором они же и объявлены
# Константы не могут дублироваться
# Значение также желательно должны быть уникальными, для гарантия имеется декоратор enum.unique

@enum.unique  # Если будут дублированные значения, кинет ValueError
class Color(enum.Enum):
    RED = 1
    BLUE = 2

    def description(self):
        # Имеются встроенные атрибутты, позволяющие больше узнать
        print(self.name, self.value)


# Enum реализует контекст итератора
for constant in Color:
    constant.description()


# Наследование разрешенно при условии в том что у перечисления нет констант, но он может иметь другие аттрибуты
# Примером наследования можно считать переопределение метода auto(), который генерирует default-значение
class AutoGenerator(enum.Enum):
    # функция auto() вызывает метод _generate_next_value_
    # Первый параметр здесь не self, а name, потому что этот метод статический
    def _generate_next_value_(name, start, count, last_values):
        return name


class NumberEnum(AutoGenerator):
    FIRST = enum.auto()
    SECOND = enum.auto()


# У enum.Enum есть подкласс IntEnum, позволяющий обеспечить произвольные порядок
class Shape(enum.IntEnum):
    CIRCLE = 1
    SQUARE = 2


class Request(enum.IntEnum):
    POST = 1
    GET = 2


print(Shape.CIRCLE == Request.POST)  # => true

