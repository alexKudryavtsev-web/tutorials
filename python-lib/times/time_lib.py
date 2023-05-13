import time

# Модуль time позволяет работать со временем на низком уровне

# struct_time содержит информацию о переданной секунде
struct_time = time.gmtime(0)
print('gmtime', struct_time)

# ctime() возвращает текущее время
print(time.ctime())

# ctime(sec) преобразует секунды в время
print(time.ctime(100000000))

# localtime() возвращает текущее время в текущем часовом поясе в секундах
res = time.strftime('%Y-%m-%d', time.localtime())
print(res)

# strftime(format, seconds) позволяет форматировать время
#     %Y  Год в десятичном виде
#     %m  Месяц от 01 до 12
#     %d  День от 01 до 31
#     %H  Час дня от 00 до 23
#     %M  Минуты в часу от 00 до 59
#     %S  Секунды в минуте от 00 до 61(61-ая секунда служит для точности счета)
#     %z  Временная зона по utc
#     %a  Абревиатура дня недели
#     %A  Полное название дня недели
#     %b  Абревиатура месяца
#     %B  Полное название месяца
#     %c  Дата и время в локальном представление
#     %I  Время в 12 часовом формате
#     %p  Локальное AM и PM

# time() возвращает время в секундах
print(time.time())

# sleep(sec) приостанавливает процесс на sec
time.sleep(3)
