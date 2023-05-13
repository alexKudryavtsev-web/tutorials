# Модуль decimal позволяет работать с десятичными цифрами
# с дополнительной точностью, а также их округлять

from decimal import Decimal
import decimal

# Класс Decimal является основным
num = Decimal('1.4')
# Он также способен к арифметическим операциям, за исключением числами float
num = (num + 2) * num / 2
print(num)

# Метод quantize() округляет
# Decimal('1.0') здесь является формой
# Константа ROUND_FLOOR здесь округляет всегда число к низу
res = num.quantize(Decimal('1.0'), decimal.ROUND_FLOOR)
print(res)
