# Бинарный поиск позволяет логарифмически найти элемент в отсортированной структуре
# В этом случае он работает за O(log n)


def search(data, item):
    index = 0
    for value in data:
        if value == item:
            return index
        index += 1


print(search([1, 432, 2535, 2, 53], 2))


def bin_search(data, item):
    low = 0
    high = len(data) - 1

    while low <= high:
        mid = (low + high)
        guess = data[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1


data = [1, 2, 3, 5, 6, 8, 10]
print(bin_search(data, 3))
