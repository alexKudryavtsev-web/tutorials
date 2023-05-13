from functools import *


# Создаем собственное исключение
# Базовым классом для исключений является BaseException
# От него не следует наследоваться,
# так как исключение наследуемые от него являются системными
# Следует наследовать от Exception

# Обычно при разработке используется паттерн:
class LibException(Exception):
    pass


class MyException(LibException):
    def __init__(self, message):
        self._message = message

    def __str__(self):
        return self._message


# Этот паттерн облегчает использование библиотеки


# Кидаем исключение
def fun():
    raise MyException('Критическая ситуация')


# Пример обработки:
file = None
try:
    file = open('doc.txt', 'r')
except FileNotFoundError:
    raise
except IOError as ioe:
    print(ioe)
else:
    print('Обошлось без ошибки')
finally:
    file.close()

# в таком случае можно записать так:
with open('./doc.txt', 'r') as file:
    pass


# Все это происходит из-за того, что open имеет два метода
# Это называется МЕНЕДЖЕР КОНТЕКСТА
# Для того чтоб использовать объект с with он должен реализовать __enter__ и __exit__
# Создадим копию open
class opened:
    def __init__(self, path, *args, **kwargs):
        self.opener = partial(open, path, *args, **kwargs)

    # Входной метод
    def __enter__(self):
        self.handler = self.opener()
        return self.handler

    # Метод, который вызовиться для закрытия
    # Он может вернуть False и тогда все исключения в with не будут подавлены
    # В ином случае исключения будут подавлены
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.handler.close()  # Закрываем
        del self.handler  # Необезательно, но handler = None, так что логично его удалить


# пример использования
with opened('./doc.txt', mode='r') as file:
    pass
