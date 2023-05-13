import time
from threading import *


class CounterThread:

    def run(self):
        pass



def count(n):
    for i in range(n):
        print(i)
        time.sleep(1)


t = Thread(target=count, args=(12,))
t.start()

print(t.ident)
