# В python итератор и iterable это одна и таже сущность
# Итератор должен поддерживать метод __iter__ и __next__
# Также есть устаревший способ через __getitem__


class Iterator:

    def __init__(self):
        self.list = [122, 53, 53, 5, 334, 43]
        self._index = 0

    # Чаще всего метод __iter__ возвращает self
    def __iter__(self):
        return self

    # __next__ должен в случае исчерпание возвращать StopIteration
    # если он хотя бы раз вернул StopIteration от ДОЛЖЕН ЕГО ВОЗВРАЩАТЬ ВСЕГДА
    def __next__(self):
        if self._index < len(self.list):
            value = self.list[self._index]
            self._index += 1
            return value
        raise StopIteration


i = Iterator()
for item in i:
    print(item)

# У итераторов есть баг, который позволяет использовать итератор только один раз:
print(list(i))  # => []

# также итератор может использовать оператор in/not in, потому что будет автоматически добавлен метод __contains__
i = Iterator()
print(5 in i)

