def test_list():
    str = "12345"
    l = [c * 3 for c in str]
    print(l)
    l = [c + d for c in str for d in str]
    print(l)
    l = [c for c in str if int(c) % 2 == 0]
    print(l)
    l1 = ["en", "ru", "it"]
    l1.append("ch")
    print(l1)
    l1.extend(l)
    print(l1)
    el2 = l1.pop(2)
    print(el2, l1)
    l1.sort()
    print(l1)

def test_tuple():
    t = tuple('global')
    print(t)
    t = (1, 3, 5, 6)
    print(t)
    t = 1,
    print(t)
    a = 1
    b = -1
    print(a, b)
    a, b = b, a
    print(a, b)

def test_dict():
    d = dict(short="короткий", long="длинный")
    print(d)
    d = dict.fromkeys(["a", "b"])
    print(d)
    d = dict.fromkeys(['a', 'b'], 100)
    print(d)
    d = {
        "short": "короткий",
        "long": "длинный",
        "any": "другой",
        0: "ноль",
        1: "один"
    }
    print(d)
    d = {a: a ** 2 for a in range(10)}
    print(d)
    print(d[0])
    d[0] = 1
    print(d)
    d[-1] = None
    print(d)
    keys = d.keys()
    print(keys)
    values = d.values()
    print(values)
    items = d.items()
    print(items)

def test_set():
    s = set('hello')
    print(s)
    s = {'h', 'h', 'l', 'o', 'o'}
    print(s)
    s1 = {1,2,3,4,5}
    s2 = {2,4,6}
    print(s1 & s2)
    print(s1 | s2)
    print(s1 ^ s2)
