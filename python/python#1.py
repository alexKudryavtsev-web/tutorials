# lesson 1: условия и циклы
import math

# нахождение гипотенузы
def calc_hypotenuse(a, b): 
    return math.sqrt(a*a + b*b)

# нахождение корней квадратного уравнения
def calc_quadratic_equation(a, *, b=0, c=0):
    d = b**2 - 4*a*c

    if(d < 0):
        return
    elif(d == 0):
        x1 = (-b) / 2*a
        return round(x1, 3)
    else:
        x1 = (-b + math.sqrt(d)) / 2*a
        x2 = (-b - math.sqrt(d)) / 2*a
        return round(x1, 3), round(x2, 3)

# таблица умножения
def create_table_multi(number, start=2, end=10):
    for i in range(start, end):
        print(f"{number}*{i}={number*i}")
