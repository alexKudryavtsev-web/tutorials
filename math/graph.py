from collections import *


def search_wide(graph, name, predicate):
    deq_search = deque()
    marked = []
    deq_search.extend(graph[name])
    while deq_search:
        item = deq_search.popleft()
        if item not in marked:
            if predicate(item):
                print(item + ' найдено')
                return True
            deq_search.extend(graph[item])
            marked.append(item)
    return False


def main():
    import collections
    graph = collections.defaultdict(set)

    graph['I'] = {'Mother', 'Father'}
    graph['Father'] = {'Mother', 'Grandmother', 'Anna', 'I'}
    graph['Anna'] = {'Mother', 'Father'}
    graph['Mother'] = {'Anna', 'I', 'uncle Mursa', 'aunt Enikey', 'uncle Arslan'}
    graph['uncle Arslan'] = {'Alduar', 'Arthur'}
    graph['aunt Enikey'] = {'Alduar', 'Arthur'}
    graph['Arthur'] = {'uncle Arslan'}
    print(search_wide(graph, 'I', lambda item: item.startswith('uncle')))


if __name__ == '__main__':
    main()
