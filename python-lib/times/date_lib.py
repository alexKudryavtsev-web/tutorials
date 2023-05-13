import datetime as dt
from datetime import datetime
from datetime import date
from datetime import timedelta

# datetime позволяет работать со временем на более высоком уровне

# Класс date представляет самое простейшее представление дня
today = date(2019, 7, 12)  # или date.today()
print(today)
print('День', today.day)
print('Месяц', today.month)
print('Год', today.year)
print('День недели', today.weekday(), '\n')

# timetuple() возвращает struct_time для совместимости с time
print(today.timetuple())

# Класс datetime позволяет работать с датой и временем
# Конструктор - год, месяц, день, [час, минута, секунда, микросекунда, часовая зона]
d = datetime(2019, 7, 12, 20, 27, 0)
print('Час', d.hour)
print('День', d.day)
print('Месяц', d.month)
print('Год', d.year)
print('День недели', today.weekday())
print(d.strftime('%Y-%m-%d-%H.%M.%S'), '\n')

# Класс timedelta позволяет узнать разницу между датами
d1 = datetime(2019, 12, 4, 12, 4)
d2 = datetime.now()
delta = d1 - d2

print(delta)
print('Секунд', delta.seconds)
print('Дней', delta.days)
print('Микросек', delta.microseconds)
print('Всего секунд', delta.total_seconds())
