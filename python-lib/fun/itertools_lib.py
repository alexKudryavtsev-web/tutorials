import itertools

l1 = [1, 42, 53, 806, 885, 70]
l2 = [1, 2, 3, 42, 52, 523]
# Модуль itertools представляет ряд удобных итераторов

# аккамуляция, в данном случае сложение
res = itertools.accumulate(l1, func=lambda x, y: x + y)
print('Accumulate: ')
for i in res:
    print(i, end=' ')

print('\nChain: ')
chain = itertools.chain('ABC', 'DEF')
for i in chain:
    print(i, end=' ')

# compress возвращает те элементы из data, которые есть послеидущих селекторах
print('\nCompress:')
compress = itertools.compress(l1, '172')
for i in compress:
    print(i, end=' ')

# dropwhile(предикат, итераторы) возвращает элементы до тех пор, пока предикат не вернет false
dropwhile = itertools.dropwhile(lambda v: v.islower(), 'hello World')
print('\nDropwhile: ')
for i in dropwhile:
    print(i, end=' ')

# filterfalse(предикат, итераторы) возвращает элементы, которые false по предикату
print('\nFilterfalse: ')
filterfalse = itertools.filterfalse(lambda v: v.islower(), 'HEllo World')
for i in filterfalse:
    print(i, end=' ')

# islice(итер, [старт], конец, [шаг]) получает итератор из слайса
print('\nIslice: ')
islice = itertools.islice('1234567', 1, 5)
for i in islice:
    print(i, end=' ')

# starmap(func, iter) похож на map, за исключение в том, что каждый элемент распаковывается
print('\nStarmap: ')
starmap = itertools.starmap(pow, [(4, 3), (12, 4), (15, 2), (3, 2)])
for i in starmap:
    print(i, end=' ')

# tee(iter, [count=2]) возвращает count независимых копий iter
print('\nTee: ')
tee = itertools.tee('qwerty', 5)
for i in tee:
    print(tuple(i), id(i))

# zip_longest(*iter, fill] похож на zip, но берет самый длин, а остальные дополняет fill
print('ZipLongest: ')
l1 = [1, 32, 42, 45, 6753, 32, 42, 535]
l2 = [1, 2, 3, 4]
zip_longest = itertools.zip_longest(l1, l2, fillvalue=None)
for i in zip_longest:
    print(i)


# product(*iter) вкладывает итераторы в друг друг
print('\nProduct: ')
product = itertools.product(['A', 'B'], [1, 2])
for i in product:
    print(i, end=' ')

# combinations(iter, l) возвращает уникальные комбинации из iter с длиной l
print('\nCombinations: ')
comb = itertools.combinations('ABC', 2)
for i in comb:
    print(i, end=' ')

# Permutations(iter, r) возвращает уникальных перестаноок из iter с длиной r
print('\nPermutations: ')
perm = itertools.permutations('ABC', 2)
for i in perm:
    print(i, end=' ')
