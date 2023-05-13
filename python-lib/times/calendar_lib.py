import calendar

# модуль calendar позволяет работать со временем как календарь

# Класс Calendar позволяет симулировать календарь
# Ему нужно передать день недели с которой начнется месяц
c = calendar.Calendar(3)

print('Первые семь дней месяца', list(c.iterweekdays()))
print('Календарь в виде списка из номера дней', list(c.itermonthdays(2019, 7)), '\n')

# TextCalendar позволяет получить календарь в виде строки
c = calendar.TextCalendar(3)

month_calendar = c.formatmonth(2019, 7)
print(month_calendar)

# HTMLCalendar позволяет создать календарь в виде html
c = calendar.HTMLCalendar(3)
html_calendar = c.formatmonth(2019, 7, withyear=True)
print(html_calendar)

# Утилита calendar
print('2004 год д.н.э является високосным:', calendar.isleap(-2004))
print('Кол-во висоскосных годов н.э', calendar.leapdays(0, 2019))
print('День недели 2019-10-07:', calendar.weekday(2019, 7, 10))

date_week, len_month = calendar.monthrange(2019, 7)
print('2019.07 начался с', date_week)
print('2019.07 всего дней', len_month)
