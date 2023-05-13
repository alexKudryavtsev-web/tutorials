from fractions import Fraction

# Модуль fractions позволяет работать с дробями
f = Fraction(14, 4)
print('Числитель', f.numerator, 'Знаменатель', f.denominator)

f = Fraction.from_decimal(12)
print('Числитель', f.numerator, 'Знаменатель', f.denominator)

f = Fraction.from_float(3.14)
print('Числитель', f.numerator, 'Знаменатель', f.denominator)

# сокращаем дробь
print(f.limit_denominator())


# Реализации арифметических операций:
def multiply(f1, f2):
    num = f1.numerator * f2.numerator
    den = f1.denominator * f2.denominator
    return Fraction(num, den)


def divider(f1, f2):
    num = f1.numerator * f2.denominator
    den = f2.denominator * f1.numerator
    return Fraction(num, den)


def plus(f1, f2):
    num = (f1.numerator * f2.denominator) + (f2.numerator * f1.denominator)
    den = f1.denominator * f2.denominator
    return Fraction(num, den)


def minus(f1, f2):
    num = (f1.numerator * f2.denominator) - (f2.numerator * f1.denominator)
    den = f1.denominator * f2.denominator
    return Fraction(num, den)


f1 = Fraction(3, 4)
f2 = Fraction(2, 5)

res = multiply(f1, f2)
print('Числитель', res.numerator, 'Знаменатель', res.denominator)

res = divider(f1, f2)
print('Числитель', res.numerator, 'Знаменатель', res.denominator)

res = plus(f1, f2)
print('Числитель', res.numerator, 'Знаменатель', res.denominator)

res = minus(f1, f2)
print('Числитель', res.numerator, 'Знаменатель', res.denominator)
