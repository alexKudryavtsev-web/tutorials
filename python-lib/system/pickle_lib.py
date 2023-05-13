import pickle

# модуль pickle позволяет серилизовать/десерилизовать объект
# Сериализоваться могут: коллекции, функции, классы, объекты и примитивы

a = [1, 'hi', [42, 42]]

file = open('data', 'wb')
# dump сериализует
pickle.dump(a, file)

del a, file

file = open('data', 'rb')
# load() десерилизует
a = pickle.load(file)
print(a)