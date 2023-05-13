import os
import re

# Модуль os позвляет работать с OC при том не теряя переносимости

print('Название операционной системы:', os.name)
print('id процесса:', os.getpid())
print('Имя пользователя:', os.getlogin())

print('Текущая директория:', os.getcwd())  # chdir(path) позволяет поменять тек. дир
PATH = 'C:\\Users\\Семья\\PycharmProjects\\Python Learn\\libs'
res = os.listdir(PATH)
print(res)


print(os.urandom(12))