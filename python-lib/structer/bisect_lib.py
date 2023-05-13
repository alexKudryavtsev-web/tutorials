import bisect
# модуль bisect позволяет работать с отсортированным списком, не нарушая порядок
# внутри его используется алгоритм двоичного поиска

data = list(range(10))

bisect.insort_left(data, 3)
print(data)

bisect.insort_right(data, 40)
print(data)

index = bisect.bisect_left(data, 4.5)
print(index)
print(data)
