from heapq import *

hq = [313, 4224, 232, 1, 42, 523]
# Функция heapify(list) сортирует l, так чтоб с ним можно было работать как кучей
heapify(hq)
print(hq)

heappush(hq, 1243)
print(hq)
