import re

# Метод search(pattern, string) возвращает подстроку в string, соотвествующая pattern
res = re.search(r'Machine', 'Virtual Machine')

print('Значение:', res.group(0))
print('Начало:', res.start())
print('Конец:', res.end(), end='\n')

# findall(pattern, string) позволяет найти все подстроки по pattern в string
res = re.findall('.а', 'Тра-та-ра')
print(res, end='\n')

# split(pattern, string, [maxsplit]) позволяет разделить string по pattern maxsplit раз
res = re.split("""\\\\""", 'D:\\data\\python/index.html')
print(res, end='\n')

# sub(pattern, new, string) заменяет pattern подстроки на new в string
res = re.sub('\\\\', '/', 'D:\\data\\python\\index.html')
print(res, end='\n')

# compile(pattern) позволяет создать объект Pattern
# Pattern имеет все вышеописанных функций, в которых нет pattern
pattern = re.compile('(\d\d)[\s\b]')
print(pattern.findall('12 23 42 4 4242'), end='\n')

# ------------- Ключевые символы ------------------------
# .	Любой символ, за исключением \n.
# ?	0 или 1 символа слева
# +	1 и более символа слева
# *	0 и более символа слева
# \w  цифра или буква
# \W  не буква или цифра
# \d  цифра
# \D  не цифра
# \s  пробельный символ
# \S  непробельный символ
# \b  Граница слова
# [..]	Один из символов в скобках
# [^..] — любой символ, кроме тех, что в скобках
# \	 спец. символов
# \. означает точку
# \+  знак «плюс»
# ^ и $	Начало и конец строки соответственно
# {n,m}	От n до m вхождений ({,m} — от 0 до m)
# a|b	Соответствует a или b
# ()	Группирует выражение и возвращает найденный текст
# \t, \n, \r

text = 'Air - item of the world'
# получаем последнее слово
res = re.findall('\w+$', text)
print(res, end='\n')

# получаем первое слово
res = re.findall('^\w+', text)
print(res, end='\n')

# получаем список всех доменов почты
res = re.findall('@\w+\.(\w+)', 'alex@gmail.com home_jod@mail.ru')
print(res, end='\n')

# получаем даты
res = re.findall(r'\d{2}[-\.\s]\d{2}[-\.\s]\d{4}', '09-07-2019 7-915-748-**-**, 01.01.1970')
print(res, end='\n')

# получаем слова начинающиеся с гласной
res = re.findall(r'\b[уеаоэяиюУЕАОЭЯИЮ]\w+', 'Игра Вани арбузом оказалася')
print(res, end='\n')

# получаем строку без цифр
res = re.sub(r'\d+', '', '1488 Своих не бросим')
print(res)

res = re.findall(r'(коз\w+)', 'коза козлинное козя')
print(res)